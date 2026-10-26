<script setup lang="ts">
import {
  createHoverCardController,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@ui-sdk/vue/hover-card"
import { ref } from "vue"

const grace = {
  handle: "grace",
  name: "Grace Hopper",
  bio: "Built the first compiler and popularized the word “debugging”.",
}
const card = createHoverCardController()
const open = ref(false)
const reason = ref("")
</script>

<template>
  <div class="flex flex-col items-center gap-3">
    <div class="flex items-center gap-4">
      <HoverCard
        v-model:open="open"
        :controller="card"
        @open-change="(_, details) => (reason = details.reason)"
      >
        <HoverCardTrigger
          href="https://example.com/people/grace"
          class="rounded-sm text-sm font-medium text-primary underline-offset-4 outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/30 data-open:underline"
          >@{{ grace.handle }}</HoverCardTrigger
        >
        <HoverCardContent
          class="flex w-72 origin-(--transform-origin) flex-col gap-1 rounded-3xl bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none"
        >
          <p class="font-medium">{{ grace.name }}</p>
          <p>{{ grace.bio }}</p>
        </HoverCardContent>
      </HoverCard>
      <button
        type="button"
        class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none"
        @click="card.open()"
      >
        Show from elsewhere
      </button>
    </div>
    <output class="text-sm text-muted-foreground"
      >{{ open ? "Open" : "Closed" }}{{ reason && `, last change: ${reason}` }}</output
    >
  </div>
</template>
