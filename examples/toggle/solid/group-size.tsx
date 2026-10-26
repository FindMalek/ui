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
const Underline = icon('<path d="M6 4v6a6 6 0 0 0 12 0V4" /><line x1="4" x2="20" y1="20" y2="20" />')

const formatting = [
  { value: "bold", label: "Bold", icon: Bold },
  { value: "italic", label: "Italic", icon: Italic },
  { value: "underline", label: "Underline", icon: Underline },
]

export function Example() {
  return (
    <div class="flex flex-col items-start gap-4">
      <ToggleGroup multiple aria-label="Text formatting, small" class="flex w-fit items-center gap-1">
        <For each={formatting}>
          {(item) => (
            <Toggle
              value={item.value}
              aria-label={item.label}
              class="inline-flex h-7 min-w-7 shrink-0 items-center justify-center rounded-2xl border border-input bg-transparent px-1.5 text-sm font-medium whitespace-nowrap outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted data-disabled:pointer-events-none data-disabled:opacity-50"
            >
              <ToggleIcon class="flex">
                <item.icon class="size-3.5" />
              </ToggleIcon>
            </Toggle>
          )}
        </For>
      </ToggleGroup>
      <ToggleGroup multiple aria-label="Text formatting" class="flex w-fit items-center gap-1">
        <For each={formatting}>
          {(item) => (
            <Toggle
              value={item.value}
              aria-label={item.label}
              class="inline-flex h-8 min-w-8 shrink-0 items-center justify-center rounded-2xl border border-input bg-transparent px-2 text-sm font-medium whitespace-nowrap outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted data-disabled:pointer-events-none data-disabled:opacity-50"
            >
              <ToggleIcon class="flex">
                <item.icon class="size-4" />
              </ToggleIcon>
            </Toggle>
          )}
        </For>
      </ToggleGroup>
      <ToggleGroup multiple aria-label="Text formatting, large" class="flex w-fit items-center gap-1">
        <For each={formatting}>
          {(item) => (
            <Toggle
              value={item.value}
              aria-label={item.label}
              class="inline-flex h-9 min-w-9 shrink-0 items-center justify-center rounded-2xl border border-input bg-transparent px-2.5 text-sm font-medium whitespace-nowrap outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted data-disabled:pointer-events-none data-disabled:opacity-50"
            >
              <ToggleIcon class="flex">
                <item.icon class="size-4" />
              </ToggleIcon>
            </Toggle>
          )}
        </For>
      </ToggleGroup>
    </div>
  )
}
