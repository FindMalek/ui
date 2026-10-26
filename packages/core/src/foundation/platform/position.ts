import { watchMoves } from "./moves"
import { physicalSide, type PhysicalSide, type Side } from "./sides"
import { registerUninherited } from "./style"

/**
 * How a popup lines up along the side it opens on.
 * @stable
 */
type Align = "start" | "center" | "end"

/**
 * Something to position against that isn't an element: a point, like the
 * pointer for a context menu, or anything with a bounding rectangle, like a
 * text selection's range. Read on every check, so it can move.
 * @stable
 */
type VirtualAnchor =
  | { getBoundingClientRect: () => { x: number; y: number; width: number; height: number } }
  | { x: number; y: number }

/**
 * An element, a point or a rectangle a popup is positioned against.
 * @stable
 */
type Anchor = HTMLElement | VirtualAnchor

/**
 * Placement options every positioned popup takes. Components document their own defaults.
 * @stable
 */
type PositionProps = {
  /** Which side of the anchor the popup opens on. Flips to the other side when there isn't room. */
  side?: Side
  /** How the popup lines up with the anchor along that side. `start` and `end` follow the reading direction. */
  align?: Align
  /** Gap between the anchor and the popup, in pixels. */
  sideOffset?: number
  /** Shift along the anchor, in pixels. */
  alignOffset?: number
  /**
   * Space to keep from the viewport edges, in pixels.
   * @defaultValue 8
   */
  collisionPadding?: number
}

/**
 * Where a popup renders, for the cases the top layer doesn't cover.
 * @stable
 */
type PortalProps = {
  /**
   * Renders the popup into this element instead of in place, like a container
   * inside a shadow root or an iframe. On web components, a CSS selector.
   * Nested popups stay inside their parent.
   */
  container?: Element | DocumentFragment | null
}

function anchorRect(anchor: Anchor) {
  const rect =
    "getBoundingClientRect" in anchor
      ? anchor.getBoundingClientRect()
      : { x: anchor.x, y: anchor.y, width: 0, height: 0 }
  return {
    x: rect.x,
    y: rect.y,
    width: rect.width,
    height: rect.height,
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height,
  }
}

/**
 * How `position` places an element against its anchor.
 * @experimental
 */
type PositionOptions = {
  /** Which side of the anchor it opens on. @defaultValue "bottom" */
  side?: Side
  /** How it lines up with the anchor along that side. @defaultValue "start" */
  align?: Align
  /** Gap between the anchor and the element, in pixels. @defaultValue 4 */
  sideOffset?: number
  /** Shift along the anchor, in pixels. @defaultValue 0 */
  alignOffset?: number
  /** Space to keep from the viewport edges, in pixels. @defaultValue 8 */
  collisionPadding?: number
  /**
   * An element inside that points at the anchor, like an arrow, placed along
   * the edge facing it. A function is read on every check, so an arrow that
   * mounts later is still found.
   */
  arrow?: HTMLElement | null | (() => HTMLElement | null | undefined)
  /** Space to keep between the arrow and the corners, in pixels. @defaultValue 6 */
  arrowPadding?: number
}

type Placement = Required<Omit<PositionOptions, "arrow" | "arrowPadding" | "side">> & { side: PhysicalSide }

type Rect = { x: number; y: number; width: number; height: number }

const opposite: Record<PhysicalSide, PhysicalSide> = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left",
}

function place(
  anchor: Rect,
  size: { width: number; height: number },
  side: PhysicalSide,
  align: Align,
  options: Placement,
) {
  const { sideOffset, alignOffset } = options
  const vertical = side === "top" || side === "bottom"
  let x = 0
  let y = 0

  if (side === "bottom") y = anchor.y + anchor.height + sideOffset
  if (side === "top") y = anchor.y - size.height - sideOffset
  if (side === "right") x = anchor.x + anchor.width + sideOffset
  if (side === "left") x = anchor.x - size.width - sideOffset

  if (vertical) {
    if (align === "start") x = anchor.x + alignOffset
    if (align === "center") x = anchor.x + anchor.width / 2 - size.width / 2 + alignOffset
    if (align === "end") x = anchor.x + anchor.width - size.width - alignOffset
  } else {
    if (align === "start") y = anchor.y + alignOffset
    if (align === "center") y = anchor.y + anchor.height / 2 - size.height / 2 + alignOffset
    if (align === "end") y = anchor.y + anchor.height - size.height - alignOffset
  }
  return { x, y }
}

function overflow(
  side: PhysicalSide,
  point: { x: number; y: number },
  size: { width: number; height: number },
  viewport: { width: number; height: number },
  padding: number,
) {
  if (side === "bottom") return point.y + size.height - (viewport.height - padding)
  if (side === "top") return padding - point.y
  if (side === "right") return point.x + size.width - (viewport.width - padding)
  return padding - point.x
}

