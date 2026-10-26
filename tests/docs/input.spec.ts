import { expect } from "@playwright/test"
import { fill, testExamples } from "./docs-helpers"

testExamples(
  "input",
  {
    basic: fill("Email", "ada@example.com"),
    field: fill("Username", "grace"),
    disabled: async (preview) => {
      await expect(preview.getByRole("textbox", { name: "Email" })).toBeDisabled()
    },
    invalid: async (preview) => {
      await expect(preview.getByText("Enter an email address like ada@example.com.")).toBeVisible()
      await expect(preview.getByRole("textbox", { name: "Email" })).toHaveAttribute("aria-invalid", "true")
    },
    required: async (preview) => {
      await preview.getByRole("button", { name: "Continue" }).click()
      await expect(preview.getByRole("textbox", { name: "Email" })).toHaveAttribute("aria-invalid", "true")
    },
    "input-group": async (preview) => {
      await preview.getByText("https://", { exact: true }).click()
      const input = preview.getByRole("textbox", { name: "Website" })
      await expect(input).toBeFocused()
      await input.fill("example")
      await expect(input).toHaveValue("example")
    },
    clear: async (preview) => {
      const people = preview.getByLabel("Search people", { exact: true })
      await expect(people).toHaveValue("Lovelace")
      await preview.getByRole("button", { name: "Clear search" }).click()
      await expect(people).toHaveValue("")
      await expect(preview).toContainText("clear-press")
    },
    controlled: async (preview) => {
      await preview.getByRole("textbox", { name: "Display name" }).fill("Grace")
      await expect(preview.getByRole("textbox", { name: "Profile URL" })).toHaveValue("example.com/grace")
    },
    filter: async (preview) => {
      const code = preview.getByRole("textbox", { name: "Verification code" })
      await code.pressSequentially("12a3")
      await expect(code).toHaveValue("123")
    },
    controller: async (preview) => {
      await preview.getByRole("button", { name: "Quick reply" }).click()
      await expect(preview.getByRole("textbox", { name: "Message" })).toHaveValue("On my way!")
      await preview.getByRole("button", { name: "Clear", exact: true }).click()
      await expect(preview.getByRole("textbox", { name: "Message" })).toHaveValue("")
    },
  },
  "components",
  [
    "basic",
    "field",
    "field-group",
    "disabled",
    "invalid",
    "file",
    "inline",
    "grid",
    "required",
    "badge",
    "input-group",
    "clear",
    "password",
    "controlled",
    "filter",
    "controller",
    "rtl",
  ],
)
