import type { PrimitiveGeneric } from "../../foundation/kernel/primitive-types"
import type { SliderOptions } from "./slider"

// Slider's types as functions of its value type `T`, one number or a list of
// them, so every renderer's `Slider` infers it from its value or callbacks.
interface SliderGeneric extends PrimitiveGeneric {
  T: number | number[]
  options: SliderOptions<this["T"]>
}

export type { SliderGeneric }
