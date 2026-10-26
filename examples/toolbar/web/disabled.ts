import "@ui-sdk/web/toolbar"
import { Archive, createElement, Mail, Trash } from "lucide"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex flex-col items-start gap-3">
      <ui-toolbar aria-label="Message" class="flex w-fit items-center gap-1 rounded-3xl border border-border p-1">
        <ui-toolbar-button>
          <button class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none enabled:active:not-aria-disabled:translate-y-px motion-reduce:transform-none">
            ${createElement(Mail, { class: "size-4", "aria-hidden": "true" }).outerHTML}
            Reply
          </button>
        </ui-toolbar-button>
        <ui-toolbar-button disabled>
          <button class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none enabled:active:not-aria-disabled:translate-y-px motion-reduce:transform-none">
            ${createElement(Archive, { class: "size-4", "aria-hidden": "true" }).outerHTML}
            Archive
          </button>
        </ui-toolbar-button>
        <ui-toolbar-button disabled focusable-when-disabled="false">
          <button aria-label="Delete" class="inline-flex size-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none enabled:active:not-aria-disabled:translate-y-px motion-reduce:transform-none">
            ${createElement(Trash, { class: "size-4", "aria-hidden": "true" }).outerHTML}
          </button>
        </ui-toolbar-button>
      </ui-toolbar>
      <ui-toolbar disabled aria-label="Comment" class="flex w-fit items-center gap-1 rounded-3xl border border-border p-1">
        <ui-toolbar-input>
          <input aria-label="Comment" value="Read only for now" class="h-8 w-40 min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 md:text-sm motion-reduce:transition-none" />
        </ui-toolbar-input>
        <ui-toolbar-button>
          <button class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none enabled:active:not-aria-disabled:translate-y-px motion-reduce:transform-none">Send</button>
        </ui-toolbar-button>
      </ui-toolbar>
    </div>
  `
}

export { mount }
