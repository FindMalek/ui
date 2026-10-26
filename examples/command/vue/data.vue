<script setup lang="ts">
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandGroupLabel,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  type CommandData,
  type CommandDataItem,
} from "@ui-sdk/vue/command"
import { h, ref, type FunctionalComponent } from "vue"

const commands: CommandData = [
  {
    type: "group",
    label: "Navigation",
    items: [
      { value: "home", label: "Go home", keywords: ["start"] },
      { value: "inbox", label: "Open inbox", shortcut: "mod+i" },
    ],
  },
  { type: "separator" },
  {
    type: "group",
    label: "Preferences",
    items: [
      {
        value: "theme",
        label: "Change theme…",
        items: [
          { value: "light", label: "Light" },
          { value: "dark", label: "Dark" },
          { value: "system", label: "System" },
        ],
      },
      { value: "language", label: "Change language…", items: ["English", "Français", "Deutsch", "日本語"] },
      { value: "sign-out", label: "Sign out", shortcut: "mod+shift+q" },
    ],
  },
]

const Commands: FunctionalComponent<{ items: CommandData }> = ({ items }) =>
  items.map((entry, index) => {
    if (typeof entry !== "string" && "type" in entry) {
      if (entry.type === "separator")
        return h(CommandSeparator, { key: `separator-${index}`, class: "my-1 h-px bg-border/50" })
      return h(CommandGroup, { key: entry.label }, () => [
        h(
          CommandGroupLabel,
          { class: "px-2 py-1.5 text-xs leading-4 font-medium text-muted-foreground" },
          () => entry.label,
        ),
        h(Commands, { items: entry.items }),
      ])
    }
    const command: CommandDataItem = typeof entry === "string" ? { value: entry, label: entry } : entry
    return h(
      CommandItem,
      {
        key: command.value,
        value: command.value,
        label: command.label,
        disabled: command.disabled,
        shortcut: command.shortcut,
        class:
          "group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50",
      },
      () => [
        command.label,
        command.shortcut &&
          h(CommandShortcut, {
            class:
              "ms-auto text-xs tracking-widest text-muted-foreground group-data-highlighted:text-foreground",
          }),
      ],
    )
  })

const ran = ref("")

function onAction(value: string) {
  ran.value = value
}
</script>

<template>
  <div class="flex w-full max-w-sm flex-col gap-3">
    <Command
      :items="commands"
      class="flex h-80 w-full max-w-sm flex-col overflow-hidden rounded-3xl bg-popover p-1 text-popover-foreground ring-1 ring-foreground/5"
      @action="onAction"
    >
      <div class="shrink-0 p-1 pb-0">
        <CommandInput
          aria-label="Search commands"
          placeholder="Type a command..."
          class="m-0 box-border h-8 w-full min-w-0 shrink-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base leading-6 text-inherit transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm md:leading-5"
        />
      </div>
      <CommandEmpty class="m-0 shrink-0 py-6 text-center text-sm leading-5 text-muted-foreground empty:hidden"
        >No results found.</CommandEmpty
      >
      <CommandList
        v-slot="{ state }"
        class="min-h-0 flex-1 scroll-py-1 overflow-x-hidden overflow-y-auto outline-none p-1"
      >
        <Commands :items="state.items" />
      </CommandList>
    </Command>
    <output class="block min-h-5 text-sm leading-5 text-muted-foreground">{{
      ran ? `Ran ${ran}` : "Nothing run yet"
    }}</output>
  </div>
</template>
