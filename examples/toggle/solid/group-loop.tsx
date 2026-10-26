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
const Bold = icon('<path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8" />')
const Italic = icon(
  '<line x1="19" x2="10" y1="4" y2="4" /><line x1="14" x2="5" y1="20" y2="20" /><line x1="15" x2="9" y1="4" y2="20" />',
)
const Strikethrough = icon(
  '<path d="M16 4H9a3 3 0 0 0-2.83 4" /><path d="M14 12a4 4 0 0 1 0 8H6" /><line x1="4" x2="20" y1="12" y2="12" />',
)
const Underline = icon('<path d="M6 4v6a6 6 0 0 0 12 0V4" /><line x1="4" x2="20" y1="20" y2="20" />')

const formatting = [
  { value: "bold", label: "Bold", icon: Bold },
  { value: "italic", label: "Italic", icon: Italic },
  { value: "underline", label: "Underline", icon: Underline },
  { value: "strikethrough", label: "Strikethrough", icon: Strikethrough },
]

function Example() {
  return (
    <ToggleGroup multiple loop={false} aria-label="Text formatting" class="flex w-fit items-center gap-1">
      <For each={formatting}>
        {(item) => (
          <Toggle
            value={item.value}
            aria-label={item.label}
            class="inline-flex h-8 min-w-8 shrink-0 cursor-default items-center justify-center gap-1 rounded-2xl border border-transparent bg-transparent px-2.5 text-sm font-medium whitespace-nowrap outline-none transition-colors not-data-disabled:hover:bg-muted not-data-disabled:hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted disabled:pointer-events-none data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none"
          >
            <ToggleIcon class="flex">
              <item.icon class="size-4" />
            </ToggleIcon>
          </Toggle>
        )}
      </For>
    </ToggleGroup>
  )
}

export { Example }
