import "@ui-sdk/web/input"
import { Search, X, createElement } from "lucide"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex w-full max-w-sm flex-col gap-3 text-foreground">
      <ui-input-group class="flex h-8 w-full min-w-0 items-center gap-2 rounded-2xl border border-transparent bg-input/50 px-2.5 text-sm text-muted-foreground transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30 data-disabled:opacity-50 motion-reduce:transition-none">
        ${createElement(Search, { class: "size-4 shrink-0", "aria-hidden": "true" }).outerHTML}
        <ui-input>
          <input type="search" aria-label="Search people" value="Lovelace" class="h-full min-w-0 flex-1 border-0 bg-transparent p-0 text-base text-foreground outline-none placeholder:text-muted-foreground md:text-sm [&::-webkit-search-cancel-button]:hidden" />
        </ui-input>
        <ui-input-clear>
          <button type="button" aria-label="Clear search" class="-me-1.5 inline-flex size-6 shrink-0 cursor-default items-center justify-center rounded-xl border-0 bg-transparent p-0 text-muted-foreground transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none">
            ${createElement(X, { class: "size-4 shrink-0", "aria-hidden": "true" }).outerHTML}
          </button>
        </ui-input-clear>
      </ui-input-group>
      <p class="min-h-5 text-sm text-muted-foreground">Type, or clear the search.</p>
    </div>
  `
  root.querySelector("ui-input")!.addEventListener("valuechange", (event) => {
    root.querySelector("p")!.textContent = `Last change: ${event.detail.reason}`
  })
}
