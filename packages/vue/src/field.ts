import {
  fieldGroup as fieldGroupPrimitive,
  field as fieldPrimitive,
  fieldSet as fieldSetPrimitive,
  type FieldDescriptionState,
  type ValidityKey,
} from "@ui-sdk/core/field"
import { defineComponent, inject, provide, useAttrs, useId, type InjectionKey, type PropType } from "vue"
import { slotContent } from "./children"
import { withElement } from "./create-parts"
import {
  optionalBoolean,
  usePart,
  usePrimitive,
  useScope,
  type PrimitiveHandle,
  type PartSlots,
  type StateSlots,
} from "./use-primitive"
import { FieldKey, type FieldContext } from "./field-context"

type FieldSetContext = PrimitiveHandle<typeof fieldSetPrimitive>
// What a FieldDescription describes: the nearest Field, or a FieldSet when no
// Field is closer.
const DescribedKey: InjectionKey<FieldContext | FieldSetContext> = Symbol("field-described")

function useField() {
  const context = inject(FieldKey)
  if (!context) throw new Error("Field parts must be used inside <Field>.")
  return context
}

// A part keyed by the `id` attribute it's given, so core keeps that id on its element.
function useIdProp() {
  const attrs = useAttrs()
  return () => ({ id: attrs.id as string | undefined })
}

/**
 * Ties a form control to its label, description and error messages.
 * @stable
 */
const Field = withElement(
  "div",
  defineComponent({
    name: "Field",
    inheritAttrs: false,
    props: {
      name: String,
      disabled: optionalBoolean,
      invalid: optionalBoolean,
      debug: optionalBoolean,
    },
    slots: Object as PartSlots<typeof fieldPrimitive, "root">,
    setup(props) {
      const field = usePrimitive(fieldPrimitive, () => ({
        name: props.name,
        disabled: props.disabled,
        invalid: props.invalid,
        debug: props.debug,
      }))
      const context = { ...field, name: () => props.name, disabled: () => props.disabled }
      provide(FieldKey, context)
      provide(DescribedKey, context)
      return usePart(field, "root")
    },
  }),
)

/**
 * The field's label, which names its control.
 * @stable
 */
const FieldLabel = withElement(
  "label",
  defineComponent({
    name: "FieldLabel",
    inheritAttrs: false,
    slots: Object as PartSlots<typeof fieldPrimitive, "label">,
    setup() {
      return usePart(useField(), "label", useIdProp(), undefined, "label")
    },
  }),
)

/**
 * Describes its Field. Right inside a FieldSet, outside any Field, it describes
 * the group, so screen readers say it as focus enters the group.
 * @stable
 */
const FieldDescription = withElement(
  "p",
  defineComponent({
    name: "FieldDescription",
    inheritAttrs: false,
    // A field set's description has only the set's state.
    slots: Object as StateSlots<FieldDescriptionState>,
    setup() {
      const described = inject(DescribedKey)
      if (!described) throw new Error("FieldDescription must be used inside <Field> or <FieldSet>.")
      // A field set's description slot takes the same props, and its state is the
      // `disabled` that FieldDescriptionState always has.
      return usePart(described as FieldContext, "description", useIdProp(), undefined, "p")
    },
  }),
)

/**
 * Shows while the field shows as invalid. Without content, it shows the
 * browser's message for the current problem.
 * @stable
 */
const FieldError = withElement(
  "div",
  defineComponent({
    name: "FieldError",
    inheritAttrs: false,
    props: {
      match: { type: [Boolean, String] as PropType<boolean | ValidityKey>, default: undefined },
    },
    slots: Object as PartSlots<typeof fieldPrimitive, "error">,
    setup(props, { slots }) {
      const attrs = useAttrs()
      const made = useId()
      // Only an error with `match` needs an id of its own. One without takes the
      // field's, which the control points at before the field binds.
      const id = () => (attrs.id as string | undefined) ?? (props.match === undefined ? undefined : made)
      return usePart(useField(), "error", () => ({ id: id(), match: props.match }), undefined, {
        tag: "div",
        children: (state) => slotContent(slots.default, { state }) ?? state.message,
      })
    },
  }),
)

/**
 * A native control: an <input> by default, or anything through the `render` slot.
 * @stable
 */
const FieldControl = withElement(
  "input",
  defineComponent({
    name: "FieldControl",
    inheritAttrs: false,
    slots: Object as PartSlots<typeof fieldPrimitive, "control">,
    setup() {
      const field = useField()
      const attrs = useAttrs()
      const control = () => ({
        id: attrs.id as string | undefined,
        describedBy: attrs["aria-describedby"] as string | undefined,
      })
      return usePart(field, "control", control, () => ({ name: field.name(), ...attrs }), "input")
    },
  }),
)

/**
 * A native <fieldset>, so `disabled` disables every control inside it.
 * @stable
 */
const FieldSet = withElement(
  "fieldset",
  defineComponent({
    name: "FieldSet",
    inheritAttrs: false,
    props: { disabled: optionalBoolean, debug: optionalBoolean },
    slots: Object as PartSlots<typeof fieldSetPrimitive, "set">,
    setup(props) {
      const set = usePrimitive(fieldSetPrimitive, () => ({ disabled: props.disabled, debug: props.debug }))
      provide(DescribedKey, set)
      return usePart(set, "set", undefined, undefined, "fieldset")
    },
  }),
)

/**
 * Names the field set. Keep it the set's first child, where a <legend> names it natively.
 * @stable
 */
const FieldLegend = withElement(
  "legend",
  defineComponent({
    name: "FieldLegend",
    inheritAttrs: false,
    slots: Object as PartSlots<typeof fieldSetPrimitive, "legend">,
    setup() {
      const set = useScope(fieldSetPrimitive)?.handle
      if (!set) throw new Error("FieldLegend must be used inside <FieldSet>.")
      return usePart(set, "legend", useIdProp(), undefined, "legend")
    },
  }),
)

/**
 * Lays fields out. It has no role: a FieldSet is what names and disables a group.
 * @stable
 */
const FieldGroup = withElement(
  "div",
  defineComponent({
    name: "FieldGroup",
    inheritAttrs: false,
    slots: Object as PartSlots<typeof fieldGroupPrimitive, "group">,
    setup() {
      return usePart(
        usePrimitive(fieldGroupPrimitive, () => ({})),
        "group",
      )
    },
  }),
)

export { useFieldControl } from "./field-context"

export { Field, FieldControl, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSet }

export type {
  FieldApi,
  FieldDescriptionState,
  FieldErrorProps,
  FieldErrorState,
  FieldGroupPrimitive,
  FieldOptions,
  FieldPrimitive,
  FieldSetOptions,
  FieldSetPrimitive,
  FieldSetState,
  FieldState,
  ValidityKey,
} from "@ui-sdk/core/field"
