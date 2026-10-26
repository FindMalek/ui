import { toText, type TokenInputValue } from "@ui-sdk/core/token-input"
import "@ui-sdk/web/token-input"

const draft: TokenInputValue = [
  "Explain ",
  { type: "file", value: "src/routes.ts", label: "routes.ts" },
  " in two sentences.",
]

let count = 0
export function mount(root: HTMLElement) {
  const formId = `token-input-form-${++count}`
  root.innerHTML = `
    <div class="flex w-full max-w-sm min-w-0 flex-col gap-3">
      <div class="flex flex-wrap items-center gap-3 text-sm">
        <label class="flex items-center gap-2"><input type="checkbox" data-option="disabled" class="size-4 accent-primary" /> Disabled</label>
        <label class="flex items-center gap-2"><input type="checkbox" data-option="read-only" class="size-4 accent-primary" /> Read-only</label>
      </div>
      <ui-token-input form="${formId}" name="prompt" required value="${toText(draft).replaceAll('"', "&quot;")}">
        <label id="${formId}-label" class="text-sm leading-none font-medium">Prompt</label>
        <ui-token-input-editor aria-labelledby="${formId}-label" class="h-28 overflow-y-auto rounded-2xl border border-transparent bg-input/50 px-2.5 py-2 text-base leading-6 outline-none transition-[color,box-shadow] duration-200 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-not-allowed data-disabled:opacity-50 data-readonly:border-input data-readonly:bg-transparent md:text-sm [&_[data-token-type]]:rounded-2xl [&_[data-token-type]]:bg-input [&_[data-token-type]]:px-1.5 [&_[data-token-type]]:font-medium dark:[&_[data-token-type]]:bg-input/60 motion-reduce:transition-none"></ui-token-input-editor>
      </ui-token-input>
      <form id="${formId}" class="flex flex-col gap-3">
        <div class="flex gap-2">
          <button type="submit" class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none disabled:pointer-events-none disabled:opacity-50">Submit</button>
          <button type="reset" class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none disabled:pointer-events-none disabled:opacity-50">Reset</button>
        </div>
        <p class="h-12 overflow-y-auto font-mono text-xs break-all text-muted-foreground"></p>
      </form>
    </div>
  `
  const input = root.querySelector("ui-token-input")!
  const form = root.querySelector("form")!
  for (const box of root.querySelectorAll<HTMLInputElement>("[data-option]"))
    box.addEventListener("change", () => input.toggleAttribute(box.dataset.option!, box.checked))
  form.addEventListener("reset", () => {
    root.querySelector("p")!.textContent = ""
  })
  form.addEventListener("submit", (event) => {
    event.preventDefault()
    root.querySelector("p")!.textContent = String(new FormData(form).get("prompt") ?? "")
  })
}
