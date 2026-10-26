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
} from "@ui-sdk/react/combobox"
import { Check, ChevronDown } from "lucide-react"
import * as React from "react"

const frameworks = [
  { value: "next", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt", label: "Nuxt" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
  { value: "solidstart", label: "SolidStart" },
  { value: "qwik", label: "Qwik City" },
]

export function Example() {
  const [status, setStatus] = React.useState("Closed")

  return (
    <Combobox
      onOpenChange={(open) => setStatus(open ? "Opening…" : "Closing…")}
      onOpenChangeComplete={(open) => setStatus(open ? "Open" : "Closed")}
    >
      <div className="flex w-64 flex-col gap-2">
        <ComboboxLabel className="text-sm leading-none font-medium">Framework</ComboboxLabel>
        <div className="relative">
          <ComboboxInput
            placeholder="Select a framework"
            className="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 py-1 ps-2.5 pe-8 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 md:text-sm"
          />
          <ComboboxTrigger
            aria-label="Show frameworks"
            className="group absolute end-1 top-1/2 inline-flex size-6 -translate-y-1/2 items-center justify-center rounded-xl text-muted-foreground outline-none transition-[color,background-color] hover:bg-muted hover:text-foreground data-open:bg-muted data-disabled:pointer-events-none dark:hover:bg-muted/50"
          >
            <ChevronDown className="size-4 transition-transform duration-300 group-data-open:rotate-180" />
          </ComboboxTrigger>
        </div>
        <output className="text-sm text-muted-foreground">{status}</output>
      </div>
      <ComboboxContent className="max-h-[min(18rem,var(--available-height))] w-(--anchor-width) min-w-36 origin-(--transform-origin) scroll-py-1 overflow-y-auto rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,translate,scale] duration-300 ease-out data-ending-style:opacity-0 data-ending-style:duration-150 data-starting-style:-translate-y-2 data-starting-style:scale-y-90 data-starting-style:opacity-0 dark:ring-foreground/10">
        <ComboboxEmpty className="py-2 text-center text-sm text-muted-foreground empty:hidden">
          No frameworks found.
        </ComboboxEmpty>
        <ComboboxList>
          {frameworks.map((framework) => (
            <ComboboxItem
              key={framework.value}
              value={framework.value}
              label={framework.label}
              className="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm ring-ring/30 outline-none select-none ring-inset data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 in-data-[modality=keyboard]:data-highlighted:ring-2"
            >
              {framework.label}
              <ComboboxItemIndicator
                keepMounted
                className="pointer-events-none absolute end-2 flex size-4 scale-50 items-center justify-center opacity-0 transition-[opacity,scale] duration-200 data-selected:scale-100 data-selected:opacity-100"
              >
                <Check className="size-4" />
              </ComboboxItemIndicator>
            </ComboboxItem>
          ))}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}
