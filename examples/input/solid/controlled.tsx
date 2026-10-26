import { Field, FieldDescription, FieldLabel } from "@ui-sdk/solid/field"
import { Input, type InputValueChangeReason } from "@ui-sdk/solid/input"
import { createSignal } from "solid-js"

export function Example() {
  const [name, setName] = createSignal("Ada")
  const [reason, setReason] = createSignal<InputValueChangeReason>()
  return (
    <div class="flex w-full max-w-sm flex-col gap-6 text-foreground">
      <Field class="flex flex-col gap-2">
        <FieldLabel class="text-sm leading-none font-medium text-foreground data-disabled:opacity-50">
          Display name
        </FieldLabel>
        <Input
          value={name()}
          onValueChange={(value, details) => {
            setName(value)
            setReason(details.reason)
          }}
          class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base text-foreground transition-[color,box-shadow] duration-200 outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10 motion-reduce:transition-none md:text-sm"
        />
        <FieldDescription class="min-h-5 text-sm text-muted-foreground">
          {reason() ? `Changed by ${reason()}.` : "Type to change it."}
        </FieldDescription>
      </Field>
      <Field class="flex flex-col gap-2">
        <FieldLabel class="text-sm leading-none font-medium text-foreground data-disabled:opacity-50">
          Profile URL
        </FieldLabel>
        <Input
          readonly
          value={`example.com/${name().toLowerCase()}`}
          class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base text-foreground transition-[color,box-shadow] duration-200 outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10 motion-reduce:transition-none md:text-sm read-only:border-input read-only:bg-transparent"
        />
      </Field>
    </div>
  )
}
