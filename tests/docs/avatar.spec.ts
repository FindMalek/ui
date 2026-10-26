import { expect } from "@playwright/test"
import { testExamples } from "./docs-helpers"

// Each example's check, in the order they appear on the Avatar page. Images
// are inline PNGs, so they load without a network.
testExamples(
  "avatar",
  {
    basic: async (preview) => {
      await expect(preview.getByRole("img", { name: "Ada Lovelace" })).toBeVisible()
      await expect(preview.getByText("AL", { exact: true })).toBeHidden()
    },
    delay: async (preview) => {
      const delayed = preview.getByText("MH", { exact: true })
      await expect(delayed).toBeVisible()
      await preview.getByRole("button", { name: "Replay" }).click()
      // The undelayed fallback shows at once, the delayed one only after 600 ms.
      await expect(preview.getByText("AT", { exact: true })).toBeVisible()
      await expect(delayed).toBeHidden()
      await expect(delayed).toBeVisible()
    },
    status: async (preview) => {
      const status = preview.getByText(/^Status:/)
      const press = (name: string) => preview.getByRole("button", { name }).click()
      await expect(status).toHaveText("Status: loaded (image-load)")
      // A source that can't load after one that did goes straight to error,
      // without a loading step that would flash the fallback.
      await press("Break")
      await expect(status).toHaveText("Status: error (image-error)")
      await expect(preview.getByText("AT", { exact: true })).toBeVisible()
      await expect(preview.getByRole("button", { name: "Break" })).toHaveAttribute("aria-pressed", "true")
      await press("Load")
      await expect(status).toHaveText("Status: loaded (image-load)")
      await expect(preview.getByRole("img", { name: "Alan Turing" })).toBeVisible()
      await press("Remove")
      await expect(status).toHaveText("Status: idle (src-change)")
      await expect(preview.getByText("AT", { exact: true })).toBeVisible()
      // An image added back after none loads again.
      await press("Load")
      await expect(status).toHaveText("Status: loaded (image-load)")
      await expect(preview.getByRole("img", { name: "Alan Turing" })).toBeVisible()
    },
    referrer: async (preview) => {
      const image = preview.getByRole("img", { name: "Margaret Hamilton" })
      await expect(image).toBeVisible()
      await expect(image).toHaveAttribute("referrerpolicy", "no-referrer")
      await expect(image).toHaveAttribute("crossorigin", "anonymous")
    },
    render: async (preview, framework) => {
      const button = preview.getByRole("button", { name: "Ada Lovelace" })
      await button.click()
      await expect(preview.getByText("Presses: 1")).toBeVisible()
      await button.press("Enter")
      await expect(preview.getByText("Presses: 2")).toBeVisible()
      // The root still exposes the image's loading status.
      const root = framework === "web-components" ? button.locator("ui-avatar") : button
      await expect(root).toHaveAttribute("data-loading-status", "loaded")
    },
  },
  "components",
  ["basic", "badge", "group", "sizes", "rtl", "delay", "status", "referrer", "render"],
)
