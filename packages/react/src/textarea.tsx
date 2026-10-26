import { textarea as textareaPrimitive, type TextareaOptions, type TextareaState } from "@ui-sdk/core/input"
import { controlRender, useFieldControl } from "./field-context"
import { controlProps, elementProps, type Native } from "./text-control"
import { usePart, usePrimitive } from "./use-primitive"

/**
 * A native <textarea>, wired to the Field it's in, that can grow with its text.
 * @stable
 */
function Textarea({
  value,
  defaultValue,
  onValueChange,
  controller,
  debug,
  autoResize,
  render,
  ...props
}: TextareaOptions & Native<"textarea", TextareaState>) {
  const field = useFieldControl()
  const textarea = usePrimitive(textareaPrimitive, {
    value,
    defaultValue,
    onValueChange,
    controller,
    debug,
    autoResize,
  })
  const element = {
    ...elementProps(props, field, value, defaultValue),
    render: controlRender(field, "textarea", render),
  }
  return usePart(textarea, "root", controlProps(props, field), element, "textarea")
}

export { createInputController } from "@ui-sdk/core/input"
export type {
  InputController,
  InputGroupOptions,
  InputGroupPrimitive,
  InputGroupState,
  InputOptions,
  InputPrimitive,
  InputProps,
  InputState,
  InputValueChangeReason,
  TextareaOptions,
  TextareaPrimitive,
  TextareaProps,
  TextareaState,
} from "@ui-sdk/core/input"

export { Textarea }
