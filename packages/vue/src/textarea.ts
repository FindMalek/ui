import { textarea as textareaPrimitive } from "@ui-sdk/core/input"
import { defineComponent } from "vue"
import { withElement } from "./create-parts"
import { useFieldControl } from "./field-context"
import { elementProps, readOnlyOf, textEmits, textOptions, textProps } from "./text-control"
import { optionalBoolean, orModel, usePart, usePrimitive, type PartSlots } from "./use-primitive"

/**
 * A native <textarea>, wired to the Field it's in, that can grow with its text.
 * @stable
 */
const Textarea = withElement(
  "textarea",
  defineComponent({
    name: "Textarea",
    inheritAttrs: false,
    props: { ...textProps, autoResize: optionalBoolean },
    emits: textEmits,
    slots: Object as PartSlots<typeof textareaPrimitive, "root">,
    setup(props, { attrs, emit }) {
      const field = useFieldControl()
      const options = textOptions(props, emit)
      const textarea = usePrimitive(textareaPrimitive, () => ({ ...options(), autoResize: props.autoResize }))
      const part = () => ({
        disabled: props.disabled || field?.disabled(),
        readOnly: readOnlyOf(props, attrs),
        required: props.required,
      })
      return usePart(textarea, "root", part, () => elementProps(props, field, attrs, "textarea"), {
        tag: "textarea",
        // A default value is the textarea's text, which a form reset returns to.
        children: () =>
          orModel(props.value, props.modelValue) === undefined ? props.defaultValue : undefined,
        extend: field?.props,
      })
    },
  }),
)

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
