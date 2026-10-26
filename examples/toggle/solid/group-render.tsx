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
const Bookmark = icon(
  '<path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" />',
)
const Heart = icon(
  '<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />',
)
const Star = icon(
  '<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />',
)

const reactions = [
  { value: "star", label: "Favorite", icon: Star },
  { value: "heart", label: "Like", icon: Heart },
  { value: "bookmark", label: "Save", icon: Bookmark },
]

function Example() {
  return (
    <ToggleGroup
      multiple
      aria-label="Reactions"
      class={(state) =>
        state.value.length > 0
          ? "flex w-fit items-center gap-1 rounded-3xl border border-border p-1 transition-colors"
          : "flex w-fit items-center gap-1 rounded-3xl border border-transparent p-1 transition-colors"
      }
    >
      <For each={reactions}>
        {(item) => (
          <Toggle
            value={item.value}
            aria-label={item.label}
            class="inline-flex h-8 min-w-8 shrink-0 cursor-default items-center justify-center gap-1 rounded-2xl border border-transparent bg-transparent px-2.5 text-sm font-medium whitespace-nowrap outline-none transition-colors not-data-disabled:hover:bg-muted not-data-disabled:hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted disabled:pointer-events-none data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none"
            render={(props, state) => (
              <button {...props}>
                <ToggleIcon class="flex">
                  <item.icon class={state.pressed ? "size-4 fill-current" : "size-4"} />
                </ToggleIcon>
              </button>
            )}
          />
        )}
      </For>
    </ToggleGroup>
  )
}

export { Example }
