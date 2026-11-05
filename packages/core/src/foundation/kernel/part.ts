// What adapters do with a part, one rendered element of a slot. An instance
// makes parts (`instance.part(slot, props)`), and these read, subscribe and
// bind them. They're free functions, so each adapter bundles only the ones it
// calls.
import { checkFocus, checkRefs, checkRole, dev, warn } from "#dev"
import { idPart } from "./attrs"
import { enforceHidden } from "../platform/style"
import { isComposing, on } from "./events"
import type { AnySlot, Attrs, EventMap, Part, RoleFields, SlotRef } from "./primitive-types"
import { eachMoved } from "./selects"
import { renders, sameValue, subscribeSkipping, touch, type Listener } from "./store"

/**
 * Who renders a bound element. Core renders a custom element and attaches
 * every handler. A framework attaches the `handlers()` it can through its own
 * props, so user handlers run first, and names them in `attaches`: `"all"`, or
 * the event types it maps. Core listens for every other type itself, so a
 * slot's `on` works for any event in every framework. Core also keeps
 * `direct` attributes current on a framework's element, since the framework
 * skips renders for them.
 */
type Host = { by: "core" } | { by: "framework"; attaches: "all" | readonly string[] }

// What the kernel keeps on a part beside what adapters read.
type PartRecord = Part & {
  readonly owner: PartOwner
  // The bind that set `el`. Unbinding can change state that binds the part
  // again, so an earlier bind's cleanup leaves a newer bind's element.
  binding?: object
  leases: number
  ref?: (el: HTMLElement | null) => void
  // What `onProps` registered, which hears each render.
  propsListeners?: Set<() => void>
  // The bound element's id when it isn't the one the slot makes, like an author's.
  own?: string
}

// The instance's side of its parts.
type PartOwner = {
  readonly name: string
  // What warnings call the component.
  readonly label: string
  readonly slots: Record<string, AnySlot>
  // One record per part, by `slot:key`. Binding moves a part to the end, so
  // `element(slot)` finds the part of a slot that bound first.
  readonly parts: Map<string, PartRecord>
  // A part stays while something leases it: its bound element or a
  // subscription. Once released, it's dropped a microtask later unless leased
  // again, so StrictMode's unmount and remount in one task, or Suspense hiding
  // and showing it, keeps its props and its ref callback.
  released: PartRecord[]
  // Parts with an `own` id, and, once per version of state, the own id that
  // stands for each id their slots make.
  named?: Set<PartRecord>
  aliases?: { version: number; map: Map<string, string> }
  // Parts whose element's id to read, a microtask later.
  unread?: Set<PartRecord>
  // Whether a render took an own id since parts last heard, which they hear
  // once the elements bind, so a part rendered before it points at it too.
  renamed?: boolean
  // Slots another slot's `refs` points at, which core gives their made ids.
  referenced?: Set<string>
}

// Every part an adapter holds came from `instance.part()`, which makes a record.
const ownerOf = (part: Part) => (part as PartRecord).owner
const definitionOf = (part: Part) => ownerOf(part).slots[part.slot]
// What pure reads see of a part: no element and no store.
const view = <Api, Props>(part: Part<any, Api>, props: Props) => ({
  id: part.id,
  key: part.key,
  props,
  api: part.api,
})
const context = (part: Part, props = part.props) => ({
  el: part.el,
  id: part.id,
  key: part.key,
  props,
  store: part.store,
  api: part.api,
})

// A part the sweep dropped while a framework kept it, like content Suspense
// hid and shows again, comes back as it's leased.
function lease(part: PartRecord) {
  const { parts } = part.owner
  const mapKey = `${part.slot}:${part.key}`
  if (!parts.has(mapKey)) parts.set(mapKey, part)
  part.leases++
  let held = true
  return () => {
    if (!held) return
    held = false
    if (--part.leases) return
    const { owner } = part
    if (!owner.released.length) queueMicrotask(() => sweep(owner))
    owner.released.push(part)
  }
}

// A part made while a framework rendered, which it may throw away, goes
// with the next sweep unless something leases it first.
function provisional(part: PartRecord) {
  const { owner } = part
  if (!owner.released.length) queueMicrotask(() => sweep(owner))
  owner.released.push(part)
}

