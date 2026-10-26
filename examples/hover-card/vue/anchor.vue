<script setup lang="ts">
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@ui-sdk/vue/hover-card"
import { ref } from "vue"

const ada = {
  handle: "ada",
  name: "Ada Lovelace",
  initials: "AL",
  bio: "Wrote the first published program, for the Analytical Engine.",
}
const row = ref<HTMLDivElement | null>(null)
</script>

<template>
  <div
    ref="row"
    class="flex w-full max-w-sm items-center gap-3 rounded-2xl border border-border px-3 py-2 text-sm"
  >
    <div
      aria-hidden="true"
      class="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-xs text-muted-foreground"
    >
      {{ ada.initials }}
    </div>
    <div class="flex min-w-0 flex-1 items-center gap-1">
      <HoverCard>
        <HoverCardTrigger
          href="https://example.com/people/ada"
          class="rounded-sm text-sm font-medium text-primary underline-offset-4 outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/30 data-open:underline"
          >{{ ada.name }}</HoverCardTrigger
        >
        <HoverCardContent
          :anchor="row"
          align="start"
          class="flex w-72 origin-(--transform-origin) flex-col gap-1 rounded-3xl bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none"
        >
          <p class="font-medium">@{{ ada.handle }}</p>
          <p>{{ ada.bio }}</p>
        </HoverCardContent>
      </HoverCard>
      <span class="truncate text-muted-foreground">committed “Fix the loop”</span>
    </div>
    <span class="text-xs text-muted-foreground">2h ago</span>
  </div>
</template>
