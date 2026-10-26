import {
  Tree,
  TreeGroup,
  TreeItem,
  TreeItemIndicator,
  TreeItemLabel,
  treeFromPaths,
} from "@ui-sdk/solid/tree"
import type { TreeItemData } from "@ui-sdk/solid/tree"
import { createSignal, For, Show } from "solid-js"

const paths = [
  "src/index.ts",
  "src/lib/format.ts",
  "src/lib/parse.ts",
  "src/routes/home.tsx",
  "src/routes/about.tsx",
  "tests/",
  "package.json",
  "tsconfig.json",
]

const items = treeFromPaths(paths)
const files = new Set(paths.filter((path) => !path.endsWith("/")))

function Items(props: { items: TreeItemData[] }) {
  return (
    <For each={props.items}>
      {(item) => (
        <TreeItem value={item.value} branch={item.children !== undefined} class="outline-none">
          <TreeItemLabel class="group flex h-7 min-w-0 cursor-default items-center gap-1.5 rounded-xl px-2 text-sm leading-5 select-none hover:bg-muted data-disabled:opacity-50 data-selected:bg-accent data-selected:text-accent-foreground [:focus-visible>&]:ring-3 [:focus-visible>&]:ring-ring/30 [:focus-visible>&]:ring-inset">
            {(state) => (
              <>
                <Show when={item.children} fallback={<span class="size-4 shrink-0" />}>
                  <TreeItemIndicator class="flex size-4 cursor-default shrink-0 items-center justify-center text-muted-foreground transition-transform duration-200 data-expanded:rotate-90 rtl:rotate-180 rtl:data-expanded:rotate-90">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      aria-hidden="true"
                      class="pointer-events-none block size-4 shrink-0"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </TreeItemIndicator>
                </Show>
                <span class="truncate">{item.label}</span>
                <Show when={state.pending}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                    class="pointer-events-none ms-auto block size-3.5 shrink-0 animate-spin text-muted-foreground"
                  >
                    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                  </svg>
                </Show>
              </>
            )}
          </TreeItemLabel>
          <Show when={item.children}>
            {(children) => (
              <TreeGroup class="h-(--tree-group-height) overflow-hidden ps-4 transition-[height] duration-200 ease-out data-starting-style:h-0 data-ending-style:h-0">
                <Items items={children()} />
              </TreeGroup>
            )}
          </Show>
        </TreeItem>
      )}
    </For>
  )
}

function Example() {
  const [selected, setSelected] = createSignal<string | null>("src/index.ts")
  const [opened, setOpened] = createSignal<string | null>(null)
  return (
    <div class="flex w-full max-w-md flex-col gap-3 sm:flex-row">
      <Tree
        aria-label="Project"
        paths={paths}
        defaultExpanded={["src"]}
        value={selected()}
        onValueChange={setSelected}
        activation="automatic"
        onAction={async (value) => {
          if (!files.has(value)) return
          await new Promise((resolve) => setTimeout(resolve, 600))
          setOpened(value)
        }}
        class="flex h-80 w-full shrink-0 sm:w-56 flex-col overflow-y-auto rounded-2xl border border-border bg-background p-1 text-sm leading-5 text-foreground"
      >
        <Items items={items} />
      </Tree>
      <div class="flex min-h-20 min-w-0 flex-1 flex-col gap-1 rounded-2xl border border-border p-3 text-sm leading-5">
        <span class="text-xs leading-4 break-all text-muted-foreground">
          {selected() ?? "Nothing selected"}
        </span>
        <span>{opened() ? `Opened ${opened()}` : "Press Enter to open a file."}</span>
      </div>
    </div>
  )
}

export { Example }
