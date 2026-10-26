<!--
@component
Shows while the field shows as invalid. Without content, it shows the
browser's message for the current problem.
@stable
-->
<script lang="ts">
  import type { FieldErrorProps, FieldErrorState } from "@ui-sdk/core/field"
  import Part from "../part.svelte"
  import { useHandlePart, type PartProps } from "../use-primitive.svelte"
  import { useField } from "./context"

  let { match, children, ...rest }: PartProps<"div", FieldErrorState> & FieldErrorProps = $props()

  const made = $props.id()
  // Only an error with `match` needs an id of its own. One without takes the
  // field's, which the control points at before the field binds.
  const error = useHandlePart(useField(), "error", () => ({
    id: rest.id ?? (match === undefined ? undefined : made),
    match,
  }))
</script>

{#snippet message(state: FieldErrorState)}{state.message}{/snippet}

{#if error.present}
  <Part tag="div" part={error} props={{ ...rest, children: children ?? message }} />
{/if}
