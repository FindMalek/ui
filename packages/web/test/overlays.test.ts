// @vitest-environment jsdom
import { createConfirm } from "@ui-sdk/core/dialog"
import { createOverlays } from "@ui-sdk/core/overlays"
import { afterEach, expect, test } from "vitest"
import type { UiOverlayHostElement } from "../src/events"
import { defineOverlayHostElements } from "../src/overlays"

const wait = () => new Promise((resolve) => setTimeout(resolve, 50))

afterEach(() => document.body.replaceChildren())

async function hostAsking() {
  ;(Element.prototype as { getAnimations?: () => Animation[] }).getAnimations ??= () => []
  HTMLElement.prototype.showPopover ??= function () {}
  HTMLElement.prototype.hidePopover ??= function () {}
  defineOverlayHostElements()
  const overlays = createOverlays()
  const host = document.createElement("ui-overlay-host") as UiOverlayHostElement
  host.overlays = overlays
  document.body.append(host)
  let answer: boolean | undefined
  createConfirm({ overlays })({ title: "Delete the file?" }).then((value) => (answer = value))
  await wait()
  return { host, dialog: host.querySelector("ui-alert-dialog"), answer: () => answer }
}

test("an overlay host moved in one go keeps its open confirm waiting for its answer", async () => {
  const { host, dialog, answer } = await hostAsking()
  expect(dialog).not.toBe(null)
  document.body.appendChild(document.createElement("main")).append(host)
  await wait()
  expect(host.querySelector("ui-alert-dialog")).toBe(dialog)
  expect(answer()).toBe(undefined)
})

test("an overlay host taken off the page answers its open confirm with no", async () => {
  const { host, answer } = await hostAsking()
  host.remove()
  await wait()
  expect(answer()).toBe(false)
})

test("an overlay host given other overlays as it moves in one go renders theirs", async () => {
  const { host } = await hostAsking()
  const other = createOverlays()
  host.overlays = other
  document.body.appendChild(document.createElement("main")).append(host)
  createConfirm({ overlays: other })({ title: "Discard the draft?" })
  await wait()
  expect(host.querySelector("ui-alert-dialog")?.textContent).toContain("Discard the draft?")
})
