import type { field, fieldSet } from "@ui-sdk/core/field"
import { getContext } from "svelte"
import { useHandlePart, type PrimitiveHandle, type SlotAttributes } from "../use-primitive.svelte"

type FieldContext = PrimitiveHandle<typeof field> & {
  name: () => string | undefined
  disabled: () => boolean | undefined
}

type FieldSetContext = PrimitiveHandle<typeof fieldSet>

const FieldKey = Symbol("field")
const FieldSetKey = Symbol("field-set")
// What a FieldDescription describes: the nearest Field, or a FieldSet when no
// Field is closer.
const DescribedKey = Symbol("field-described")

function useField() {
  const context = getContext<FieldContext | undefined>(FieldKey)
  if (!context) throw new Error("Field parts must be used inside <Field>.")
  return context
}

/**
 * Controls inside a field take its name and disabled state, and its ids and
 * validity through the field's control slot. Null outside a field. Call it
 * in the control's script, before its own primitive, since the options read
 * the field's name.
 * @stable
 */
function useFieldControl() {
  const field = getContext<FieldContext | undefined>(FieldKey)
  if (!field) return null
  return {
    name: field.name,
    disabled: field.disabled,
    // The field's part for its control, keyed by the id the control's author
    // gave. Without one, the control takes the field's, so the label points
    // at it from the server's HTML on. Call it once in the control's script.
    // The function it returns merges the field's attributes into the
    // control's props, which stays its own part for styling, and the field
    // decides the id. `describedBy` is the control's own description, which
    // stays ahead of the field's.
    control(id: () => string | null | undefined, describedBy?: () => string | null | undefined) {
      const part = useHandlePart(field, "control", () => ({
        id: id() ?? undefined,
        describedBy: describedBy?.() ?? undefined,
      }))
      // check-code: allow return-type the spread drops SlotAttributes' index signatures, so callers would lose its attachments.
      return (props: SlotAttributes): SlotAttributes => ({
        ...part.slot({ ...props, id: undefined }),
        "data-slot": props["data-slot"],
      })
    },
  }
}

export {
  DescribedKey,
  type FieldContext,
  FieldKey,
  type FieldSetContext,
  FieldSetKey,
  useField,
  useFieldControl,
}
