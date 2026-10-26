import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@ui-sdk/solid/accordion"
import { For } from "solid-js"

const steps = [
  {
    value: "install",
    label: "Install the package",
    content: "Add it with your package manager. It has no dependencies.",
  },
  {
    value: "import",
    label: "Import the parts",
    content: "Import the accordion parts you need from the package.",
  },
  {
    value: "style",
    label: "Style it",
    content: "Every part takes your classes and renders its state as attributes.",
  },
]

export function Example() {
  return (
    <Accordion
      class="w-full max-w-md"
      multiple
      defaultValue={["install"]}
      render={(props, state) => (
        <div {...props}>
          <p class="mb-2 text-sm text-muted-foreground">
            {state.value.length} of {steps.length} steps open
          </p>
          {props.children}
        </div>
      )}
    >
      <For each={steps}>
        {(step) => (
          <AccordionItem
            value={step.value}
            class={(state) =>
              state.open
                ? "rounded-2xl bg-muted/50 px-3 transition-colors"
                : "rounded-2xl px-3 transition-colors"
            }
          >
            <AccordionHeader class="flex" render={(props) => <h4 {...props} />}>
              <AccordionTrigger
                class="flex w-full items-center justify-between gap-4 py-3 text-start text-sm font-medium outline-none focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset"
                render={(props, state) => (
                  <button {...props}>
                    {state.index >= 0 && (
                      <span
                        aria-hidden="true"
                        class="font-mono text-xs font-normal text-muted-foreground tabular-nums"
                      >
                        {String(state.index + 1).padStart(2, "0")}
                      </span>
                    )}
                    <span class="flex-1">{props.children}</span>
                    <span aria-hidden="true" class="text-xs font-normal text-muted-foreground">
                      {state.open ? "Hide" : "Show"}
                    </span>
                  </button>
                )}
              >
                {step.label}
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionPanel class="h-(--accordion-panel-height) overflow-hidden text-sm transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0">
              <div class="pb-3">{step.content}</div>
            </AccordionPanel>
          </AccordionItem>
        )}
      </For>
    </Accordion>
  )
}
