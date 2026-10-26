import {
  ScrollArea,
  ScrollAreaContent,
  ScrollAreaScrollbar,
  ScrollAreaScrollToEnd,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "@ui-sdk/solid/scroll-area"
import { createSignal, For, onCleanup } from "solid-js"

type Message = { from: "user" | "assistant"; text: string }

const conversation: Message[] = [
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

function Example() {
  const [messages, setMessages] = createSignal(conversation)
  const [streaming, setStreaming] = createSignal(false)
  let timer: ReturnType<typeof setInterval> | undefined
  onCleanup(() => clearInterval(timer))

  const ask = () => {
    const words = reply.split(" ")
    setStreaming(true)
    setMessages((current) => [
      ...current,
      { from: "user", text: "Tell me more." },
      { from: "assistant", text: "" },
    ])
    let index = 0
    timer = setInterval(() => {
      const text = words.slice(0, ++index).join(" ")
      setMessages((current) => [...current.slice(0, -1), { from: "assistant", text }])
      if (index === words.length) {
        clearInterval(timer)
        setStreaming(false)
      }
    }, 60)
  }

  return (
    <div class="flex w-full max-w-md flex-col gap-3">
      <ScrollArea stickToEnd class="h-80 rounded-xl border border-border">
        <ScrollAreaViewport
          role="log"
          aria-label="Conversation"
          aria-busy={streaming() ? "true" : "false"}
          class="size-full rounded-[inherit] outline-none transition-[color,box-shadow] focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none"
        >
          <ScrollAreaContent class="flex min-h-full flex-col justify-end gap-3 p-4 pb-14 text-sm data-sticking:pb-4">
            <For each={messages()} keyed={false}>
              {(message) => (
                <p
                  class={
                    message().from === "user"
                      ? "max-w-[80%] self-end rounded-2xl bg-primary px-3 py-2 text-primary-foreground"
                      : "max-w-[80%] self-start rounded-2xl bg-muted px-3 py-2"
                  }
                >
                  {message().text || "…"}
                </p>
              )}
            </For>
          </ScrollAreaContent>
        </ScrollAreaViewport>
        <ScrollAreaScrollbar class="flex w-2.5 border-s border-s-transparent p-px opacity-0 transition-opacity duration-150 data-visible:opacity-100 motion-reduce:transition-none">
          <ScrollAreaThumb class="relative flex-1 rounded-full bg-border" />
        </ScrollAreaScrollbar>
        <ScrollAreaScrollToEnd class="absolute bottom-3 left-1/2 inline-flex cursor-default h-8 -translate-x-1/2 translate-y-2 items-center gap-1 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap opacity-0 shadow-sm outline-none select-none transition-[opacity,translate,background-color,box-shadow] hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-visible:translate-y-0 data-visible:opacity-100 motion-reduce:transition-none">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
            class="size-4"
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
          Jump to latest
        </ScrollAreaScrollToEnd>
      </ScrollArea>
      <button
        type="button"
        disabled={streaming()}
        onClick={ask}
        class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors enabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 enabled:active:translate-y-px disabled:opacity-50 motion-reduce:transition-none motion-reduce:transform-none self-end"
      >
        {streaming() ? "Answering…" : "Ask for more"}
      </button>
    </div>
  )
}

export { Example }
