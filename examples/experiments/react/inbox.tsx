import * as React from "react"
import {
  createChange,
  createRovingFocus,
  createSwipeActions,
  css,
  definePrimitive,
  live,
  selects,
  type ChangeDetails,
  type SwipeDraft,
  type SwipeOpen,
  type SwipeSide,
} from "@ui-sdk/core"
import { createParts, usePart, type PartProps } from "@ui-sdk/react/primitive"

type InboxMessageData = {
  id: string
  from: string
  subject: string
  preview: string
  time: string
  unread?: boolean
  flagged?: boolean
}

type InboxAction = "read" | "flag" | "archive"

type InboxMessagesChangeReason = InboxAction | "imperative"

type InboxOptions = {
  messages?: InboxMessageData[]
  defaultMessages?: InboxMessageData[]
  onMessagesChange?: (messages: InboxMessageData[], details: ChangeDetails<InboxMessagesChangeReason>) => void
}

type InboxState = {
  messages: InboxMessageData[]
  open: SwipeOpen | null
  swiping: SwipeDraft | null
  focused: string | null
}

type InboxListState = { messages: InboxMessageData[] }
type InboxMessageState = { message: InboxMessageData; open: SwipeSide | undefined }
type InboxActionState = { message: InboxMessageData }

const inbox = /* @__PURE__ */ definePrimitive({
  name: "inbox",
  options: { messages: "value", defaultMessages: "value", onMessagesChange: "callback" },
  state: (options: InboxOptions): InboxState => ({
    messages: options.messages ?? options.defaultMessages ?? [],
    open: null,
    swiping: null,
    focused: null,
  }),
  sync: (options) => (options.messages === undefined ? {} : { messages: options.messages }),
  controlled: ["messages"],
  live: ["swiping"],
  api: (context) => {
    const { store } = context
    const change = createChange(context)
    const roving = createRovingFocus<InboxState, { value: string }>(context, {
      slot: "message",
      key: "focused",
    })
    function run(id: string, action: InboxAction, event?: Event) {
      const { messages } = store.get()
      const index = messages.findIndex((message) => message.id === id)
      if (index === -1) return false
      const next =
        action === "archive"
          ? messages.filter((message) => message.id !== id)
          : messages.map((message) =>
              message.id !== id
                ? message
                : action === "read"
                  ? { ...message, unread: !message.unread }
                  : { ...message, flagged: !message.flagged },
            )
      const focused = !!context.element("list")?.contains(document.activeElement)
      swipe.close({ focus: focused })
      if (!change("messages", next, { reason: action, event })) return false
      if (action === "archive" && focused) {
        const after = next[Math.min(index, next.length - 1)]
        if (after) queueMicrotask(() => roving.focus(after.id))
      }
      return true
    }
    const swipe = createSwipeActions<InboxState>(context, {
      key: "open",
      draft: "swiping",
      onFullSwipe: (id, side, { event }) => run(id, side === "start" ? "read" : "archive", event),
    })
    const api = {
      roving,
      swipe,
      run,
      message: (id: string) => store.get().messages.find((message) => message.id === id),
    }
    return api
  },
  slots: (slot) => ({
    list: slot<{}, InboxListState>({
      state: (state) => ({ messages: state.messages }),
      attrs: () => ({ role: "list" }),
    }),
    message: slot<{ value: string }, InboxMessageState>({
      props: { value: "string" },
      selects: selects({ focused: ({ key }) => [key, null] }),
      state: (state, { key, api }) => ({
        message: api.message(key)!,
        open: state.open?.key === key ? state.open.side : undefined,
      }),
      attrs: (state, part) => {
        const message = part.api.message(part.key)
        return {
          role: "listitem",
          tabindex: part.api.roving.tabIndex(state, part),
          "aria-label": message
            ? `${message.unread ? "Unread, " : ""}${message.flagged ? "flagged, " : ""}${message.from}, ${message.subject}, ${message.time}`
            : undefined,
          "aria-describedby": `${part.id}-instructions`,
          "data-unread": message?.unread ? "" : undefined,
          "data-open": state.open?.key === part.key ? state.open.side : undefined,
          style: css({ position: "relative", overflow: "hidden", "touch-action": "pan-y" }),
        }
      },
      on: {
        pointerdown: (event, { el, api, key }) => el && api.swipe.pointerdown(event, key, el),
        keydown: (event, { el, api, key }) =>
          api.swipe.keydown(event, key) || (el && event.target === el && api.roving.keydown(event, el)),
      },
      bind: (el, part) => {
        const leave = part.api.roving.bind(el, part)
        const unbind = part.api.swipe.bindRow(el, part.key)
        return () => {
          unbind()
          leave()
        }
      },
    }),
    content: slot<{ value: string }>({
      props: { value: { kind: "string", from: "message" } },
      attrs: () => ({
        style: css({ position: "relative", "z-index": "1", transform: "translateX(var(--swipe-x, 0px))" }),
      }),
      live: live<InboxState, any, { value: string }>((state, { api, key }) =>
        api.swipe.contentAttrs(state, key),
      ),
    }),
    actions: slot<{ id: string; message: string; side: SwipeSide }>({
      props: { message: "string", side: "string" },
      attrs: (state, { props, api }) => ({
        ...api.swipe.actionsAttrs(state, props.message, props.side),
        style: css({
          position: "absolute",
          top: "0",
          bottom: "0",
          [props.side === "start" ? "inset-inline-start" : "inset-inline-end"]: "0",
          display: "flex",
        }),
      }),
      bind: (el, { props, api }) => api.swipe.bindActions(el, props.message, props.side),
    }),
    action: slot<{ id: string; message: string; action: InboxAction }, InboxActionState>({
      props: { message: "string", action: "string" },
      state: (_state, { props, api }) => ({ message: api.message(props.message)! }),
      attrs: () => ({ type: "button", tabindex: "-1" }),
      on: { click: (event, { props, api }) => api.run(props.message, props.action, event) },
    }),
    instructions: slot({ attrs: (_state, { id }) => ({ id: `${id}-instructions`, hidden: "" }) }),
  }),
})

