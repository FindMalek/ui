<script setup lang="ts">
import {
  Drawer,
  DrawerBackdrop,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "@ui-sdk/vue/drawer"
import { ref } from "vue"

const profile = ref({ name: "Pedro Duarte", username: "@peduarte" })
const summary = ref<HTMLDivElement | null>(null)
const form = ref<HTMLFormElement | null>(null)
let tries = 0

async function save() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  tries++
  if (tries === 1) throw new Error("The server didn't answer.")
  const data = new FormData(form.value ?? undefined)
  profile.value = { name: String(data.get("name")), username: String(data.get("username")) }
}
</script>

<template>
  <div class="grid w-full max-w-sm gap-3">
    <div
      ref="summary"
      tabindex="-1"
      class="rounded-2xl border border-border p-3 text-sm outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
    >
      <div class="font-medium">{{ profile.name }}</div>
      <div class="text-muted-foreground">{{ profile.username }}</div>
    </div>
    <Drawer>
      <DrawerTrigger
        class="inline-flex cursor-default h-8 w-fit shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none"
        >Edit profile</DrawerTrigger
      >
      <DrawerBackdrop class="fixed inset-0 bg-black/30 supports-backdrop-filter:backdrop-blur-sm" />
      <DrawerContent
        keep-mounted
        :final-focus="() => summary"
        class="relative mx-auto flex max-h-[85dvh] w-full max-w-lg flex-col rounded-t-[min(var(--radius-4xl),24px)] bg-popover text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none after:absolute after:inset-x-0 after:top-full after:h-24 after:bg-inherit"
      >
        <div aria-hidden="true" class="mx-auto mt-4 h-1.5 w-[100px] shrink-0 rounded-full bg-muted" />
        <div class="flex flex-col gap-0.5 p-4 text-center md:gap-1.5 md:text-start">
          <DrawerTitle class="text-base font-medium text-foreground">Edit profile</DrawerTitle>
          <DrawerDescription class="text-sm text-muted-foreground"
            >Make changes to your profile here. Save when you're done.</DrawerDescription
          >
        </div>
        <form ref="form" class="grid gap-4 px-4" @submit.prevent>
          <label class="grid gap-2 text-sm leading-none font-medium">
            Name
            <input
              name="name"
              :value="profile.name"
              class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base font-normal outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 md:text-sm motion-reduce:transition-none"
            />
          </label>
          <label class="grid gap-2 text-sm leading-none font-medium">
            Username
            <input
              name="username"
              :value="profile.username"
              class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base font-normal outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 md:text-sm motion-reduce:transition-none"
            />
          </label>
        </form>
        <div class="flex flex-col gap-2 p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
          <DrawerClose
            v-slot="{ state }"
            value="save"
            class="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-[color,background-color,box-shadow] hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pending:cursor-progress data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none"
            @action="save"
          >
            {{ state.pending ? "Saving…" : state.error ? "Couldn't save. Try again" : "Save changes" }}
          </DrawerClose>
          <DrawerClose
            class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none"
            >Cancel</DrawerClose
          >
        </div>
      </DrawerContent>
    </Drawer>
  </div>
</template>
