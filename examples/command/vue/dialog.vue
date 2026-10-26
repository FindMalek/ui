<script setup lang="ts">
import { Calculator, Calendar, CreditCard, Search, Settings, Smile, User } from "@lucide/vue"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandGroupLabel,
  CommandInput,
  CommandItem,
  CommandItemIcon,
  CommandList,
} from "@ui-sdk/vue/command"
import {
  Dialog,
  DialogBackdrop,
  DialogContent,
  DialogShortcut,
  DialogTitle,
  DialogTrigger,
} from "@ui-sdk/vue/dialog"
import { ref } from "vue"

const commands = [
  { value: "calendar", label: "Calendar", icon: Calendar },
  { value: "emoji", label: "Search Emoji", icon: Smile },
  { value: "calculator", label: "Calculator", icon: Calculator, disabled: true },
  { value: "profile", label: "Profile", icon: User },
  { value: "billing", label: "Billing", icon: CreditCard },
  { value: "settings", label: "Settings", icon: Settings },
]

const open = ref(false)
const ran = ref("")

function onAction(value: string) {
  ran.value = value
  open.value = false
}
</script>

<template>
  <div class="flex w-full max-w-sm flex-col items-start gap-3">
    <Dialog v-model:open="open">
      <DialogTrigger
        shortcut="mod+k"
        class="inline-flex h-8 w-fit shrink-0 cursor-default items-center w-56 max-w-full justify-between gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm leading-5 font-medium whitespace-nowrap text-foreground transition-all select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 hover:bg-muted hover:text-foreground active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 text-muted-foreground data-open:bg-muted data-open:text-foreground"
      >
        Search…
        <DialogShortcut
          class="inline-flex h-5 min-w-5 items-center justify-center gap-1 rounded-lg bg-muted px-1 font-sans text-xs leading-4 font-medium text-muted-foreground"
        />
      </DialogTrigger>
      <DialogBackdrop
        class="fixed inset-0 bg-black/30 transition-opacity duration-100 supports-backdrop-filter:backdrop-blur-sm data-starting-style:opacity-0 data-ending-style:opacity-0"
      />
      <DialogContent
        class="fixed top-[min(6rem,10dvh)] left-1/2 max-h-[80dvh] w-full max-w-[calc(100%-2rem)] -translate-x-1/2 overflow-y-auto rounded-3xl border-0 bg-popover p-0 text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 sm:max-w-md"
      >
        <DialogTitle class="sr-only">Command palette</DialogTitle>
        <Command class="flex h-80 flex-col p-1" @action="onAction">
          <div class="shrink-0 p-1 pb-0">
            <div
              class="box-border flex h-8 items-center gap-2 rounded-2xl border border-transparent bg-input/50 px-2.5 transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30"
            >
              <Search aria-hidden="true" class="pointer-events-none block size-4 shrink-0 opacity-50" />
              <CommandInput
                aria-label="Search commands"
                placeholder="Type a command or search..."
                class="m-0 h-full w-full min-w-0 border-0 bg-transparent p-0 text-base leading-6 text-inherit outline-none placeholder:text-muted-foreground md:text-sm md:leading-5"
              />
            </div>
          </div>
          <CommandEmpty
            class="m-0 shrink-0 py-6 text-center text-sm leading-5 text-muted-foreground empty:hidden"
            >No results found.</CommandEmpty
          >
          <CommandList class="min-h-0 flex-1 scroll-py-1 overflow-x-hidden overflow-y-auto outline-none">
            <CommandGroup class="overflow-hidden p-1 text-foreground">
              <CommandGroupLabel class="px-2 py-1.5 text-xs leading-4 font-medium text-muted-foreground"
                >Suggestions</CommandGroupLabel
              >
              <CommandItem
                v-for="item in commands"
                :key="item.value"
                :value="item.value"
                :disabled="item.disabled"
                class="group relative flex min-h-7 cursor-default items-center gap-2 rounded-2xl px-2 py-1.5 text-sm leading-5 outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
              >
                <CommandItemIcon
                  class="flex shrink-0 text-muted-foreground group-data-highlighted:text-foreground"
                >
                  <component :is="item.icon" class="pointer-events-none block size-4 shrink-0" />
                </CommandItemIcon>
                {{ item.label }}
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
    <output class="block min-h-5 text-sm leading-5 text-muted-foreground">{{
      ran ? `Ran ${ran}` : "Press ⌘K or Ctrl+K"
    }}</output>
  </div>
</template>