const parts = createParts(inbox, { list: "div", instructions: "div" })

const InboxMessageContext = React.createContext<string | null>(null)

function useInboxMessage() {
  const id = React.useContext(InboxMessageContext)
  if (id === null)
    throw new Error("InboxContent, InboxActions and InboxAction must be used inside <InboxMessage>.")
  return id
}

const Inbox = parts.Root

const InboxList = parts.List

function InboxMessage({ value, ...props }: { value: string } & PartProps<"div", InboxMessageState>) {
  return (
    <InboxMessageContext.Provider value={value}>
      {usePart(inbox, "message", { value }, props)}
    </InboxMessageContext.Provider>
  )
}

function InboxContent(props: PartProps<"div">) {
  return usePart(inbox, "content", { value: useInboxMessage() }, props)
}

function InboxActions({ side, ...props }: { side: SwipeSide } & PartProps<"div">) {
  const message = useInboxMessage()
  return usePart(inbox, "actions", { id: `${side}-${message}`, message, side }, props)
}

function InboxAction({ action, ...props }: { action: InboxAction } & PartProps<"button", InboxActionState>) {
  const message = useInboxMessage()
  return usePart(inbox, "action", { id: `${action}-${message}`, message, action }, props, "button")
}

const InboxInstructions = parts.Instructions

const mail: InboxMessageData[] = [
  {
    id: "1",
    from: "Ada",
    subject: "Grid focus review",
    preview: "Left two notes on the virtualized rows. The rest reads well.",
    time: "9:41",
    unread: true,
  },
  {
    id: "2",
    from: "Grace",
    subject: "Offsite dates",
    preview: "Does the second week of November work for everyone?",
    time: "9:12",
    unread: true,
  },
  {
    id: "3",
    from: "Linus",
    subject: "Re: release notes",
    preview: "Shipped. Thanks for the quick turnaround on the changelog.",
    time: "Yesterday",
    flagged: true,
  },
  {
    id: "4",
    from: "Margaret",
    subject: "Launch checklist",
    preview: "Everything is green except the docs search index.",
    time: "Yesterday",
  },
  {
    id: "5",
    from: "Alan",
    subject: "Lunch?",
    preview: "Thinking the noodle place around the corner, 12:30.",
    time: "Mon",
  },
]

