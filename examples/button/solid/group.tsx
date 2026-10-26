import { Button } from "@ui-sdk/solid/button"
import { For } from "solid-js"

const actions = ["Archive", "Report", "Snooze"]

export function Example() {
  return (
    <div role="group" aria-label="Message actions" class="inline-flex">
      <For each={actions}>
        {(action) => (
          <Button class="-ms-px inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-none border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] first:ms-0 first:rounded-s-2xl last:rounded-e-2xl hover:bg-muted hover:text-foreground focus-visible:z-10 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-transparent dark:hover:bg-input/30">
            {action}
          </Button>
        )}
      </For>
    </div>
  )
}