function available(
  side: PhysicalSide,
  anchor: Rect,
  viewport: { width: number; height: number },
  options: Placement,
) {
  const { sideOffset, collisionPadding: padding } = options
  const height =
    side === "bottom"
      ? viewport.height - padding - (anchor.y + anchor.height + sideOffset)
      : side === "top"
        ? anchor.y - sideOffset - padding
        : viewport.height - padding * 2
  const width =
    side === "right"
      ? viewport.width - padding - (anchor.x + anchor.width + sideOffset)
      : side === "left"
        ? anchor.x - sideOffset - padding
        : viewport.width - padding * 2
  return { width: Math.max(0, width), height: Math.max(0, height) }
}

function computePlacement(
  anchor: Rect,
  size: { width: number; height: number },
  viewport: { width: number; height: number },
  placement: Omit<Placement, "side"> & { side: Side; rtl?: boolean },
) {
  const options = { ...placement, side: physicalSide(placement.side, placement.rtl) }
  const vertical = options.side === "top" || options.side === "bottom"
  const align: Align =
    options.rtl && vertical && options.align !== "center"
      ? options.align === "start"
        ? "end"
        : "start"
      : options.align

  let side = options.side
  let point = place(anchor, size, side, align, options)
  const over = overflow(side, point, size, viewport, options.collisionPadding)
  if (over > 0) {
    const other = opposite[side]
    const otherPoint = place(anchor, size, other, align, options)
    if (overflow(other, otherPoint, size, viewport, options.collisionPadding) < over) {
      side = other
      point = otherPoint
    }
  }

  const padding = options.collisionPadding
  if (side === "top" || side === "bottom") {
    point.x = Math.min(Math.max(point.x, padding), Math.max(padding, viewport.width - size.width - padding))
  } else {
    point.y = Math.min(Math.max(point.y, padding), Math.max(padding, viewport.height - size.height - padding))
  }

  return { ...point, side, align: options.align, available: available(side, anchor, viewport, options) }
}

const stillFrames = 3

const slowCheck = 500

// The room a popup has changes on every frame the page scrolls under it, so
// these variables don't inherit: only the popup restyles, not every element
// inside it. A child that needs the room copies it on the popup, like
// `[--list-height:var(--available-height)]`.
const roomVariables = ["--available-height", "--available-width"]

function createWriter(el: HTMLElement) {
  const written = new Map<string, string | null>()
  const changed = (name: string, value: string | null) => {
    if (written.get(name) === value) return false
    written.set(name, value)
    return true
  }
  return {
    style(name: string, value: string) {
      if (changed(`style:${name}`, value)) el.style.setProperty(name, value)
    },
    attribute(name: string, value: string | null) {
      if (!changed(name, value)) return
      if (value === null) el.removeAttribute(name)
      else el.setAttribute(name, value)
    },
    reset: () => written.clear(),
  }
}

function viewportSize() {
  const visual = window.visualViewport
  return {
    width: visual?.width ?? document.documentElement.clientWidth,
    height: visual?.height ?? document.documentElement.clientHeight,
  }
}

/**
 * Places a popup beside its anchor and keeps it there while anything moves,
 * flipping to the other side when there isn't room. The anchor can be an
 * element, a point like `{ x, y }` for a context menu at the pointer, or
 * anything with `getBoundingClientRect`, like a text selection's range. Sets
 * `data-side`, `data-align`, `--available-width`, `--available-height` and
 * `--transform-origin`. Works in the top layer and inside transformed
 * containers. Options can be a function, read on every check, so a popup
 * follows changes like a new side while it's open. Returns the cleanup.
 *
 * ```ts
 * const stop = position({ x: event.clientX, y: event.clientY }, menu, { side: "bottom", align: "start", sideOffset: 2 })
 * ```
 * @experimental
 */
