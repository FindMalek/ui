<script setup lang="ts">
import {
  Drawer,
  DrawerBackdrop,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerOutlet,
  DrawerTitle,
  DrawerTrigger,
} from "@ui-sdk/vue/drawer"

const messages = [
  { from: "Ada", text: "The proofs are back from the printer." },
  { from: "Grace", text: "Lunch on Thursday?" },
  { from: "Linus", text: "Pushed the fix for the release build." },
  { from: "Margaret", text: "Can you review the launch checklist?" },
]
</script>

<template>
  <Drawer>
    <div
      class="w-full max-w-sm overflow-hidden rounded-[min(var(--radius-4xl),24px)] bg-black ring-1 ring-foreground/10"
    >
      <DrawerOutlet
        :keyframes="{ scale: [1, 0.94], borderRadius: ['0px', '24px'] }"
        class="overflow-hidden bg-card text-sm text-card-foreground"
      >
        <div class="flex items-center justify-between border-b border-border px-4 py-3">
          <span class="text-base font-medium">Inbox</span>
          <DrawerTrigger
            class="inline-flex cursor-default h-7 shrink-0 items-center justify-center gap-1 rounded-2xl border border-transparent bg-primary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-[color,background-color,box-shadow] hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none"
            >Compose</DrawerTrigger
          >
        </div>
        <ul class="divide-y divide-border">
          <li v-for="message in messages" :key="message.from" class="px-4 py-3">
            <div class="font-medium">{{ message.from }}</div>
            <div class="truncate text-muted-foreground">{{ message.text }}</div>
          </li>
        </ul>
      </DrawerOutlet>
    </div>
    <DrawerBackdrop class="fixed inset-0 bg-black/30 supports-backdrop-filter:backdrop-blur-sm" />
    <DrawerContent
      class="relative mx-auto flex max-h-[85dvh] w-full max-w-lg flex-col rounded-t-[min(var(--radius-4xl),24px)] bg-popover text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none after:absolute after:inset-x-0 after:top-full after:h-24 after:bg-inherit"
    >
      <div aria-hidden="true" class="mx-auto mt-4 h-1.5 w-[100px] shrink-0 rounded-full bg-muted" />
      <div class="flex flex-col gap-0.5 p-4 text-center md:gap-1.5 md:text-start">
        <DrawerTitle class="text-base font-medium text-foreground">New message</DrawerTitle>
        <DrawerDescription class="text-sm text-muted-foreground"
          >Drag it down slowly and watch the inbox follow.</DrawerDescription
        >
      </div>
      <div class="grid gap-3 px-4">
        <input
          aria-label="To"
          placeholder="To"
          class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 md:text-sm motion-reduce:transition-none"
        />
        <textarea
          aria-label="Message"
          placeholder="Message"
          class="h-24 min-h-16 w-full min-w-0 resize-none rounded-2xl border border-transparent bg-input/50 px-2.5 py-2 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 md:text-sm motion-reduce:transition-none"
        />
      </div>
      <div class="flex flex-col gap-2 p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
        <DrawerClose
          value="send"
          class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-[color,background-color,box-shadow] hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none"
          >Send</DrawerClose
        >
      </div>
    </DrawerContent>
  </Drawer>
</template>
