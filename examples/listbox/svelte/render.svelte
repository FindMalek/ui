<script lang="ts">
  import { ExternalLink } from "@lucide/svelte"
  import { Listbox, ListboxItem } from "@ui-sdk/svelte/listbox"

  const frameworks = [
    { value: "next", label: "Next.js" },
    { value: "remix", label: "Remix" },
    { value: "astro", label: "Astro" },
    { value: "nuxt", label: "Nuxt" },
    { value: "sveltekit", label: "SvelteKit" },
  ]
</script>

<Listbox
  defaultValue="next"
  activation="manual"
  aria-label="Framework docs"
  class="box-border flex w-full max-w-64 flex-col gap-0.5 rounded-2xl border border-border bg-background p-1 text-sm leading-5 text-foreground outline-none"
>
  {#each frameworks as framework (framework.value)}
    <ListboxItem
      href={`#${framework.value}`}
      value={framework.value}
      label={framework.label}
      class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm leading-5 outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50 text-inherit no-underline data-selected:font-medium"
    >
      {#snippet render({ props, state })}
        <a {...props}>
          <span>{framework.label}</span>
          {#if state.selected}
            <ExternalLink aria-hidden="true" class="pointer-events-none block size-4 shrink-0 ms-auto text-muted-foreground" />
          {/if}
        </a>
      {/snippet}
    </ListboxItem>
  {/each}
</Listbox>
