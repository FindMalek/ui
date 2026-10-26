import { Tooltip, TooltipContent, TooltipTrigger } from "@ui-sdk/solid/tooltip"
import { createSignal, createUniqueId } from "solid-js"

function Example() {
  const id = createUniqueId()
  const [field, setField] = createSignal<HTMLDivElement | null>(null)

  return (
    <div class="grid w-full max-w-xs gap-2">
      <label for={id} class="text-sm leading-none font-medium">
        Webhook URL
      </label>
      <div
        ref={setField}
        class="flex h-8 items-center gap-1 rounded-2xl border border-transparent bg-input/50 ps-2.5 pe-0.5 transition-[color,box-shadow] duration-200 focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/30 motion-reduce:transition-none"
      >
        <input
          id={id}
          placeholder="https://"
          class="min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground md:text-sm"
        />
        <Tooltip>
          <TooltipTrigger
            aria-label="About webhooks"
            class="inline-flex size-7 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-aria-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-disabled:opacity-50 motion-reduce:transition-none"
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
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
          </TooltipTrigger>
          <TooltipContent
            anchor={field()}
            align="start"
            class="inline-flex w-(--anchor-width) origin-(--transform-origin) items-center gap-1.5 rounded-xl bg-foreground px-3 py-1.5 text-xs text-background transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 data-instant:transition-none motion-reduce:transition-none"
          >
            We send a POST request to this URL for every new order.
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  )
}

export { Example }
