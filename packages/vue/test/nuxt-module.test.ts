import { runWithNuxtContext } from "@nuxt/kit"
import type { Nuxt } from "@nuxt/schema"
import { expect, test, vi } from "vitest"
import uiSdk from "../nuxt/module"

vi.mock("node:fs", () => ({
  existsSync: () => true,
  readFileSync: () => "[]",
}))

test("the app's dev server shares this package's copy of the core", async () => {
  const nuxt = {
    _version: "4.4.0",
    options: {
      vite: { optimizeDeps: { exclude: ["some-package"] } },
      _requiredModules: {},
    },
    hook: () => () => {},
    callHook: async () => {},
  } as unknown as Nuxt
  await runWithNuxtContext(nuxt, () => uiSdk({}, nuxt))
  expect(nuxt.options.vite.optimizeDeps?.exclude).toEqual([
    "some-package",
    "@ui-sdk/core",
  ])
})
