<script lang="ts">
  import { HoverCard, HoverCardContent, HoverCardTrigger } from "@ui-sdk/svelte/hover-card"

  const ada = {
    handle: "ada",
    name: "Ada Lovelace",
    initials: "AL",
    bio: "Wrote the first published program, for the Analytical Engine.",
  }
</script>

<HoverCard>
  <HoverCardTrigger href="https://example.com/people/ada">
    {#snippet render({ props, state })}
      <a
        {...props}
        class="inline-flex items-center gap-2 rounded-full pe-3 text-sm font-medium outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
      >
        <span
          aria-hidden="true"
          class={state.open
            ? "flex size-8 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground"
            : "flex size-8 items-center justify-center rounded-full bg-muted text-xs text-muted-foreground"}
        >
          {ada.initials}
        </span>
        {ada.name}
      </a>
    {/snippet}
  </HoverCardTrigger>
  <HoverCardContent
    class="flex w-72 origin-(--transform-origin) flex-col gap-1 rounded-3xl bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:pointer-events-none data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none"
  >
    {#snippet render({ props })}
      <article {...props}>
        <p class="font-medium">@{ada.handle}</p>
        <p>{ada.bio}</p>
      </article>
    {/snippet}
  </HoverCardContent>
</HoverCard>
