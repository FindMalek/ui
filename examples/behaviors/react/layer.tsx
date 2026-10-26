import * as React from "react"
import { bindLayer, css, definePrimitive, keepFocus, position } from "@ui-sdk/core"
import { Menu, MenuContent, MenuItem, MenuTrigger } from "@ui-sdk/react/menu"
import { usePart, usePrimitive, type PartProps, type PrimitiveHandle } from "@ui-sdk/react/primitive"

type Access = "view" | "comment" | "edit"

type ShareState = { open: boolean; access: Access }

const share = definePrimitive({
  name: "share",
  state: (): ShareState => ({ open: false, access: "view" }),
  api: (context) => {
    const { store } = context
    return {
      trigger: () => context.element("trigger"),
      toggle: () => store.set({ open: !store.get().open }),
      close() {
        store.set({ open: false })
        keepFocus(() => context.element("trigger"))
      },
      setAccess: (access: Access) => store.set({ access }),
    }
  },
  slots: (slot) => ({
    trigger: slot({
      attrs: (state, { id }) => ({
        type: "button",
        "aria-expanded": String(state.open),
        "aria-controls": `${id}-panel`,
      }),
      press: ({ api }) => api.toggle(),
    }),
    panel: slot<{}, { access: Access }>({
      present: (state) => state.open,
      state: (state) => ({ access: state.access }),
      attrs: (_state, { id }) => ({
        id: `${id}-panel`,
        role: "dialog",
        style: css({ inset: "auto", margin: "0" }),
      }),
      bind: (el, { api }) => {
        const stopLayer = bindLayer(el, {
          topLayer: true,
          contains: (target) => !!api.trigger()?.contains(target),
          onDismiss: () => api.close(),
        })
        const stopPosition = position(() => api.trigger(), el, {
          side: "bottom",
          align: "start",
          sideOffset: 4,
        })
        return () => {
          stopPosition()
          stopLayer()
        }
      },
    }),
  }),
})

const ShareContext = React.createContext<PrimitiveHandle<typeof share> | null>(null)

function useShare() {
  const context = React.useContext(ShareContext)
  if (!context) throw new Error("Share parts must be used inside <Share>.")
  return context
}

function Share({ children }: { children: React.ReactNode }) {
  const handle = usePrimitive(share, {})
  return <ShareContext.Provider value={handle}>{children}</ShareContext.Provider>
}

function ShareTrigger(props: PartProps<"button">) {
  return usePart(useShare(), "trigger", {}, props, "button")
}

function SharePanel(props: PartProps<"div", { access: Access }>) {
  return usePart(useShare(), "panel", {}, props, "div")
}

const labels: Record<Access, string> = { view: "Can view", comment: "Can comment", edit: "Can edit" }

function AccessMenu({ access }: { access: Access }) {
  const { api } = useShare()
  return (
    <Menu onAction={(value) => api.setAccess(value as Access)}>
      <MenuTrigger className="rounded-md border border-border px-2 py-1 text-xs outline-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30">
        {labels[access]}
      </MenuTrigger>
      <MenuContent className="min-w-32 rounded-xl bg-popover p-1 text-sm shadow-lg ring-1 ring-foreground/5 outline-none">
        {(Object.keys(labels) as Access[]).map((value) => (
          <MenuItem
            key={value}
            value={value}
            className="rounded-lg px-2 py-1.5 outline-none select-none data-highlighted:bg-accent"
          >
            {labels[value]}
          </MenuItem>
        ))}
      </MenuContent>
    </Menu>
  )
}

function Example() {
  return (
    <Share>
      <ShareTrigger className="h-8 rounded-2xl border border-border px-3 text-sm font-medium outline-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30">
        Share
      </ShareTrigger>
      <SharePanel
        aria-label="Share"
        className="flex w-64 items-center justify-between gap-2 rounded-xl border border-border bg-popover p-3 text-sm shadow-lg"
      >
        {({ access }) => (
          <>
            <span>Anyone with the link</span>
            <AccessMenu access={access} />
          </>
        )}
      </SharePanel>
    </Share>
  )
}

export { Example, share, Share, SharePanel, ShareTrigger, type Access, type ShareState }
