import "@ui-sdk/web/toolbar"
import "@ui-sdk/web/menu"
import { createElement, Link, Mail, Save, Share } from "lucide"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex flex-col items-start gap-3">
      <ui-toolbar aria-label="Document" class="flex w-fit items-center gap-1 rounded-3xl border border-border p-1">
        <ui-toolbar-button>
          <button value="save" class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none enabled:active:not-aria-disabled:translate-y-px motion-reduce:transform-none">
            ${createElement(Save, { class: "size-4", "aria-hidden": "true" }).outerHTML}
            Save
          </button>
        </ui-toolbar-button>
        <ui-menu>
          <ui-toolbar-button>
            <ui-menu-trigger>
              <button class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none data-open:bg-muted">
                ${createElement(Share, { class: "size-4", "aria-hidden": "true" }).outerHTML}
                Share
              </button>
            </ui-menu-trigger>
          </ui-toolbar-button>
          <ui-menu-content class="max-h-(--available-height) overflow-x-hidden overflow-y-auto rounded-2xl border-0 bg-popover p-1 text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none min-w-36">
            <ui-menu-item value="email" class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 leading-5">
              <ui-menu-item-icon class="flex text-muted-foreground">${createElement(Mail, { class: "size-4", "aria-hidden": "true" }).outerHTML}</ui-menu-item-icon>
              Email
            </ui-menu-item>
            <ui-menu-item value="link" class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 leading-5">
              <ui-menu-item-icon class="flex text-muted-foreground">${createElement(Link, { class: "size-4", "aria-hidden": "true" }).outerHTML}</ui-menu-item-icon>
              Copy link
            </ui-menu-item>
          </ui-menu-content>
        </ui-menu>
        <ui-toolbar-button>
          <button value="print" class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none enabled:active:not-aria-disabled:translate-y-px motion-reduce:transform-none">Print</button>
        </ui-toolbar-button>
      </ui-toolbar>
      <output class="text-sm text-muted-foreground">Last: nothing yet</output>
    </div>
  `
  const output = root.querySelector("output")!
  root.querySelectorAll<HTMLButtonElement>("button[value]").forEach((button) => {
    button.addEventListener("click", () => (output.textContent = `Last: ${button.value}`))
  })
  root.querySelector("ui-menu")!.addEventListener("action", (event) => {
    output.textContent = `Last: ${event.detail.value}`
  })
}

export { mount }
