// The roles a part can declare, and what each asks of its slot: one list per
// need, read by the slot types and by development builds alike.

const roles = [
  "alert",
  "alertdialog",
  "application",
  "article",
  "banner",
  "blockquote",
  "button",
  "caption",
  "cell",
  "checkbox",
  "code",
  "columnheader",
  "combobox",
  "complementary",
  "contentinfo",
  "definition",
  "deletion",
  "dialog",
  "document",
  "emphasis",
  "feed",
  "figure",
  "form",
  "generic",
  "grid",
  "gridcell",
  "group",
  "heading",
  "img",
  "insertion",
  "link",
  "list",
  "listbox",
  "listitem",
  "log",
  "main",
  "marquee",
  "math",
  "menu",
  "menubar",
  "menuitem",
  "menuitemcheckbox",
  "menuitemradio",
  "meter",
  "navigation",
  "none",
  "note",
  "option",
  "paragraph",
  "presentation",
  "progressbar",
  "radio",
  "radiogroup",
  "region",
  "row",
  "rowgroup",
  "rowheader",
  "scrollbar",
  "search",
  "searchbox",
  "separator",
  "slider",
  "spinbutton",
  "status",
  "strong",
  "subscript",
  "superscript",
  "switch",
  "tab",
  "table",
  "tablist",
  "tabpanel",
  "term",
  "textbox",
  "time",
  "timer",
  "toolbar",
  "tooltip",
  "tree",
  "treegrid",
  "treeitem",
] as const

// Not `separator`, which takes focus only as a window splitter.
const focusableRoles = [
  "button",
  "checkbox",
  "combobox",
  "gridcell",
  "link",
  "menuitem",
  "menuitemcheckbox",
  "menuitemradio",
  "option",
  "radio",
  "searchbox",
  "slider",
  "spinbutton",
  "switch",
  "tab",
  "textbox",
  "treeitem",
] as const

const pressableRoles = [
  "button",
  "checkbox",
  "link",
  "menuitem",
  "menuitemcheckbox",
  "menuitemradio",
  "option",
  "radio",
  "switch",
  "tab",
  "treeitem",
] as const

const keyedRoles = [
  "combobox",
  "grid",
  "listbox",
  "menu",
  "menubar",
  "radiogroup",
  "slider",
  "spinbutton",
  "tablist",
  "toolbar",
  "tree",
  "treegrid",
] as const

/**
 * A WAI-ARIA role a part can declare with its slot's `role`.
 */
type Role = (typeof roles)[number]

type FocusableRole = (typeof focusableRoles)[number]
type PressableRole = (typeof pressableRoles)[number]
type KeyedRole = (typeof keyedRoles)[number]

/**
 * How a part that takes focus gets it. `"roving"`: one of a set holds the tab
 * stop, and keys move it. `"tab-stop"`: always in the tab order.
 * `"active-descendant"`: focus stays on another element, which points at the
 * part with `aria-activedescendant`. `"native"`: the element focuses on its
 * own, like a `<button>` or an `<input>`.
 */
type Focus = "roving" | "tab-stop" | "active-descendant" | "native"

/**
 * A key a part handles, by `KeyboardEvent.key`, or `"typeahead"` for typed
 * characters that move to a matching item. Modifiers are written as in
 * shortcuts, like `"mod+a"`.
 */
type HandledKey =
  | "ArrowUp"
  | "ArrowDown"
  | "ArrowLeft"
  | "ArrowRight"
  | "Home"
  | "End"
  | "PageUp"
  | "PageDown"
  | "Enter"
  | " "
  | "Escape"
  | "Tab"
  | "typeahead"
  | (string & {})

/**
 * A need a slot's role has that another element meets, with the reason, like
 * `keys: { none: "The combobox's input handles them." }`.
 */
type Unneeded = { none: string }

const focusable = new Set<string>(focusableRoles)
const pressable = new Set<string>(pressableRoles)
const keyed = new Set<string>(keyedRoles)

/**
 * The needs a role has that a slot doesn't meet: `"keydown"` when it lists
 * `keys` with no `on.keydown` to handle them.
 */
function unmetNeeds(
  role: string,
  slot: { focus?: unknown; press?: unknown; keys?: unknown; on?: { keydown?: unknown } },
) {
  const unmet: ("focus" | "press" | "keys" | "keydown")[] = []
  if (focusable.has(role) && !slot.focus) unmet.push("focus")
  if (pressable.has(role) && !slot.press) unmet.push("press")
  if (keyed.has(role) && !slot.keys) unmet.push("keys")
  if ((Array.isArray(slot.keys) || typeof slot.keys === "function") && !slot.on?.keydown)
    unmet.push("keydown")
  return unmet
}

const knownRoles = new Set<string>(roles)

export {
  type Focus,
  type FocusableRole,
  type HandledKey,
  type KeyedRole,
  knownRoles,
  type PressableRole,
  type Role,
  type Unneeded,
  unmetNeeds,
}
