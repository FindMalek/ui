// @vitest-environment jsdom
// A trigger with `for` connects to the popup it names, even inside another popup of the same kind.
import { afterEach, expect, test } from "vitest"
import { defineDialogElements } from "../src/dialog"
import { definePopoverElements } from "../src/popover"

Element.prototype.getAnimations ??= () => []
HTMLElement.prototype.showPopover ??= function () {}
HTMLElement.prototype.hidePopover ??= function () {}

const wait = () => new Promise((resolve) => setTimeout(resolve, 10))

afterEach(() => document.body.replaceChildren())

type Popup = HTMLElement & { open: boolean }

test.each([
  { name: "dialog", define: defineDialogElements },
  { name: "popover", define: definePopoverElements },
])("a $name trigger inside one $name opens the one its `for` names", async ({ name, define }) => {
  define()
  document.body.innerHTML = `
    <ui-${name} id="around"><ui-${name}-trigger for="other"><button id="trigger">Open</button></ui-${name}-trigger></ui-${name}>
    <ui-${name} id="other"><ui-${name}-content id="other-content"></ui-${name}-content></ui-${name}>`
  await wait()
  const trigger = document.getElementById("trigger")!
  trigger.click()
  await wait()
  const open = (id: string) => (document.getElementById(id) as Popup).open
  expect({ other: open("other"), around: open("around") }).toEqual({ other: true, around: false })
  expect(trigger.getAttribute("aria-controls")).toBe("other-content")
})
