import "@ui-sdk/web/accordion"
import { ChevronDown, createElement } from "lucide"

const items = [
  {
    value: "one",
    label: "Why animate the height?",
    content: "So the content below slides instead of jumping.",
  },
  {
    value: "two",
    label: "Where does the height come from?",
    content: "The panel measures itself and writes the result to a CSS variable while it animates.",
  },
  {
    value: "three",
    label: "Does it animate on first paint?",
    content: "No. Panels open on the server or on mount show at once.",
  },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="w-full max-w-md">
      <ui-accordion class="flex w-full max-w-md flex-col overflow-hidden rounded-2xl border border-border text-foreground" default-value="one">
        ${items
          .map(
            (item) => `
              <ui-accordion-item class="border-0 border-border not-last:border-b data-open:bg-muted/50" value="${item.value}">
                <ui-accordion-header>
                  <h3 class="m-0 flex [font:inherit]">
                    <ui-accordion-trigger>
                      <button type="button" class="group relative flex w-full cursor-default items-start justify-between gap-6 border border-transparent bg-transparent p-4 text-start text-sm leading-5 font-medium text-inherit outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset data-disabled:cursor-not-allowed data-disabled:opacity-50 aria-disabled:hover:no-underline">
                        ${item.label}
                        ${createElement(ChevronDown, { class: "pointer-events-none block size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-300 group-data-open:rotate-180", "aria-hidden": "true" }).outerHTML}
                      </button>
                    </ui-accordion-trigger>
                  </h3>
                </ui-accordion-header>
                <ui-accordion-panel class="box-border h-(--accordion-panel-height) overflow-hidden px-4 text-sm leading-5 transition-[height,opacity] duration-300 ease-in-out data-starting-style:h-0 data-ending-style:h-0 data-starting-style:opacity-0 data-ending-style:opacity-0">
                  <div class="m-0 pb-4">${item.content}</div>
                </ui-accordion-panel>
              </ui-accordion-item>`,
          )
          .join("")}
      </ui-accordion>
      <output class="mt-3 block min-h-10 text-sm leading-5 text-muted-foreground">Open or close an item.</output>
    </div>
  `
  const accordion = root.querySelector("ui-accordion")!
  accordion.addEventListener(
    "openchangecomplete",
    (event) => {
      const open = (event as CustomEvent<{ value: boolean }>).detail.value
      const value = (event.target as HTMLElement).getAttribute("value")
      const label = items.find((item) => item.value === value)!.label
      root.querySelector("output")!.textContent =
        `${open ? "Finished opening" : "Finished closing"} “${label}”`
    },
    { capture: true },
  )
}

export { mount }
