<script lang="ts">
  import { Check, ChevronDown } from "@lucide/svelte"
  import {
    Combobox,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxInput,
    ComboboxItem,
    ComboboxItemIndicator,
    ComboboxLabel,
    ComboboxList,
    ComboboxTrigger,
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

  const modes = [
    { value: false, label: "Non-modal" },
    { value: "pointer", label: "Pointer" },
    { value: true, label: "Modal" },
  ] as const

  let modal: boolean | "pointer" = $state(false)
  let presses = $state(0)
</script>

<div class="flex w-64 flex-col gap-4">
  <div
    role="group"
    aria-label="Modal"
    class="inline-flex h-8 w-fit items-center justify-center rounded-2xl bg-muted p-[3px] text-muted-foreground"
  >
    {#each modes as mode (mode.label)}
      <button
        type="button"
        aria-pressed={modal === mode.value}
        class="inline-flex h-full flex-1 items-center justify-center rounded-2xl border border-transparent px-2.5 py-0.5 text-sm font-medium whitespace-nowrap text-foreground/60 outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:bg-background aria-pressed:text-foreground aria-pressed:shadow-sm dark:text-muted-foreground dark:aria-pressed:border-input dark:aria-pressed:bg-input/30 dark:aria-pressed:text-foreground"
        onclick={() => (modal = mode.value)}
      >
        {mode.label}
      </button>
    {/each}
  </div>
  <Combobox {modal}>
    <div class="flex flex-col gap-2">
      <ComboboxLabel class="text-sm leading-none font-medium">Framework</ComboboxLabel>
      <div class="relative">
        <ComboboxInput
          placeholder="Select a framework"
          class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 py-1 ps-2.5 pe-8 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 md:text-sm"
        />
        <ComboboxTrigger
          aria-label="Show frameworks"
          class="group absolute end-1 top-1/2 inline-flex size-6 -translate-y-1/2 items-center justify-center rounded-xl text-muted-foreground outline-none transition-[color,background-color] hover:bg-muted hover:text-foreground data-open:bg-muted data-disabled:pointer-events-none dark:hover:bg-muted/50"
        >
          <ChevronDown class="size-4 transition-transform group-data-open:rotate-180" />
        </ComboboxTrigger>
      </div>
    </div>
    <ComboboxContent
      class="max-h-[min(18rem,var(--available-height))] w-(--anchor-width) min-w-36 origin-(--transform-origin) scroll-py-1 overflow-y-auto rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10"
    >
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
  <button
    type="button"
    class="self-start inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-transparent dark:hover:bg-input/30"
    onclick={() => presses++}
  >
    Pressed {presses} times
  </button>
</div>
