import { describe, expect, test } from "vitest"
import {
  decimalsOf,
  displayOptions,
  formatNumber,
  maxOnGrid,
  parseRange,
  snapToStep,
  stepValue,
} from "../src/foundation/text/number"
import { isPartialNumber, parseNumber } from "../src/components/number-input/number-input-parse"
import { formatRange } from "../src/components/slider/slider-api"

describe("steps", () => {
  test("counts decimals, exponents included", () => {
    expect(decimalsOf(1)).toBe(0)
    expect(decimalsOf(0.25)).toBe(2)
    expect(decimalsOf(1e-7)).toBe(7)
    expect(decimalsOf(1.5e-7)).toBe(8)
  })

  test("snaps to the grid from min, without floating point noise", () => {
    expect(snapToStep(0.30000000000000004, { min: 0, max: 1, step: 0.1 })).toBe(0.3)
    expect(snapToStep(7, { min: 1, max: 100, step: 5 })).toBe(6)
    expect(snapToStep(-3.4, { min: -10, max: 10, step: 0.5 })).toBe(-3.5)
  })

  test("never goes past the last step at or below max", () => {
    const range = { min: 0, max: 100, step: 3 }
    expect(maxOnGrid(range)).toBe(99)
    expect(snapToStep(100, range)).toBe(99)
  })

  test("starts the grid at 0 without a min", () => {
    expect(snapToStep(12.37, { min: -Infinity, max: Infinity, step: 1 })).toBe(12)
    expect(snapToStep(12.37, { min: -Infinity, max: Infinity, step: 0.25 })).toBe(12.25)
  })

  test("steps off-grid values onto the grid first, like stepUp()", () => {
    const range = { min: 0, max: 10, step: 1 }
    expect(stepValue(1.5, 1, range)).toBe(2)
    expect(stepValue(1.5, -1, range)).toBe(1)
    expect(stepValue(2, 1, range)).toBe(3)
    expect(stepValue(10, 1, range)).toBe(10)
  })

  test("adds tiny steps exactly", () => {
    let value = 0
    for (let index = 0; index < 3; index++) value = stepValue(value, 1, { min: 0, max: 1, step: 0.1 })
    expect(value).toBe(0.3)
    expect(stepValue(0, 1, { min: 0, max: 1, step: 1e-7 })).toBe(1e-7)
  })

  test("keeps cents on values in the tens of billions", () => {
    const cents = { min: -Infinity, max: Infinity, step: 0.01 }
    expect(snapToStep(98765432101.23, cents)).toBe(98765432101.23)
    expect(stepValue(98765432101.23, 1, cents)).toBe(98765432101.24)
  })
})

describe("formatting", () => {
  test("formats in the locale, or with a function", () => {
    expect(formatNumber(1234.5, "en-US")).toBe("1,234.5")
    expect(formatNumber(1234.5, "de-DE")).toBe("1.234,5")
    expect(formatNumber(3, "en-US", (value) => `${value} items`)).toBe("3 items")
    expect(formatNumber(null)).toBe("")
  })

  test("shows at least as many decimals as the step", () => {
    expect(formatNumber(0.0001, "en-US", displayOptions(undefined, 0.0001))).toBe("0.0001")
    expect(formatNumber(1.23456, "en-US", displayOptions(undefined, 1))).toBe("1.235")
    expect(formatNumber(0.125, "en-US", displayOptions({ style: "percent" }, 0.001))).toBe("12.5%")
  })

  test("shows a currency's own decimals unless the step needs more", () => {
    const usd = { style: "currency", currency: "USD" } as const
    expect(formatNumber(1.2345, "en-US", displayOptions(usd, 1))).toBe("$1.23")
    expect(formatNumber(1234.5, "en-US", displayOptions({ style: "currency", currency: "JPY" }, 1))).toBe(
      "¥1,235",
    )
    expect(formatNumber(1.2345, "en-US", displayOptions(usd, 0.001))).toBe("$1.235")
  })
})

describe("parsing", () => {
  test("reads plain and grouped numbers", () => {
    expect(parseNumber("1234.5", "en-US")).toBe(1234.5)
    expect(parseNumber("1,234.5", "en-US")).toBe(1234.5)
    expect(parseNumber("-.5", "en-US")).toBe(-0.5)
    expect(parseNumber("", "en-US")).toBe(null)
    expect(parseNumber("abc", "en-US")).toBe(null)
    expect(parseNumber("1.2.3", "en-US")).toBe(null)
  })

  test("reads the locale's separators", () => {
    expect(parseNumber("1.234,5", "de-DE")).toBe(1234.5)
    expect(parseNumber("1 234,5", "fr-FR")).toBe(1234.5)
    expect(parseNumber("1 234,5", "fr-FR")).toBe(1234.5)
    expect(parseNumber("1’234.5", "de-CH")).toBe(1234.5)
  })

  test("reads the locale's decimal separator in formats that show no decimals", () => {
    expect(parseNumber("12,5 %", "de-DE", { style: "percent" })).toBe(0.125)
    expect(parseNumber("1,5", "de-DE", { maximumFractionDigits: 0 })).toBe(1.5)
    expect(parseNumber("1,5", "de-DE", { useGrouping: false })).toBe(1.5)
  })

  test("reads accounting negatives in parentheses", () => {
    const accounting = { style: "currency", currency: "USD", currencySign: "accounting" } as const
    expect(parseNumber("($1,234.56)", "en-US", accounting)).toBe(-1234.56)
    expect(isPartialNumber("($1", "en-US", accounting)).toBe(true)
  })

  test("reads a point as the decimal where it doesn't group", () => {
    expect(parseNumber("12.5", "fr-FR")).toBe(12.5)
  })

  test("reads the locale's digits and minus signs", () => {
    expect(parseNumber("١٢٣", "ar-EG")).toBe(123)
    expect(parseNumber("۱۲", "fa-IR")).toBe(12)
    expect(parseNumber("−12", "en-US")).toBe(-12)
  })

  test("reads currency, percent and unit text", () => {
    const usd = { style: "currency", currency: "USD" } as const
    expect(parseNumber("$1,234.50", "en-US", usd)).toBe(1234.5)
    expect(parseNumber("-$5", "en-US", usd)).toBe(-5)
    expect(parseNumber("1.234,50 €", "de-DE", { style: "currency", currency: "EUR" })).toBe(1234.5)
    expect(parseNumber("50%", "en-US", { style: "percent" })).toBe(0.5)
    expect(parseNumber("12.5", "en-US", { style: "percent" })).toBe(0.125)
    expect(parseNumber("5 km", "en-US", { style: "unit", unit: "kilometer" })).toBe(5)
  })

  test("accepts what could still become a number", () => {
    expect(isPartialNumber("-", "en-US", undefined)).toBe(true)
    expect(isPartialNumber("1.", "en-US", undefined)).toBe(true)
    expect(isPartialNumber("$1,2", "en-US", { style: "currency", currency: "USD" })).toBe(true)
    expect(isPartialNumber("1a", "en-US", undefined)).toBe(false)
    expect(isPartialNumber("-1", "en-US", undefined, { allowNegative: false })).toBe(false)
  })
})

describe("ranges", () => {
  test("round-trips start/end", () => {
    expect(formatRange([20, 80])).toBe("20/80")
    expect(parseRange("20/80")).toEqual([20, 80])
    expect(parseRange("20/x")).toBe(null)
    expect(parseRange("42")).toEqual([42])
  })
})
