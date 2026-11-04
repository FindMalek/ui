import { definePrimitive } from "../src/index"

// A slot that declares a role has to say how it meets what the role needs:
// focus, a press and keys, or for focus and keys, why another element does.
// Each case fails to compile on its own, so an agent can't leave one out.

const press = () => {}
const keydown = () => {}

definePrimitive({
  name: "roles",
  state: () => ({}),
  api: () => ({}),
  slots: (slot) => ({
    option: slot({ role: "option", focus: "roving", press }),
    // An option takes focus and activates, so it says how.
    // @ts-expect-error No `focus` or `press`.
    bare: slot({ role: "option" }),
    // @ts-expect-error No `focus`.
    pressOnly: slot({ role: "option", press }),
    elsewhere: slot({ role: "option", focus: { none: "The combobox's input keeps focus." }, press }),
    list: slot({
      role: "listbox",
      keys: ["ArrowUp", "ArrowDown", "Home", "End", "typeahead"],
      on: { keydown },
    }),
    // @ts-expect-error No `keys`.
    unkeyed: slot({ role: "listbox", on: { keydown } }),
    inputKeys: slot({ role: "listbox", keys: { none: "The combobox's input handles them." } }),
    // @ts-expect-error Keys with no keydown handler to press them.
    unhandled: slot({ role: "listbox", keys: ["ArrowDown"] }),
    // @ts-expect-error The same on a slot whose role doesn't ask for keys.
    unhandledGroup: slot({ role: "group", keys: ["Enter"] }),
    // @ts-expect-error Not a WAI-ARIA role.
    typo: slot({ role: "lisbox" }),
    // A role picked from state lists every role it can pick.
    picked: slot({ role: () => "none", roles: ["none", "separator"] }),
    // @ts-expect-error No `roles`.
    unlisted: slot({ role: () => "none" }),
    group: slot({ role: "group" }),
    plain: slot({ attrs: () => ({ type: "button" }) }),
  }),
})
