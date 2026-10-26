<script lang="ts">
  import {
    Accordion,
    AccordionHeader,
    AccordionItem,
    AccordionPanel,
    AccordionTrigger,
  } from "@ui-sdk/svelte/accordion"

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
</script>

<Accordion class="w-full max-w-md" multiple defaultValue={["install"]}>
  {#snippet children(state)}
    <p class="mb-2 text-sm text-muted-foreground">
      {state.value.length} of {steps.length} steps open
    </p>
    {#each steps as step (step.value)}
      <AccordionItem value={step.value}>
        {#snippet render({ props, state: itemState })}
          <div
            {...props}
            class={itemState.open ? "rounded-2xl bg-muted/50 px-3 transition-colors" : "rounded-2xl px-3 transition-colors"}
          >
            <AccordionHeader class="flex">
              {#snippet render({ props })}
                <h4 {...props}>
                  <AccordionTrigger
                    class="flex w-full items-center justify-between gap-4 py-3 text-start text-sm font-medium outline-none focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset"
                  >
                    {#snippet render({ props: triggerProps, state: triggerState })}
                      <button {...triggerProps}>
                        {#if triggerState.index >= 0}
                          <span aria-hidden="true" class="font-mono text-xs font-normal text-muted-foreground tabular-nums">
                            {String(triggerState.index + 1).padStart(2, "0")}
                          </span>
                        {/if}
                        <span class="flex-1">{step.label}</span>
                        <span aria-hidden="true" class="text-xs font-normal text-muted-foreground">
                          {triggerState.open ? "Hide" : "Show"}
                        </span>
                      </button>
                    {/snippet}
                  </AccordionTrigger>
                </h4>
              {/snippet}
            </AccordionHeader>
            <AccordionPanel
              class="h-(--accordion-panel-height) overflow-hidden text-sm transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0"
            >
              <div class="pb-3">{step.content}</div>
            </AccordionPanel>
          </div>
        {/snippet}
      </AccordionItem>
    {/each}
  {/snippet}
</Accordion>
