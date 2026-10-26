import "@ui-sdk/web/accordion"

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

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="w-full max-w-md">
      <p class="mb-2 text-sm text-muted-foreground">1 of ${steps.length} steps open</p>
      <ui-accordion class="[counter-reset:step]" multiple default-value="install">
        ${steps
          .map(
            (step) => `
              <ui-accordion-item class="rounded-2xl px-3 [counter-increment:step] transition-colors data-open:bg-muted/50" value="${step.value}">
                <ui-accordion-header>
                  <h4 class="flex">
                    <ui-accordion-trigger>
                      <button class="group flex w-full items-center justify-between gap-4 py-3 text-start text-sm font-medium outline-none focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset">
                        <span aria-hidden="true" class="font-mono text-xs font-normal text-muted-foreground tabular-nums before:content-[counter(step,decimal-leading-zero)]"></span>
                        <span class="flex-1">${step.label}</span>
                        <span aria-hidden="true" class="text-xs font-normal text-muted-foreground group-data-open:hidden">Show</span>
                        <span aria-hidden="true" class="hidden text-xs font-normal text-muted-foreground group-data-open:inline">Hide</span>
                      </button>
                    </ui-accordion-trigger>
                  </h4>
                </ui-accordion-header>
                <ui-accordion-panel class="h-(--accordion-panel-height) overflow-hidden text-sm transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0">
                  <div class="pb-3">${step.content}</div>
                </ui-accordion-panel>
              </ui-accordion-item>`,
          )
          .join("")}
      </ui-accordion>
    </div>
  `
  root.querySelector("ui-accordion")!.addEventListener("valuechange", (event) => {
    const { value } = (event as CustomEvent<{ value: string[] }>).detail
    root.querySelector("p")!.textContent = `${value.length} of ${steps.length} steps open`
  })
}
