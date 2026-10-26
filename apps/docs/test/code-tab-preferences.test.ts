// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest"
import { createCodeTabPreference } from "../lib/code-tab-preferences"

const options = { key: "tabs:language", fallback: "typescript", values: ["typescript", "javascript"] }

beforeEach(() => localStorage.clear())
afterEach(() => vi.restoreAllMocks())

describe("code tab preferences", () => {
  test("defaults to the configured value and restores a saved choice after a reload", () => {
    const preference = createCodeTabPreference(options)
    expect(preference.getSnapshot()).toBe("typescript")
    preference.set("javascript")
    expect(createCodeTabPreference(options).getSnapshot()).toBe("javascript")
    expect(preference.getServerSnapshot()).toBe("typescript")
  })

  test("falls back when a stored choice no longer exists", () => {
    localStorage.setItem(options.key, "old-language")
    expect(createCodeTabPreference(options).getSnapshot()).toBe("typescript")
  })

  test("notifies every subscriber and retains a choice while no groups are mounted", () => {
    const preference = createCodeTabPreference(options)
    const first = vi.fn()
    const second = vi.fn()
    const stopFirst = preference.subscribe(first)
    const stopSecond = preference.subscribe(second)
    preference.set("javascript")
    expect(first).toHaveBeenCalledOnce()
    expect(second).toHaveBeenCalledOnce()
    stopFirst()
    stopSecond()
    const stopNew = preference.subscribe(vi.fn())
    expect(preference.getSnapshot()).toBe("javascript")
    stopNew()
  })

  test("keeps the latest in-memory choice when storage writes fail", () => {
    localStorage.setItem(options.key, "typescript")
    const preference = createCodeTabPreference(options)
    expect(preference.getSnapshot()).toBe("typescript")
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
      throw new Error("Storage is full")
    })
    const listener = vi.fn()
    const stop = preference.subscribe(listener)
    preference.set("javascript")
    expect(listener).toHaveBeenCalledOnce()
    expect(preference.getSnapshot()).toBe("javascript")
    stop()
    const stopNew = preference.subscribe(vi.fn())
    expect(preference.getSnapshot()).toBe("javascript")
    stopNew()
  })

  test("works when all storage access is blocked", () => {
    vi.spyOn(window, "localStorage", "get").mockImplementation(() => {
      throw new Error("Storage is blocked")
    })
    const preference = createCodeTabPreference(options)
    const stop = preference.subscribe(vi.fn())
    expect(preference.getSnapshot()).toBe("typescript")
    preference.set("javascript")
    expect(preference.getSnapshot()).toBe("javascript")
    stop()
  })

  test("follows another browser tab, including removal and invalid values", () => {
    const preference = createCodeTabPreference(options)
    const stop = preference.subscribe(vi.fn())
    const change = (key: string | null, newValue: string | null, storageArea = localStorage) =>
      window.dispatchEvent(new StorageEvent("storage", { key, newValue, storageArea }))
    change(options.key, "javascript")
    expect(preference.getSnapshot()).toBe("javascript")
    change("tabs:package-manager", "pnpm")
    change(options.key, "typescript", sessionStorage)
    expect(preference.getSnapshot()).toBe("javascript")
    change(options.key, "obsolete")
    expect(preference.getSnapshot()).toBe("typescript")
    change(options.key, "javascript")
    change(null, null)
    expect(preference.getSnapshot()).toBe("typescript")
    stop()
  })

  test("picks up cross-tab changes made while no group was mounted", () => {
    const preference = createCodeTabPreference(options)
    const stop = preference.subscribe(vi.fn())
    stop()
    localStorage.setItem(options.key, "javascript")
    const stopNew = preference.subscribe(vi.fn())
    expect(preference.getSnapshot()).toBe("javascript")
    stopNew()
  })

  test("keeps package-manager and nonpersistent choices separate", () => {
    const language = createCodeTabPreference(options)
    const manager = createCodeTabPreference({ key: "tabs:package-manager", fallback: "npm" })
    const local = createCodeTabPreference({ ...options, persist: false })
    language.set("javascript")
    manager.set("pnpm")
    local.set("typescript")
    expect(language.getSnapshot()).toBe("javascript")
    expect(manager.getSnapshot()).toBe("pnpm")
    expect(localStorage.getItem(options.key)).toBe("javascript")
    expect(localStorage.getItem("tabs:package-manager")).toBe("pnpm")
  })
})
