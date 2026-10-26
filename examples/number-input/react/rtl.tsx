import { Field, FieldLabel } from "@ui-sdk/react/field"
import {
  NumberInput,
  NumberInputDecrement,
  NumberInputGroup,
  NumberInputIncrement,
  NumberInputControl,
} from "@ui-sdk/react/number-input"
import { Minus, Plus } from "lucide-react"

export function Example() {
  return (
    <div dir="rtl">
      <Field className="flex flex-col gap-2">
        <FieldLabel className="text-sm leading-none font-medium">الكمية</FieldLabel>
        <NumberInput defaultValue={1} min={0}>
          <NumberInputGroup className="flex h-8 w-40 items-center gap-0.5 rounded-2xl border border-transparent bg-input/50 px-1 transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30">
            <NumberInputDecrement
              aria-label="إنقاص"
              className="flex size-6 shrink-0 items-center justify-center rounded-xl text-muted-foreground outline-none select-none transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 dark:hover:bg-muted/50"
            >
              <Minus className="size-4" />
            </NumberInputDecrement>
            <NumberInputControl className="h-full w-full min-w-0 bg-transparent px-1 text-center text-base tabular-nums outline-none data-disabled:opacity-50 md:text-sm" />
            <NumberInputIncrement
              aria-label="زيادة"
              className="flex size-6 shrink-0 items-center justify-center rounded-xl text-muted-foreground outline-none select-none transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 dark:hover:bg-muted/50"
            >
              <Plus className="size-4" />
            </NumberInputIncrement>
          </NumberInputGroup>
        </NumberInput>
      </Field>
    </div>
  )
}
