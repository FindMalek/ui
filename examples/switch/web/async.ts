import "@ui-sdk/web/switch"
import { createElement, LoaderCircle } from "lucide"

const save = (_checked: boolean) => new Promise((resolve) => setTimeout(resolve, 800))

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex flex-col items-start gap-2">
      <label class="flex items-center gap-2 text-sm font-medium">
        <ui-switch class="relative inline-flex h-5 w-8 shrink-0 cursor-default appearance-none items-center rounded-2xl border-2 border-transparent bg-input/90 p-0 outline-none transition-colors after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-invalid:border-foreground aria-invalid:ring-3 aria-invalid:ring-foreground/20 data-checked:border-primary data-checked:bg-primary data-disabled:opacity-50 motion-reduce:transition-none aria-busy:cursor-wait aria-busy:opacity-50" aria-busy="false">
          <ui-switch-thumb class="pointer-events-none flex size-4 shrink-0 rounded-2xl bg-background shadow-sm transition-transform data-checked:translate-x-[calc(100%-4px)] rtl:data-checked:-translate-x-[calc(100%-4px)] motion-reduce:transition-none items-center justify-center text-foreground"></ui-switch-thumb>
        </ui-switch>
        Automatic backups
      </label>
      <p class="m-0 block min-h-5 text-sm text-muted-foreground" role="status"></p>
    </div>
  `
  const backups = root.querySelector("ui-switch")!
  const thumb = root.querySelector("ui-switch-thumb")!
  const message = root.querySelector("p")!
  let saving = false

  backups.addEventListener("checkedchange", (event) => {
    const { value, reason } = event.detail
    if (reason === "imperative") return
    event.preventDefault()
    if (saving) return
    saving = true
    backups.setAttribute("aria-busy", "true")
    thumb.innerHTML = createElement(LoaderCircle, {
      class: "size-3 animate-spin motion-reduce:animate-none",
      "aria-hidden": "true",
    }).outerHTML
    message.textContent = "Saving…"
    save(value).then(() => {
      saving = false
      backups.api.setChecked(value, { reason: "imperative" })
      backups.setAttribute("aria-busy", "false")
      thumb.innerHTML = ""
      message.textContent = "Saved"
    })
  })
}

export { mount }
