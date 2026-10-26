import { expect } from "@playwright/test"
import { fill, testExamples } from "./docs-helpers"

testExamples(
  "textarea",
  {
    basic: fill("Message", "Hello"),
    field: fill("Message", "Hello"),
    disabled: async (preview) => {
      await expect(preview.getByRole("textbox", { name: "Message" })).toBeDisabled()
    },
    invalid: async (preview) => {
      await expect(preview.getByText("Write at least 20 characters.")).toBeVisible()
    },
    button: async (preview) => {
      await preview.getByRole("textbox", { name: "Message" }).fill("Hello there")
      await preview.getByRole("button", { name: "Send message" }).click()
      await expect(preview).toContainText("Sent: Hello there")
      await expect(preview.getByRole("textbox", { name: "Message" })).toHaveValue("")
    },
    "auto-resize": async (preview) => {
      const notes = preview.getByRole("textbox", { name: "Notes" })
      const before = (await notes.boundingBox())!.height
      await notes.fill("One\nTwo\nThree\nFour\nFive")
      await expect.poll(async () => (await notes.boundingBox())!.height).toBeGreaterThan(before)
    },
    controlled: async (preview) => {
      await preview.getByRole("textbox", { name: "Bio" }).fill("Hello")
      await expect(preview).toContainText("5 / 160")
    },
  },
  "components",
  ["basic", "field", "disabled", "invalid", "button", "auto-resize", "controlled", "rtl"],
)
