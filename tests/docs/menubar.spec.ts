import { expect, test, type Locator } from "@playwright/test"
import { frameworks, testExamples, type Check } from "./docs-helpers"

// Opens a menubar's first menu by pressing its trigger, checks the menu shows,
// and closes it with Escape.
const opens =
  (trigger: string, item: string): Check =>
  async (preview: Locator) => {
    const page = preview.page()
    await preview.getByRole("menuitem", { name: trigger, exact: true }).first().click()
    await expect(page.getByRole("menu").getByText(item).first()).toBeVisible()
    await page.keyboard.press("Escape")
    await expect(page.getByRole("menu")).toHaveCount(0)
  }

// The menubar is there, with one tab stop.
const shows =
  (trigger: string): Check =>
  async (preview) => {
    await expect(preview.getByRole("menuitem", { name: trigger, exact: true }).first()).toBeVisible()
    await expect(preview.getByRole("menubar").first().locator('[tabindex="0"]')).toHaveCount(1)
  }

testExamples(
  "menubar",
  {
    demo: opens("File", "New Tab"),
    submenu: opens("File", "New File"),
    data: opens("File", "New File"),
    vertical: opens("Inbox", "Open Inbox"),
    disabled: opens("File", "New File"),
    modal: opens("File", "File settings"),
    loop: shows("File"),
    controller: opens("Edit", "Close from the controller"),
  },
  undefined,
  [
    "demo",
    "checkbox",
    "radio",
    "submenu",
    "icons",
    "rtl",
    "data",
    "vertical",
    "disabled",
    "modal",
    "loop",
    "controller",
  ],
)

// A press on another trigger while a menu is open switches menus.
for (const framework of frameworks) {
  test(`pressing another trigger switches menus in ${framework}`, async ({ page }) => {
    await page.goto(`/docs/${framework}/components/menubar`)
    await page.waitForLoadState("networkidle")
    const preview = page.locator("[data-example]").first()
    const edit = await preview.getByRole("menuitem", { name: "Edit", exact: true }).boundingBox()
    await preview.getByRole("menuitem", { name: "File", exact: true }).click()
    await expect(page.getByRole("menu").getByText("New Tab")).toBeVisible()
    await page.mouse.click(edit!.x + edit!.width / 2, edit!.y + edit!.height / 2)
    await expect(page.getByRole("menu").getByText("Undo")).toBeVisible()
    await expect(page.getByRole("menu").getByText("New Tab")).toHaveCount(0)
  })
}
