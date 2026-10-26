import { render } from "svelte/server"
import { describe, expect, test } from "vitest"
import FieldHintApp from "./apps/field-hint-ssr-app.svelte"
import FieldApp from "./apps/field-ssr-app.svelte"
import App from "./apps/forms-app.svelte"

const html = (which: "checkbox" | "switch" | "radio" | "group" | "field") =>
  render(App, { props: { which } }).body

// Opening tags, and an attribute of one.
const tags = (html: string) => html.match(/<[a-z][^>]*>/g) ?? []
const attribute = (tag: string | undefined, name: string) =>
  tag?.match(new RegExp(`\\s${name}="([^"]*)"`))?.[1]

// Runs with no DOM: any access to window or document during render throws.
describe("server rendering form controls", () => {
  test("a checkbox renders a hidden native input that submits before hydration", () => {
    const body = html("checkbox")
    expect(typeof window).toBe("undefined")
    expect(body).toContain('role="checkbox"')
    expect(body).toContain('aria-checked="true"')
    expect(body).toMatch(
      /<input[^>]*type="checkbox"[^>]*name="terms"[^>]*value="yes"[^>]*checked[^>]*required/,
    )
  })

  test("a switch renders its role and hidden input", () => {
    const body = html("switch")
    expect(body).toContain('role="switch"')
    expect(body).toMatch(/<input[^>]*name="wifi"[^>]*checked/)
  })

  test("a radio group renders one tab stop and a named radio per item", () => {
    const body = html("radio")
    expect(body.match(/tabindex="0"/g)).toHaveLength(1)
    expect(body.match(/type="radio"[^>]*name="plan"/g)).toHaveLength(3)
  })

  test("a checkbox group names its checkboxes", () => {
    const body = html("group")
    expect(body).toContain('aria-checked="mixed"')
    expect(body.match(/name="toppings"/g)).toHaveLength(2)
  })

  test("a field ties its label to the control", () => {
    const body = html("field")
    const id = body.match(/<input[^>]*id="([^"]+)"/)![1]
    expect(body).toContain(`for="${id}"`)
  })

  test.each(["field-control", "input", "textarea", "checkbox", "slider", "date-picker"] as const)(
    "a %s keeps its own description ahead of the field's",
    (control) => {
      const body = render(FieldHintApp, { props: { control } }).body
      const element = tags(body).find((tag) => tag.includes('aria-describedby="hint'))
      const text = tags(body).find((tag) => tag.includes('data-slot="field-description"'))
      const ids = attribute(element, "aria-describedby")?.split(" ")
      expect(ids?.[0]).toBe("hint")
      expect(ids).toContain(attribute(text, "id"))
    },
  )
})

// Before hydration, the parts register nothing, so the server's HTML has to
// carry the relationships the hydrated page has, wherever the parts render.
describe.each(["before", "after"] as const)(
  "server rendering a field with its description %s the control",
  (order) => {
    test.each(["input", "select"] as const)(
      "its label names the %s and its description describes it",
      (kind) => {
        const body = render(FieldApp, { props: { order, kind } }).body
        const label = tags(body).find((tag) => tag.startsWith("<label"))
        const element = tags(body).find((tag) => attribute(tag, "id") === attribute(label, "for"))
        expect(element).toMatch(kind === "input" ? /^<input/ : /^<button[^>]*role="combobox"/)
        expect(attribute(element, "aria-labelledby")).toBe(attribute(label, "id"))
        const text = tags(body).find((tag) => tag.includes('data-slot="field-description"'))
        expect(attribute(element, "aria-describedby")).toBe(attribute(text, "id"))
      },
    )
  },
)
