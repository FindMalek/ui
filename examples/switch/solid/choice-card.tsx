import { Field, FieldDescription, FieldLabel } from "@ui-sdk/solid/field"
import { Switch, SwitchThumb } from "@ui-sdk/solid/switch"
import { For } from "solid-js"

const options = [
  {
    label: "Share across devices",
    description: "Focus is shared across devices, and turns off when you leave the app.",
    defaultChecked: false,
  },
  {
    label: "Enable notifications",
    description: "Receive notifications when focus mode is enabled or disabled.",
    defaultChecked: true,
  },
]

function Example() {
  return (
    <div class="flex w-full max-w-sm flex-col gap-3">
      <For each={options}>
        {(option) => (
          <Field class="relative flex items-center gap-6 rounded-2xl border border-border p-4 transition-colors has-data-checked:bg-input/30">
            <div class="flex flex-1 flex-col gap-1.5">
              <FieldLabel class="text-sm leading-none font-medium after:absolute after:inset-0 after:rounded-2xl">
                {option.label}
              </FieldLabel>
              <FieldDescription class="m-0 text-sm text-muted-foreground">
                {option.description}
              </FieldDescription>
            </div>
            <Switch
              class="relative inline-flex h-5 w-8 shrink-0 cursor-default appearance-none items-center rounded-2xl border-2 border-transparent bg-input/90 p-0 outline-none transition-colors after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-invalid:border-foreground aria-invalid:ring-3 aria-invalid:ring-foreground/20 data-checked:border-primary data-checked:bg-primary data-disabled:opacity-50 motion-reduce:transition-none"
              defaultChecked={option.defaultChecked}
            >
              <SwitchThumb class="pointer-events-none block size-4 shrink-0 rounded-2xl bg-background shadow-sm transition-transform data-checked:translate-x-[calc(100%-4px)] rtl:data-checked:-translate-x-[calc(100%-4px)] motion-reduce:transition-none" />
            </Switch>
          </Field>
        )}
      </For>
    </div>
  )
}

export { Example }
