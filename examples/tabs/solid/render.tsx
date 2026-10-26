import { Tabs, TabsList, TabsPanel, TabsTab } from "@ui-sdk/solid/tabs"
import { For } from "solid-js"

const folders = [
  { value: "inbox", label: "Inbox", count: 12 },
  { value: "unread", label: "Unread", count: 3 },
  { value: "archived", label: "Archived", count: 0 },
]

export function Example() {
  return (
    <Tabs class="flex w-full max-w-md flex-col gap-2" defaultValue="inbox">
      <TabsList class="flex flex-wrap gap-1" aria-label="Mail">
        <For each={folders}>
          {(folder) => (
            <TabsTab
              value={folder.value}
              class={(state) =>
                state.selected
                  ? "inline-flex h-8 items-center gap-1.5 rounded-2xl border border-transparent px-3 text-sm font-medium whitespace-nowrap outline-none transition-[color,background-color,box-shadow] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 bg-primary text-primary-foreground"
                  : "inline-flex h-8 items-center gap-1.5 rounded-2xl border border-transparent px-3 text-sm font-medium whitespace-nowrap outline-none transition-[color,background-color,box-shadow] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 text-foreground/60 hover:bg-muted hover:text-foreground dark:text-muted-foreground dark:hover:text-foreground"
              }
              render={(props, state) => (
                <button {...props}>
                  {props.children}
                  {folder.count > 0 && (
                    <span
                      class={
                        state.selected
                          ? "inline-flex h-5 items-center rounded-2xl px-1.5 text-xs font-medium tabular-nums bg-primary-foreground/20"
                          : "inline-flex h-5 items-center rounded-2xl px-1.5 text-xs font-medium tabular-nums bg-foreground/10 text-foreground"
                      }
                    >
                      {folder.count}
                    </span>
                  )}
                </button>
              )}
            >
              {folder.label}
            </TabsTab>
          )}
        </For>
      </TabsList>
      <For each={folders}>
        {(folder) => (
          <TabsPanel
            class="rounded-xl py-2 text-sm text-muted-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
            value={folder.value}
          >
            {folder.count > 0 ? `${folder.count} conversations.` : "Nothing archived yet."}
          </TabsPanel>
        )}
      </For>
    </Tabs>
  )
}
