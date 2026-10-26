import type { Page } from "@playwright/test"
import { expect, test } from "../fixtures"

// Only *-ssr projects render on the server first.
test.beforeEach(({ framework }) => {
  test.skip(!framework.endsWith("-ssr"), "Only for server-rendered fixtures.")
})

const hydrationErrors = (page: Page) =>
  page.evaluate(() => (window as unknown as { __hydrationErrors: string[] }).__hydrationErrors)
const serverForm = (page: Page) =>
  page.evaluate(() => (window as unknown as { __serverForm: string }).__serverForm)

test("an autocomplete with text hydrates without mismatches, and its text submits before hydration", async ({
  page,
  open,
}) => {
  await open("autocomplete", { value: "Mango" })
  await expect(page.getByRole("combobox", { name: "Fruit" })).toHaveValue("Mango")
  expect(await serverForm(page)).toBe("fruit=Mango")
  await page.getByRole("combobox", { name: "Fruit" }).fill("gr")
  await expect(page.getByRole("option", { name: "Grape" })).toBeVisible()
  expect(await hydrationErrors(page)).toEqual([])
})
