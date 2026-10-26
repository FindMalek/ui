import "@ui-sdk/web/pagination"
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, createElement } from "lucide"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-pagination aria-label="Pagination" page-count="10">
      <ui-pagination-list class="flex flex-wrap items-center justify-center gap-1">
        <ui-pagination-item>
          <ui-pagination-first>
            <button aria-label="First page" class="inline-flex size-8 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent text-sm font-medium whitespace-nowrap text-foreground select-none outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none gap-1.5 not-data-disabled:hover:bg-muted data-disabled:cursor-default data-disabled:opacity-50">
              ${createElement(ChevronsLeft, { class: "size-4 rtl:rotate-180", "aria-hidden": "true" }).outerHTML}
            </button>
          </ui-pagination-first>
        </ui-pagination-item>
        <ui-pagination-item>
          <ui-pagination-previous>
            <button aria-label="Previous page" class="inline-flex size-8 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent text-sm font-medium whitespace-nowrap text-foreground select-none outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none gap-1.5 not-data-disabled:hover:bg-muted data-disabled:cursor-default data-disabled:opacity-50">
              ${createElement(ChevronLeft, { class: "size-4 rtl:rotate-180", "aria-hidden": "true" }).outerHTML}
            </button>
          </ui-pagination-previous>
        </ui-pagination-item>
        <ui-pagination-item class="px-2 text-sm text-muted-foreground tabular-nums">
          <span aria-live="polite">Page 1 of 10</span>
        </ui-pagination-item>
        <ui-pagination-item>
          <ui-pagination-next>
            <button aria-label="Next page" class="inline-flex size-8 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent text-sm font-medium whitespace-nowrap text-foreground select-none outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none gap-1.5 not-data-disabled:hover:bg-muted data-disabled:cursor-default data-disabled:opacity-50">
              ${createElement(ChevronRight, { class: "size-4 rtl:rotate-180", "aria-hidden": "true" }).outerHTML}
            </button>
          </ui-pagination-next>
        </ui-pagination-item>
        <ui-pagination-item>
          <ui-pagination-last>
            <button aria-label="Last page" class="inline-flex size-8 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent text-sm font-medium whitespace-nowrap text-foreground select-none outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none gap-1.5 not-data-disabled:hover:bg-muted data-disabled:cursor-default data-disabled:opacity-50">
              ${createElement(ChevronsRight, { class: "size-4 rtl:rotate-180", "aria-hidden": "true" }).outerHTML}
            </button>
          </ui-pagination-last>
        </ui-pagination-item>
      </ui-pagination-list>
    </ui-pagination>
  `
  const pagination = root.querySelector("ui-pagination")!
  const status = root.querySelector("[aria-live]")!
  pagination.addEventListener("pagechange", (event) => {
    status.textContent = `Page ${event.detail.value} of ${pagination.api.getPageCount()}`
  })
}

export { mount }
