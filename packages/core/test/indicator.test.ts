// @vitest-environment jsdom
import { expect, test } from "vitest"
import { writeIndicatorBox } from "../src/foundation/selection/indicator"

const box = { left: 4, right: 96, top: 2, bottom: 30, width: 40, height: 8 }

test("an indicator's box is written under the shared names and its older ones", () => {
  const el = document.createElement("span")
  writeIndicatorBox(el, box, (side) => `--active-tab-${side}`)
  for (const side of Object.keys(box) as (keyof typeof box)[]) {
    expect(el.style.getPropertyValue(`--indicator-${side}`)).toBe(
      `${box[side]}px`
    )
    expect(el.style.getPropertyValue(`--active-tab-${side}`)).toBe(
      `${box[side]}px`
    )
  }
})

test("without a box, both names are removed", () => {
  const el = document.createElement("span")
  writeIndicatorBox(el, box, (side) => `--active-tab-${side}`)
  writeIndicatorBox(el, undefined, (side) => `--active-tab-${side}`)
  expect(el.getAttribute("style")).toBe("")
})
