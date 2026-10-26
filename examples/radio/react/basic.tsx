import { Radio, RadioGroup, RadioIndicator } from "@ui-sdk/react/radio"

const options = [
  { value: "default", label: "Default" },
  { value: "comfortable", label: "Comfortable" },
  { value: "compact", label: "Compact" },
]

function Example() {
  return (
    <RadioGroup className="flex flex-col gap-3" defaultValue="comfortable" aria-label="Density">
      {options.map((option) => (
        <label key={option.value} className="flex w-fit items-center gap-3 text-sm font-medium">
          <Radio
            className="relative flex size-4 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-input/90 outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:bg-primary data-checked:text-primary-foreground data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none"
            value={option.value}
          >
            <RadioIndicator className="size-2 rounded-full bg-primary-foreground" />
          </Radio>
          {option.label}
        </label>
      ))}
    </RadioGroup>
  )
}

export { Example }
