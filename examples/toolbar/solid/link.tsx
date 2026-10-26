import { Toolbar, ToolbarButton, ToolbarLink, ToolbarSeparator } from "@ui-sdk/solid/toolbar"
import { createSignal } from "solid-js"

function Example() {
  const [page, setPage] = createSignal("conversation")
  const follow = (event: MouseEvent & { currentTarget: HTMLAnchorElement }) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return
    }
    event.preventDefault()
    setPage(event.currentTarget.hash.slice(1))
  }
  return (
    <div class="flex flex-col items-start gap-3">
      <Toolbar
        aria-label="Pull request"
        class="flex w-fit items-center gap-1 rounded-3xl border border-border p-1"
      >
        <ToolbarButton
          aria-label="Approve"
          class="inline-flex size-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none enabled:active:not-aria-disabled:translate-y-px motion-reduce:transform-none"
        >
          <svg
            class="size-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </ToolbarButton>
        <ToolbarButton
          aria-label="Comment"
          class="inline-flex size-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none enabled:active:not-aria-disabled:translate-y-px motion-reduce:transform-none"
        >
          <svg
            class="size-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
          </svg>
        </ToolbarButton>
        <ToolbarSeparator class="mx-1 h-5 w-px shrink-0 bg-border" />
        <ToolbarLink
          href="#files"
          onClick={follow}
          class="inline-flex h-8 items-center gap-1.5 rounded-2xl px-3 text-sm font-medium whitespace-nowrap text-foreground underline-offset-4 cursor-default outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none"
        >
          <svg
            class="size-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
            <path d="M14 2v5a1 1 0 0 0 1 1h5" />
          </svg>
          Files changed
        </ToolbarLink>
        <ToolbarLink
          aria-label="Checks"
          href="#checks"
          onClick={follow}
          class="inline-flex size-8 items-center justify-center gap-1.5 rounded-2xl text-sm font-medium whitespace-nowrap text-foreground underline-offset-4 cursor-default outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none"
        >
          <svg
            class="size-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M15 3h6v6" />
            <path d="M10 14 21 3" />
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          </svg>
        </ToolbarLink>
      </Toolbar>
      <p class="text-sm text-muted-foreground">Showing: {page()}</p>
    </div>
  )
}

export { Example }
