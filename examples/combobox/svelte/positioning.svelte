<script lang="ts">
  import { Check } from "@lucide/svelte"
  import {
    Combobox,
    ComboboxArrow,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxInput,
    ComboboxItem,
    ComboboxItemIndicator,
    ComboboxList,
  } from "@ui-sdk/svelte/combobox"

  const frameworks = [
    { value: "next", label: "Next.js" },
    { value: "sveltekit", label: "SvelteKit" },
    { value: "nuxt", label: "Nuxt" },
    { value: "remix", label: "Remix" },
    { value: "astro", label: "Astro" },
    { value: "solidstart", label: "SolidStart" },
    { value: "qwik", label: "Qwik City" },
  ]

  const sides = ["top", "right", "bottom", "left"] as const
  const aligns = ["start", "center", "end"] as const

  let side: (typeof sides)[number] = $state("bottom")
  let align: (typeof aligns)[number] = $state("start")
  let box: HTMLDivElement | undefined = $state()
  let anchored = $state(false)
</script>

<div class="flex flex-col items-center gap-4">
  <div class="flex flex-col items-center gap-2">
    <div
      role="group"
      aria-label="Side"
      class="inline-flex h-8 w-fit items-center justify-center rounded-2xl bg-muted p-[3px] text-muted-foreground"
    >
      {#each sides as value (value)}
        <button
          type="button"
          aria-pressed={side === value}
          class="inline-flex h-full flex-1 items-center justify-center rounded-2xl border border-transparent px-2.5 py-0.5 text-sm font-medium whitespace-nowrap text-foreground/60 outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:bg-background aria-pressed:text-foreground aria-pressed:shadow-sm dark:text-muted-foreground dark:aria-pressed:border-input dark:aria-pressed:bg-input/30 dark:aria-pressed:text-foreground"
          onclick={() => (side = value)}
        >
          {value}
        </button>
      {/each}
    </div>
    <div
      role="group"
      aria-label="Align"
      class="inline-flex h-8 w-fit items-center justify-center rounded-2xl bg-muted p-[3px] text-muted-foreground"
    >
      {#each aligns as value (value)}
        <button
          type="button"
          aria-pressed={align === value}
          class="inline-flex h-full flex-1 items-center justify-center rounded-2xl border border-transparent px-2.5 py-0.5 text-sm font-medium whitespace-nowrap text-foreground/60 outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:bg-background aria-pressed:text-foreground aria-pressed:shadow-sm dark:text-muted-foreground dark:aria-pressed:border-input dark:aria-pressed:bg-input/30 dark:aria-pressed:text-foreground"
          onclick={() => (align = value)}
        >
          {value}
        </button>
      {/each}
    </div>
    <label class="flex items-center gap-2 text-sm text-muted-foreground">
      <input bind:checked={anchored} type="checkbox" class="size-4 accent-primary" />
      Anchor to the box
    </label>
  </div>
  <div bind:this={box} class="flex items-center justify-center rounded-3xl border border-dashed border-border p-6">
    <Combobox>
      <div class="w-40">
        <ComboboxInput
          aria-label="Framework"
          placeholder="Framework"
          class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 md:text-sm"
        />
      </div>
      <ComboboxContent
        {side}
        {align}
        sideOffset={10}
        alignOffset={0}
        collisionPadding={16}
        anchor={anchored ? box : null}
        class="w-44 min-w-36 origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10"
      >
        <ComboboxArrow
          class="size-2.5 rotate-45 border-foreground/5 bg-popover data-[side=bottom]:-top-[5px] data-[side=bottom]:border-t data-[side=bottom]:border-l data-[side=left]:-right-[5px] data-[side=left]:border-t data-[side=left]:border-r data-[side=right]:-left-[5px] data-[side=right]:border-b data-[side=right]:border-l data-[side=top]:-bottom-[5px] data-[side=top]:border-r data-[side=top]:border-b dark:border-foreground/10"
        />
        <ComboboxEmpty class="py-2 text-center text-sm text-muted-foreground empty:hidden">No frameworks found.</ComboboxEmpty>
        <ComboboxList>
          {#each frameworks as framework (framework.value)}
            <ComboboxItem
              value={framework.value}
              label={framework.label}
              class="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm ring-ring/30 outline-none select-none ring-inset data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 in-data-[modality=keyboard]:data-highlighted:ring-2"
            >
              {framework.label}
              <ComboboxItemIndicator class="pointer-events-none absolute end-2 flex size-4 items-center justify-center">
                <Check class="size-4" />
              </ComboboxItemIndicator>
            </ComboboxItem>
          {/each}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  </div>
</div>
