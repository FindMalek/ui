import { expect, test } from "../fixtures"
import { textbox } from "./form.helpers"

// Textarea is a native multi-line field wired to its Field. With autoResize,
// it grows and shrinks with its text, between its CSS min and max heights.

const height = (page: import("@playwright/test").Page) =>
  textbox(page, "Bio").evaluate((el) => el.getBoundingClientRect().height)

test.beforeEach(async ({ open }) => {
  await open("form")
})

test("the label names the textarea and the description describes it", async ({ page }) => {
  await expect(textbox(page, "Bio")).toHaveAccessibleDescription("A few words about you.")
})

test.describe("auto resize", { tag: "@enhancement" }, () => {
  test("grows with its text and shrinks back", async ({ page }) => {
    const empty = await height(page)
    await textbox(page, "Bio").fill("One\nTwo\nThree")
    await expect.poll(() => height(page)).toBeGreaterThan(empty + 30)
    await textbox(page, "Bio").fill("")
    await expect.poll(() => height(page)).toBe(empty)
  })

  test("stops at its max height and scrolls", async ({ page }) => {
    await textbox(page, "Bio").fill(Array.from({ length: 20 }, (_, index) => `Line ${index}`).join("\n"))
    await expect.poll(() => height(page)).toBe(110)
    const scrolls = await textbox(page, "Bio").evaluate((el) => el.scrollHeight > el.clientHeight)
    expect(scrolls).toBe(true)
  })

  test("shrinks back when a reset empties it", async ({ page }) => {
    const empty = await height(page)
    await textbox(page, "Bio").fill("One\nTwo\nThree")
    await expect.poll(() => height(page)).toBeGreaterThan(empty)
    await page.getByRole("button", { name: "Reset" }).click()
    await expect.poll(() => height(page)).toBe(empty)
  })

  test("follows text written from code", async ({ page }) => {
    const empty = await height(page)
    await textbox(page, "Bio").evaluate((el: HTMLTextAreaElement) => (el.value = "One\nTwo\nThree"))
    await expect.poll(() => height(page)).toBeGreaterThan(empty + 30)
  })
})
