import { expect, test } from "@playwright/test"

const frameworks = ["react", "vue", "svelte", "web-components", "solid"]

// The data menu renders its own styled content from the same data: one
// content opens, with its items, and the items' shortcuts run while it's closed.
for (const framework of frameworks) {
  test(`a data menu with its own content keeps its shortcuts in ${framework}`, async ({ page }) => {
    await page.goto(`/docs/${framework}/components/menu`)
    await page.waitForLoadState("networkidle")
    // Held by handle, since the output's text changes once a shortcut runs.
    await expect(page.locator("[data-example]")).toHaveCount(23)
    const preview = page.locator('[data-example="menu/data"]')
    const output = preview.locator("output")
    const file = await preview.getByRole("button", { name: "File" }).elementHandle()
    const status = await output.elementHandle()
    await status!.scrollIntoViewIfNeeded()
    await status!.click()
    await page.keyboard.press("ControlOrMeta+o")
    await expect.poll(() => status!.textContent()).toBe("Ran open")
    await file!.click()
    await expect(page.getByRole("menu")).toHaveCount(1)
    await expect(page.getByRole("menuitem", { name: /Quick open/ })).toHaveAttribute("aria-keyshortcuts", /P/)
  })
}
