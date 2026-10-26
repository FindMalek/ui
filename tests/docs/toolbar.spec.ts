import { expect, type Locator } from "@playwright/test"
import { testExamples } from "./docs-helpers"

// The toolbar is there, named, with one tab stop, and an arrow key moves
// focus from that stop to another item.
const roves =
  (name: string, key = "ArrowRight") =>
  async (preview: Locator) => {
    const toolbar = preview.getByRole("toolbar", { name }).first()
    await expect(toolbar).toBeVisible()
    const stop = toolbar.locator('[tabindex="0"]')
    await expect(stop).toHaveCount(1)
    await stop.focus()
    const before = await stop.evaluate((el) => el.outerHTML)
    await preview.page().keyboard.press(key)
    const moved = await preview.page().evaluate((html) => document.activeElement?.outerHTML !== html, before)
    expect(moved, `${name} moves with ${key}`).toBe(true)
  }

testExamples("toolbar", {
  demo: roves("Formatting"),
  "toggle-group": roves("Text"),
  menu: roves("Document"),
  select: async (preview) => {
    await roves("View")(preview)
    // The zoom buttons step the select's value, and stop at the ends.
    const zoom = preview.getByRole("combobox", { name: "Zoom" }).first()
    await expect(zoom).toContainText("100%")
    await preview.getByRole("button", { name: "Zoom in" }).click()
    await expect(zoom).toContainText("150%")
    await preview.getByRole("button", { name: "Fit to screen" }).click()
    await expect(zoom).toContainText("100%")
    await preview.getByRole("button", { name: "Zoom out" }).click()
    await preview.getByRole("button", { name: "Zoom out" }).click()
    await expect(zoom).toContainText("50%")
    await expect(preview.getByRole("button", { name: "Zoom out" })).toHaveAttribute("aria-disabled", "true")
  },
  input: roves("Text"),
  link: async (preview) => {
    await roves("Pull request")(preview)
    // A plain click shows the page in the example, and leaves the docs' URL alone.
    const url = preview.page().url()
    await preview.getByRole("link", { name: "Files changed" }).click()
    await expect(preview.getByText("Showing: files")).toBeVisible()
    expect(preview.page().url()).toBe(url)
  },
  group: roves("Editor"),
  rtl: roves("تنسيق", "ArrowLeft"),
  vertical: roves("Tools", "ArrowDown"),
  disabled: roves("Message"),
  loop: roves("Pages"),
  controller: roves("Notes"),
})
