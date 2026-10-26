import { Toggle, ToggleGroup } from "@ui-sdk/solid/toggle"
import { createSignal, For } from "solid-js"

const weights = [
  { value: "light", label: "Light", weight: 300 },
  { value: "normal", label: "Normal", weight: 400 },
  { value: "medium", label: "Medium", weight: 500 },
  { value: "bold", label: "Bold", weight: 700 },
]

function Example() {
  const [weight, setWeight] = createSignal(400)

  return (
    <div class="flex flex-col items-start gap-4">
      <ToggleGroup
        defaultValue={["normal"]}
        deselectable={false}
        aria-label="Font weight"
        class="flex w-fit items-center gap-1"
        onValueChange={(value) => setWeight(weights.find((item) => item.value === value[0])?.weight ?? 400)}
      >
        <For each={weights}>
          {(item) => (
            <Toggle
              value={item.value}
              style={{ "font-weight": item.weight }}
              class="inline-flex h-8 min-w-8 shrink-0 cursor-default items-center justify-center gap-1 rounded-2xl border border-transparent bg-transparent px-2.5 text-sm whitespace-nowrap outline-none transition-colors not-data-disabled:hover:bg-muted not-data-disabled:hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted disabled:pointer-events-none data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none"
            >
              {item.label}
            </Toggle>
          )}
        </For>
      </ToggleGroup>
      <p class="text-lg" style={{ "font-weight": weight() }}>
        The quick brown fox jumps over the lazy dog.
      </p>
    </div>
  )
}

export { Example }
