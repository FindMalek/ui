import "@ui-sdk/web/file-input"
import { createElement, File as FileIcon, X } from "lucide"

const cover = new File(["Dear team,"], "cover-letter.txt", { type: "text/plain" })

let count = 0

export function mount(root: HTMLElement) {
  const id = `file-input-form-${++count}`
  const page = document.createElement("div")
  page.innerHTML = `
    <div class="flex w-full max-w-md min-w-0 flex-col gap-4 text-foreground">
      <ui-file-input name="attachments" form="${id}" multiple accept="image/*,.pdf,.txt" class="flex min-w-0 flex-col gap-3">
        <ui-file-input-dropzone class="flex min-w-0 flex-wrap items-center justify-between gap-3 p-4 rounded-3xl border border-dashed border-border transition-colors duration-200 data-dragging:border-ring data-dragging:bg-muted/50 data-drag-reject:border-foreground data-drag-reject:bg-muted data-disabled:opacity-50 motion-reduce:transition-none">
          <span class="min-h-5 text-sm text-muted-foreground">Images, PDFs and text</span>
          <ui-file-input-trigger><button class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none data-disabled:pointer-events-none data-disabled:opacity-50 disabled:pointer-events-none disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10">Attach</button></ui-file-input-trigger>
        </ui-file-input-dropzone>
        <ui-file-input-list aria-label="Attachments" class="flex h-40 min-w-0 flex-col gap-2 overflow-y-auto p-1">
          <template>
            <ui-file-input-item class="flex shrink-0 items-center gap-3 rounded-2xl border border-border py-1.5 ps-3 pe-1.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30">
              ${createElement(FileIcon, { class: "size-4 shrink-0 text-muted-foreground", "aria-hidden": "true" }).outerHTML}
              <span data-file="name" class="min-w-0 flex-1 truncate"></span>
              <span data-file="size" class="shrink-0 text-xs text-muted-foreground"></span>
              <ui-file-input-item-remove><button type="button" class="inline-flex size-6 shrink-0 cursor-default items-center justify-center rounded-xl border-0 bg-transparent p-0 text-muted-foreground transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none data-disabled:pointer-events-none data-disabled:opacity-50">${createElement(X, { class: "size-3.5", "aria-hidden": "true" }).outerHTML}</button></ui-file-input-item-remove>
            </ui-file-input-item>
          </template>
        </ui-file-input-list>
      </ui-file-input>
      <form id="${id}" class="flex flex-wrap gap-2">
        <button type="submit" class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none data-disabled:pointer-events-none data-disabled:opacity-50 disabled:pointer-events-none disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10">Send</button>
        <button type="reset" class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none data-disabled:pointer-events-none data-disabled:opacity-50 disabled:pointer-events-none disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10">Reset</button>
        <span data-result class="min-h-5 basis-full text-sm text-muted-foreground"></span>
      </form>
    </div>
  `
  page.querySelector("ui-file-input")!.defaultValue = [cover]
  root.replaceChildren(...page.childNodes)
  const form = root.querySelector("form")!
  const sent = form.querySelector("span")!

  form.addEventListener("submit", (event) => {
    event.preventDefault()
    const files = new FormData(form).getAll("attachments") as File[]
    const names =
      files
        .filter((file) => file.name)
        .map((file) => file.name)
        .join(", ") || "no files"
    sent.textContent = `Sent ${names}.`
  })
  form.addEventListener("reset", () => {
    sent.textContent = ""
  })
}
