<script lang="ts">
  import { ArrowLeft, Moon, Users } from "@lucide/svelte"
  import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandGroupLabel,
    CommandInput,
    CommandItem,
    CommandItemIcon,
    CommandList,
    CommandPage,
    createCommandController,
  } from "@ui-sdk/svelte/command"

  const themes = [
    { value: "light", label: "Light" },
    { value: "dark", label: "Dark" },
    { value: "system", label: "System" },
  ]

  const teams = [
    { value: "design", label: "Design" },
    { value: "engineering", label: "Engineering" },
    { value: "marketing", label: "Marketing" },
  ]

  const command = createCommandController()
  let pages = $state<string[]>([])

  function onAction(value: string) {
    if (value === "back") command.pop()
  }
</script>

<Command
  bind:pages
  controller={command}
  class="flex h-80 w-full max-w-sm flex-col overflow-hidden rounded-3xl bg-popover p-1 text-popover-foreground ring-1 ring-foreground/5"
  {onAction}
>
  <div class="flex min-h-7 shrink-0 flex-wrap items-center gap-1 px-2 pt-1">
    {#each pages as page (page)}
      <span
        class="inline-flex h-5 items-center rounded-2xl bg-muted px-2 text-xs leading-4 font-medium text-muted-foreground capitalize"
        >{page}</span
      >
    {/each}
  </div>
  <div class="shrink-0 p-1 pb-0">
    <CommandInput
      aria-label="Search commands"
      placeholder={pages.length ? "Search… (Backspace to go back)" : "What do you need?"}
      class="m-0 box-border h-8 w-full min-w-0 shrink-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base leading-6 text-inherit transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm md:leading-5"
    />
  </div>
  <CommandEmpty class="m-0 shrink-0 py-6 text-center text-sm leading-5 text-muted-foreground empty:hidden">No results found.</CommandEmpty>
  <CommandList class="min-h-0 flex-1 scroll-py-1 overflow-x-hidden overflow-y-auto outline-none p-1">
    <CommandPage>
      <CommandGroup>
        <CommandGroupLabel class="px-2 py-1.5 text-xs leading-4 font-medium text-muted-foreground">Workspace</CommandGroupLabel>
        <CommandItem
          value="theme"
          page="theme"
          class="group relative flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm leading-5 outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 in-data-has-icons:not-data-has-icon:ps-8"
        >
          <CommandItemIcon class="flex shrink-0 text-muted-foreground group-data-highlighted:text-foreground">
            <Moon class="pointer-events-none block size-4 shrink-0" />
          </CommandItemIcon>
          Change theme…
        </CommandItem>
        <CommandItem
          value="teams"
          page="teams"
          class="group relative flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm leading-5 outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 in-data-has-icons:not-data-has-icon:ps-8"
        >
          <CommandItemIcon class="flex shrink-0 text-muted-foreground group-data-highlighted:text-foreground">
            <Users class="pointer-events-none block size-4 shrink-0" />
          </CommandItemIcon>
          Switch team…
        </CommandItem>
      </CommandGroup>
    </CommandPage>
    <CommandPage value="theme">
      {#each themes as theme (theme.value)}
        <CommandItem
          value={theme.value}
          class="group relative flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm leading-5 outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 in-data-has-icons:not-data-has-icon:ps-8"
        >
          {theme.label}
        </CommandItem>
      {/each}
    </CommandPage>
    <CommandPage value="teams">
      {#each teams as team (team.value)}
        <CommandItem
          value={team.value}
          class="group relative flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm leading-5 outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 in-data-has-icons:not-data-has-icon:ps-8"
        >
          {team.label}
        </CommandItem>
      {/each}
    </CommandPage>
    {#if pages.length > 0}
      <CommandItem
        value="back"
        class="group relative flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm leading-5 outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 in-data-has-icons:not-data-has-icon:ps-8"
      >
        <CommandItemIcon mirror class="flex shrink-0 text-muted-foreground group-data-highlighted:text-foreground">
          <ArrowLeft class="pointer-events-none block size-4 shrink-0" />
        </CommandItemIcon>
        Go back
      </CommandItem>
    {/if}
  </CommandList>
</Command>
