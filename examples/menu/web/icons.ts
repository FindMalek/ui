import "@ui-sdk/web/menu"
import { createElement, Download, Link, Mail, Reply, Share } from "lucide"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-menu>
      <ui-menu-trigger>
        <button class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">
          ${createElement(Share, { class: "size-4", "aria-hidden": "true" }).outerHTML}
          Share
        </button>
      </ui-menu-trigger>
      <ui-menu-content class="min-w-40 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none">
        <ui-menu-item class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4" value="copy-link">
          <ui-menu-item-icon class="flex text-muted-foreground group-data-highlighted:text-accent-foreground">
            ${createElement(Link, { class: "size-4", "aria-hidden": "true" }).outerHTML}
          </ui-menu-item-icon>
          Copy link
        </ui-menu-item>
        <ui-menu-item class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4" value="email">
          <ui-menu-item-icon class="flex text-muted-foreground group-data-highlighted:text-accent-foreground">
            ${createElement(Mail, { class: "size-4", "aria-hidden": "true" }).outerHTML}
          </ui-menu-item-icon>
          Email
        </ui-menu-item>
        <ui-menu-item class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4" value="reply">
          <ui-menu-item-icon mirror class="flex text-muted-foreground group-data-highlighted:text-accent-foreground">
            ${createElement(Reply, { class: "size-4", "aria-hidden": "true" }).outerHTML}
          </ui-menu-item-icon>
          Reply
        </ui-menu-item>
        <ui-menu-separator class="-mx-1 my-1 h-px bg-border/50"></ui-menu-separator>
        <ui-menu-item class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4" value="download">
          <ui-menu-item-icon class="flex text-muted-foreground group-data-highlighted:text-accent-foreground">
            ${createElement(Download, { class: "size-4", "aria-hidden": "true" }).outerHTML}
          </ui-menu-item-icon>
          Download
        </ui-menu-item>
        <ui-menu-item class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 in-data-has-icons:not-data-has-icon:ps-8" value="embed">Embed</ui-menu-item>
      </ui-menu-content>
    </ui-menu>
    <output class="mt-3 text-sm text-muted-foreground block min-h-5">Pick an item</output>
  `
  root.addEventListener(
    "action",
    (event) => {
      root.querySelector("output")!.textContent =
        `Ran ${(event as CustomEvent<{ value: string }>).detail.value}`
    },
    { capture: true },
  )
}

export { mount }
