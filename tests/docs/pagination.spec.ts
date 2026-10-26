import { expect, type Locator } from "@playwright/test"
import { testExamples } from "./docs-helpers"

// A part by its name. Parts are links with getHref and buttons without.
function part(preview: Locator, name: string, role: "button" | "link" = "button") {
  return preview.getByRole(role, { name, exact: true })
}

async function expectCurrent(preview: Locator, name: string, role?: "button" | "link") {
  await expect(part(preview, name, role), `page ${name} is current`).toHaveAttribute("aria-current", "page")
}

// Starts on a page, presses a part, and checks the current page moved.
const goes =
  (from: string, press: string, to: string, role?: "button" | "link") => async (preview: Locator) => {
    await expectCurrent(preview, from, role)
    await part(preview, press, role).click()
    await expectCurrent(preview, to, role)
  }

// Each example's check, in the order they appear on the Pagination page.
testExamples("pagination", {
  basic: async (preview) => {
    // Previous says it's disabled on the first page, and Next steps one page.
    await expect(part(preview, "Previous")).toHaveAttribute("aria-disabled", "true")
    await goes("1", "Next", "2")(preview)
    await expect(part(preview, "Previous")).not.toHaveAttribute("aria-disabled", "true")
  },
  simple: goes("1", "3", "3"),
  "icons-only": async (preview) => {
    await expect(part(preview, "First page")).toHaveAttribute("aria-disabled", "true")
    await part(preview, "Next page").click()
    await expect(preview.getByText("Page 2 of 10")).toBeVisible()
    await part(preview, "Last page").click()
    await expect(preview.getByText("Page 10 of 10")).toBeVisible()
    await expect(part(preview, "Next page")).toHaveAttribute("aria-disabled", "true")
  },
  links: async (preview) => {
    await goes("1", "3", "3", "link")(preview)
    await expect(preview.page()).toHaveURL(/#page-3$/)
    await expect(part(preview, "Next", "link")).toHaveAttribute("href", "#page-4")
  },
  router: async (preview) => {
    const steps = await preview.page().evaluate(() => history.length)
    await goes("1", "3", "3", "link")(preview)
    await expect(preview.getByText("Route: ?page=3")).toBeVisible()
    await expect(preview.page()).toHaveURL(/\?page=3$/)
    // The stand-in router adds no Back steps it can't follow.
    expect(await preview.page().evaluate(() => history.length)).toBe(steps)
  },
  rtl: goes("1", "التالي", "2"),
  controlled: async (preview) => {
    await goes("1", "Next", "2")(preview)
    await expect(preview.getByText("Page 2, from next-press")).toBeVisible()
  },
  "default-page": goes("5", "6", "6"),
  siblings: async (preview) => {
    // Two pages on each side of page 10.
    await expect(part(preview, "8")).toBeVisible()
    await goes("10", "12", "12")(preview)
  },
  boundaries: async (preview) => {
    // Two pages at each end.
    await expect(part(preview, "2")).toBeVisible()
    await goes("10", "19", "19")(preview)
  },
  total: async (preview) => {
    await expect(preview.getByText("Showing 21–40 of 95")).toBeVisible()
    await goes("2", "3", "3")(preview)
    await expect(preview.getByText("Showing 41–60 of 95")).toBeVisible()
    // A new page size starts again from the first page.
    await preview.getByLabel("Rows per page").selectOption("50")
    await expect(preview.getByText("Showing 1–50 of 95")).toBeVisible()
    await expectCurrent(preview, "1")
  },
  controller: async (preview) => {
    // The buttons outside the pagination page it through its controller.
    await goes("1", "Next", "2")(preview)
    await expect(preview.getByText("Page 2 of 10")).toBeVisible()
    await part(preview, "Go to page 5").click()
    await expectCurrent(preview, "5")
  },
  render: async (preview) => {
    await expect(part(preview, "Previous page")).toHaveAttribute("aria-disabled", "true")
    await goes("1", "Next page", "2")(preview)
  },
  range: async (preview) => {
    await part(preview, "Slide 7").click()
    await expect(preview.getByText("Slide 7 of 20")).toBeVisible()
    await expect(part(preview, "Slide 7")).toHaveAttribute("aria-current", "true")
  },
})
