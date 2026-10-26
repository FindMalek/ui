// @vitest-environment jsdom
// `<ui-button>`'s `action` event says how the button was pressed, for the
// changes a listener makes after an `await`.
import { expect, test } from "vitest"
import type { UiButtonElement } from "../src/events"
import { defineButtonElements } from "../src/button"
import { withSource } from "../src/observe"

const wait = () => new Promise((resolve) => setTimeout(resolve, 10))

test("the action event's detail says how the button was pressed", async () => {
  defineButtonElements()
  document.body.innerHTML = `<ui-button><button>Save</button></ui-button>`
  await wait()
  const sources: string[] = []
  const host = document.querySelector("ui-button") as UiButtonElement
  host.addEventListener("action", (event) => sources.push(event.detail.source))
  const button = document.querySelector("button")!
  withSource("agent", () => button.click())
  button.click()
  expect(sources).toEqual(["agent", "programmatic"])
})