function position(
  anchorOrGetter: Anchor | (() => Anchor | null | undefined),
  el: HTMLElement,
  optionsOrGetter: PositionOptions | (() => PositionOptions) = {},
) {
  const read = () => (typeof optionsOrGetter === "function" ? optionsOrGetter() : optionsOrGetter)
  const anchorOf = () => (typeof anchorOrGetter === "function" ? anchorOrGetter() : anchorOrGetter)
  const resolve = (options: PositionOptions) => ({
    side: options.side ?? ("bottom" as Side),
    align: options.align ?? "start",
    sideOffset: Number(options.sideOffset ?? 4),
    alignOffset: Number(options.alignOffset ?? 0),
    collisionPadding: Number(options.collisionPadding ?? 8),
  })
  registerUninherited(roomVariables)
  Object.assign(el.style, { position: "fixed", inset: "auto", margin: "0", left: "0", top: "0" })
  const popup = createWriter(el)
  let arrowWriter: { el: HTMLElement; write: ReturnType<typeof createWriter> } | undefined

  let last = ""
  let placed = false
  // Sizes are left to `platform/moves.ts` and the slow check, not a
  // `ResizeObserver`: components whose own observers resize a popup, like a
  // navigation menu's viewport, would make the browser report "ResizeObserver
  // loop completed with undelivered notifications" for every such change.

  let unwatched = false

  function update() {
    const options = read()
    const resolved = resolve(options)
    const arrowPadding = Number(options.arrowPadding ?? 6)
    const anchor = anchorOf()
    if (!anchor) return false
    unwatched = !(anchor instanceof Element) && "getBoundingClientRect" in anchor
    // The first placement never animates: a popup coming into view has no
    // place to move from, and a `left` or `top` transition would fly it in
    // from the corner. Later moves, between anchors, animate.
    const first = !placed
    const transition = el.style.transition
    if (first) el.style.transition = "none"
    const a = anchorRect(anchor)
    const viewport = viewportSize()
    const size = { width: el.offsetWidth, height: el.offsetHeight }
    const arrow = typeof options.arrow === "function" ? options.arrow() : options.arrow
    const arrowSize = arrow ? { width: arrow.offsetWidth, height: arrow.offsetHeight } : undefined
    const key = [
      a.x,
      a.y,
      a.width,
      a.height,
      size.width,
      size.height,
      viewport.width,
      viewport.height,
      arrowSize?.width,
      arrowSize?.height,
      ...Object.values(resolved),
      arrowPadding,
    ].join()
    if (key === last) return false
    last = key
    // The padding box, which arrows are placed in. Read only when something
    // moved, and before any write, so it never forces a second layout.
    const inner = { left: el.clientLeft, top: el.clientTop, width: el.clientWidth, height: el.clientHeight }

    const style = getComputedStyle(el)
    const rtl = style.direction === "rtl"
    const result = computePlacement({ x: a.x, y: a.y, width: a.width, height: a.height }, size, viewport, {
      ...resolved,
      rtl,
    })

    // A transformed or filtered ancestor becomes the containing block for
    // fixed elements. Where the popup is now, less its offsets, finds that
    // block's origin, so portaled popups land right. Computed offsets are the
    // ones on screen, mid-transition too, so a popup moving between anchors,
    // like a navigation menu's viewport, can transition `left` and `top`.
    // Reading before writing forces no extra layout.
    const box = untransformed(el.getBoundingClientRect(), size, style)
    const origin = { x: box.x - (parseFloat(style.left) || 0), y: box.y - (parseFloat(style.top) || 0) }
    popup.style("left", `${result.x - origin.x}px`)
    popup.style("top", `${result.y - origin.y}px`)
    if (first) {
      placed = true
      // Reading a style applies the placement before transitions come back.
      void getComputedStyle(el).left
      el.style.transition = transition
    }

    popup.attribute("data-side", result.side)
    popup.attribute("data-align", result.align)
    popup.style("--available-height", `${result.available.height}px`)
    popup.style("--available-width", `${result.available.width}px`)
    popup.style("--anchor-width", `${a.width}px`)
    popup.style("--anchor-height", `${a.height}px`)
    popup.style("--transform-origin", transformOrigin(result.side, result.align, rtl, a, size, result))
    const paddingBox = {
      x: result.x + inner.left,
      y: result.y + inner.top,
      width: inner.width,
      height: inner.height,
    }
    // Where the anchor's center falls along the edge facing it, so a ::before
    // can be the arrow without an Arrow part.
    popup.style("--arrow-offset", `${arrowOffset(a, paddingBox, result.side, arrowPadding)}px`)

    if (arrow && arrowSize) {
      const box = { ...paddingBox, ...size }
      const placed = computeArrow(a, box, arrowSize, result.side, arrowPadding)
      const vertical = result.side === "top" || result.side === "bottom"
      if (arrowWriter?.el !== arrow) arrowWriter = { el: arrow, write: createWriter(arrow) }
      const { write } = arrowWriter
      write.style("position", "absolute")
      write.style("left", vertical ? `${placed.offset}px` : "")
      write.style("top", vertical ? "" : `${placed.offset}px`)
      write.attribute("data-side", result.side)
      write.attribute("data-align", result.align)
      write.attribute("data-arrow-clamped", placed.clamped ? "" : null)
    }
    return true
  }

  let frame = 0
  let still = 0
  function loop() {
    frame = 0
    still = update() ? 0 : still + 1
    if (still < stillFrames || unwatched) frame = requestAnimationFrame(loop)
  }
  function wake() {
    still = 0
    frame ||= requestAnimationFrame(loop)
  }
  const unwatch = watchMoves(wake, el)
  // While asleep, a slow check catches what no event reports, like an anchor
  // moved by a Web Animations API animation or a style sheet edited from
  // code. A move it finds wakes the loop, which then follows every frame.
  const slow = setInterval(() => frame || (update() && wake()), slowCheck)
  update()
  wake()
  const stop = () => {
    cancelAnimationFrame(frame)
    clearInterval(slow)
    unwatch()
  }
  // Places the popup again now, as its first placement, without animating:
  // for a popup whose size only just became known, like a navigation menu's
  // viewport once its content renders.
  return Object.assign(stop, {
    place() {
      placed = false
      last = ""
      popup.reset()
      arrowWriter?.write.reset()
      update()
    },
  })
}

