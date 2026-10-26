import { Field, FieldLabel } from "@ui-sdk/react/field"
import {
  NumberInput,
  NumberInputDecrement,
  NumberInputGroup,
  NumberInputIncrement,
  NumberInputControl,
} from "@ui-sdk/react/number-input"
import { Minus, Plus } from "lucide-react"

const fields = [
  {
    label: "Price",
    defaultValue: 19.99,
    step: 0.01,
    format: { style: "currency", currency: "USD" },
  },
  { label: "Discount", defaultValue: 0.15, step: 0.01, format: { style: "percent" } },
  { label: "Weight", defaultValue: 2.5, step: 0.1, format: { style: "unit", unit: "kilogram" } },
] satisfies { label: string; defaultValue: number; step: number; format: Intl.NumberFormatOptions }[]

export function Example() {
  return (
    <div className="flex flex-col gap-5">
      {fields.map(({ label, ...options }) => (
        <Field key={label} className="flex min-w-0 flex-col gap-2 text-foreground">
          <FieldLabel className="text-sm leading-none font-medium text-foreground data-disabled:opacity-50">
            {label}
          </FieldLabel>
          <NumberInput {...options} min={0}>
            <NumberInputGroup className="flex h-8 w-40 items-center gap-0.5 rounded-2xl border border-transparent bg-input/50 px-1 transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30 motion-reduce:transition-none">
              <NumberInputDecrement
                aria-label="Decrease"
                className="inline-flex size-6 shrink-0 cursor-default items-center justify-center rounded-xl border-0 bg-transparent p-0 text-muted-foreground transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none select-none data-disabled:pointer-events-none data-disabled:opacity-50"
              >
                <Minus aria-hidden="true" className="size-4 shrink-0" />
              </NumberInputDecrement>
              <NumberInputControl className="h-full w-full min-w-0 border-0 bg-transparent px-1 py-0 text-center text-base text-foreground tabular-nums outline-none data-disabled:opacity-50 md:text-sm" />
              <NumberInputIncrement
                aria-label="Increase"
                className="inline-flex size-6 shrink-0 cursor-default items-center justify-center rounded-xl border-0 bg-transparent p-0 text-muted-foreground transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none select-none data-disabled:pointer-events-none data-disabled:opacity-50"
              >
                <Plus aria-hidden="true" className="size-4 shrink-0" />
              </NumberInputIncrement>
            </NumberInputGroup>
          </NumberInput>
        </Field>
      ))}
    </div>
  )
}
