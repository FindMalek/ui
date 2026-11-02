// Bounds and steps every numeric control shares: clamping, snapping to a step
// without floating point drift, stepping by a key's move, and wrapping around
// a loop. Pure, so it runs on the server too.

/**
 * Keeps a value between `min` and `max`.
 * @experimental
 */
function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

/**
 * How many decimals a number has, counting exponents like 1e-7.
 * @experimental
 */
function decimalsOf(value: number) {
  if (!Number.isFinite(value) || Number.isInteger(value)) return 0
  const [mantissa, exponent] = String(value).toLowerCase().split("e")
  const decimals = (mantissa.split(".")[1] ?? "").length
  return Math.max(0, decimals - Number(exponent ?? 0))
}

/**
 * Rounds to a number of decimals, which also drops floating point noise like 0.1 + 0.2.
 * @experimental
 */
function roundTo(value: number, decimals: number) {
  return Number(value.toFixed(Math.min(decimals, 100)))
}

// A count of steps without floating point noise. Noise grows with magnitude,
// so it's cut by significant digits: 123456788.99999999 is 123456789. Doubles
// hold 15 digits exactly, so 98765432101.23 still counts its cents.
function stepCount(distance: number, step: number) {
  return Number((distance / step).toPrecision(15))
}

/**
 * The bounds and step every numeric control shares. The step grid starts at
 * `min` when it's finite, and at 0 otherwise.
 * @experimental
 */
type StepRange = { min: number; max: number; step: number }

// The step grid starts at `min` when it's finite, like a native range input,
// and at 0 otherwise.
function stepBase(range: StepRange) {
  return Number.isFinite(range.min) ? range.min : 0
}

function precisionOf(range: StepRange) {
  return Math.max(decimalsOf(range.step), decimalsOf(stepBase(range)))
}

/**
 * The highest value on the step grid, which is `max` only when the grid lands
 * on it, like 9 for `{ min: 1, max: 10, step: 2 }`.
 * @experimental
 */
function maxOnGrid(range: StepRange) {
  if (!Number.isFinite(range.max) || !(range.step > 0)) return range.max
  const base = stepBase(range)
  const steps = Math.floor(stepCount(range.max - base, range.step))
  return roundTo(base + steps * range.step, precisionOf(range))
}

/**
 * The nearest value on the step grid, within the bounds.
 * @experimental
 */
function snapToStep(value: number, range: StepRange) {
  if (!(range.step > 0)) return clamp(value, range.min, range.max)
  const base = stepBase(range)
  const snapped = base + Math.round(stepCount(value - base, range.step)) * range.step
  return roundTo(clamp(snapped, range.min, maxOnGrid(range)), precisionOf(range))
}

/**
 * The value `steps` steps away on the grid, within the bounds; negative steps
 * go down. A value off the grid moves to the grid first, so 1.5 steps up to 2,
 * like `stepUp()`.
 * @experimental
 */
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
 * Wraps a value into the loop from `min` up to `max`, like an angle into 0 to
 * 360 or an index around a carousel: `wrap(370, 0, 360)` is 10.
 * @experimental
 */
function wrap(value: number, min: number, max: number) {
  const span = max - min
  if (!(span > 0)) return min
  return ((((value - min) % span) + span) % span) + min
}

/**
 * What a key or a gesture asks of a number: steps in a direction, by the step,
 * the large step or the small one, or a bound. `stepFromKey` reads one from a key.
 * @experimental
 */
type NumberMove = { direction: 1 | -1; size: "step" | "large" | "small" } | { bound: "min" | "max" }

/**
 * A step range with the larger and smaller steps a move can ask for.
 * @experimental
 */
type NumberRange = StepRange & {
  /** What Shift and Page Up and Down move by. @defaultValue ten steps */
  largeStep?: number
  /** What Alt moves by, on a grid of its own. @defaultValue the step */
  smallStep?: number
}

/**
 * The value a move lands on: a step on the grid, a large step snapped back to
 * it, a small step on its own grid, or a bound, where `max` is the highest
 * value on the grid.
 * @experimental
 */
function stepBy(value: number, move: NumberMove, range: NumberRange) {
  if ("bound" in move) return move.bound === "min" ? range.min : maxOnGrid(range)
  if (move.size === "large") {
    const large = range.largeStep ?? range.step * 10
    return snapToStep(clamp(value + move.direction * large, range.min, range.max), range)
  }
  if (move.size === "small" && range.smallStep)
    return stepValue(value, move.direction, { ...range, step: range.smallStep })
  return stepValue(value, move.direction, range)
}

export {
  clamp,
  decimalsOf,
  maxOnGrid,
  type NumberMove,
  type NumberRange,
  roundTo,
  snapToStep,
  type StepRange,
  stepBy,
  stepValue,
  wrap,
}
