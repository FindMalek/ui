import { buttonNamed, expect, test } from "../fixtures"

// Only *-ssr projects render on the server first.
test.beforeEach(({ framework }) => {
  test.skip(!framework.endsWith("-ssr"), "Only for server-rendered fixtures.")
})

const hydrationErrors = (page: import("@playwright/test").Page) =>
  page.evaluate(() => (window as unknown as { __hydrationErrors: string[] }).__hydrationErrors)

test("toggles, groups, buttons and separators hydrate without mismatches", async ({ page, open }) => {
  await open("toggle")
  await page.waitForLoadState("networkidle")
  await buttonNamed(page, "Center").click()
  await expect(buttonNamed(page, "Center")).toHaveAttribute("aria-pressed", "true")
  await buttonNamed(page, "Bookmark").click()
  await expect(buttonNamed(page, "Bookmark")).toHaveAttribute("aria-pressed", "true")
  expect(await hydrationErrors(page)).toEqual([])
})

test("the server renders one tab stop per group, on the pressed toggle", async ({ page, open }) => {
  await open("toggle", { alignment: "right" })
  const stops = page.getByRole("group", { name: "Text alignment" }).locator('[tabindex="0"]')
  await expect(stops).toHaveCount(1)
  await expect(stops).toHaveText("Right")
  expect(await hydrationErrors(page)).toEqual([])
})

test("a button rendered as a link hydrates and stays a link", async ({ page, open }) => {
  await open("toggle")
  await expect(page.getByRole("link", { name: "Docs" })).toBeVisible()
  await expect(page.getByRole("link", { name: "Docs" })).not.toHaveAttribute("type", /.*/)
  expect(await hydrationErrors(page)).toEqual([])
})
