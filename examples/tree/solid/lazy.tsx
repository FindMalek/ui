import { Tree, TreeGroup, TreeItem, TreeItemIndicator, TreeItemLabel } from "@ui-sdk/solid/tree"
import type { JSX } from "@solidjs/web"
import { createSignal, For, Match, Show, Switch } from "solid-js"

type Node = { value: string; label: string; branch?: boolean }

const top: Node[] = [
  { value: "users", label: "users", branch: true },
  { value: "orders", label: "orders", branch: true },
  { value: "archive", label: "archive", branch: true },
]

let archiveAsked = false
async function fetchChildren(value: string, signal: AbortSignal) {
  await new Promise((resolve, reject) => {
    const timer = setTimeout(resolve, 800)
    signal.addEventListener("abort", () => (clearTimeout(timer), reject(signal.reason)))
  })
  if (value === "archive" && !archiveAsked) {
    archiveAsked = true
    throw new Error("Network error")
  }
  return Array.from({ length: 3 }, (_, index) => ({
    value: `${value}/${index + 1}`,
    label: `${value.slice(0, -1)}_${index + 1}.json`,
  }))
}

function Icon(props: { class?: string; children: JSX.Element }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
      class={props.class}
    >
      {props.children}
    </svg>
  )
}

const ChevronRight = (props: { class?: string }) => (
  <Icon class={props.class}>
    <path d="m9 18 6-6-6-6" />
  </Icon>
)

const LoaderCircle = (props: { class?: string }) => (
  <Icon class={props.class}>
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </Icon>
)

const RotateCw = (props: { class?: string }) => (
  <Icon class={props.class}>
    <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
    <path d="M21 3v5h-5" />
  </Icon>
)

function Items(props: { items: Node[]; loaded: Record<string, Node[]> }) {
  return (
    <For each={props.items}>
      {(item) => (
        <TreeItem value={item.value} branch={item.branch} class="outline-none">
          <TreeItemLabel class="flex h-7 min-w-0 cursor-default items-center gap-1.5 rounded-xl px-2 text-sm leading-5 select-none hover:bg-muted data-disabled:opacity-50 data-selected:bg-accent data-selected:text-accent-foreground [:focus-visible>&]:ring-3 [:focus-visible>&]:ring-ring/30 [:focus-visible>&]:ring-inset data-failed:font-medium">
            <Show when={item.branch} fallback={<span class="size-4 shrink-0" />}>
              <TreeItemIndicator class="flex size-4 cursor-default shrink-0 items-center justify-center text-muted-foreground">
                {(state) => (
                  <Switch
                    fallback={
                      <ChevronRight
                        aria-hidden="true"
                        class="pointer-events-none block size-4 shrink-0 transition-transform duration-200 [[data-expanded]>&]:rotate-90 rtl:rotate-180 rtl:[[data-expanded]>&]:rotate-90"
                      />
                    }
                  >
                    <Match when={state.loading}>
                      <LoaderCircle
                        aria-hidden="true"
                        class="pointer-events-none block size-3.5 shrink-0 animate-spin"
                      />
                    </Match>
                    <Match when={state.failed}>
                      <RotateCw aria-hidden="true" class="pointer-events-none block size-3.5 shrink-0" />
                    </Match>
                  </Switch>
                )}
              </TreeItemIndicator>
            </Show>
            {item.label}
          </TreeItemLabel>
          <Show when={props.loaded[item.value]}>
            {(children) => (
              <TreeGroup class="h-(--tree-group-height) overflow-hidden ps-4 transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0">
                <Items items={children()} loaded={props.loaded} />
              </TreeGroup>
            )}
          </Show>
        </TreeItem>
      )}
    </For>
  )
}

function Example() {
  const [loaded, setLoaded] = createSignal<Record<string, Node[]>>({})
  return (
    <Tree
      aria-label="Database"
      loadChildren={async (value, { signal }) => {
        const children = await fetchChildren(value, signal)
        setLoaded((loaded) => ({ ...loaded, [value]: children }))
      }}
      announcement={({ type, label }) =>
        ({
          expanded: "Expanded",
          collapsed: "Collapsed",
          loading: `Loading ${label}`,
          "load-failed": `${label} didn't load. Try again.`,
        })[type]
      }
      class="flex h-80 w-72 max-w-full flex-col overflow-y-auto rounded-2xl border border-border bg-background p-1 text-sm leading-5 text-foreground"
    >
      <Items items={top} loaded={loaded()} />
    </Tree>
  )
}

export { Example }
