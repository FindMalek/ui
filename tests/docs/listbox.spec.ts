import { expect, type Locator } from "@playwright/test"
import { testExamples, type Check } from "./docs-helpers"

// The options of the example's list.
const option = (preview: Locator, name: string) => preview.getByRole("option", { name, exact: true })

// Presses an option and checks it's selected.
const selects =
  (name: string): Check =>
  async (preview) => {
    await option(preview, name).click()
    await expect(option(preview, name)).toHaveAttribute("aria-selected", "true")
  }

// Each example's check, in the order they appear on the Listbox page.
const checks: Record<string, Check> = {
  basic: async (preview) => {
    await expect(preview.getByRole("listbox", { name: "Framework" })).toBeVisible()
    await expect(option(preview, "Next.js")).toHaveAttribute("aria-selected", "true")
    await selects("Astro")(preview, "")
    await expect(option(preview, "Next.js")).toHaveAttribute("aria-selected", "false")
  },
  multiple: async (preview) => {
    await option(preview, "Basil").click()
    await expect(preview.getByText('Value: ["cheese","onion","basil"]')).toBeVisible()
  },
  activation: async (preview) => {
    await option(preview, "index.ts").click()
    // A click replaces the selection.
    await expect(preview.getByText("1 selected")).toBeVisible()
  },
  manual: async (preview) => {
    await selects("Nuxt")(preview, "")
    await expect(preview.getByText("Value: nuxt")).toBeVisible()
  },
  deselectable: async (preview) => {
    await option(preview, "Astro").click()
    await expect(preview.getByText("Value: none")).toBeVisible()
  },
  groups: async (preview) => {
    await expect(preview.getByRole("group", { name: "Vegetables" })).toBeVisible()
    await selects("Carrot")(preview, "")
  },
  icons: selects("Drafts"),
  horizontal: async (preview) => {
    await expect(option(preview, "M")).toHaveAttribute("aria-selected", "true")
    await selects("L")(preview, "")
  },
  disabled: async (preview) => {
    await option(preview, "Olive").click({ force: true })
    await expect(option(preview, "Olive")).toHaveAttribute("aria-selected", "false")
  },
  "read-only": async (preview) => {
    await option(preview, "Astro").click()
    await expect(option(preview, "Nuxt")).toHaveAttribute("aria-selected", "true")
  },
  form: async (preview) => {
    await option(preview, "Basil").click()
    await preview.getByRole("button", { name: "Order" }).click()
    await expect(preview.getByText("Submitted: cheese, basil")).toBeVisible()
  },
  data: async (preview) => {
    await expect(option(preview, "Pro")).toHaveAttribute("aria-selected", "true")
    await option(preview, "Team").click()
    await expect(preview.getByText("team, $50 a month")).toBeVisible()
  },
  controller: async (preview) => {
    await preview.getByRole("button", { name: "Select all" }).click()
    await expect(option(preview, "Pepper")).toHaveAttribute("aria-selected", "true")
    await preview.getByRole("button", { name: "Clear" }).click()
    await expect(option(preview, "Pepper")).toHaveAttribute("aria-selected", "false")
  },
  scrollable: async (preview) => {
    await expect(option(preview, "UTC+09:00")).toHaveAttribute("aria-selected", "true")
  },
  render: async (preview) => {
    await option(preview, "Remix").click()
    await expect(option(preview, "Remix")).toHaveAttribute("aria-selected", "true")
    await expect(preview.page()).toHaveURL(/#remix$/)
  },
}

testExamples("listbox", checks, "components", [...Object.keys(checks), "rtl"])
