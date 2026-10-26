<script lang="ts">
  import { File } from "@lucide/svelte"
  import { Listbox, ListboxItem, ListboxItemIcon } from "@ui-sdk/svelte/listbox"

  const files = [
    { value: "readme", label: "README.md" },
    { value: "package", label: "package.json" },
    { value: "tsconfig", label: "tsconfig.json" },
    { value: "index", label: "index.ts" },
    { value: "styles", label: "styles.css" },
    { value: "logo", label: "logo.svg" },
  ]

  let value = $state<string[]>(["readme"])
</script>

<div class="flex w-full max-w-64 flex-col gap-3">
  <Listbox
    bind:value
    multiple
    activation="automatic"
    aria-label="Files"
    class="box-border flex w-full max-w-64 flex-col gap-0.5 rounded-2xl border border-border bg-background p-1 text-sm leading-5 text-foreground outline-none"
  >
    {#each files as file (file.value)}
      <ListboxItem
        value={file.value}
        class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm leading-5 outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50 data-selected:bg-accent data-selected:text-accent-foreground data-selected:font-medium"
      >
        <ListboxItemIcon class="flex text-muted-foreground group-data-highlighted:text-accent-foreground group-data-selected:text-accent-foreground">
          <File aria-hidden="true" class="pointer-events-none block size-4 shrink-0" />
        </ListboxItemIcon>
        {file.label}
      </ListboxItem>
    {/each}
  </Listbox>
  <output class="m-0 block min-h-10 text-sm leading-5 break-words text-muted-foreground">{value.length} selected</output>
</div>
