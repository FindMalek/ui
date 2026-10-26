import { Radio, RadioGroup, RadioIndicator } from "@ui-sdk/react/radio"

const plans = [
  { value: "plus", label: "Plus", description: "For individuals and small teams." },
  { value: "pro", label: "Pro", description: "For growing businesses." },
  { value: "enterprise", label: "Enterprise", description: "For large teams and enterprises." },
]

function Example() {
  return (
    <RadioGroup className="flex w-full max-w-sm flex-col gap-3" defaultValue="plus" aria-label="Plan">
      {plans.map((plan) => (
        <label
          key={plan.value}
          className="flex cursor-default items-start gap-3 rounded-2xl border border-border p-4 transition-[color,background-color,box-shadow] hover:bg-input/40 has-focus-visible:border-ring has-focus-visible:ring-3 has-focus-visible:ring-ring/30 has-data-checked:bg-input/30 motion-reduce:transition-none"
        >
          <span className="flex flex-1 flex-col gap-1">
            <span className="text-sm leading-4 font-medium">{plan.label}</span>
            <span className="text-sm text-muted-foreground">{plan.description}</span>
          </span>
          <Radio
            className="relative flex size-4 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-input/90 outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 data-checked:bg-primary data-checked:text-primary-foreground data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none"
            value={plan.value}
          >
            <RadioIndicator className="size-2 rounded-full bg-primary-foreground" />
          </Radio>
        </label>
      ))}
    </RadioGroup>
  )
}

export { Example }
