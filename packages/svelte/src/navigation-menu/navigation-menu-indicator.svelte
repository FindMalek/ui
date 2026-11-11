<!--
@component
Sits under the open trigger, or under the link with `current` while every panel is closed. Its box comes from the `--indicator-*` variables, measured from its positioned ancestor. Screen readers
skip it.
@stable
-->
<script lang="ts">
  import {
    navigationMenu,
    type NavigationMenuIndicatorState,
  } from "@ui-sdk/core/navigation-menu"
  import Part from "../part.svelte"
  import { usePart } from "../instance"
  import type { PartProps } from "../use-primitive.svelte"

  let props: PartProps<"div", NavigationMenuIndicatorState> = $props()

  const indicator = usePart(navigationMenu, "indicator")
</script>

<Part tag="div" part={indicator} {props} />
