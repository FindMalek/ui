import "@ui-sdk/web/file-input"
import { createElement, Plus, X } from "lucide"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-file-input multiple accept="image/*" class="flex w-full max-w-md min-w-0 flex-col gap-3 text-foreground">
      <ui-file-input-trigger>
        <button class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none data-disabled:pointer-events-none data-disabled:opacity-50 disabled:pointer-events-none disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10">
          ${createElement(Plus, { class: "size-4 shrink-0", "aria-hidden": "true" }).outerHTML}
          Add images
        </button>
      </ui-file-input-trigger>
      <ui-file-input-list aria-label="Images" class="grid h-48 w-full grid-cols-3 content-start gap-2 overflow-y-auto p-1">
        <template>
          <ui-file-input-item class="group relative aspect-square overflow-hidden rounded-2xl bg-muted outline-none focus-visible:ring-3 focus-visible:ring-ring/30">
            <span class="absolute inset-x-0 bottom-0 truncate bg-background/90 px-2 py-1 text-xs text-foreground"><span data-index></span>. <span data-file="name"></span>, <span data-file="size"></span></span>
            <ui-file-input-item-remove><button type="button" class="inline-flex size-6 shrink-0 cursor-default items-center justify-center rounded-xl border-0 bg-transparent p-0 text-muted-foreground transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none data-disabled:pointer-events-none data-disabled:opacity-50 absolute end-1 top-1 bg-background/90">${createElement(X, { class: "size-3.5", "aria-hidden": "true" }).outerHTML}</button></ui-file-input-item-remove>
          </ui-file-input-item>
        </template>
      </ui-file-input-list>
    </ui-file-input>
  `
  const list = root.querySelector("ui-file-input-list")!

  const observer = new MutationObserver((records) => {
    for (const { addedNodes } of records)
      for (const item of addedNodes as NodeListOf<HTMLElement & { file?: File }>)
        if (item.file && !item.querySelector("img"))
          item.prepend(
            Object.assign(document.createElement("img"), {
              src: URL.createObjectURL(item.file),
              alt: "",
              className: "size-full object-cover",
            }),
          )
    for (const { removedNodes } of records)
      for (const item of removedNodes as NodeListOf<HTMLElement & { file?: File }>)
        if (item.parentNode !== list) {
          const preview = item.querySelector?.("img")
          if (preview) URL.revokeObjectURL(preview.src)
        }
    list.querySelectorAll("ui-file-input-item").forEach((item, index) => {
      item.querySelector("[data-index]")!.textContent = String(index + 1)
    })
  })
  observer.observe(list, { childList: true })

  return () => {
    observer.disconnect()
    for (const image of list.querySelectorAll("img")) URL.revokeObjectURL(image.src)
  }
}
