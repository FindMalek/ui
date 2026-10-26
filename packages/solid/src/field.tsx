import {
  fieldGroup as fieldGroupPrimitive,
  field as fieldPrimitive,
  fieldSet as fieldSetPrimitive,
  type FieldDescriptionState,
  type FieldErrorProps,
  type FieldErrorState,
  type FieldOptions,
  type FieldSetOptions,
  type FieldSetState,
  type FieldState,
} from "@ui-sdk/core/field"
import { createContext, createUniqueId, merge, omit, useContext } from "solid-js"
import { FieldContext, type FieldContextValue } from "./field-context"
import { usePart, usePrimitive, type PartProps, type PrimitiveHandle } from "./use-primitive"

type FieldHandle = PrimitiveHandle<typeof fieldPrimitive>
type FieldSetHandle = PrimitiveHandle<typeof fieldSetPrimitive>

const FieldSetContext = createContext<FieldSetHandle | null>(null)
// What a FieldDescription describes: the nearest Field, or a FieldSet when no
// Field is closer.
const DescribedContext = createContext<FieldHandle | FieldSetHandle | null>(null)

function useField() {
  const context = useContext(FieldContext)
  if (!context) throw new Error("Field parts must be used inside <Field>.")
  return context
}

/**
 * Ties a form control to its label, description and error messages.
 * @stable
 */
function Field(props: FieldOptions & PartProps<"div", FieldState>) {
  const field = usePrimitive(fieldPrimitive, () => ({
    name: props.name,
    disabled: props.disabled,
    invalid: props.invalid,
    debug: props.debug,
  }))
  const rest = omit(props, "name", "disabled", "invalid", "debug")
  // The handle with the field's name and disabled state beside it. Its
  // prototype keeps the handle's `state` getter live.
  const context: FieldContextValue = Object.assign(Object.create(field), {
    name: () => props.name,
    disabled: () => props.disabled,
  })
  return (
    <FieldContext value={context}>
      <DescribedContext value={field}>{usePart(field, "root", undefined, rest, "div")}</DescribedContext>
    </FieldContext>
  )
}

/**
 * The field's label, which names its control.
 * @stable
 */
function FieldLabel(props: PartProps<"label", FieldState>) {
  const field = useField()
  return usePart(field, "label", () => ({ id: props.id as string | undefined }), props, "label")
}

/**
 * Describes its Field. Right inside a FieldSet, outside any Field, it describes
 * the group, so screen readers say it as focus enters the group.
 * @stable
 */
function FieldDescription(props: PartProps<"p", FieldDescriptionState>) {
  const described = useContext(DescribedContext)
  if (!described) throw new Error("FieldDescription must be used inside <Field> or <FieldSet>.")
  // A field set's description slot takes the same props, and its state is the
  // `disabled` that FieldDescriptionState always has.
  const owner = described as FieldHandle
  return usePart(owner, "description", () => ({ id: props.id as string | undefined }), props, "p")
}

/**
 * Shows while the field shows as invalid. Without children, it shows the
 * browser's message for the current problem.
 * @stable
 */
function FieldError(props: PartProps<"div", FieldErrorState> & FieldErrorProps) {
  const field = useField()
  const made = createUniqueId()
  // Only an error with `match` needs an id of its own. One without takes the
  // field's, which the control points at before the field binds.
  const error = () => ({
    id: (props.id as string | undefined) ?? (props.match === undefined ? undefined : made),
    match: props.match,
  })
  const rest = merge(omit(props, "match"), {
    get children() {
      return props.children ?? ((state: FieldErrorState) => state.message)
    },
  })
  return usePart(field, "error", error, rest, "div")
}

/**
 * A native control: an <input> by default, or anything through `render`.
 * @stable
 */
function FieldControl(props: PartProps<"input", FieldState>) {
  const field = useField()
  const user = merge(omit(props, "name"), {
    get name() {
      return props.name ?? field.name()
    },
  })
  const control = () => ({
    id: props.id as string | undefined,
    describedBy: props["aria-describedby"] as string | undefined,
  })
  return usePart(field, "control", control, user, "input")
}

/**
 * A native <fieldset>, so `disabled` disables every control inside it.
 * @stable
 */
function FieldSet(props: FieldSetOptions & Omit<PartProps<"fieldset", FieldSetState>, "disabled">) {
  const set = usePrimitive(fieldSetPrimitive, () => ({ disabled: props.disabled, debug: props.debug }))
  const rest = omit(props, "disabled", "debug")
  return (
    <FieldSetContext value={set}>
      <DescribedContext value={set}>{usePart(set, "set", undefined, rest, "fieldset")}</DescribedContext>
    </FieldSetContext>
  )
}

/**
 * Names the field set. Keep it the set's first child, where a <legend> names it natively.
 * @stable
 */
function FieldLegend(props: PartProps<"legend", FieldSetState>) {
  const set = useContext(FieldSetContext)
  if (!set) throw new Error("FieldLegend must be used inside <FieldSet>.")
  return usePart(set, "legend", () => ({ id: props.id as string | undefined }), props, "legend")
}

/**
 * Lays fields out. It has no role: a FieldSet is what names and disables a group.
 * @stable
 */
function FieldGroup(props: PartProps<"div">) {
  return usePart(
    usePrimitive(fieldGroupPrimitive, () => ({})),
    "group",
    undefined,
    props,
    "div",
  )
}

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
export { useFieldControl } from "./field-context"
