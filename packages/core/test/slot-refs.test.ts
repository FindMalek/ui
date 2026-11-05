// @vitest-environment jsdom
// A slot's `refs` points at other parts by their slot's name: core writes the
// reference and the target's id, so neither end is a hand-built string.
import { afterEach, expect, test, vi } from "vitest"
import { attrs, bind } from "../src/foundation/kernel/part"
import { definePrimitive } from "../src/foundation/kernel/primitive"

afterEach(() => vi.restoreAllMocks())

const tabs = definePrimitive({
  name: "tabs",
  state: () => ({ panels: ["a"], described: false }),
  api: ({ store }) => ({ describe: () => store.set({ described: true }) }),
  slots: (slot) => ({
    list: slot({
      refs: {
        owns: [
          { slot: "tab", key: "a" },
          { slot: "tab", key: "b" },
        ],
      },
    }),
    tab: slot<{ value: string }>({
      props: { value: "string" },
      refs: { controls: { slot: "panel", when: (state, { key }) => state.panels.includes(key) } },
    }),
    panel: slot<{ value: string }>({
      props: { value: "string" },
      refs: {
        labelledby: "tab",
        describedby: { slot: "description", key: "", when: (state) => state.described },
      },
    }),
    description: slot({}),
  }),
})

const element = (id?: string) => {
  const el = document.createElement("div")
  if (id) el.id = id
  return el
}

test("points at the part of the same key, and gives it its id", () => {
  const instance = tabs({ id: "t" })
  const tab = attrs(instance.part("tab", { value: "a" }))
  const panel = attrs(instance.part("panel", { value: "a" }))
  expect(tab).toMatchObject({ id: "t-tab-a", "aria-controls": "t-panel-a" })
  expect(panel).toMatchObject({ id: "t-panel-a", "aria-labelledby": "t-tab-a" })
  // A slot with one part has no key in its id.
  expect(attrs(instance.part("description")).id).toBe("t-description")
})

test("points only while `when` holds, at the key it names, and at every target of a list", () => {
  const instance = tabs({ id: "t" })
  expect(attrs(instance.part("tab", { value: "b" }))["aria-controls"]).toBeUndefined()
  const panel = instance.part("panel", { value: "a" })
  expect(attrs(panel)["aria-describedby"]).toBeUndefined()
  instance.api.describe()
  expect(attrs(panel)["aria-describedby"]).toBe("t-description")
  expect(attrs(instance.part("list"))["aria-owns"]).toBe("t-tab-a t-tab-b")
})

test("follows an author's id on the part it points at", async () => {
  const instance = tabs({ id: "t" })
  const tab = instance.part("tab", { value: "a" })
  const panel = instance.part("panel", { value: "a" })
  bind(tab, element("account"))
  bind(panel, element())
  await new Promise<void>((resolve) => queueMicrotask(resolve))
  expect(attrs(panel)["aria-labelledby"]).toBe("account")
  expect(attrs(tab)["aria-controls"]).toBe("t-panel-a")
})

test("keeps a `live` reference current on the element, without rendering the part", async () => {
  const listbox = definePrimitive({
    name: "listbox",
    state: () => ({ highlighted: "a" as string | null }),
    live: ["highlighted"],
    api: ({ store }) => ({ highlight: (key: string | null) => store.set({ highlighted: key }) }),
    slots: (slot) => ({
      list: slot({
        refs: {
          activedescendant: {
            slot: "option",
            key: (state) => state.highlighted ?? "",
            when: (state) => state.highlighted !== null,
            live: true,
          },
        },
      }),
      option: slot<{ value: string }>({ props: { value: "string" } }),
    }),
  })
  const instance = listbox({ id: "l" })
  const list = instance.part("list")
  const el = element()
  bind(list, el)
  expect(attrs(list)["aria-activedescendant"]).toBeUndefined()
  expect(el.getAttribute("aria-activedescendant")).toBe("l-option-a")
  expect(attrs(instance.part("option", { value: "b" })).id).toBe("l-option-b")
  instance.api.highlight("b")
  expect(el.getAttribute("aria-activedescendant")).toBe("l-option-b")
  instance.api.highlight(null)
  expect(el.hasAttribute("aria-activedescendant")).toBe(false)
})

test("warns once about a slot it doesn't have, and about `attrs` writing the same reference", () => {
  const warned = vi.spyOn(console, "warn").mockImplementation(() => {})
  const broken = definePrimitive({
    name: "broken",
    state: () => ({}),
    api: () => ({}),
    slots: (slot) => ({
      trigger: slot({ refs: { controls: "pannel" } }),
      label: slot({ refs: { labelledby: "trigger" }, attrs: () => ({ "aria-labelledby": "elsewhere" }) }),
    }),
  })
  const instance = broken({ id: "b" })
  attrs(instance.part("trigger"))
  attrs(instance.part("trigger"))
  attrs(instance.part("label"))
  expect(warned.mock.calls.map(([message]) => String(message))).toEqual([
    expect.stringContaining(
      `the "trigger" part's \`refs\` points at "pannel", which isn't one of its slots.`,
    ),
    expect.stringContaining(
      'the "label" part\'s `refs` writes `aria-labelledby`, and its `attrs` writes it too.',
    ),
  ])
})
