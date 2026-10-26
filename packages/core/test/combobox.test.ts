import { describe, expect, test } from "vitest"
import { combobox } from "../src/components/combobox/combobox"

const frameworks = [
  { value: "next", label: "Next.js" },
  { value: "astro", label: "Astro" },
]

describe("combobox headless", () => {
  test("clearing empties the value and the text", () => {
    const instance = combobox({ id: "c", items: frameworks, defaultValue: "astro" })
    expect(instance.api.getQuery()).toBe("Astro")
    instance.api.clear()
    expect(instance.api.getValue()).toBe(null)
    expect(instance.api.getQuery()).toBe("")
  })

  test("a canceled clear keeps the value and its label in the input", () => {
    const instance = combobox({
      id: "c",
      items: frameworks,
      defaultValue: "astro",
      onValueChange: (_value, details) => details.cancel(),
    })
    instance.api.clear({ reason: "clear-press" })
    expect(instance.api.getValue()).toBe("astro")
    expect(instance.api.getQuery()).toBe("Astro")
  })

  test("clearing with nothing selected still empties the text", () => {
    const instance = combobox({ id: "c", items: frameworks })
    instance.api.setQuery("ne")
    instance.api.clear()
    expect(instance.api.getQuery()).toBe("")
  })

  test("a read-only combobox ignores clear", () => {
    const instance = combobox({ id: "c", items: frameworks, defaultValue: "astro", readOnly: true })
    instance.api.clear()
    expect(instance.api.getValue()).toBe("astro")
    expect(instance.api.getQuery()).toBe("Astro")
  })
})
