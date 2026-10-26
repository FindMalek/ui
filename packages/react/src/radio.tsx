import {
  radioGroup,
  type RadioGroupController,
  type RadioGroupOptions,
  type RadioGroupState,
  type RadioProps,
  type RadioState,
} from "@ui-sdk/core/radio"
import { controlRender, useFieldControl } from "./field-context"
import { createParts, usePart, usePrimitive, type PartProps } from "./use-primitive"

// The group's own element is its `group` slot, and each radio its `root`.
const parts = createParts(radioGroup, { indicator: "span" })

/**
 * Radios that share one value, with one tab stop and arrow keys between them.
 * `T` is inferred from `value`, `defaultValue` or `onValueChange`.
 * @stable
 */
function RadioGroup<T extends string = string>({
  value,
  defaultValue,
  onValueChange,
  disabled,
  readOnly,
  required,
  name,
  form,
  loop,
  controller,
  debug,
  render,
  ...props
}: RadioGroupOptions<T> & Omit<PartProps<"div", RadioGroupState>, "defaultValue" | "onChange" | "onSelect">) {
  const field = useFieldControl()
  const group = usePrimitive(radioGroup, {
    value,
    defaultValue,
    onValueChange: onValueChange as RadioGroupOptions["onValueChange"],
    disabled: disabled || field?.disabled,
    readOnly,
    required,
    name: name ?? field?.name,
    form,
    loop,
    controller: controller as RadioGroupController | undefined,
    debug,
  })
  return usePart(group, "group", {}, { ...props, render: controlRender(field, "div", render) })
}

// The hidden native radio that takes part in the form.
function RadioInput(props: RadioProps) {
  return usePart(radioGroup, "input", props, {}, "input")
}

/**
 * A radio and the hidden native radio that takes part in the form.
 * @stable
 */
function Radio({
  value,
  disabled,
  render,
  ...props
}: Omit<PartProps<"button", RadioState>, "value" | "onSelect"> & RadioProps) {
  const input = <RadioInput value={value} disabled={disabled} />
  return usePart(
    radioGroup,
    "root",
    { value, disabled },
    { ...props, render: controlRender(null, "button", render, input) },
    "button",
  )
}

/**
 * The dot inside the radio. Rendered while it's checked, or always with `keepMounted`.
 * @stable
 */
const RadioIndicator = parts.Indicator

export { createRadioGroupController } from "@ui-sdk/core/radio"
export type {
  RadioGroupApi,
  RadioGroupChangeOptions,
  RadioGroupController,
  RadioGroupOptions,
  RadioGroupPrimitive,
  RadioGroupState,
  RadioGroupValueChangeReason,
  RadioIndicatorProps,
  RadioIndicatorState,
  RadioProps,
  RadioState,
} from "@ui-sdk/core/radio"

export { Radio, RadioGroup, RadioIndicator }
