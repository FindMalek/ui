import "@ui-sdk/web/file-input"
import { createElement, File as FileIcon, Image, Plus, X } from "lucide"

let count = 0

export function mount(root: HTMLElement) {
  const id = `file-input-prompt-${++count}-message`
  root.innerHTML = `
    <ui-file-input multiple accept="image/*,.pdf,.txt,.md" max-size="10000000" class="w-full max-w-md min-w-0 text-foreground">
      <ui-file-input-dropzone paste-target="#${id}" class="flex flex-col gap-2 rounded-3xl border border-transparent bg-input/50 p-3 has-[textarea:focus-visible]:border-ring has-[textarea:focus-visible]:ring-3 has-[textarea:focus-visible]:ring-ring/30 data-dragging:border-ring data-dragging:ring-3 data-dragging:ring-ring/30">
        <ui-file-input-list aria-label="Attachments" class="flex h-16 flex-wrap content-start gap-2 overflow-y-auto p-1">
          <template>
            <ui-file-input-item class="flex h-7 items-center gap-1.5 rounded-xl bg-background ps-2 pe-1 text-xs outline-none focus-visible:ring-3 focus-visible:ring-ring/30">
              ${createElement(FileIcon, { class: "size-3.5 shrink-0 text-muted-foreground", "aria-hidden": "true" }).outerHTML}
              <span data-file="name" class="max-w-40 truncate"></span>
              <ui-file-input-item-remove><button type="button" class="inline-flex size-6 shrink-0 cursor-default items-center justify-center rounded-xl border-0 bg-transparent p-0 text-muted-foreground transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none data-disabled:pointer-events-none data-disabled:opacity-50">${createElement(X, { class: "size-3", "aria-hidden": "true" }).outerHTML}</button></ui-file-input-item-remove>
            </ui-file-input-item>
          </template>
        </ui-file-input-list>
        <textarea id="${id}" aria-label="Message" placeholder="Ask anything. Paste or drop files to attach them." class="h-20 w-full resize-none border-0 bg-transparent px-1 py-0 text-base text-foreground outline-none placeholder:text-muted-foreground md:text-sm"></textarea>
        <div class="flex flex-wrap items-center justify-between gap-2">
          <ui-file-input-trigger><button aria-label="Attach files" class="inline-flex h-8 w-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding p-0 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none data-disabled:pointer-events-none data-disabled:opacity-50 disabled:pointer-events-none disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10">${createElement(Plus, { class: "size-4 shrink-0", "aria-hidden": "true" }).outerHTML}</button></ui-file-input-trigger>
          <button type="button" disabled class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none data-disabled:pointer-events-none data-disabled:opacity-50 disabled:pointer-events-none disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10">Send</button>
        </div>
      </ui-file-input-dropzone>
    </ui-file-input>
  `
  const input = root.querySelector("ui-file-input")!
  const list = input.querySelector("ui-file-input-list")!
  const text = input.querySelector("textarea")!
  const [, send] = input.querySelectorAll("button")
  const update = (files = input.value) => {
    send.disabled = !text.value && !files.length
  }

  const observer = new MutationObserver((records) => {
    for (const { addedNodes } of records)
      for (const item of addedNodes as NodeListOf<HTMLElement & { file?: File }>)
        if (item.file?.type.startsWith("image/"))
          item.querySelector("svg")!.replaceWith(
            createElement(Image, {
              class: "size-3.5 shrink-0 text-muted-foreground",
              "aria-hidden": "true",
            }),
          )
  })
  observer.observe(list, { childList: true })

  input.addEventListener("valuechange", (event) => update(event.detail.value))
  text.addEventListener("input", () => update())
  text.addEventListener("keydown", (event) => {
    const last = input.value.at(-1)
    if (event.key !== "Backspace" || text.value !== "" || !last) return
    event.preventDefault()
    input.api.removeFile(last, { reason: "remove-press" })
  })
  send.addEventListener("click", () => {
    text.value = ""
    input.api.clear()
    update()
  })

  return () => {
    observer.disconnect()
  }
}
