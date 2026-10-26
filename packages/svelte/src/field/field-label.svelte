<!--
@component
The field's label, which names its control.
@stable
-->
<script lang="ts">
  import type { FieldState } from "@ui-sdk/core/field"
  import Part from "../part.svelte"
  import { useHandlePart, type PartProps } from "../use-primitive.svelte"
  import { useField } from "./context"

  let props: PartProps<"label", FieldState> = $props()

  const label = useHandlePart(useField(), "label", () => ({ id: props.id }))
</script>

<Part tag="label" part={label} {props} />
