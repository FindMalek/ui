<script lang="ts">
  import {
    ScrollArea,
    ScrollAreaContent,
    ScrollAreaScrollbar,
    ScrollAreaThumb,
    ScrollAreaViewport,
  } from "@ui-sdk/svelte/scroll-area"

  const tags = Array.from({ length: 50 }, (_, index) => `v1.2.0-beta.${50 - index}`)
</script>

<ScrollArea class="h-72 w-56 rounded-2xl border border-border">
  {#snippet render({ props, state })}
    <section {...props}>
      <ScrollAreaViewport
        aria-label="Releases"
        class="size-full rounded-[inherit] outline-none transition-[color,box-shadow] focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none"
      >
        {#snippet render({ props })}
          <article {...props}>
            <ScrollAreaContent class="p-4 pb-10 text-sm">
              {#each tags as tag (tag)}
                <p class="py-1.5">{tag}</p>
              {/each}
            </ScrollAreaContent>
          </article>
        {/snippet}
      </ScrollAreaViewport>
      <p
        aria-hidden="true"
        class={state.atEnd || !(state.overflowY || state.overflowX)
          ? "hidden"
          : "pointer-events-none absolute inset-x-0 bottom-0 rounded-b-2xl bg-background/90 py-2 text-center text-xs text-muted-foreground"}
      >
        {state.atStart ? "Scroll for older releases" : "Keep going"}
      </p>
      <ScrollAreaScrollbar>
        {#snippet render({ props, state: scrollbar })}
          <div
            {...props}
            class={!scrollbar.visible && !scrollbar.dragging
              ? "flex w-2 border-s border-s-transparent p-px opacity-0 transition-[opacity,width] motion-reduce:transition-none"
              : scrollbar.scrolling || scrollbar.hovering
                ? "flex w-2.5 border-s border-s-transparent p-px opacity-100 transition-[opacity,width] motion-reduce:transition-none"
                : "flex w-2 border-s border-s-transparent p-px opacity-100 transition-[opacity,width] motion-reduce:transition-none"}
          >
            <ScrollAreaThumb>
              {#snippet render({ props: thumbProps, state: thumb })}
                <div
                  {...thumbProps}
                  class={thumb.dragging
                    ? "relative flex-1 rounded-full bg-muted-foreground"
                    : "relative flex-1 rounded-full bg-border"}
                ></div>
              {/snippet}
            </ScrollAreaThumb>
          </div>
        {/snippet}
      </ScrollAreaScrollbar>
    </section>
  {/snippet}
</ScrollArea>
