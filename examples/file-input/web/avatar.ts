import "@ui-sdk/web/file-input"
import { createElement, User } from "lucide"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-file-input accept="image/*" max-size="5000000" class="flex w-full max-w-md min-w-0 items-center gap-4 text-foreground">
      <ui-file-input-dropzone class="relative flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-muted-foreground data-drag-accept:ring-3 data-drag-accept:ring-ring/30 data-drag-reject:ring-3 data-drag-reject:ring-foreground/30">
        ${createElement(User, { class: "size-6", "aria-hidden": "true" }).outerHTML}
      </ui-file-input-dropzone>
      <div class="flex min-w-0 flex-col gap-1.5">
        <div class="flex flex-wrap gap-2">
          <ui-file-input-trigger><button class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none data-disabled:pointer-events-none data-disabled:opacity-50 disabled:pointer-events-none disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10">Upload photo</button></ui-file-input-trigger>
          <button type="button" hidden class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none data-disabled:pointer-events-none data-disabled:opacity-50 disabled:pointer-events-none disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10">Remove</button>
        </div>
        <p class="min-h-5 text-sm text-muted-foreground">Or drop an image on the avatar. Up to 5 MB.</p>
      </div>
    </ui-file-input>
  `
  const input = root.querySelector("ui-file-input")!
  const avatar = input.querySelector("ui-file-input-dropzone")!
  const [trigger, remove] = input.querySelectorAll("button")
  let url: string | null = null

  input.addEventListener("valuechange", (event) => {
    const [file] = event.detail.value
    if (url) URL.revokeObjectURL(url)
    url = file ? URL.createObjectURL(file) : null
    avatar.replaceChildren(
      url
        ? Object.assign(document.createElement("img"), {
            src: url,
            alt: "",
            className: "size-full object-cover",
          })
        : createElement(User, { class: "size-6", "aria-hidden": "true" }),
    )
    trigger.textContent = url ? "Change photo" : "Upload photo"
    remove.hidden = !url
  })
  remove.addEventListener("click", () => {
    input.value = []
  })

  return () => {
    if (url) URL.revokeObjectURL(url)
  }
}