function sweep(owner: PartOwner) {
  for (const part of owner.released) {
    const mapKey = `${part.slot}:${part.key}`
    if (!part.leases && owner.parts.get(mapKey) === part) owner.parts.delete(mapKey)
  }
  owner.released = []
}

// Reads take the props to read with, so an adapter can compare against the
// props it committed rather than a discarded render's. They default to the
// newest render's. `state`, from `instance.preview()`, renders a controlled
// value before the store has it.

/**
 * HTML attributes for the part. SSR-safe. Once an element binds with an id
 * other than the one its slot makes, like an author's, references to the made
 * id point at it.
 * @stable
 */
function attrs(part: Part, props = part.props, state = part.store.get()) {
  const definition = definitionOf(part) as AnySlot & RoleFields<any, any, any>
  const context = view(part, props)
  const own = definition.attrs?.(state, context)
  const declared = definition.role
  const role = typeof declared === "function" ? declared(state, context) : declared
  if (dev) {
    checkRole(
      definition,
      part.slot,
      own,
      role,
      { component: ownerOf(part).label, id: part.id },
      definition.live?.read(state, context),
    )
  }
  const refs = definition.refs && refAttrs(definition.refs, state, { ...context, key: idKey(part) }, false)
  if (dev && definition.refs)
    checkRefs(definition, part.slot, own, ownerOf(part).slots, {
      component: ownerOf(part).label,
      id: part.id,
    })
  const result: Attrs = {
    "data-slot": `${ownerOf(part).name}-${part.slot}`,
    ...(declared === undefined ? undefined : { role }),
    ...own,
    ...refs,
  }
  // The declared role wins over one in `attrs`, and keeps its place first.
  if (declared !== undefined) result.role = role as Attrs[string]
  if (result.id === undefined && referencedSlots(ownerOf(part)).has(part.slot))
    result.id = slotId(part.id, part.slot, idKey(part))
  return aliased(part as PartRecord, result)
}

// What names an element or hints how to type in it, which no behavior reads,
// so the author's own value replaces the part's. Not `aria-describedby`, which
// a field combines with the control's own.
const authorOwned = new Set([
  "aria-label",
  "aria-labelledby",
  "aria-description",
  "title",
  "autocomplete",
  "autocapitalize",
  "autocorrect",
  "spellcheck",
  "inputmode",
  "enterkeyhint",
])

/** The part's attributes without the ones the author gives, for `given(name)` to say which. */
function yieldToAuthor(attrs: Attrs, given: (name: string) => boolean) {
  let result: Attrs | undefined
  for (const name in attrs)
    if (attrs[name] !== undefined && authorOwned.has(name) && given(name))
      (result ??= { ...attrs })[name] = undefined
  return result ?? attrs
}

/** Whether a label reference points only at ids ui-sdk made, like a component's own label or a copied element's, rather than the author's. */
const madeLabel = (value: unknown) =>
  typeof value === "string" && value.split(/\s+/).every((id) => id.startsWith("ui-sdk-"))

/**
 * What `render` functions and state-based class names receive.
 * @stable
 */
function partState(part: Part, props = part.props, state = part.store.get()) {
  return definitionOf(part).state?.(state, view(part, props)) ?? {}
}

/**
 * Whether the part's element should exist.
 * @stable
 */
function present(part: Part, props = part.props, state = part.store.get()) {
  return definitionOf(part).present?.(state, view(part, props)) ?? true
}

/** Whether the part's presence depends on state, so a renderer shows and hides it. */
function conditional(part: Part) {
  return definitionOf(part).present !== undefined
}

/** Whether something leases the part, its bound element or a subscription, so a page renders it. */
const held = (part: Part) => (part as PartRecord).leases > 0

/** Live attributes, which core writes to a bound element itself. */
function liveAttrs(part: Part, props = part.props) {
  const definition = definitionOf(part) as AnySlot & RoleFields<any, any, any>
  const state = part.store.get()
  const context = view(part, props)
  const own = definition.live?.read(state, context) ?? {}
  const refs = definition.refs && refAttrs(definition.refs, state, { ...context, key: idKey(part) }, true)
  return aliased(part as PartRecord, refs ? { ...own, ...refs } : own)
}

