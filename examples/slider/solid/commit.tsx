import { Field, FieldLabel } from "@ui-sdk/solid/field"
import {
  Slider,
  SliderControl,
  SliderIndicator,
  SliderThumb,
  SliderTrack,
  SliderValue,
} from "@ui-sdk/solid/slider"
import { createSignal } from "solid-js"

const save = () => new Promise((resolve) => setTimeout(resolve, 600))

function Example() {
  const [changes, setChanges] = createSignal(0)
  const [status, setStatus] = createSignal("Drag to change the brightness.")

  return (
    <Field class="flex w-full max-w-xs flex-col gap-3">
      <Slider
        defaultValue={50}
        onValueChange={() => setChanges((count) => count + 1)}
        onValueCommit={async (value, details) => {
          setStatus("Saving…")
          await save()
          setStatus(`Saved ${value} (${details.reason}).`)
        }}
        class="flex flex-col gap-2"
      >
        <div class="flex items-center justify-between text-sm">
          <FieldLabel class="font-medium">Brightness</FieldLabel>
          <SliderValue class="text-muted-foreground tabular-nums" />
        </div>
        <SliderControl class="flex w-full items-center py-2 select-none data-disabled:opacity-50">
          <SliderTrack class="h-1 w-full rounded-2xl bg-input/90">
            <SliderIndicator class="rounded-2xl bg-primary" />
            <SliderThumb class="block size-4 shrink-0 cursor-default rounded-2xl bg-white shadow-md ring-1 ring-black/10 transition-[color,box-shadow] duration-200 not-data-disabled:hover:ring-4 not-data-disabled:hover:ring-ring/30 has-focus-visible:ring-4 has-focus-visible:ring-ring/30 data-dragging:ring-4 data-dragging:ring-ring/30 motion-reduce:transition-none" />
          </SliderTrack>
        </SliderControl>
      </Slider>
      <output class="flex flex-col text-sm text-muted-foreground">
        <span>Changes: {changes()}</span>
        <span>{status()}</span>
      </output>
    </Field>
  )
}

export { Example }