// Where a popup's box would be on screen without its own `scale` and
// `translate`, like an entrance animation's, which move what
// getBoundingClientRect reports: a point scales around the transform origin,
// then moves. `size` is the untransformed size, from the offsets, which
// round to whole pixels: a box under a pixel off is fractional, not scaled.
// Read as scaled, a list 41.6px tall would move a fifth of a pixel each time
// a filter changed its height, and lay the page out again.
function untransformed(
  rect: { x: number; y: number; width: number; height: number },
  size: { width: number; height: number },
  style: { transformOrigin: string; translate: string },
) {
  const scale = (shown: number, whole: number) => (whole && Math.abs(shown - whole) >= 1 ? shown / whole : 1)
  const scaleX = scale(rect.width, size.width)
  const scaleY = scale(rect.height, size.height)
  const [originX = 0, originY = 0] = style.transformOrigin.split(" ").map((part) => parseFloat(part) || 0)
  // A computed translate keeps percentages, of the element's own size.
  const length = (part: string | undefined, whole: number) =>
    !part ? 0 : part.endsWith("%") ? (parseFloat(part) / 100) * whole : parseFloat(part) || 0
  const moves = style.translate && style.translate !== "none" ? style.translate.split(" ") : []
  const moveX = length(moves[0], size.width)
  const moveY = length(moves[1], size.height)
  return {
    x: rect.x - originX * (1 - scaleX) - moveX,
    y: rect.y - originY * (1 - scaleY) - moveY,
  }
}

// Where an arrow sits along the popup's edge so it points at the anchor's
// center, kept clear of the corners. Clamped when the anchor's center is past
// a corner and the arrow had to stop short.
function computeArrow(
  anchor: Rect,
  popup: Rect,
  arrow: { width: number; height: number },
  side: PhysicalSide,
  padding: number,
) {
  const vertical = side === "top" || side === "bottom"
  const length = vertical ? arrow.width : arrow.height
  const center = vertical ? anchor.x + anchor.width / 2 - popup.x : anchor.y + anchor.height / 2 - popup.y
  const ideal = center - length / 2
  const max = (vertical ? popup.width : popup.height) - length - padding
  const offset = Math.max(padding, Math.min(ideal, max))
  return { offset: Math.round(offset), clamped: Math.abs(offset - ideal) > 0.5 }
}

// How far along the popup's edge facing the anchor its center falls, from the
// start of the popup's padding box, kept `padding` away from both corners.
function arrowOffset(anchor: Rect, box: Rect, side: PhysicalSide, padding: number) {
  const vertical = side === "top" || side === "bottom"
  const center = vertical ? anchor.x + anchor.width / 2 - box.x : anchor.y + anchor.height / 2 - box.y
  const length = vertical ? box.width : box.height
  return Math.round(Math.min(Math.max(center, padding), Math.max(padding, length - padding)))
}

function transformOrigin(
  side: PhysicalSide,
  align: Align,
  rtl: boolean,
  a: ReturnType<typeof anchorRect>,
  size: { width: number; height: number },
  point: { x: number; y: number },
) {
  if (side === "top" || side === "bottom") {
    const start = rtl ? a.right - point.x : a.left - point.x
    const end = rtl ? a.left - point.x : a.right - point.x
    const x = align === "center" ? a.left + a.width / 2 - point.x : align === "start" ? start : end
    return `${Math.round(x)}px ${side === "bottom" ? 0 : size.height}px`
  }
  const y =
    align === "center"
      ? a.top + a.height / 2 - point.y
      : align === "start"
        ? a.top - point.y
        : a.bottom - point.y
  return `${side === "right" ? 0 : size.width}px ${Math.round(y)}px`
}

export {
  type Align,
  type Anchor,
  anchorRect,
  arrowOffset,
  computeArrow,
  computePlacement,
  type PortalProps,
  position,
  type PositionOptions,
  type PositionProps,
  untransformed,
  type VirtualAnchor,
}
