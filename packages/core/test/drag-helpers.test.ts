// @vitest-environment jsdom
// The pieces every drag shares: Escape in `bindDrag`, `settleDraft` and `keepFocus`.
import { afterEach, describe, expect, test, vi } from "vitest"
import { createStore } from "../src/foundation/kernel/store"
import { keepFocus, settleDraft, bindDrag } from "../src/index"

const cleanups: (() => void)[] = []
afterEach(() => {
  cleanups.splice(0).forEach((cleanup) => cleanup())
  document.body.replaceChildren()
})

const pointer = (type: string, clientX: number, clientY = 0) =>
  new PointerEvent(type, {
    clientX,
    clientY,
    button: 0,
    buttons: type === "pointerup" ? 0 : 1,
    bubbles: true,
  })
const escape = () => new KeyboardEvent("keydown", { key: "Escape", bubbles: true, cancelable: true })
const tick = () => new Promise((resolve) => setTimeout(resolve))

describe("bindDrag's cancelOnEscape", () => {
  function track(threshold: number) {
    const el = document.createElement("div")
    document.body.append(el)
    const onEnd = vi.fn()
    const outside = vi.fn()
    document.addEventListener("keydown", outside)
    cleanups.push(() => document.removeEventListener("keydown", outside))
    const stop = bindDrag(el, pointer("pointerdown", 0), {
      threshold,
      cancelOnEscape: true,
      onMove: () => {},
      onEnd,
    })
    cleanups.push(stop)
    return { el, onEnd, outside }
  }

  test("ends a started gesture as canceled and keeps the key from anything else", () => {
    const { el, onEnd, outside } = track(4)
    document.dispatchEvent(pointer("pointermove", 20))
    const event = escape()
    el.dispatchEvent(event)
    expect(onEnd).toHaveBeenCalledWith(expect.anything(), true)
    expect(event.defaultPrevented).toBe(true)
    expect(outside).not.toHaveBeenCalled()
    // The gesture is over: the next Escape and pointerup reach no one.
    el.dispatchEvent(escape())
    document.dispatchEvent(pointer("pointerup", 20))
    expect(onEnd).toHaveBeenCalledTimes(1)
    expect(outside).toHaveBeenCalledTimes(1)
  })

  test("leaves Escape alone until the pointer passes the threshold", () => {
    const { el, onEnd, outside } = track(4)
    document.dispatchEvent(pointer("pointermove", 2))
    el.dispatchEvent(escape())
    expect(onEnd).not.toHaveBeenCalled()
    expect(outside).toHaveBeenCalledTimes(1)
  })

  test("listens from the press when there is no threshold", () => {
    const { el, onEnd } = track(0)
    el.dispatchEvent(escape())
    expect(onEnd).toHaveBeenCalledWith(expect.anything(), true)
  })
})

describe("settleDraft", () => {
  function setup() {
    const store = createStore({ value: ["a", "b"], draft: ["b", "a"] as string[] | null }, [])
    const value = () => store.get().value
    const clear = () => store.set({ draft: null })
    return { store, value, clear, before: value() }
  }

  test("clears now when the value already changed, like an uncontrolled store", () => {
    const { store, value, clear, before } = setup()
    store.set({ value: ["b", "a"] })
    settleDraft(store, value, before, clear)
    expect(store.get().draft).toBeNull()
  })

  test("keeps the draft until a controlled value arrives", () => {
    const { store, value, clear, before } = setup()
    settleDraft(store, value, before, clear)
    store.set({ draft: ["b", "a"] })
    expect(store.get().draft).toEqual(["b", "a"])
    store.set({ value: ["b", "a"] })
    expect(store.get().draft).toBeNull()
  })

  test("clears a task later when the parent keeps the old value, and only once", async () => {
    const { store, value, before } = setup()
    const clear = vi.fn(() => store.set({ draft: null }))
    settleDraft(store, value, before, clear)
    expect(clear).not.toHaveBeenCalled()
    await tick()
    expect(clear).toHaveBeenCalledTimes(1)
    store.set({ value: ["c"] })
    expect(clear).toHaveBeenCalledTimes(1)
  })
})

describe("keepFocus", () => {
  test("focuses the element again once a render moves it, or replaces it", async () => {
    const list = document.createElement("div")
    const first = document.createElement("button")
    const second = document.createElement("button")
    list.append(first, second)
    document.body.append(list)
    first.focus()
    // Moving a focused element loses focus.
    list.append(first)
    expect(document.activeElement).toBe(document.body)
    let current: HTMLElement = first
    keepFocus(() => current)
    // A framework that renders a new element for it a microtask later.
    queueMicrotask(() => {
      current = document.createElement("button")
      first.replaceWith(current)
    })
    await tick()
    expect(document.activeElement).toBe(current)
  })

  test("leaves focus that went somewhere else", async () => {
    const a = document.createElement("button")
    const b = document.createElement("button")
    document.body.append(a, b)
    keepFocus(() => a)
    b.focus()
    await tick()
    expect(document.activeElement).toBe(b)
  })
})

describe("bindDrag's lock", () => {
  const userAgents = {
    chrome:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36",
    firefoxMac: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:145.0) Gecko/20100101 Firefox/145.0",
    firefoxLinux: "Mozilla/5.0 (X11; Linux x86_64; rv:145.0) Gecko/20100101 Firefox/145.0",
  }
  const mouse = (type: string, clientX: number) =>
    new PointerEvent(type, { clientX, button: 0, buttons: 1, pointerType: "mouse", bubbles: true })

  function drag(userAgent: string) {
    vi.spyOn(navigator, "userAgent", "get").mockReturnValue(userAgent)
    cleanups.push(() => vi.restoreAllMocks())
    const el = document.createElement("div")
    document.body.append(el)
    const requestPointerLock = vi.fn()
    el.requestPointerLock = requestPointerLock
    cleanups.push(bindDrag(el, mouse("pointerdown", 0), { lock: true, onMove: () => {}, onEnd: () => {} }))
    document.dispatchEvent(mouse("pointermove", 20))
    return requestPointerLock
  }

  test("locks the mouse once a press becomes a drag", () => {
    expect(drag(userAgents.chrome)).toHaveBeenCalledTimes(1)
    expect(drag(userAgents.firefoxLinux)).toHaveBeenCalledTimes(1)
  })

  test("follows the pointer unlocked in Firefox on a Mac, which drops part of each locked move", () => {
    expect(drag(userAgents.firefoxMac)).not.toHaveBeenCalled()
  })
})
