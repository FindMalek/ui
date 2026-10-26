import { expect } from "@playwright/test"
import { testExamples } from "./docs-helpers"

// Each example's check, in the order they appear on the Progress page.
testExamples(
  "progress",
  {
    basic: async (preview) => {
      await expect(preview.getByRole("progressbar", { name: "Loading" })).toHaveAttribute(
        "aria-valuenow",
        "60",
      )
    },
    indeterminate: async (preview) => {
      // A busy bar has no current value.
      const bar = preview.getByRole("progressbar")
      await expect(bar).toBeVisible()
      await expect(bar).not.toHaveAttribute("aria-valuenow")
    },
    controlled: async (preview) => {
      await preview.getByRole("button", { name: "Upload more" }).click()
      await expect(preview.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "40")
      await expect(preview.getByText("40%")).toBeVisible()
      await preview.getByRole("button", { name: "Reset" }).click()
      await expect(preview.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "0")
    },
    "min-max": async (preview) => {
      const bar = preview.getByRole("progressbar")
      await expect(bar).toHaveAttribute("aria-valuenow", "3")
      await expect(bar).toHaveAttribute("aria-valuemin", "1")
      await expect(preview.getByText("50%")).toBeVisible()
    },
    format: async (preview) => {
      await expect(preview.getByText("120 GB")).toBeVisible()
      await expect(preview.getByText("87.3%")).toBeVisible()
      await expect(preview.getByText("15 min left")).toBeVisible()
    },
    "value-label": async (preview) => {
      await expect(preview.getByRole("progressbar")).toHaveAttribute("aria-valuetext", "3 of 12 files, 25%")
    },
  },
  "components",
  ["basic", "label", "indeterminate", "rtl", "controlled", "min-max", "format", "value-label", "render"],
)
