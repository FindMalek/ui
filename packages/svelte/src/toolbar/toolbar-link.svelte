<!--
@component
A link in the toolbar. Arrow keys move between it and the toolbar's other items.
@stable
-->
<script lang="ts">
  import type { ToolbarLinkState } from "@ui-sdk/core/toolbar"
  import Part from "../part.svelte"
  import { useHandlePart, type PartProps } from "../use-primitive.svelte"
  import { useToolbar } from "./context"

  let props: PartProps<"a", ToolbarLinkState> = $props()

  const id = $props.id()
  const link = useHandlePart(useToolbar(), "link", () => ({ id }))
</script>

<Part tag="a" part={link} {props} />
