import "@ui-sdk/web/scroll-area"
import { ArrowDown, createElement } from "lucide"

const conversation = [
  { from: "user", text: "How do I keep a chat scrolled to the newest message?" },
  {
    from: "assistant",
    text: "Set stickToEnd on the scroll area. It stays at the bottom while messages and streamed words arrive.",
  },
  { from: "user", text: "And if I scroll up to read something?" },
  {
    from: "assistant",
    text: "It lets go as soon as you scroll toward the top, and follows again once you're back at the bottom.",
  },
]

const reply =
  "Streaming answers grow one word at a time. Each word makes the content taller, and the scroll area keeps the last line in view, unless you've scrolled away to read. Images that load late count too, since the scroll area watches the size of its content rather than counting messages."

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex w-full max-w-md flex-col gap-3">
      <ui-scroll-area stick-to-end class="h-80 rounded-xl border border-border">
        <ui-scroll-area-viewport role="log" aria-label="Conversation" aria-busy="false" class="size-full rounded-[inherit] outline-none transition-[color,box-shadow] focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none">
          <ui-scroll-area-content class="flex min-h-full flex-col justify-end gap-3 p-4 pb-14 text-sm data-sticking:pb-4">
            ${conversation
              .map(
                (message) =>
                  `<p class="${
                    message.from === "user"
                      ? "max-w-[80%] self-end rounded-2xl bg-primary px-3 py-2 text-primary-foreground"
                      : "max-w-[80%] self-start rounded-2xl bg-muted px-3 py-2"
                  }">${message.text}</p>`,
              )
              .join("")}
          </ui-scroll-area-content>
        </ui-scroll-area-viewport>
        <ui-scroll-area-scrollbar class="flex w-2.5 border-s border-s-transparent p-px opacity-0 transition-opacity duration-150 data-visible:opacity-100 motion-reduce:transition-none">
          <ui-scroll-area-thumb class="relative flex-1 rounded-full bg-border"></ui-scroll-area-thumb>
        </ui-scroll-area-scrollbar>
        <ui-scroll-area-scroll-to-end>
          <button class="absolute bottom-3 left-1/2 inline-flex cursor-default h-8 -translate-x-1/2 translate-y-2 items-center gap-1 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap opacity-0 shadow-sm outline-none select-none transition-[opacity,translate,background-color,box-shadow] hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-visible:translate-y-0 data-visible:opacity-100 motion-reduce:transition-none">
            ${createElement(ArrowDown, { class: "size-4", "aria-hidden": "true" }).outerHTML}
            Jump to latest
          </button>
        </ui-scroll-area-scroll-to-end>
      </ui-scroll-area>
      <button type="button" data-ask class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors enabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 enabled:active:translate-y-px disabled:opacity-50 motion-reduce:transition-none motion-reduce:transform-none self-end">Ask for more</button>
    </div>
  `
  const content = root.querySelector("ui-scroll-area-content")!
  const viewport = root.querySelector("ui-scroll-area-viewport")!
  const ask = root.querySelector<HTMLButtonElement>("[data-ask]")!
  ask.addEventListener("click", () => {
    const words = reply.split(" ")
    ask.disabled = true
    ask.textContent = "Answering…"
    viewport.setAttribute("aria-busy", "true")
    content.insertAdjacentHTML(
      "beforeend",
      `<p class="max-w-[80%] self-end rounded-2xl bg-primary px-3 py-2 text-primary-foreground">Tell me more.</p><p class="max-w-[80%] self-start rounded-2xl bg-muted px-3 py-2">…</p>`,
    )
    const answer = content.lastElementChild!
    let index = 0
    const timer = setInterval(() => {
      answer.textContent = words.slice(0, ++index).join(" ")
      if (index < words.length && root.isConnected) {
        return
      }
      clearInterval(timer)
      ask.disabled = false
      ask.textContent = "Ask for more"
      viewport.setAttribute("aria-busy", "false")
    }, 60)
  })
}

export { mount }
