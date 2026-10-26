<script lang="ts">
  import type { Snippet } from "svelte"

  // A client-side router's link: it navigates without a page load.
  let {
    to,
    children,
    ...rest
  }: { to: string; children?: Snippet; [attribute: string]: unknown } = $props()

  function navigate(event: MouseEvent) {
    event.preventDefault()
    history.pushState(null, "", to)
  }
</script>

<a href={to} {...rest} onclick={navigate}>{@render children?.()}</a>
