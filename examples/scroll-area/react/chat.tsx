"use client"

import {
  ScrollArea,
  ScrollAreaContent,
  ScrollAreaScrollbar,
  ScrollAreaScrollToEnd,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "@ui-sdk/react/scroll-area"
import { ArrowDown } from "lucide-react"
import * as React from "react"

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
  const [messages, setMessages] = React.useState(conversation)
  const [streaming, setStreaming] = React.useState(false)
  const timer = React.useRef<ReturnType<typeof setInterval>>(undefined)
  React.useEffect(() => () => clearInterval(timer.current), [])

  const ask = () => {
    const words = reply.split(" ")
    setStreaming(true)
    setMessages((current) => [
      ...current,
      { from: "user", text: "Tell me more." },
      { from: "assistant", text: "" },
    ])
    let index = 0
    timer.current = setInterval(() => {
      const text = words.slice(0, ++index).join(" ")
      setMessages((current) => [...current.slice(0, -1), { from: "assistant", text }])
      if (index === words.length) {
        clearInterval(timer.current)
        setStreaming(false)
      }
    }, 60)
  }

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <ScrollArea stickToEnd className="h-80 rounded-xl border border-border">
        <ScrollAreaViewport
          role="log"
          aria-label="Conversation"
          aria-busy={streaming}
          className="size-full rounded-[inherit] outline-none transition-[color,box-shadow] focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none"
        >
          <ScrollAreaContent className="flex min-h-full flex-col justify-end gap-3 p-4 pb-14 text-sm data-sticking:pb-4">
            {messages.map((message, index) => (
              <p
                key={index}
                className={
                  message.from === "user"
                    ? "max-w-[80%] self-end rounded-2xl bg-primary px-3 py-2 text-primary-foreground"
                    : "max-w-[80%] self-start rounded-2xl bg-muted px-3 py-2"
                }
              >
                {message.text || "…"}
              </p>
            ))}
          </ScrollAreaContent>
        </ScrollAreaViewport>
        <ScrollAreaScrollbar className="flex w-2.5 border-s border-s-transparent p-px opacity-0 transition-opacity duration-150 data-visible:opacity-100 motion-reduce:transition-none">
          <ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
        </ScrollAreaScrollbar>
        <ScrollAreaScrollToEnd className="absolute bottom-3 left-1/2 inline-flex cursor-default h-8 -translate-x-1/2 translate-y-2 items-center gap-1 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap opacity-0 shadow-sm outline-none select-none transition-[opacity,translate,background-color,box-shadow] hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-visible:translate-y-0 data-visible:opacity-100 motion-reduce:transition-none">
          <ArrowDown className="size-4" />
          Jump to latest
        </ScrollAreaScrollToEnd>
      </ScrollArea>
      <button
        type="button"
        disabled={streaming}
        onClick={ask}
        className="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors enabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 enabled:active:translate-y-px disabled:opacity-50 motion-reduce:transition-none motion-reduce:transform-none self-end"
      >
        {streaming ? "Answering…" : "Ask for more"}
      </button>
    </div>
  )
}

export { Example }
