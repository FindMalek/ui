<script lang="ts">
  import { Calculator, Calendar, CreditCard, Search, Settings, Smile, User } from "@lucide/svelte"
  import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandGroupLabel,
    CommandInput,
    CommandItem,
    CommandItemIcon,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@ui-sdk/svelte/command"

  const suggestions = [
    { value: "calendar", label: "Calendar", icon: Calendar },
    { value: "emoji", label: "Search Emoji", icon: Smile },
    { value: "calculator", label: "Calculator", icon: Calculator, disabled: true },
  ]

  const settings = [
    { value: "profile", label: "Profile", icon: User, shortcut: "mod+p" },
    { value: "billing", label: "Billing", icon: CreditCard, shortcut: "mod+b" },
    { value: "settings", label: "Settings", icon: Settings, shortcut: "mod+s" },
  ]
</script>

<Command
  class="flex h-80 w-full max-w-sm flex-col overflow-hidden rounded-3xl bg-popover p-1 text-popover-foreground ring-1 ring-foreground/5"
>
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
  <CommandEmpty class="m-0 shrink-0 py-6 text-center text-sm leading-5 text-muted-foreground empty:hidden">No results found.</CommandEmpty>
  <CommandList class="min-h-0 flex-1 scroll-py-1 overflow-x-hidden overflow-y-auto outline-none">
    <CommandGroup class="overflow-hidden p-1 text-foreground">
      <CommandGroupLabel class="px-2 py-1.5 text-xs leading-4 font-medium text-muted-foreground">Suggestions</CommandGroupLabel>
      {#each suggestions as item (item.value)}
        <CommandItem
          value={item.value}
          disabled={item.disabled}
          class="group relative flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm leading-5 outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
        >
          <CommandItemIcon class="flex shrink-0 text-muted-foreground group-data-highlighted:text-foreground">
            <item.icon class="pointer-events-none block size-4 shrink-0" />
          </CommandItemIcon>
          <span>{item.label}</span>
        </CommandItem>
      {/each}
    </CommandGroup>
    <CommandSeparator class="my-1 h-px bg-border/50" />
    <CommandGroup class="overflow-hidden p-1 text-foreground">
      <CommandGroupLabel class="px-2 py-1.5 text-xs leading-4 font-medium text-muted-foreground">Settings</CommandGroupLabel>
      {#each settings as item (item.value)}
        <CommandItem
          value={item.value}
          shortcut={item.shortcut}
          class="group relative flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm leading-5 outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
        >
          <CommandItemIcon class="flex shrink-0 text-muted-foreground group-data-highlighted:text-foreground">
            <item.icon class="pointer-events-none block size-4 shrink-0" />
          </CommandItemIcon>
          <span>{item.label}</span>
          <CommandShortcut
            class="ms-auto shrink-0 text-xs leading-4 tracking-widest text-muted-foreground group-data-highlighted:text-foreground"
          />
        </CommandItem>
      {/each}
    </CommandGroup>
  </CommandList>
</Command>
