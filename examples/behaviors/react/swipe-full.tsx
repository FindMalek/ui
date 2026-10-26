import * as React from "react"
import {
  createRovingFocus,
  createSwipeActions,
  css,
  definePrimitive,
  live,
  selects,
  type SwipeDraft,
  type SwipeOpen,
  type SwipeSide,
} from "@ui-sdk/core"
import { createParts, usePart, type PartProps } from "@ui-sdk/react/primitive"

type MailboxState = { open: SwipeOpen | null; swiping: SwipeDraft | null; focused: string | null }

type MailboxOptions = {
  pinned?: string
  first?: string
  onAction?: (key: string, side: SwipeSide) => void
}

const mailbox = definePrimitive({
  name: "mailbox",
  options: { pinned: "string", first: "string", onAction: "callback" },
  state: (_options: MailboxOptions): MailboxState => ({ open: null, swiping: null, focused: null }),
  live: ["swiping"],
  api: (context) => {
    const swipe = createSwipeActions<MailboxState>(context, {
      key: "open",
      draft: "swiping",
      onFullSwipe: (key, side) => {
        context.options().onAction?.(key, side)
        return true
      },
      fullSwipe: () => 0.5,
      disabled: (key) => key === context.options().pinned,
    })
    return {
      roving: createRovingFocus<MailboxState, { value: string }>(context, { slot: "row", key: "focused" }),
      swipe,
      act(action: string) {
        const first = context.options().first
        if (action === "peek" && first) swipe.show(first, "end")
        else if (action === "close") swipe.close()
      },
    }
  },
  slots: (slot) => ({
    root: slot({}),
    list: slot({ attrs: () => ({ role: "list" }) }),
    row: slot<{ value: string }>({
      props: { value: "string" },
      selects: selects({ focused: ({ key }) => [key, null] }),
      attrs: (state, part) => ({
        role: "listitem",
        tabindex: part.api.roving.tabIndex(state, part),
        "data-open": state.open?.key === part.key ? state.open.side : undefined,
        style: css({ position: "relative", overflow: "hidden", "touch-action": "pan-y" }),
      }),
      on: {
        pointerdown: (event, { el, api, key }) => api.swipe.pointerdown(event, key, el!),
        keydown: (event, { el, api, key }) =>
          api.swipe.keydown(event, key) || (event.target === el && api.roving.keydown(event, el!)),
      },
      bind: (el, part) => {
        const cleanups = [part.api.roving.bind(el, part), part.api.swipe.bindRow(el, part.key)]
        return () => cleanups.forEach((cleanup) => cleanup())
      },
    }),
    content: slot<{ value: string }>({
      props: { value: "string" },
      attrs: () => ({
        style: css({ position: "relative", "z-index": "1", transform: "translateX(var(--swipe-x, 0px))" }),
      }),
      live: live<MailboxState, any, { value: string }>((state, { api, key }) =>
        api.swipe.contentAttrs(state, key),
      ),
    }),
    actions: slot<{ id: string; row: string; side: SwipeSide }>({
      props: { row: "string", side: "string" },
      attrs: (state, { props, api }) => ({
        ...api.swipe.actionsAttrs(state, props.row, props.side),
        style: css({
          position: "absolute",
          top: "0",
          bottom: "0",
          [props.side === "start" ? "inset-inline-start" : "inset-inline-end"]: "0",
          display: "flex",
        }),
      }),
      bind: (el, { props, api }) => api.swipe.bindActions(el, props.row, props.side),
    }),
    action: slot<{ value: string }>({
      props: { value: "string" },
      attrs: () => ({ type: "button" }),
      press: ({ api, key }) => api.act(key),
    }),
  }),
})

const parts = createParts(mailbox, {
  root: "div",
  list: "div",
  row: "div",
  content: "div",
  action: "button",
})

const Mailbox = parts.Root

const MailboxList = parts.List

const MailboxRow = parts.Row

const MailboxContent = parts.Content

const MailboxAction = parts.Action

function MailboxActions({ row, side, ...props }: { row: string; side: SwipeSide } & PartProps<"div">) {
  return usePart(mailbox, "actions", { id: `${row}-${side}`, row, side }, props, "div")
}

function Example() {
  const [messages, setMessages] = React.useState(["Pinned: welcome", "Flight to Lisbon", "Weekly digest"])
  const [read, setRead] = React.useState<string[]>([])
  const [archived, setArchived] = React.useState<string | null>(null)
  const toggleRead = (message: string) =>
    setRead((current) =>
      current.includes(message) ? current.filter((other) => other !== message) : [...current, message],
    )
  const archive = (message: string) => {
    setMessages((current) => current.filter((other) => other !== message))
    setArchived(message)
  }
  return (
    <Mailbox
      pinned="Pinned: welcome"
      first={messages[1]}
      onAction={(key: string, side: SwipeSide) => (side === "start" ? toggleRead(key) : archive(key))}
      className="flex w-72 flex-col gap-2"
    >
      <MailboxList
        aria-label="Mailbox"
        className="flex flex-col divide-y divide-border overflow-hidden rounded-xl border border-border"
      >
        {messages.map((message) => (
          <MailboxRow
            key={message}
            value={message}
            className="outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            <MailboxContent
              value={message}
              className="flex justify-between bg-background px-4 py-3 text-sm transition-transform data-full:bg-muted data-swiping:transition-none"
            >
              {message}
              {read.includes(message) && <span className="text-xs text-muted-foreground">Read</span>}
            </MailboxContent>
            <MailboxActions row={message} side="start">
              <button
                type="button"
                tabIndex={-1}
                onClick={() => toggleRead(message)}
                className="bg-primary px-4 text-sm text-primary-foreground"
              >
                {read.includes(message) ? "Unread" : "Read"}
              </button>
            </MailboxActions>
            <MailboxActions row={message} side="end">
              <button
                type="button"
                tabIndex={-1}
                onClick={() => archive(message)}
                className="bg-muted px-4 text-sm text-foreground"
              >
                Archive
              </button>
            </MailboxActions>
          </MailboxRow>
        ))}
      </MailboxList>
      <div className="flex items-center gap-2">
        <MailboxAction value="peek" className="rounded-md border border-border px-2 py-1 text-xs">
          Peek
        </MailboxAction>
        <MailboxAction value="close" className="rounded-md border border-border px-2 py-1 text-xs">
          Close
        </MailboxAction>
        <p className="text-xs text-muted-foreground">
          {archived ? `Archived ${archived}` : "Nothing archived"}
        </p>
      </div>
    </Mailbox>
  )
}

export {
  Example,
  mailbox,
  Mailbox,
  MailboxAction,
  MailboxActions,
  MailboxContent,
  MailboxList,
  type MailboxOptions,
  MailboxRow,
  type MailboxState,
}
