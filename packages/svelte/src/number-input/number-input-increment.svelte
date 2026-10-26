<!--
@component
Steps up once, then repeats while held. Shift steps by `largeStep`.
@stable
-->
<script lang="ts">
  import type { NumberInputButtonState } from "@ui-sdk/core/number-input"
  import Part from "../part.svelte"
  import { useHandlePart, type PartProps } from "../use-primitive.svelte"
  import { useNumberInput } from "./context"

  let props: PartProps<"button", NumberInputButtonState> = $props()

  const increment = useHandlePart(useNumberInput("NumberInputIncrement"), "increment")
</script>

<Part tag="button" part={increment} {props} />
