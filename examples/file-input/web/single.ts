import "@ui-sdk/web/file-input"
import { formatFileSize } from "@ui-sdk/web"
import { createElement, File as FileIcon } from "lucide"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-file-input accept=".pdf" class="w-full max-w-md min-w-0 text-foreground">
      <ui-file-input-dropzone class="flex min-w-0 flex-wrap items-center justify-between gap-3 p-4 rounded-3xl border border-dashed border-border transition-colors duration-200 data-dragging:border-ring data-dragging:bg-muted/50 data-drag-reject:border-foreground data-drag-reject:bg-muted data-disabled:opacity-50 motion-reduce:transition-none">
        ${createElement(FileIcon, { class: "size-4 shrink-0 text-muted-foreground", "aria-hidden": "true" }).outerHTML}
        <span class="min-w-0 flex-1 truncate text-sm text-muted-foreground">Drop one PDF</span>
        <ui-file-input-trigger><button class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none data-disabled:pointer-events-none data-disabled:opacity-50 disabled:pointer-events-none disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10">Choose</button></ui-file-input-trigger>
      </ui-file-input-dropzone>
    </ui-file-input>
  `
  const input = root.querySelector("ui-file-input")!
  const status = input.querySelector("span")!
  const button = input.querySelector("button")!
  input.addEventListener("valuechange", (event) => {
    const [file] = event.detail.value
    status.textContent = file ? `${file.name}, ${formatFileSize(file.size)}` : "Drop one PDF"
    button.textContent = file ? "Replace" : "Choose"
  })
}
