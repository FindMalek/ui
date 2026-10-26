<!--
@component
A radio and the hidden native radio that takes part in the form.
@stable
-->
<script lang="ts">
  import type { RadioProps, RadioState } from "@ui-sdk/core/radio"
  import { setContext } from "svelte"
  import Part from "../part.svelte"
  import { useHandlePart, type PartProps } from "../use-primitive.svelte"
  import { RadioKey, useRadioGroup } from "./context"

  let { value, disabled, ...rest }: PartProps<"button", RadioState> & RadioProps = $props()

  const group = useRadioGroup()
  setContext(RadioKey, () => value)
  const root = useHandlePart(group, "root", () => ({ value, disabled }))
  const input = useHandlePart(group, "input", () => ({ value, disabled }))
</script>

<Part tag="button" part={root} props={rest} />
<input {...input.slot()} />