/** The attributes core keeps current on an element a framework rendered. */
const directNames = (part: Part) => definitionOf(part).direct?.names

/**
 * The values the part selects on. Empty without `selects`. Adapters
 * subscribe again when it changes.
 */
const selectedKeys = (part: Part, props = part.props) =>
  definitionOf(part).selects?.selection(part, props) ?? ""

/**
 * The names a part reads `synced` by, the state a framework delivers through
 * `instance.follow`: a key's name for a key it reads whole, and `key:value`
 * for a value it selects on, like `value:billing` for one tab, which only the
 * changes that take or leave that value touch (`touched`). `"#keys"` changes
 * when a key starts or stops being delivered.
 */
function followed(part: Part, synced: object | undefined, props = part.props) {
  const reads = definitionOf(part).selects?.reading(part, props)
  const names = ["#keys"]
  for (const key in synced) {
    const values = reads?.get(key)
    if (!values) names.push(key)
    else for (const value of values) names.push(`${key}:${value}`)
  }
  return names
}

/**
 * Runs `notify` for every name `followed` reads that changes from `previous`
 * to `next`, once or more.
 */
function touched(
  previous: Record<string, unknown> | undefined = {},
  next: Record<string, unknown> | undefined = {},
  notify: (name: string) => void,
) {
  let keys = false
  for (const key in previous) if (!(key in next)) keys = true
  for (const key in next) {
    if (!(key in previous)) keys = true
    else if (sameValue(previous[key], next[key])) continue
    notify(key)
    eachMoved(previous[key], next[key], (value) => notify(`${key}:${value}`))
  }
  if (keys) notify("#keys")
}

// What a part that narrows nothing skips: no key.
const skipNone = {}

/**
 * Runs `listener` when a change can affect the part, narrowed by the slot's
 * `selects`, or on every change without it, always after the component's own
 * listeners. Leases the part while subscribed.
 */
function subscribe(part: Part, listener: Listener, props = part.props) {
  const narrowed = definitionOf(part).selects
  const cleanups = [
    lease(part as PartRecord),
    narrowed ? narrowed.subscribe(part, listener, props) : subscribeSkipping(part.store, skipNone, listener),
  ]
  return () => cleanups.forEach((cleanup) => cleanup())
}

/** Event handlers, for adapters that attach events through the framework. */
function handlers(part: Part) {
  const { on: events, press: activate } = definitionOf(part)
  const result: Partial<Record<keyof EventMap, (event: Event) => void>> = {}
  for (const type in events) {
    const handler = events[type as keyof EventMap] as (event: Event, context: unknown) => void
    result[type as keyof EventMap] = (event) => {
      if (event.defaultPrevented || composing(event)) return
      handler(event, context(part))
    }
  }
  if (typeof activate === "function" && !result.click) {
    result.click = (event) => {
      if (!event.defaultPrevented) activate(context(part), event)
    }
  }
  return result
}

/**
 * Gives a part the props of the render a framework committed, for one that
 * renders parts with `instance.part(slot, props, true)` and may throw renders
 * away. Its handlers and the parts around read them from now, and its
 * `onProps` listeners run.
 */
function commit(part: Part, props: Part["props"]) {
  if (part.props === props) return
  part.props = props
  propsRendered(part as PartRecord)
}

// Tells the part's `onProps` listeners it rendered with new props.
function propsRendered(part: PartRecord) {
  part.propsListeners?.forEach((listener) => listener())
}

/** Activation without a DOM event, for headless tests and the docs' generated tables. */
function press(part: Part, props = part.props) {
  const handler = definitionOf(part).press
  return typeof handler === "function" ? () => handler(context(part, props)) : undefined
}

/**
 * Runs `listener` whenever an adapter renders the part, with `part.props`
 * already the props it passed. Work that depends on a prop, like registering
 * a shortcut, then runs only while the prop asks for it.
 */
