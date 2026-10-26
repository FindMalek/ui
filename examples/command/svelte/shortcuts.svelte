<script lang="ts">
  import { CreditCard, Settings, User } from "@lucide/svelte"
  import {
    Command,
    CommandGroup,
    CommandGroupLabel,
    CommandInput,
    CommandItem,
    CommandItemIcon,
    CommandList,
    CommandShortcut,
  } from "@ui-sdk/svelte/command"

  const settings = [
    { value: "profile", label: "Profile", icon: User, shortcut: "mod+p" },
    { value: "billing", label: "Billing", icon: CreditCard, shortcut: "mod+b" },
    { value: "settings", label: "Settings", icon: Settings, shortcut: "mod+s" },
  ]

  let ran = $state("")

  function onAction(value: string) {
    ran = value
  }
</script>

<div class="flex w-full max-w-sm flex-col gap-3">
  <Command
    class="flex h-80 w-full max-w-sm flex-col overflow-hidden rounded-3xl bg-popover p-1 text-popover-foreground ring-1 ring-foreground/5"
    {onAction}
  >
    <div class="shrink-0 p-1 pb-0">
      <CommandInput
        aria-label="Search settings"
        placeholder="Search settings..."
        class="m-0 box-border h-8 w-full min-w-0 shrink-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base leading-6 text-inherit transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm md:leading-5"
      />
    </div>
    <CommandList class="min-h-0 flex-1 scroll-py-1 overflow-x-hidden overflow-y-auto outline-none">
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
            >
              {#snippet children(state)}{state.text}{/snippet}
            </CommandShortcut>
          </CommandItem>
        {/each}
      </CommandGroup>
    </CommandList>
  </Command>
  <output class="block min-h-5 text-sm leading-5 text-muted-foreground">{ran ? `Ran ${ran}` : "Try a shortcut"}</output>
</div>
