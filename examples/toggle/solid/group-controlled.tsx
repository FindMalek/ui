import { Toggle, ToggleGroup, ToggleIcon, createToggleGroupController } from "@ui-sdk/solid/toggle"
import { createSignal, For } from "solid-js"

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

function Example() {
  const editor = createToggleGroupController()
  const [value, setValue] = createSignal(["bold"])
  const [reason, setReason] = createSignal("")

  return (
    <div class="flex flex-col items-start gap-3">
      <ToggleGroup
        multiple
        aria-label="Text formatting"
        class="flex w-fit items-center gap-1"
        value={value()}
        onValueChange={(next, details) => {
          setValue(next)
          setReason(details.reason)
        }}
        controller={editor}
      >
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
      <button
        type="button"
        class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 enabled:active:translate-y-px motion-reduce:transform-none motion-reduce:transition-none"
        onClick={() => editor.setValue([])}
      >
        Clear
      </button>
      <output class="text-sm text-muted-foreground">
        Pressed: {value().length ? value().join(", ") : "none"}
        {reason() && `, last change: ${reason()}`}
      </output>
    </div>
  )
}

export { Example }
