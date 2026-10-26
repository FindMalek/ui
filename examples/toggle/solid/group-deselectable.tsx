import { Toggle, ToggleGroup, ToggleIcon } from "@ui-sdk/solid/toggle"
import { For } from "solid-js"

const icon = (markup: string) => (props: { class?: string }) => (
  <svg
    class={props.class}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    innerHTML={markup}
  />
)
const TextAlignCenter = icon('<path d="M21 5H3" /><path d="M17 12H7" /><path d="M19 19H5" />')
const TextAlignEnd = icon('<path d="M21 5H3" /><path d="M21 12H9" /><path d="M21 19H7" />')
const TextAlignStart = icon('<path d="M21 5H3" /><path d="M15 12H3" /><path d="M17 19H3" />')

const alignments = [
  { value: "start", label: "Align start", icon: TextAlignStart, mirror: true },
  { value: "center", label: "Align center", icon: TextAlignCenter, mirror: false },
  { value: "end", label: "Align end", icon: TextAlignEnd, mirror: true },
]

function Example() {
  return (
    <ToggleGroup
      defaultValue={["start"]}
      deselectable={false}
      aria-label="Text alignment"
      class="flex w-fit items-center gap-1"
    >
      <For each={alignments}>
        {(item) => (
          <Toggle
            value={item.value}
            aria-label={item.label}
            class="inline-flex h-8 min-w-8 shrink-0 cursor-default items-center justify-center gap-1 rounded-2xl border border-transparent bg-transparent px-2.5 text-sm font-medium whitespace-nowrap outline-none transition-colors not-data-disabled:hover:bg-muted not-data-disabled:hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted disabled:pointer-events-none data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none"
          >
            <ToggleIcon mirror={item.mirror} class="flex">
              <item.icon class="size-4" />
            </ToggleIcon>
          </Toggle>
        )}
      </For>
    </ToggleGroup>
  )
}

export { Example }
