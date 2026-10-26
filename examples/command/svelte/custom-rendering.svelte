<script lang="ts">
  import { CornerDownLeft } from "@lucide/svelte"
  import { Command, CommandInput, CommandItem, CommandList } from "@ui-sdk/svelte/command"

  const pages = ["Anatomy", "Installation", "Styling"]
</script>

<Command>
  {#snippet render({ props, state })}
    <div
      {...props}
      class="flex min-h-40 w-full max-w-sm flex-col overflow-hidden rounded-3xl bg-popover p-1 text-popover-foreground ring-1 ring-foreground/5"
    >
      <div class="shrink-0 p-1 pb-0">
        <CommandInput aria-label="Search docs" placeholder="Search docs...">
          {#snippet render({ props: input })}
            <input
              {...input}
              class="m-0 box-border h-8 w-full min-w-0 shrink-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base leading-6 text-inherit transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm md:leading-5"
            />
          {/snippet}
        </CommandInput>
      </div>
      <CommandList class="min-h-0 p-1 outline-none">
        {#each pages as page (page)}
          <CommandItem value={page}>
            {#snippet render({ props: item, state: command })}
              <a
                {...item}
                href="#{page.toLowerCase()}"
                class="group relative flex min-h-7 cursor-default items-center justify-between gap-2 rounded-xl px-2 py-1.5 text-sm leading-5 outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 no-underline"
              >
                {page}
                {#if command.highlighted}<CornerDownLeft aria-hidden="true" class="pointer-events-none block size-4 shrink-0 text-muted-foreground" />{/if}
              </a>
            {/snippet}
          </CommandItem>
        {/each}
      </CommandList>
    </div>
  {/snippet}
</Command>
