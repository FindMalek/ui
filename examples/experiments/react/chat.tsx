import * as React from "react"
import {
  createController,
  createStickToBottom,
  css,
  definePrimitive,
  live,
  type StickToBottomState,
} from "@ui-sdk/core"
import { createParts } from "@ui-sdk/react/primitive"

function createChatController() {
  return createController<{
    scrollToBottom: (options?: { behavior?: ScrollBehavior }) => void
  }>()
}

type ChatController = ReturnType<typeof createChatController>

type ChatOptions = {
  threshold?: number
  controller?: ChatController
}

type ChatRootState = StickToBottomState
type ChatJumpState = {
  visible: boolean
  unseen: boolean
}

const away = (state: StickToBottomState) => !state.following && !state.atBottom

const chat = /* @__PURE__ */ definePrimitive({
  name: "chat",
  options: { threshold: "number", controller: "value" },
  state: (_options: ChatOptions): StickToBottomState => ({ following: true, unseen: false, atBottom: true }),
  api: (context) => {
    const { store } = context
    const stick = createStickToBottom({
      threshold: context.options().threshold,
      onChange: (state) => store.set(state),
    })
    return {
      stick,
      scrollToBottom: (options?: { behavior?: ScrollBehavior }) => stick.scrollToBottom(options),
    }
  },
  slots: (slot) => ({
    root: slot<{}, ChatRootState>({ state: (state) => state }),
    log: slot({
      attrs: () => ({
        role: "log",
        "aria-live": "polite",
        tabindex: "0",
        style: css({ overflow: "auto", "overscroll-behavior": "contain" }),
      }),
      bind: (el, { api }) => api.stick.connect(el),
    }),
    jump: slot<{}, ChatJumpState>({
      state: (state) => ({ visible: away(state), unseen: state.unseen }),
      attrs: () => ({ type: "button" }),
      live: live<StickToBottomState, any, {}>((state) => ({
        "data-visible": away(state) ? "" : undefined,
        "data-unseen": state.unseen ? "" : undefined,
        tabindex: away(state) ? undefined : "-1",
        "aria-hidden": away(state) ? undefined : "true",
      })),
      press: ({ api }) => api.scrollToBottom({ behavior: "smooth" }),
    }),
    earlier: slot({
      attrs: () => ({ type: "button" }),
      press: ({ api }) => api.stick.prepend(),
    }),
  }),
})

const parts = createParts(chat, { root: "div", log: "div", jump: "button", earlier: "button" })

const Chat = parts.Root

const ChatLog = parts.Log

const ChatJump = parts.Jump

const ChatEarlier = parts.Earlier

type Message = { id: number; from: "you" | "them"; text: string }

const replies = [
  "Good question. Primitives are the pieces under a component: focus, selection, moving things, keeping a list in view. You build the component; they handle the behavior that's easy to get wrong.",
  "This log, for one, is a few lines of setup. createStickToBottom follows the end while you're there, lets go when you scroll up, and tells the page when something new arrived below.",
  "Scroll up while I'm typing and watch: I'll keep going, you'll keep your place, and a dot shows up on the button to jump back.",
  "Older messages load above without moving what you're reading, in every browser, not only the ones with scroll anchoring.",
]

const earlierMessages = (from: number, count: number): Message[] =>
  Array.from({ length: count }, (_, i) => {
    const id = from + i
    return {
      id,
      from: id % 2 ? "them" : "you",
      text:
        id % 2
          ? `Earlier reply ${id + 100}. Scrolled back this far, the view stays where it was as these load.`
          : `Earlier question ${id + 100}?`,
    }
  })

const oldestLoadable = -60

function Example() {
  const [controller] = React.useState(createChatController)
  const [messages, setMessages] = React.useState<Message[]>(() => earlierMessages(0, 12))
  const [oldest, setOldest] = React.useState(0)
  const [draft, setDraft] = React.useState("How do primitives help?")
  const [typing, setTyping] = React.useState(false)
  const turn = React.useRef(0)
  const timer = React.useRef<ReturnType<typeof setInterval>>(undefined)
  React.useEffect(() => () => clearInterval(timer.current), [])

  const send = () => {
    const text = draft.trim()
    if (!text || typing) return
    const id = Date.now()
    const reply = replies[turn.current++ % replies.length].split(" ")
    setMessages((list) => [...list, { id, from: "you", text }, { id: id + 1, from: "them", text: "" }])
    setDraft("")
    setTyping(true)
    controller.scrollToBottom()
    let word = 0
    clearInterval(timer.current)
    timer.current = setInterval(() => {
      word++
      setMessages((list) =>
        list.map((message) =>
          message.id === id + 1 ? { ...message, text: reply.slice(0, word).join(" ") } : message,
        ),
      )
      if (word >= reply.length) {
        clearInterval(timer.current)
        setTyping(false)
      }
    }, 70)
  }

  const atStart = oldest <= oldestLoadable

  return (
    <Chat
      controller={controller}
      className="relative flex h-[26rem] w-full max-w-lg flex-col overflow-hidden rounded-xl border border-border bg-background"
    >
      <ChatLog
        aria-label="Conversation"
        className="flex flex-1 flex-col gap-3 p-4 outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
      >
        <ChatEarlier
          disabled={atStart}
          onClick={() => {
            setMessages((list) => [...earlierMessages(oldest - 12, 12), ...list])
            setOldest(oldest - 12)
          }}
          className="self-center rounded-full px-3 py-1 text-xs text-muted-foreground hover:bg-muted disabled:opacity-50"
        >
          {atStart ? "Start of conversation" : "Load earlier messages"}
        </ChatEarlier>
        {messages.map((message) => (
          <div
            key={message.id}
            className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm ${message.from === "you" ? "self-end bg-primary text-primary-foreground" : "self-start bg-muted"}`}
          >
            {message.text || <span className="text-muted-foreground">…</span>}
          </div>
        ))}
      </ChatLog>
      <ChatJump className="pointer-events-none absolute bottom-20 left-1/2 flex -translate-x-1/2 translate-y-2 items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium opacity-0 shadow-md transition data-visible:pointer-events-auto data-visible:translate-y-0 data-visible:opacity-100">
        <span
          aria-hidden="true"
          className="hidden size-1.5 rounded-full bg-primary [[data-unseen]>&]:block"
        />
        Jump to latest
      </ChatJump>
      <form
        className="flex items-end gap-2 border-t border-border p-3"
        onSubmit={(event) => {
          event.preventDefault()
          send()
        }}
      >
        <textarea
          aria-label="Message"
          rows={1}
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter" && !event.shiftKey && !event.nativeEvent.isComposing) {
              event.preventDefault()
              send()
            }
          }}
          className="max-h-24 min-h-9 flex-1 resize-none rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        />
        <button
          type="submit"
          disabled={typing || !draft.trim()}
          className="h-9 rounded-lg bg-primary px-3 text-sm font-medium text-primary-foreground disabled:opacity-50"
        >
          Send
        </button>
      </form>
    </Chat>
  )
}

export {
  Chat,
  ChatEarlier,
  ChatJump,
  ChatLog,
  chat,
  createChatController,
  Example,
  type ChatController,
  type ChatJumpState,
  type ChatOptions,
  type ChatRootState,
}
