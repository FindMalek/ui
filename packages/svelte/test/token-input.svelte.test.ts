import { flushSync, mount, unmount } from "svelte"
import { afterEach, expect, test } from "vitest"
import App from "./apps/token-snippet-app.svelte"

let cleanup: (() => void) | undefined
afterEach(() => {
  cleanup?.()
  cleanup = undefined
})

test("a token input's tokens follow a new token snippet", () => {
  const target = document.body.appendChild(document.createElement("div"))
  const props = $state({ loud: false })
  const app = mount(App, { target, props })
  cleanup = () => {
    unmount(app)
    target.remove()
  }
  flushSync()
  const shown = () => [...target.querySelectorAll("[data-content]")].map((el) => el.textContent)
  expect(shown()).toEqual(["Ada"])
  props.loud = true
  flushSync()
  expect(shown()).toEqual(["ADA"])
})
