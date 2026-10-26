import { expect, test } from "../fixtures"
import { codeSlots, focusCode, shownCode } from "./otp-input.helpers"

// Right to left, the code still reads from its first slot, and the arrows follow the layout.

test.beforeEach(async ({ open }) => {
  await open("otp-input", { dir: "rtl" })
})

test("typing fills the slots from the first", async ({ page }) => {
  await focusCode(page)
  await page.keyboard.type("123")
  await expect.poll(() => shownCode(page)).toBe("123")
})

test("ArrowRight goes back a slot @enhancement", async ({ page }) => {
  await focusCode(page)
  await page.keyboard.type("1234")
  await page.keyboard.press("ArrowRight")
  await expect(codeSlots(page).nth(3)).toHaveAttribute("data-active", "")
  await page.keyboard.type("9")
  await expect.poll(() => shownCode(page)).toBe("1239")
})
