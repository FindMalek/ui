<script lang="ts">
  import { HoverCard, HoverCardContent, HoverCardTrigger } from "@ui-sdk/svelte"
</script>

<div class="fixture">
  <button>Before</button>
  <HoverCard delay={100} closeDelay={100}>
    <HoverCardTrigger>
      {#snippet render({ props, state })}
        <a {...props} href="#repo" class={state.open ? "is-open" : "is-closed"}>
          ui-sdk <span aria-hidden="true">{state.open ? "▲" : "▼"}</span>
        </a>
      {/snippet}
    </HoverCardTrigger>
    <HoverCardContent class="hover-card" aria-label="Repository">
      {#snippet render({ props })}
        <section {...props}>A headless UI kit.</section>
      {/snippet}
    </HoverCardContent>
  </HoverCard>
  <button>After</button>
</div>
