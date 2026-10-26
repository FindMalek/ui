import { toLabel } from "@ui-sdk/core/token-input"
import "@ui-sdk/web/token-input"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <form class="flex w-full max-w-sm min-w-0 flex-col gap-3">
      <ui-token-input submit-shortcut="mod+enter">
        <ui-token-input-editor aria-label="Message" placeholder="Enter adds a line, Cmd/Ctrl+Enter sends" class="relative h-28 overflow-y-auto rounded-2xl border border-transparent bg-input/50 px-2.5 py-2 text-base leading-6 outline-none transition-[color,box-shadow] duration-200 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-empty:before:pointer-events-none data-empty:before:absolute data-empty:before:text-muted-foreground data-empty:before:content-[attr(aria-placeholder)] md:text-sm motion-reduce:transition-none"></ui-token-input-editor>
      </ui-token-input>
      <p class="h-12 overflow-y-auto text-sm whitespace-pre-wrap text-muted-foreground">Nothing sent yet.</p>
    </form>
  `
  const form = root.querySelector("form")!
  const input = root.querySelector("ui-token-input")!
  form.addEventListener("submit", (event) => {
    event.preventDefault()
    root.querySelector("p")!.textContent = `Sent:\n${toLabel(input.api.getValue())}`
  })
}
