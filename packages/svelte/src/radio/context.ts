import type { radioGroup } from "@ui-sdk/core/radio"
import { getContext } from "svelte"
import type { PrimitiveHandle } from "../use-primitive.svelte"

type RadioGroupContext = PrimitiveHandle<typeof radioGroup>

const RadioGroupKey = Symbol("radio-group")
// The value of the radio a part is in.
const RadioKey = Symbol("radio")

function useRadioGroup() {
  const context = getContext<RadioGroupContext | undefined>(RadioGroupKey)
  if (!context) throw new Error("Radio group parts must be used inside <RadioGroup>.")
  return context
}

export { type RadioGroupContext, RadioGroupKey, RadioKey, useRadioGroup }
