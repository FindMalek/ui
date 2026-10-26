import { Field, FieldDescription, FieldLabel } from "@ui-sdk/solid/field"
import {
  NumberInput,
  NumberInputDecrement,
  NumberInputGroup,
  NumberInputIncrement,
  NumberInputControl,
} from "@ui-sdk/solid/number-input"
import { For } from "solid-js"

const fields = [
  {
    label: "Preis",
    locale: "de-DE",
    defaultValue: 1234.5,
    step: 0.01,
    format: { style: "currency", currency: "EUR" },
  },
  {
    label: "Budget",
    locale: "en-IN",
    defaultValue: 1234567,
    step: 1000,
    format: { style: "currency", currency: "INR", maximumFractionDigits: 0 },
  },
] satisfies {
  label: string
  locale: string
  defaultValue: number
  step: number
  format: Intl.NumberFormatOptions
}[]

export function Example() {
  return (
    <div class="flex flex-col gap-5">
      <For each={fields}>
        {({ label, ...options }) => (
          <Field class="flex min-w-0 flex-col gap-2 text-foreground">
            <FieldLabel class="text-sm leading-none font-medium text-foreground data-disabled:opacity-50">
              {label}
            </FieldLabel>
            <NumberInput {...options} min={0}>
              <NumberInputGroup class="flex h-8 w-48 items-center gap-0.5 rounded-2xl border border-transparent bg-input/50 px-1 transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30 motion-reduce:transition-none">
                <NumberInputDecrement
                  aria-label="Decrease"
                  class="inline-flex size-6 shrink-0 cursor-default items-center justify-center rounded-xl border-0 bg-transparent p-0 text-muted-foreground transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none select-none data-disabled:pointer-events-none data-disabled:opacity-50"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                    class="size-4 shrink-0"
                  >
                    <path d="M5 12h14" />
                  </svg>
                </NumberInputDecrement>
                <NumberInputControl class="h-full w-full min-w-0 border-0 bg-transparent px-1 py-0 text-center text-base text-foreground tabular-nums outline-none data-disabled:opacity-50 md:text-sm" />
                <NumberInputIncrement
                  aria-label="Increase"
                  class="inline-flex size-6 shrink-0 cursor-default items-center justify-center rounded-xl border-0 bg-transparent p-0 text-muted-foreground transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none select-none data-disabled:pointer-events-none data-disabled:opacity-50"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                    class="size-4 shrink-0"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                </NumberInputIncrement>
              </NumberInputGroup>
            </NumberInput>
            <FieldDescription class="min-h-5 text-sm text-muted-foreground">
              Formatted for {options.locale}.
            </FieldDescription>
          </Field>
        )}
      </For>{" "}
    </div>
  )
}
