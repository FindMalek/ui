import { Field, FieldDescription, FieldError, FieldLabel } from "@ui-sdk/solid/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectItemIndicator,
  SelectTrigger,
  SelectValue,
} from "@ui-sdk/solid/select"
import { createSignal, For } from "solid-js"

const fruits = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "blueberry", label: "Blueberry" },
  { value: "grapes", label: "Grapes" },
  { value: "pineapple", label: "Pineapple" },
]

function Example() {
  const [submitted, setSubmitted] = createSignal("")

  return (
    <form
      class="flex w-64 max-w-full flex-col gap-4"
      onSubmit={(event) => {
        event.preventDefault()
        setSubmitted(`Ordered ${new FormData(event.currentTarget).get("fruit")}.`)
      }}
    >
      <Field name="fruit" class="flex flex-col gap-2">
        <FieldLabel class="text-sm leading-none font-medium">Fruit</FieldLabel>
        <Select required placeholder="Select a fruit">
          <SelectTrigger class="flex h-8 w-full min-w-0 cursor-default items-center justify-between gap-1.5 rounded-2xl border border-transparent bg-input/50 px-3 py-2 text-sm leading-5 whitespace-nowrap transition-[color,box-shadow] duration-200 select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-placeholder:text-muted-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50 data-readonly:border-input data-readonly:bg-transparent data-invalid:border-foreground data-invalid:ring-3 data-invalid:ring-foreground/20">
            <SelectValue class="min-w-0 flex-1 truncate text-start" />
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
              class="pointer-events-none block size-4 shrink-0 text-muted-foreground"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </SelectTrigger>
          <SelectContent class="max-h-(--available-height) scroll-py-1 overflow-x-hidden overflow-y-auto box-border min-w-(--anchor-width) rounded-2xl border-0 bg-popover p-1 text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none">
            <For each={fruits}>
              {(fruit) => (
                <SelectItem
                  value={fruit.value}
                  class="relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
                >
                  {fruit.label}
                  <SelectItemIndicator class="pointer-events-none absolute end-2 flex size-4 items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      aria-hidden="true"
                      class="pointer-events-none block size-4 shrink-0"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </SelectItemIndicator>
                </SelectItem>
              )}
            </For>
          </SelectContent>
        </Select>
        <FieldDescription class="m-0 min-h-5 text-sm leading-5 text-muted-foreground">
          We deliver it tomorrow.
        </FieldDescription>
        <div class="min-h-5">
          <FieldError match="valueMissing" class="m-0 text-sm leading-5 font-medium">
            Pick a fruit to order.
          </FieldError>
        </div>
      </Field>
      <button
        type="submit"
        class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary bg-clip-padding px-3 text-sm leading-5 font-medium whitespace-nowrap text-primary-foreground transition-all select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 hover:bg-primary/80 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50"
      >
        Order
      </button>
      <output class="block min-h-10 text-sm leading-5 break-all text-muted-foreground">{submitted()}</output>
    </form>
  )
}

export { Example }
