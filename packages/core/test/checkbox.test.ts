import { describe, expect, test, vi } from "vitest"
import { checkbox, checkboxGroup } from "../src/components/checkbox/checkbox"

// Stands in for a checkbox element at a place in the document.
function fakeElement(position: number) {
  const el = {
    id: "",
    isConnected: true,
    focus: vi.fn(),
    // Node.DOCUMENT_POSITION_FOLLOWING and PRECEDING, since tests run without a DOM.
    compareDocumentPosition: (other: { position: number }) => (other.position > position ? 4 : 2),
    position,
  }
  return el as unknown as HTMLElement & { focus: ReturnType<typeof vi.fn> }
}

const flush = () => new Promise((resolve) => queueMicrotask(() => resolve(undefined)))

describe("checkbox group", () => {
  test("focus goes to the first enabled checkbox in the document, not the first to join", async () => {
    const group = checkboxGroup({ id: "g" })
    const later = fakeElement(2)
    const earlier = fakeElement(1)
    const disabledFirst = fakeElement(0)
    group.api.register("later", later, () => false)
    // These two mount after it, but sit before it on the page.
    group.api.register("earlier", earlier, () => false)
    group.api.register("disabled", disabledFirst, () => true)
    await flush()
    group.api.focus()
    expect(earlier.focus).toHaveBeenCalledOnce()
    expect(later.focus).not.toHaveBeenCalled()
    expect(disabledFirst.focus).not.toHaveBeenCalled()
    expect(group.api.internal.anchor()).toBe(earlier)
  })

  test("a child's press reaches its own callback after the group's", () => {
    const calls: string[] = []
    const group = checkboxGroup({ id: "g", onValueChange: (value) => calls.push(`group:${value}`) })
    const child = checkbox({
      id: "c",
      value: "a",
      group: () => group.api,
      onCheckedChange: (checked, details) => calls.push(`child:${checked}:${details.reason}`),
    })
    child.api.toggle({ reason: "press" })
    expect(calls).toEqual(["group:a", "child:true:press"])
  })
})

describe("checkbox group debug", () => {
  test("logs under its own name, not a checkbox's", () => {
    const log = vi.spyOn(console, "debug").mockImplementation(() => {})
    const group = checkboxGroup({ id: "g", debug: true })
    group.api.setValue(["a"])
    expect(String(log.mock.calls[0]?.[0])).toContain("[ui-sdk] checkbox-group#g value: a (imperative")
    log.mockRestore()
  })
})