const button =
  "flex w-20 flex-col items-center justify-center gap-0.5 text-xs font-medium text-white outline-none"

function Example() {
  const [messages, setMessages] = React.useState(mail)
  const [notice, setNotice] = React.useState("")
  return (
    <Inbox
      messages={messages}
      onMessagesChange={(next, { reason }) => {
        setMessages(next)
        if (reason === "archive") setNotice("Archived.")
      }}
    >
      <div className="flex w-full max-w-md flex-col gap-3">
        <InboxList className="flex flex-col overflow-hidden rounded-xl border border-border">
          {({ messages }) =>
            messages.map((message) => (
              <InboxMessage
                key={message.id}
                value={message.id}
                className="group/row border-b border-border outline-none last:border-b-0 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:ring-inset"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity delay-300 duration-0 group-has-[[data-swipe=start]]/row:pointer-events-auto group-has-[[data-swipe=start]]/row:opacity-100 group-has-[[data-swipe=start]]/row:delay-0">
                  <div aria-hidden="true" className="absolute inset-0 bg-sky-600" />
                  <InboxActions side="start">
                    <InboxAction action="read" className={`${button} bg-sky-600 focus-visible:bg-sky-700`}>
                      {({ message }) => (message.unread ? "Read" : "Unread")}
                    </InboxAction>
                  </InboxActions>
                </div>
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity delay-300 duration-0 group-has-[[data-swipe=end]]/row:pointer-events-auto group-has-[[data-swipe=end]]/row:opacity-100 group-has-[[data-swipe=end]]/row:delay-0">
                  <div aria-hidden="true" className="absolute inset-0 bg-emerald-600" />
                  <InboxActions side="end">
                    <InboxAction
                      action="flag"
                      className={`${button} bg-amber-500 focus-visible:bg-amber-600`}
                    >
                      {({ message }) => (message.flagged ? "Unflag" : "Flag")}
                    </InboxAction>
                    <InboxAction
                      action="archive"
                      className={`${button} bg-emerald-600 focus-visible:bg-emerald-700`}
                    >
                      Archive
                    </InboxAction>
                  </InboxActions>
                </div>
                <InboxContent className="flex gap-3 bg-background px-4 py-3 transition-transform duration-300 ease-out data-swiping:transition-none">
                  <span
                    aria-hidden="true"
                    className={`mt-1.5 size-2 shrink-0 rounded-full ${message.unread ? "bg-sky-600" : ""}`}
                  />
                  <span className="flex min-w-0 flex-1 flex-col gap-0.5 text-sm">
                    <span className="flex items-baseline gap-2">
                      <span className={`truncate ${message.unread ? "font-semibold" : "font-medium"}`}>
                        {message.from}
                      </span>
                      {message.flagged && (
                        <span aria-hidden="true" className="size-2 rounded-full bg-amber-500" />
                      )}
                      <span className="ml-auto shrink-0 text-xs text-muted-foreground">{message.time}</span>
                    </span>
                    <span className="truncate">{message.subject}</span>
                    <span className="truncate text-muted-foreground">{message.preview}</span>
                  </span>
                </InboxContent>
              </InboxMessage>
            ))
          }
        </InboxList>
        <InboxInstructions>
          Left and Right show the message's actions, and Escape hides them. Up and Down move between messages.
        </InboxInstructions>
        <p className="text-sm text-muted-foreground" aria-live="polite">
          {notice || "Swipe a message left or right, or press Left or Right on it."}
        </p>
        {messages.length < mail.length && (
          <button
            type="button"
            className="self-start text-sm font-medium underline-offset-4 hover:underline"
            onClick={() => {
              setMessages(mail)
              setNotice("")
            }}
          >
            Bring back archived messages
          </button>
        )}
      </div>
    </Inbox>
  )
}

export {
  Example,
  inbox,
  Inbox,
  InboxAction,
  type InboxActionState,
  InboxActions,
  InboxContent,
  InboxInstructions,
  InboxList,
  type InboxListState,
  InboxMessage,
  type InboxMessageData,
  type InboxMessageState,
  type InboxMessagesChangeReason,
  type InboxOptions,
}
