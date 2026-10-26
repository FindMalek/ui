"use client"

import { Listbox, ListboxItem } from "@ui-sdk/react/listbox"
import { ExternalLink } from "lucide-react"

const frameworks = [
  { value: "next", label: "Next.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
  { value: "nuxt", label: "Nuxt" },
  { value: "sveltekit", label: "SvelteKit" },
]

function Example() {
  return (
    <Listbox
      defaultValue="next"
      activation="manual"
      aria-label="Framework docs"
      className="box-border flex w-full max-w-64 flex-col gap-0.5 rounded-2xl border border-border bg-background p-1 text-sm leading-5 text-foreground outline-none"
    >
      {frameworks.map((framework) => (
        <ListboxItem
          key={framework.value}
          value={framework.value}
          label={framework.label}
          render={<a href={`#${framework.value}`} />}
          className="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm leading-5 outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50 text-inherit no-underline data-selected:font-medium"
        >
          {(state) => (
            <>
              <span>{framework.label}</span>
              {state.selected && (
                <ExternalLink
                  aria-hidden="true"
                  className="pointer-events-none block size-4 shrink-0 ms-auto text-muted-foreground"
                />
              )}
            </>
          )}
        </ListboxItem>
      ))}
    </Listbox>
  )
}

export { Example }
