import "@ui-sdk/web/collapsible"
import { ChevronDown, createElement } from "lucide"

const notes = [
  "Search now matches file contents, not only names.",
  "Shared links remember the folder they were opened from.",
  "Uploads resume after the connection drops.",
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="w-full max-w-sm text-sm">
      <ui-collapsible class="rounded-3xl border border-border bg-card p-2 text-card-foreground">
        <ui-collapsible-trigger>
          <button class="group flex h-8 w-full items-center justify-between gap-1.5 rounded-2xl border border-transparent px-3 text-start font-medium cursor-default outline-none select-none transition-[color,background-color,box-shadow] motion-reduce:transition-none bg-secondary text-secondary-foreground not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30">
            Release notes
            ${createElement(ChevronDown, { class: "size-4 shrink-0 text-muted-foreground transition-transform duration-300 group-data-open:rotate-180 motion-reduce:transition-none", "aria-hidden": "true" }).outerHTML}
          </button>
        </ui-collapsible-trigger>
        <ui-collapsible-panel class="h-(--collapsible-panel-height) overflow-hidden transition-[height,opacity] duration-300 ease-in-out data-starting-style:h-0 data-starting-style:opacity-0 data-ending-style:h-0 data-ending-style:opacity-0 motion-reduce:transition-none">
          <ul class="flex list-disc flex-col gap-1 ps-8 pe-3 pt-1 pb-2 text-muted-foreground">
            ${notes.map((note) => `<li>${note}</li>`).join("")}
          </ul>
        </ui-collapsible-panel>
      </ui-collapsible>
      <output class="mt-3 block text-muted-foreground">Not animated yet</output>
    </div>
  `
  root.querySelector("ui-collapsible")!.addEventListener("openchangecomplete", (event) => {
    const open = (event as CustomEvent<{ value: boolean }>).detail.value
    root.querySelector("output")!.textContent = `Finished ${open ? "opening" : "closing"}`
  })
}

export { mount }
