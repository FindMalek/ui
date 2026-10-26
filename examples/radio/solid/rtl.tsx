import { Radio, RadioGroup, RadioIndicator } from "@ui-sdk/solid/radio"
import { For } from "solid-js"

const options = [
  { value: "default", label: "افتراضي" },
  { value: "comfortable", label: "مريح" },
  { value: "compact", label: "مضغوط" },
]

function Example() {
  return (
    <div dir="rtl">
      <RadioGroup class="flex flex-col gap-3" defaultValue="comfortable" aria-label="الكثافة">
        <For each={options}>
          {(option) => (
            <label class="flex w-fit items-center gap-3 text-sm font-medium">
              <Radio
                class="relative flex size-4 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-input/90 outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:bg-primary data-checked:text-primary-foreground data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none"
                value={option.value}
              >
                <RadioIndicator class="size-2 rounded-full bg-primary-foreground" />
              </Radio>
              {option.label}
            </label>
          )}
        </For>
      </RadioGroup>
    </div>
  )
}

export { Example }
