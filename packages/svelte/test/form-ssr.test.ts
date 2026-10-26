import { render } from "svelte/server"
import { describe, expect, test } from "vitest"
import App from "./apps/form-app.svelte"

// The body without Svelte's hydration markers, so text content can be matched.
const html = (which: "input" | "textarea" | "errors" | "fieldset" | "readonly-input" | "readonly-textarea") =>
  render(App, { props: { which } }).body.replace(/<!--.*?-->/g, "")

// Runs with no DOM: any access to window or document during render throws.
describe("server rendering text fields and forms", () => {
  test("an input renders its default value and filled state", () => {
    const body = html("input")
    expect(typeof window).toBe("undefined")
    expect(body).toMatch(/<input[^>]*value="ada@example.com"/)
    expect(body).toContain("data-filled")
    expect(body).not.toContain("defaultvalue")
  })

  test("a textarea renders its default value as its text", () => {
    expect(html("textarea")).toMatch(/<textarea[^>]*>Hello<\/textarea>/)
  })

  test("an invalid field renders its error and marks its control", () => {
    const body = html("errors")
    expect(body).toContain("This email bounced.")
    expect(body).toContain('aria-invalid="true"')
  })

  test("a disabled field set renders a native disabled fieldset", () => {
    const body = html("fieldset")
    expect(body).toMatch(/<fieldset[^>]*disabled/)
    expect(body).toMatch(/<legend[^>]*>Contact<\/legend>/)
  })

  test("a native readonly attribute keeps an input or textarea read-only", () => {
    for (const which of ["readonly-input", "readonly-textarea"] as const) {
      const body = html(which)
      expect(body).toMatch(/readonly/)
      expect(body).toContain("data-readonly")
    }
  })
})
