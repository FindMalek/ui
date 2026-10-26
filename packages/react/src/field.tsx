import {
  fieldGroup,
  field as fieldPrimitive,
  fieldSet,
  type FieldDescriptionState,
  type FieldErrorProps,
  type FieldErrorState,
  type FieldOptions,
  type FieldSetOptions,
  type FieldSetState,
  type FieldState,
} from "@ui-sdk/core/field"
import * as React from "react"
import { FieldContext, ownDescription } from "./field-context"
import { extendHandle, usePart, usePrimitive, type PartProps, type PrimitiveHandle } from "./use-primitive"

type FieldHandle = PrimitiveHandle<typeof fieldPrimitive>
type FieldSetHandle = PrimitiveHandle<typeof fieldSet>

// What a FieldDescription describes: the nearest Field, or a FieldSet when no
// Field is closer.
const DescribedContext = React.createContext<FieldHandle | FieldSetHandle | null>(null)

function useField() {
  const context = React.useContext(FieldContext)
  if (!context) throw new Error("Field parts must be used inside <Field>.")
  return context
}

/**
 * Ties a form control to its label, description and error messages.
 * @stable
 */
function Field({ name, disabled, invalid, debug, ...props }: FieldOptions & PartProps<"div", FieldState>) {
  const field = usePrimitive(fieldPrimitive, { name, disabled, invalid, debug })
  const context = React.useMemo(() => extendHandle(field, { name, disabled }), [field, name, disabled])
  return (
    <FieldContext.Provider value={context}>
      <DescribedContext.Provider value={field}>
        {usePart(field, "root", {}, props, "div")}
      </DescribedContext.Provider>
    </FieldContext.Provider>
  )
}

// Field parts take the user's `id`, which names the part, as the slot's too.

/**
 * The field's label, which names its control.
 * @stable
 */
function FieldLabel(props: PartProps<"label", FieldState>) {
  return usePart(useField(), "label", { id: props.id }, props, "label")
}

/**
 * Describes its Field. Right inside a FieldSet, outside any Field, it describes
 * the group, so screen readers say it as focus enters the group.
 * @stable
 */
function FieldDescription(props: PartProps<"p", FieldDescriptionState>) {
  const described = React.useContext(DescribedContext)
  if (!described) throw new Error("FieldDescription must be used inside <Field> or <FieldSet>.")
  // A field set's description slot takes the same props, and its state is the
  // `disabled` that FieldDescriptionState always has.
  return usePart(described as FieldHandle, "description", { id: props.id }, props, "p")
}

/**
 * Shows while the field shows as invalid. Without children, it shows the
 * browser's message for the current problem.
 * @stable
 */
function FieldError({
  match,
  children = message,
  ...props
}: PartProps<"div", FieldErrorState> & FieldErrorProps) {
  const made = React.useId()
  // Only an error with `match` needs an id of its own. One without takes the
  // field's, which the control points at before the field binds.
  const id = props.id ?? (match === undefined ? undefined : made)
  return usePart(useField(), "error", { id, match }, { ...props, children }, "div")
}

const message = (state: FieldErrorState) => state.message

/**
 * A native control: an <input> by default, or anything through `render`.
 * @stable
 */
function FieldControl({ name, render, ...rest }: PartProps<"input", FieldState>) {
  const field = useField()
  const [props, element] = ownDescription(rest, render)
  const control = { id: props.id, describedBy: props["aria-describedby"] }
  return usePart(field, "control", control, { ...props, render: element, name: name ?? field.name }, "input")
}

/**
 * A native <fieldset>, so `disabled` disables every control inside it.
 * @stable
 */
function FieldSet({
  disabled,
  debug,
  ...props
}: FieldSetOptions & Omit<PartProps<"fieldset", FieldSetState>, "disabled">) {
  const set = usePrimitive(fieldSet, { disabled, debug })
  return (
    <DescribedContext.Provider value={set}>
      {usePart(set, "set", {}, props, "fieldset")}
    </DescribedContext.Provider>
  )
}

/**
 * Names the field set. Keep it the set's first child, where a <legend> names it natively.
 * @stable
 */
function FieldLegend(props: PartProps<"legend", FieldSetState>) {
  return usePart(fieldSet, "legend", { id: props.id }, props, "legend")
}

/**
 * Lays fields out. It has no role: a FieldSet is what names and disables a group.
 * @stable
 */
function FieldGroup(props: PartProps<"div">) {
  return usePart(usePrimitive(fieldGroup, {}), "group", {}, props, "div")
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
