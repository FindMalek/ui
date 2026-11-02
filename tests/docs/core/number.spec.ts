import { expect, test } from "@playwright/test"
import { openExamples } from "./behaviors/helpers"

test("every example renders without errors", async ({ page }) => {
  const { errors } = await openExamples(page, "/docs/core/number")
  await expect(page.locator("[data-example]")).toHaveCount(4)
  await expect(page.locator("figure > figcaption")).toHaveCount(4)
  expect(errors).toEqual([])
})

test("steps: arrows step by the step, Shift and Alt by the large and small steps, Home and End to the bounds", async ({
  page,
}) => {
  await openExamples(page, "/docs/core/number")
  const quantity = page.getByRole("spinbutton", { name: "Quantity in kg" })
  await expect(quantity).toHaveAttribute("aria-valuenow", "2.5")
  await quantity.focus()
  await page.keyboard.press("ArrowUp")
  await expect(quantity).toHaveAttribute("aria-valuenow", "3")
  await page.keyboard.press("Shift+ArrowUp")
  await expect(quantity).toHaveAttribute("aria-valuenow", "8")
  await page.keyboard.press("Alt+ArrowDown")
  await expect(quantity).toHaveAttribute("aria-valuenow", "7.9")
  await expect(quantity).toHaveAttribute("aria-valuetext", "7.9 kg")
  await page.keyboard.press("ArrowLeft")
  await expect(quantity).toHaveAttribute("aria-valuenow", "7.9")
  await page.keyboard.press("End")
  await expect(quantity).toHaveAttribute("aria-valuenow", "20")
  await page.keyboard.press("Home")
  await expect(quantity).toHaveAttribute("aria-valuenow", "0")
})

test("scale: 1 kHz sits past halfway on a log scale and near the start on a linear one, and keys step positions", async ({
  page,
}) => {
  await openExamples(page, "/docs/core/number")
  const position = page.locator("[data-position]")
  await expect(page.locator("[data-frequency]")).toHaveText("1K Hz")
  await expect(position).toHaveText("57% along")
  await page.getByRole("radio", { name: "Linear" }).click()
  await expect(position).toHaveText("5% along")
  const slider = page.getByRole("slider", { name: "Frequency" })
  await slider.focus()
  // 1 kHz sits off the position grid, so the first step lands on it, like stepUp().
  await page.keyboard.press("ArrowRight")
  await page.keyboard.press("ArrowRight")
  await expect(position).toHaveText("6% along")
  await expect(slider).toHaveAttribute("aria-valuetext", "1.2K Hz")
  await page.keyboard.press("End")
  await expect(slider).toHaveAttribute("aria-valuenow", "20000")
})

test("format: the value, its range and its parts follow the locale and the style", async ({ page }) => {
  await openExamples(page, "/docs/core/number")
  await expect(page.locator("[data-plain]")).toHaveText("€1,234.50")
  await expect(page.locator("[data-formatted] [data-type=currency]")).toHaveText("€")
  await page.getByLabel("Locale").first().selectOption("de-DE")
  await expect(page.locator("[data-plain]")).toHaveText("1.234,50 €")
  await expect(page.locator("[data-formatted]")).toHaveText("1.234,50 €")
  await page.getByLabel("Style").selectOption("Compact")
  await expect(page.locator("[data-plain]")).toHaveText("1,2 Mio.")
  await page.getByLabel("Locale").first().selectOption("zh-CN")
  await expect(page.locator("[data-plain]")).toHaveText("123万")
  await page.getByLabel("Locale").first().selectOption("ja-JP")
  await page.getByLabel("Style").selectOption("Currency")
  await expect(page.locator("[data-plain]")).toHaveText("€1,234.50")
  await expect(page.locator("[data-range]")).not.toBeEmpty()
})

test("parse: typed numbers read in the locale, partial ones wait, and others are marked", async ({
  page,
}) => {
  await openExamples(page, "/docs/core/number")
  const amount = page.getByLabel("Amount")
  const parsed = page.locator("[data-parsed]")
  await expect(parsed).toHaveText("1234.5")
  await amount.fill("-")
  await expect(parsed).toHaveText("Keep typing")
  await expect(amount).toHaveAttribute("aria-invalid", "false")
  await amount.fill("twelve")
  await expect(parsed).toHaveText("Not a number")
  await expect(amount).toHaveAttribute("aria-invalid", "true")
  await page.getByLabel("Locale").last().selectOption("en-US")
  await amount.fill("1,234.5")
  await expect(parsed).toHaveText("1234.5")
})
