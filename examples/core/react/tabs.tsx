import * as React from "react"
import {
  createChange,
  createRovingFocus,
  definePrimitive,
  idPart,
  selects,
  type ChangeDetails,
} from "@ui-sdk/core"
import { createParts } from "@ui-sdk/react/primitive"

type TabsOptions = {
  value?: string
  defaultValue?: string
  onValueChange?: (value: string, details: ChangeDetails<"item-press" | "list-navigation">) => void
}

type TabsState = { value: string | null; focused: string | null }

type TabProps = { value: string }

const tabs = definePrimitive({
  name: "tabs",
  options: { value: "string", defaultValue: "string", onValueChange: "callback" },
  state: (options: TabsOptions) => ({
    value: options.value ?? options.defaultValue ?? null,
    focused: null as string | null,
  }),
  sync: (options) => (options.value === undefined ? {} : { value: options.value }),
  api: (context) => {
    const change = createChange(context)
    const roving = createRovingFocus<TabsState, TabProps>(context, {
      slot: "tab",
      key: "focused",
      orientation: () => "horizontal",
      loop: () => true,
      remember: false,
      preferred: (tab) => tab.key === context.store.get().value,
      claims: (state, tab) => tab.key === state.value,
    })
    return {
      roving,
      select: (value: string, event?: Event) => change("value", value, { reason: "item-press", event }),
      keydown(event: KeyboardEvent, el: HTMLElement) {
        const moved = roving.keydown(event, el)
        if (moved) {
          change("value", moved.key, { reason: "list-navigation", event })
        }
        return Boolean(moved)
      },
    }
  },
  slots: (slot) => ({
    root: slot({}),
    list: slot({ attrs: () => ({ role: "tablist", "aria-orientation": "horizontal" }) }),
    tab: slot<TabProps>({
      props: { value: "string" },
      selects: selects({ value: ({ key }) => [key, null], focused: ({ key }) => [key, null] }),
      attrs: (state, part) => ({
        id: `${part.id}-tab-${idPart(part.key)}`,
        role: "tab",
        type: "button",
        tabindex: part.api.roving.tabIndex(state, part),
        "aria-selected": String(state.value === part.key),
        "aria-controls": `${part.id}-panel-${idPart(part.key)}`,
      }),
      press: ({ api, key }, event) => api.select(key, event),
      on: { keydown: (event, { el, api }) => el && api.keydown(event, el) },
      bind: (el, part) => part.api.roving.bind(el, part),
    }),
    panel: slot<TabProps>({
      props: { value: "string" },
      selects: selects({ value: ({ key }) => [key] }),
      attrs: (state, part) => ({
        id: `${part.id}-panel-${idPart(part.key)}`,
        role: "tabpanel",
        tabindex: "0",
        "aria-labelledby": `${part.id}-tab-${idPart(part.key)}`,
        hidden: state.value === part.key ? undefined : "",
      }),
    }),
  }),
})

const parts = createParts(tabs, { root: "div", list: "div", tab: "button", panel: "div" })

const Tabs = parts.Root

const TabsList = parts.List

const TabsTab = parts.Tab

const TabsPanel = parts.Panel

const tab =
  "h-11 min-w-11 rounded-2xl px-2 text-sm font-medium text-muted-foreground outline-none hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 aria-selected:bg-muted aria-selected:text-foreground"

const panel =
  "min-h-20 rounded-xl border border-border bg-card p-4 text-muted-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/30"

function Example() {
  return (
    <Tabs defaultValue="overview" className="flex w-full max-w-sm flex-col gap-3 text-sm">
      <TabsList aria-label="Project" className="grid grid-cols-3 gap-1">
        <TabsTab value="overview" className={tab}>
          Overview
        </TabsTab>
        <TabsTab value="activity" className={tab}>
          Activity
        </TabsTab>
        <TabsTab value="files" className={tab}>
          Files
        </TabsTab>
      </TabsList>
      <TabsPanel value="overview" className={panel}>
        Eight of twelve tasks are done.
      </TabsPanel>
      <TabsPanel value="activity" className={panel}>
        The homepage design was approved.
      </TabsPanel>
      <TabsPanel value="files" className={panel}>
        Project brief, wireframes and brand assets.
      </TabsPanel>
    </Tabs>
  )
}

export { Example, tabs, Tabs, TabsList, type TabsOptions, TabsPanel, TabsTab }
