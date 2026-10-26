// What Button and Toggle share: a part that acts like a button whatever it's
// rendered as. A native button keeps its own behavior, a link stays a link,
// and anything else becomes a button. The element is only known once it
// binds, so state starts as "button", which is what servers render.
import { withSource } from "../kernel/details"
import { trusted } from "../kernel/trusted"

/** What a button-like part is rendered as. */
type ButtonElement = "button" | "link" | "other"

function buttonElement(el: HTMLElement) {
  if (el.tagName === "BUTTON") return "button"
  if (el.matches("a[href]")) return "link"
  return "other"
}

// The attributes a button-like part needs for its element. A disabled part is
// natively disabled, or keeps focus with aria-disabled when `focusable`. Links
// and other elements have no native disabled, so they always use aria-disabled.
// `tabindex` overrides the tab stop, for parts that rove inside a group.
function buttonAttrs(
  element: ButtonElement,
  options: { type?: string; disabled: boolean; focusable: boolean; tabindex?: string },
) {
  const native = element === "button"
  const unfocusable = options.disabled && !options.focusable
  const defaultTabindex = unfocusable ? (native ? undefined : "-1") : element === "other" ? "0" : undefined
  return {
    type: native ? options.type : undefined,
    role: element === "other" ? "button" : undefined,
    disabled: native && unfocusable ? "" : undefined,
    "aria-disabled": options.disabled && !(native && unfocusable) ? "true" : undefined,
    tabindex: options.tabindex ?? defaultTabindex,
  }
}

// The click a key makes reports the person's key, as a native button's own
// click does, since a script's click reports itself as programmatic. A key an
// agent sends isn't a person's, so its click keeps the agent's source.
function keyClick(event: KeyboardEvent, el: HTMLElement) {
  if (trusted(event)) withSource("keyboard", () => el.click())
  else el.click()
}

// Enter activates on keydown and Space on keyup, like a native button, for
// parts rendered as something that isn't a button or a link. Space never
// scrolls the page. Buttons and links activate themselves.
function buttonKeydown(event: KeyboardEvent, el: HTMLElement) {
  if (event.target !== el || buttonElement(el) !== "other") return
  if (event.key === "Enter") {
    event.preventDefault()
    if (!event.repeat) keyClick(event, el)
  } else if (event.key === " ") event.preventDefault()
}

function buttonKeyup(event: KeyboardEvent, el: HTMLElement) {
  if (event.target === el && event.key === " " && buttonElement(el) === "other") keyClick(event, el)
}

// A press a link leaves to the browser: a new tab or window, or a download.
function opensElsewhere(event: Event | undefined, el: HTMLElement | undefined) {
  if (!event || !el || !(event instanceof MouseEvent) || !el.matches("a[href]")) return false
  const target = el.getAttribute("target")
  return (
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey ||
    event.button !== 0 ||
    el.hasAttribute("download") ||
    (!!target && target !== "_self")
  )
}

export { buttonAttrs, buttonElement, type ButtonElement, buttonKeydown, buttonKeyup, opensElsewhere }