function onProps(part: Part, listener: () => void) {
  const listeners = ((part as PartRecord).propsListeners ??= new Set())
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

// A slot names `hidden` in its attributes whether it's set or not, so one
// read per slot says whether its parts can be hidden.
const hidingSlots = new WeakMap<object, boolean>()

function canHide(part: Part) {
  const definition = definitionOf(part)
  let hides = hidingSlots.get(definition)
  if (hides === undefined) {
    hides = !!definition.attrs && "hidden" in definition.attrs(part.store.get(), view(part, part.props))
    hidingSlots.set(definition, hides)
  }
  return hides
}

/** Attaches behavior to an element. Leases the part while bound. Returns the cleanup. */
function bind(part: Part, el: HTMLElement, host: Host = { by: "core" }) {
  const kept = part as PartRecord
  const { parts } = kept.owner
  const mapKey = `${part.slot}:${part.key}`
  if (!part.el && (parts.get(mapKey) ?? kept) === kept) {
    parts.delete(mapKey)
    parts.set(mapKey, kept)
  }
  if (dev) {
    checkShared(part, part.el, el)
    const { focus } = definitionOf(part) as RoleFields<any, any, any>
    checkFocus(
      typeof focus === "function" ? focus(part.store.get(), view(part, part.props)) : focus,
      part.slot,
      el,
      {
        component: ownerOf(part).label,
        id: part.id,
      },
    )
  }
  const binding = {}
  part.el = el
  kept.binding = binding
  const cleanups = [lease(kept)]
  if (canHide(part)) enforceHidden(el.ownerDocument)

  for (const [type, handler] of Object.entries(handlers(part))) {
    if (host.by === "core" || (host.attaches !== "all" && !host.attaches.includes(type)))
      cleanups.push(on(el, type as keyof EventMap, handler))
  }

  const definition = definitionOf(part)
  if (definition.live) cleanups.push(definition.live.attach(part, el))
  if (host.by === "framework" && definition.direct) cleanups.push(definition.direct.attach(part, el))

  const cleanup = definition.bind?.(el, part)
  if (cleanup) cleanups.push(cleanup)
  // Stand-ins that unit tests bind in Node have no ids to follow.
  const makesId = definition.attrs || referencedSlots(kept.owner).has(kept.slot)
  if (makesId && typeof MutationObserver !== "undefined") cleanups.push(followId(kept, el))

  return () => {
    cleanups.forEach((cleanup) => cleanup())
    if (kept.binding !== binding) return
    part.el = kept.binding = undefined
    if (kept.own !== undefined) readIdLater(kept)
  }
}

// Two elements in the page binding one part are two parts given one key, which
// share its props, so a press on one runs with the other's. Parts with no key,
// like a dialog's close buttons, are many elements of one part. It checks a
// microtask later, since one update can hand a part to another element before
// the element that had it takes its next part, like a calendar's weekday
// headers moving when the week starts on another day.
function checkShared(part: Part, bound: HTMLElement | null | undefined, el: HTMLElement) {
  if (!part.key || !bound || bound === el) return
  queueMicrotask(() => {
    if (part.el !== el || !bound.isConnected || !el.isConnected) return
    const { parts, label } = ownerOf(part)
    for (const other of parts.values()) if (other.el === bound) return
    warn(`two "${part.slot}" parts share the key "${part.key}". Give each an id or a unique value.`, {
      component: label,
      id: part.id,
    })
  })
}

/**
 * A stable ref callback for frameworks that hand elements over one at a time.
 * Safe to call repeatedly with the same element or with null. The framework
 * may call it again after the part was dropped, like Suspense showing content
 * it hid, and it binds with the props the part last rendered with.
 */
function ref(part: Part, host: Host) {
  const kept = part as PartRecord
  if (kept.ref) return kept.ref
  let current: HTMLElement | null = null
  let unbind = () => {}
  return (kept.ref = (el) => {
    if (el === current) return
    if (dev && el) checkShared(part, current, el)
    unbind()
    current = el
    unbind = el ? bind(part, el, host) : () => {}
  })
}

/**
 * Runs the slot's `connect` while the element is in the page, present or not,
 * for adapters that keep parts that aren't present, like custom elements.
 * Returns the cleanup.
 */
const connect = (part: Part, el: HTMLElement) => definitionOf(part).connect?.(el) ?? (() => {})

// Attributes that point at other elements by their ids.
const references = [
  "aria-activedescendant",
  "aria-controls",
  "aria-describedby",
  "aria-details",
  "aria-errormessage",
  "aria-flowto",
  "aria-labelledby",
  "aria-owns",
  "for",
  "headers",
]

// The id the slot makes when the author gives none, which a slot that reads
// `id`, like a field's label, renders in its place.
const madeId = (part: Part) =>
  definitionOf(part).attrs?.(part.store.get(), view(part, { ...part.props, id: undefined })).id ??
  (referencedSlots(ownerOf(part)).has(part.slot) ? slotId(part.id, part.slot, idKey(part)) : undefined)

// The id core gives a part another slot's `refs` points at: the slot's name,
// and its key when the slot has more than one part.
const slotId = (id: string, slot: string, key: string) =>
  key === "" ? `${id}-${slot}` : `${id}-${slot}-${idPart(key)}`

// A part's key counts in its id only when its slot is keyed by its props, by
// a `value` or an `id`. Adapters key other parts too, like web components'
// generated keys, which would otherwise end up in every id.
function idKey(part: Part) {
  const props = (definitionOf(part) as { props?: Record<string, unknown> }).props
  return props && ("value" in props || "id" in props) ? part.key : ""
}

type Ref = SlotRef<any, any, any> | readonly SlotRef<any, any, any>[]

const targetsOf = (ref: Ref) =>
  (Array.isArray(ref) ? ref : [ref as SlotRef<any, any, any>]).map((each) =>
    typeof each === "string" ? { slot: each } : each,
  )

function referencedSlots(owner: PartOwner) {
  if (owner.referenced) return owner.referenced
  const referenced = new Set<string>()
  for (const name in owner.slots) {
    const refs = (owner.slots[name] as RoleFields<any, any, any>).refs
    for (const ref of Object.values(refs ?? {}))
      for (const target of targetsOf(ref as Ref)) referenced.add(target.slot)
  }
  return (owner.referenced = referenced)
}

// `aria-controls` and the rest from a slot's `refs`: the ids of the parts each
// points at now, or none. Those marked `live` with the slot's `live`, the
// rest with its `attrs`.
function refAttrs(
  refs: NonNullable<RoleFields<any, any, any>["refs"]>,
  state: object,
  context: ReturnType<typeof view>,
  live: boolean,
) {
  let result: Attrs | undefined
  for (const [name, ref] of Object.entries(refs)) {
    const targets = targetsOf(ref as Ref)
    if (!targets.some((target) => !!target.live === live)) continue
    const ids: string[] = []
    for (const target of targets) {
      if (target.when && !target.when(state, context)) continue
      const key = typeof target.key === "function" ? target.key(state, context) : (target.key ?? context.key)
      ids.push(slotId(context.id, target.slot, key))
    }
    ;(result ??= {})[`aria-${name}`] = ids.length ? ids.join(" ") : undefined
  }
  return result
}

/** Whether a slot keeps a reference current with `live`, which then needs a `live` to write it. */
const hasLiveRefs = (definition: object) =>
  Object.values((definition as RoleFields<any, any, any>).refs ?? {}).some((ref) =>
    targetsOf(ref as Ref).some((target) => target.live),
  )

// References to a made id point at the element's own id that replaced it, so
// a label's `for`, the app's own `aria-describedby`, styles and tests that
// name an author's id keep working, and the parts that point at it too.
function aliased(part: PartRecord, attrs: Attrs) {
  const { owner } = part
  if (!owner.named?.size) return attrs
  const aliases = aliasesOf(owner, part.store)
  if (!aliases.size) return attrs
  const result = { ...attrs }
  for (const name of references) {
    const ids = result[name]
    if (ids)
      result[name] = ids
        .split(" ")
        .map((id) => aliases.get(id) ?? id)
        .join(" ")
  }
  return result
}

/**
 * `attrs` with references following the instance's parts' own ids, as a
 * part's do, for attributes an api writes to an element that isn't a part,
 * like a trigger menu's on its editor.
 */
function aliasReferences(context: { parts(): Iterable<Part> }, attrs: Attrs) {
  for (const part of context.parts()) return aliased(part as PartRecord, attrs)
  return attrs
}

// The own id that stands for each id a slot makes. Kept until state that
// renders changes, so a live change, like a highlight moving, reads it again
// for free.
function aliasesOf(owner: PartOwner, store: Part["store"]) {
  const version = renders(store)
  if (owner.aliases?.version === version) return owner.aliases.map
  const map = new Map<string, string>()
  for (const part of owner.named!) {
    const made = madeId(part)
    if (made !== undefined && made !== part.own) map.set(made, part.own!)
  }
  owner.aliases = { version, map }
  return map
}

// Reads the element's id as it binds and whenever it changes, like a
// framework's `id` prop or a script setting it.
function followId(part: PartRecord, el: HTMLElement) {
  if (el.hasAttribute("id") || part.own !== undefined) readIdLater(part)
  const observer = new MutationObserver(() => readIdLater(part))
  observer.observe(el, { attributeFilter: ["id"] })
  return () => observer.disconnect()
}

// A microtask later, once every part binding with it has bound, so the
// instance hears once, and parts a framework hydrates in the same pass render
// what the server did.
function readIdLater(part: PartRecord) {
  const { owner } = part
  if (!owner.unread) {
    owner.unread = new Set()
    queueMicrotask(() => readIds(owner, part.store))
  }
  owner.unread.add(part)
}

// Parts hear only when a made id's alias changes, so an id on an element whose
// slot makes none, like a link's, re-renders nothing.
function readIds(owner: PartOwner, store: Part["store"]) {
  const parts = owner.unread!
  owner.unread = undefined
  let renamed = owner.renamed === true
  owner.renamed = undefined
  for (const part of parts) renamed = rename(part, part.el && idOf(part.el)) || renamed
  if (renamed) touch(store)
}

// Every bound element with an id is read once, so through the `id` property,
// which needs no lookup by name. A form's `id` property is a control named
// "id", so a form's comes from its attribute.
const idOf = (el: HTMLElement) => (el.localName === "form" ? el.getAttribute("id") : el.id)

/**
 * Takes the id an author gives a part's element as the part renders, so the
 * parts that render after it, like a tab's panel, point at it from their
 * first render, on a server too. Parts rendered before it, like a dialog's
 * content before its title, point at it once its element binds. Once bound,
 * the id comes from the element as it changes on the page.
 */
function takeOwnId(part: Part, id: unknown) {
  // A render that never commits, like a transition that suspends, would
  // otherwise rename the part for the parts already on the page.
  if (part.el || typeof id !== "string" || !definitionOf(part).attrs) return
  if (rename(part as PartRecord, id)) ownerOf(part).renamed = true
}

// Records `id` as the part's own when it isn't the one its slot makes.
// Returns whether references to the made id now point elsewhere.
function rename(part: PartRecord, id: string | null | undefined) {
  const made = madeId(part)
  const own = id && id !== made ? id : undefined
  if (own === part.own) return false
  const { owner } = part
  part.own = own
  owner.named ??= new Set()
  if (own === undefined) owner.named.delete(part)
  else owner.named.add(part)
  owner.aliases = undefined
  return made !== undefined
}

// Keys an input method owns while it composes text, like Enter confirming a
// Japanese candidate. Components never act on them.
function composing(event: Event) {
  return (event.type === "keydown" || event.type === "keyup") && isComposing(event as KeyboardEvent)
}

export {
  aliasReferences,
  hasLiveRefs,
  attrs,
  authorOwned,
  bind,
  commit,
  conditional,
  connect,
  directNames,
  followed,
  handlers,
  held,
  liveAttrs,
  madeLabel,
  onProps,
  type PartOwner,
  provisional,
  type PartRecord,
  partState,
  present,
  press,
  propsRendered,
  ref,
  references,
  selectedKeys,
  subscribe,
  takeOwnId,
  touched,
  view,
  yieldToAuthor,
}
