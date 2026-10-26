import { describe, expect, test } from "vitest"
import { arrowOffset, computePlacement, untransformed } from "../src/foundation/platform/position"

const viewport = { width: 1000, height: 800 }
const size = { width: 200, height: 300 }
const options = {
  side: "bottom" as const,
  align: "start" as const,
  sideOffset: 4,
  alignOffset: 0,
  collisionPadding: 8,
}

describe("placement", () => {
  test("opens below the anchor, lined up with its start", () => {
    const result = computePlacement({ x: 100, y: 100, width: 80, height: 30 }, size, viewport, options)
    expect(result).toMatchObject({ x: 100, y: 134, side: "bottom" })
  })

  test("flips above when there is no room below", () => {
    const result = computePlacement({ x: 100, y: 700, width: 80, height: 30 }, size, viewport, options)
    expect(result).toMatchObject({ y: 396, side: "top" })
  })

  test("stays below when neither side fits but below has more room", () => {
    const result = computePlacement(
      { x: 100, y: 300, width: 80, height: 30 },
      { width: 200, height: 700 },
      viewport,
      options,
    )
    expect(result.side).toBe("bottom")
  })

  test("shifts along the anchor to stay on screen", () => {
    const result = computePlacement({ x: 950, y: 100, width: 40, height: 30 }, size, viewport, options)
    expect(result.x).toBe(1000 - 200 - 8)
  })

  test("submenus flip to the left when there is no room on the right", () => {
    const result = computePlacement({ x: 850, y: 100, width: 120, height: 30 }, size, viewport, {
      ...options,
      side: "right",
      sideOffset: 0,
    })
    expect(result).toMatchObject({ x: 650, side: "left" })
  })

  test("start means the right edge in right-to-left layouts", () => {
    const result = computePlacement({ x: 500, y: 100, width: 80, height: 30 }, size, viewport, {
      ...options,
      rtl: true,
    })
    expect(result.x).toBe(580 - 200)
  })

  test("reports the space left below for sizing", () => {
    const result = computePlacement({ x: 100, y: 100, width: 80, height: 30 }, size, viewport, options)
    expect(result.available.height).toBe(800 - 8 - 134)
  })
})

describe("arrow offset", () => {
  const popup = { x: 100, y: 200, width: 200, height: 80 }

  test("is where the anchor's center falls along the edge facing it", () => {
    expect(arrowOffset({ x: 150, y: 150, width: 40, height: 20 }, popup, "bottom", 6)).toBe(70)
    expect(arrowOffset({ x: 20, y: 220, width: 40, height: 20 }, popup, "right", 6)).toBe(30)
  })

  test("stays arrowPadding away from the corners", () => {
    expect(arrowOffset({ x: 0, y: 150, width: 20, height: 20 }, popup, "bottom", 6)).toBe(6)
    expect(arrowOffset({ x: 400, y: 150, width: 20, height: 20 }, popup, "top", 6)).toBe(194)
  })
})

describe("untransformed box", () => {
  const style = (transformOrigin: string, translate = "none") => ({ transformOrigin, translate })

  test("a box at rest is where it is", () => {
    expect(
      untransformed({ x: 10, y: 20, width: 100, height: 50 }, { width: 100, height: 50 }, style("50px 0px")),
    ).toEqual({
      x: 10,
      y: 20,
    })
  })

  test("a box scaling in around its top center moves back by the scale", () => {
    // 95% of 100 wide, scaled around x = 50, starts 2.5px to the right.
    const box = untransformed(
      { x: 12.5, y: 20, width: 95, height: 47.5 },
      { width: 100, height: 50 },
      style("50px 0px"),
    )
    expect(box.x).toBeCloseTo(10)
    expect(box.y).toBeCloseTo(20)
  })

  test("a box with a fractional size isn't scaled", () => {
    // offsetHeight rounds 41.6 up to 42.
    const box = untransformed(
      { x: 10, y: 20, width: 100, height: 41.6 },
      { width: 100, height: 42 },
      style("50px 20.8px"),
    )
    expect(box).toEqual({ x: 10, y: 20 })
  })

  test("a box sliding in moves back by its translate, in pixels or percent of its size", () => {
    expect(
      untransformed(
        { x: 10, y: 28, width: 100, height: 50 },
        { width: 100, height: 50 },
        style("0px 0px", "0px 8px"),
      ).y,
    ).toBe(20)
    expect(
      untransformed(
        { x: 60, y: 20, width: 100, height: 50 },
        { width: 100, height: 50 },
        style("0px 0px", "50%"),
      ).x,
    ).toBe(10)
  })
})
