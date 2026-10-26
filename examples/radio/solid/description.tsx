import { createUniqueId } from "solid-js"
import { Radio, RadioGroup, RadioIndicator } from "@ui-sdk/solid/radio"
import { For } from "solid-js"

const options = [
  { value: "default", label: "Default", description: "Standard spacing for most use cases." },
  { value: "comfortable", label: "Comfortable", description: "More space between elements." },
  { value: "compact", label: "Compact", description: "Minimal spacing for dense layouts." },
]

function Example() {
  const id = createUniqueId()
  return (
    <RadioGroup class="flex w-full max-w-sm flex-col gap-4" defaultValue="comfortable" aria-label="Density">
      <For each={options}>
        {(option) => (
          <div class="flex items-start gap-3">
            <Radio
              class="relative flex size-4 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-input/90 outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:bg-primary data-checked:text-primary-foreground data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none"
              value={option.value}
              id={`${id}-density-${option.value}`}
              aria-describedby={`${id}-density-${option.value}-description`}
            >
              <RadioIndicator class="size-2 rounded-full bg-primary-foreground" />
            </Radio>
            <div class="flex flex-col gap-1.5">
              <label class="text-sm leading-4 font-medium" for={`${id}-density-${option.value}`}>
                {option.label}
              </label>
              <p class="text-sm text-muted-foreground" id={`${id}-density-${option.value}-description`}>
                {option.description}
              </p>
            </div>
          </div>
        )}
      </For>
    </RadioGroup>
  )
}

export { Example }
