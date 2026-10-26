import { expect, type Locator } from "@playwright/test"
import { testExamples } from "./docs-helpers"

// Focuses a code's input and types into it, as a person would.
async function type(preview: Locator, name: string, text: string) {
  const input = preview.getByRole("textbox", { name, exact: true })
  await input.focus()
  await input.page().keyboard.type(text)
  return input
}

// Each example's check, in the order they appear on the OTP Input page.
testExamples(
  "otp-input",
  {
    basic: async (preview) => {
      const input = await type(preview, "Verification code", "123456")
      await expect(input).toHaveValue("123456")
      // The slots draw the code.
      await expect(preview.getByText("6", { exact: true })).toBeVisible()
    },
    "four-digits": async (preview) => {
      // The last slot stays selected once the code is full, so a fifth digit
      // replaces the fourth.
      await expect(await type(preview, "PIN", "12345")).toHaveValue("1235")
    },
    alphanumeric: async (preview) => {
      await expect(await type(preview, "Recovery code", "ab12-cd34")).toHaveValue("ab12cd34")
    },
    pattern: async (preview) => {
      await expect(await type(preview, "Device code", "12zzab")).toHaveValue("12ab")
    },
    disabled: async (preview) => {
      const disabled = preview.getByRole("textbox", { name: "Disabled code" })
      await expect(disabled).toHaveValue("123456")
      await expect(disabled).toBeDisabled()
      const readOnly = await type(preview, "Read-only code", "9")
      await readOnly.press("Backspace")
      await expect(readOnly).toHaveValue("654321")
    },
    invalid: async (preview) => {
      const input = preview.getByRole("textbox", { name: "Verification code" })
      await expect(input).toHaveValue("000000")
      await expect(input).toHaveAttribute("aria-invalid", "true")
    },
    rtl: async (preview) => {
      await expect(await type(preview, "رمز التحقق", "12")).toHaveValue("12")
    },
    controlled: async (preview) => {
      await type(preview, "One-time password", "12")
      await expect(preview.getByText("You entered: 12")).toBeVisible()
    },
    complete: async (preview) => {
      await type(preview, "Verification code", "123456")
      await expect(preview.getByText("Checking 123456, from input-change.")).toBeVisible()
    },
    controller: async (preview) => {
      const input = preview.getByRole("textbox", { name: "Verification code" })
      await preview.getByRole("button", { name: "Fill" }).click()
      await expect(input).toHaveValue("123456")
      await preview.getByRole("button", { name: "Read" }).click()
      await expect(preview.getByText('The code is "123456".')).toBeVisible()
      await preview.getByRole("button", { name: "Clear" }).click()
      await expect(input).toHaveValue("")
    },
    form: async (preview) => {
      await type(preview, "Verification code", "123456")
      await preview.getByRole("button", { name: "Verify" }).click()
      await expect(preview.getByText("Submitted: code=123456, recovery=")).toBeVisible()
      await preview.getByRole("button", { name: "Reset" }).click()
      await expect(preview.getByRole("textbox", { name: "Verification code" })).toHaveValue("")
    },
  },
  "components",
  [
    "basic",
    "four-digits",
    "alphanumeric",
    "pattern",
    "disabled",
    "invalid",
    "rtl",
    "controlled",
    "complete",
    "controller",
    "form",
    "separator",
    "render",
  ],
)
