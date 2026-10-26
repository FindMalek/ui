import { createAccordionController } from "@ui-sdk/core/accordion"
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@ui-sdk/solid/accordion"
import { createSignal, For } from "solid-js"

const items = [
  { value: "account", label: "Account", content: "Your name, email address and profile photo." },
  { value: "security", label: "Security", content: "Your password, passkeys and two-factor authentication." },
  { value: "sessions", label: "Sessions", content: "Devices signed in to your account in the last 30 days." },
]

function Example() {
  const accordion = createAccordionController()
  const [value, setValue] = createSignal(["account"])
  const [reason, setReason] = createSignal("")

  return (
    <div class="w-full max-w-md">
      <div class="mb-2 flex flex-wrap gap-2">
        <button
          type="button"
          class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm leading-5 font-medium whitespace-nowrap text-foreground transition-all select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 hover:bg-muted hover:text-foreground active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50"
          onClick={() => accordion.setValue(items.map((item) => item.value))}
        >
          Expand all
        </button>
        <button
          type="button"
          class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm leading-5 font-medium whitespace-nowrap text-foreground transition-all select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 hover:bg-muted hover:text-foreground active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50"
          onClick={() => accordion.setValue([])}
        >
          Collapse all
        </button>
        <button
          type="button"
          class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm leading-5 font-medium whitespace-nowrap text-foreground transition-all select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 hover:bg-muted hover:text-foreground active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50"
          onClick={() => accordion.open("security")}
        >
          Review security
        </button>
      </div>
      <Accordion
        class="flex w-full max-w-md flex-col overflow-hidden rounded-2xl border border-border text-foreground"
        multiple
        value={value()}
        onValueChange={(next, details) => {
          setValue(next)
          setReason(details.reason)
        }}
        controller={accordion}
      >
        <For each={items}>
          {(item) => (
            <AccordionItem
              class="border-0 border-border not-last:border-b data-open:bg-muted/50"
              value={item.value}
              onOpenChange={(open, details) => {
                if (!open && item.value === "security" && !window.confirm("Close the security settings?"))
                  details.cancel()
              }}
            >
              <AccordionHeader class="m-0 flex [font:inherit]">
                <AccordionTrigger class="group relative flex w-full cursor-default items-start justify-between gap-6 border border-transparent bg-transparent p-4 text-start text-sm leading-5 font-medium text-inherit outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset data-disabled:cursor-not-allowed data-disabled:opacity-50 aria-disabled:hover:no-underline">
                  {item.label}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                    class="pointer-events-none block size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200 group-data-open:rotate-180"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionPanel class="box-border h-(--accordion-panel-height) overflow-hidden px-4 text-sm leading-5 transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0">
                <div class="m-0 pb-4">{item.content}</div>
              </AccordionPanel>
            </AccordionItem>
          )}
        </For>
      </Accordion>
      <output class="mt-2 block min-h-10 text-sm leading-5 text-muted-foreground">
        Open: {value().join(", ") || "none"}
        {reason() ? `, last change: ${reason()}` : ""}
      </output>
    </div>
  )
}

export { Example }
