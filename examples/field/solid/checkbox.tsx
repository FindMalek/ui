import { Checkbox, CheckboxIndicator } from "@ui-sdk/solid/checkbox"
import { Field, FieldDescription, FieldLabel } from "@ui-sdk/solid/field"

export function Example() {
  return (
    <Field class="flex w-full max-w-sm flex-row items-start gap-3">
      <Checkbox
        class="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-[5px] border border-transparent bg-input/90 outline-none transition-shadow focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground data-disabled:opacity-50"
        name="usage"
      >
        <CheckboxIndicator class="grid place-content-center">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
            class="size-3.5"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </CheckboxIndicator>
      </Checkbox>
      <div class="flex flex-col gap-1.5">
        <FieldLabel class="text-sm leading-snug font-medium">Share usage data</FieldLabel>
        <FieldDescription class="text-sm text-muted-foreground">
          Help us improve by sending anonymous crash reports and usage statistics.
        </FieldDescription>
      </div>
    </Field>
  )
}
