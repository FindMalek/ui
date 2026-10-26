<!--
@component
Describes its Field. Right inside a FieldSet, outside any Field, it
describes the group, so screen readers say it as focus enters the group.
@stable
-->
<script lang="ts">
  import type { FieldDescriptionState } from "@ui-sdk/core/field"
  import { getContext } from "svelte"
  import Part from "../part.svelte"
  import { useHandlePart, type PartProps } from "../use-primitive.svelte"
  import { DescribedKey, type FieldContext, type FieldSetContext } from "./context"

  let rest: PartProps<"p", FieldDescriptionState> = $props()

  const described = getContext<FieldContext | FieldSetContext | undefined>(DescribedKey)
  if (!described) throw new Error("FieldDescription must be used inside <Field> or <FieldSet>.")
  // A field set's description slot takes the same props, and its state is the
  // `disabled` that FieldDescriptionState always has.
  const description = useHandlePart(described as FieldContext, "description", () => ({ id: rest.id }))
</script>

<Part tag="p" part={description} props={rest} />
