<script lang="ts">
  import { Command, CommandInput, CommandItem, CommandList, CommandPage } from "@ui-sdk/svelte/command"

  const themes = [
    { value: "light", label: "Light" },
    { value: "dark", label: "Dark" },
    { value: "system", label: "System" },
  ]

  let value = $state<string | null>("dark")
  let query = $state("")
  let pages = $state(["theme"])
  let reason = $state("")
</script>

<div class="flex w-full max-w-sm flex-col gap-3">
  <Command
    bind:value
    bind:query
    bind:pages
    class="flex flex-col overflow-hidden rounded-3xl bg-popover p-1 text-popover-foreground shadow-sm ring-1 ring-foreground/5 dark:ring-foreground/10"
    onValueChange={(_next: string | null, details: { reason: string }) => (reason = details.reason)}
  >
    <div class="p-1 pb-0">
      <CommandInput
        aria-label="Search themes"
        placeholder="Search themes..."
        class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 md:text-sm"
      />
    </div>
    <CommandList class="p-1 outline-none">
      <CommandPage>
        <CommandItem
          value="theme"
          page="theme"
          class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
          >Change theme…</CommandItem
        >
      </CommandPage>
      <CommandPage value="theme">
        {#each themes as theme (theme.value)}
          <CommandItem
            value={theme.value}
            class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
          >
            {theme.label}
          </CommandItem>
        {/each}
      </CommandPage>
    </CommandList>
  </Command>
  <output class="text-sm text-muted-foreground">
    Highlighted {value ?? "nothing"} ({reason || "start"}), text “{query}”, pages [{pages.join(", ")}]
  </output>
  <Command
    defaultValue="system"
    defaultQuery="s"
    defaultPages={[]}
    debug
    class="flex flex-col overflow-hidden rounded-3xl bg-popover p-1 text-popover-foreground shadow-sm ring-1 ring-foreground/5 dark:ring-foreground/10"
  >
    <div class="p-1 pb-0">
      <CommandInput
        aria-label="Search themes, uncontrolled"
        class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 md:text-sm"
      />
    </div>
    <CommandList class="p-1 outline-none">
      {#each themes as theme (theme.value)}
        <CommandItem
          value={theme.value}
          class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
        >
          {theme.label}
        </CommandItem>
      {/each}
    </CommandList>
  </Command>
</div>
