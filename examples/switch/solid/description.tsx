import { Field, FieldDescription, FieldLabel } from "@ui-sdk/solid/field"
import { Switch, SwitchThumb } from "@ui-sdk/solid/switch"

function Example() {
  return (
    <Field class="flex w-full max-w-sm items-center justify-between gap-6">
      <div class="flex flex-col gap-1.5">
        <FieldLabel class="text-sm leading-none font-medium">Share across devices</FieldLabel>
        <FieldDescription class="m-0 text-sm text-muted-foreground">
          Focus is shared across devices, and turns off when you leave the app.
        </FieldDescription>
      </div>
      <Switch class="relative inline-flex h-5 w-8 shrink-0 cursor-default appearance-none items-center rounded-2xl border-2 border-transparent bg-input/90 p-0 outline-none transition-colors after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-invalid:border-foreground aria-invalid:ring-3 aria-invalid:ring-foreground/20 data-checked:border-primary data-checked:bg-primary data-disabled:opacity-50 motion-reduce:transition-none">
        <SwitchThumb class="pointer-events-none block size-4 shrink-0 rounded-2xl bg-background shadow-sm transition-transform data-checked:translate-x-[calc(100%-4px)] rtl:data-checked:-translate-x-[calc(100%-4px)] motion-reduce:transition-none" />
      </Switch>
    </Field>
  )
}

export { Example }
