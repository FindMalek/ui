// Numbers for Slider and Number Input: clamping, snapping to a step without
// floating point drift, locale-aware formatting, and the `"start/end"` string
// a range submits as one form value (G12). Pure, so it runs on the server too.

/** Keeps a value between `min` and `max`. */
function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

// How many decimals a number has, counting exponents like 1e-7.
function decimalsOf(value: number) {
  if (!Number.isFinite(value) || Number.isInteger(value)) return 0
  const [mantissa, exponent] = String(value).toLowerCase().split("e")
  const decimals = (mantissa.split(".")[1] ?? "").length
  return Math.max(0, decimals - Number(exponent ?? 0))
}

// Rounds away floating point noise, like 0.1 + 0.2, to a known precision.
function roundTo(value: number, decimals: number) {
  return Number(value.toFixed(Math.min(decimals, 100)))
}

// A count of steps without floating point noise. Noise grows with magnitude,
// so it's cut by significant digits: 123456788.99999999 is 123456789. Doubles
// hold 15 digits exactly, so 98765432101.23 still counts its cents.
function stepCount(distance: number, step: number) {
  return Number((distance / step).toPrecision(15))
}

/** The bounds and step every numeric control shares. */
type StepRange = { min: number; max: number; step: number }

// The step grid starts at `min` when it's finite, like a native range input,
// and at 0 otherwise.
function stepBase(range: StepRange) {
  return Number.isFinite(range.min) ? range.min : 0
}

function precisionOf(range: StepRange) {
  return Math.max(decimalsOf(range.step), decimalsOf(stepBase(range)))
}

// The highest value on the step grid, which is `max` only when the grid lands on it.
function maxOnGrid(range: StepRange) {
  if (!Number.isFinite(range.max) || !(range.step > 0)) return range.max
  const base = stepBase(range)
  const steps = Math.floor(stepCount(range.max - base, range.step))
  return roundTo(base + steps * range.step, precisionOf(range))
}

/** The nearest value on the step grid, within the bounds. */
function snapToStep(value: number, range: StepRange) {
  if (!(range.step > 0)) return clamp(value, range.min, range.max)
  const base = stepBase(range)
  const snapped = base + Math.round(stepCount(value - base, range.step)) * range.step
  return roundTo(clamp(snapped, range.min, maxOnGrid(range)), precisionOf(range))
}

// The next value on the grid in a direction, `steps` steps away. A value off
// the grid moves to the grid first, so 1.5 steps up to 2, like `stepUp()`.
function stepValue(value: number, steps: number, range: StepRange) {
  if (!(range.step > 0)) return clamp(value + steps, range.min, range.max)
  const base = stepBase(range)
  const position = stepCount(value - base, range.step)
  const onGrid = Number.isInteger(position)
  const from = onGrid ? position : steps > 0 ? Math.floor(position) : Math.ceil(position)
  const next = base + (from + steps) * range.step
  return roundTo(clamp(next, range.min, maxOnGrid(range)), precisionOf(range))
}

/**
 * How values show: `Intl.NumberFormat` options, or a function of the value.
 * @stable
 */
type NumberFormat = Intl.NumberFormatOptions | ((value: number) => string)

const formatters = new Map<string, Intl.NumberFormat>()

// Intl formatters are slow to build, so each locale and options pair is built once.
function numberFormatter(locale?: string, options: Intl.NumberFormatOptions = {}) {
  const key = `${locale ?? ""}|${JSON.stringify(options)}`
  let formatter = formatters.get(key)
  if (!formatter) {
    formatter = new Intl.NumberFormat(locale, options)
    formatters.set(key, formatter)
  }
  return formatter
}

// Reading a formatter's resolved options builds a new object each time, so
// its default decimals are read once.
const defaultDecimals = new WeakMap<Intl.NumberFormat, number>()

function intlDecimals(format: Intl.NumberFormatOptions | undefined) {
  const formatter = numberFormatter(undefined, format)
  let decimals = defaultDecimals.get(formatter)
  if (decimals === undefined) {
    decimals = formatter.resolvedOptions().maximumFractionDigits ?? 0
    defaultDecimals.set(formatter, decimals)
  }
  return decimals
}

// Intl shows at most three decimals by default, which would show 0.0001 as 0.
// Without your own maximum, a value shows at least as many decimals as its
// step, and never fewer than Intl would: 3 for numbers, 0 for percents, and
// the currency's own digits, so yen stay whole and dollars show cents.
function displayOptions(format: Intl.NumberFormatOptions | undefined, step: number) {
  const options = { ...format }
  if (options.maximumFractionDigits === undefined && options.maximumSignificantDigits === undefined) {
    const decimals = decimalsOf(step) + (options.style === "percent" ? -2 : 0)
    options.maximumFractionDigits = Math.max(
      options.minimumFractionDigits ?? 0,
      decimals,
      intlDecimals(format),
    )
  }
  return options
}

/** Formats a value for people: the function's text, or `Intl.NumberFormat` in the locale. */
function formatNumber(value: number | null, locale?: string, format?: NumberFormat) {
  if (value === null || !Number.isFinite(value)) return ""
  if (typeof format === "function") return format(value)
  return numberFormatter(locale, format).format(value)
}

/** The numbers in a `"start/end"` string, or null when any part isn't one. */
function parseRange(value: string) {
  const parts = value.split("/").map((part) => (part.trim() === "" ? NaN : Number(part)))
  return parts.every(Number.isFinite) ? parts : null
}

export {
  clamp,
  decimalsOf,
  displayOptions,
  formatNumber,
  maxOnGrid,
  type NumberFormat,
  numberFormatter,
  parseRange,
  roundTo,
  snapToStep,
  type StepRange,
  stepValue,
}
