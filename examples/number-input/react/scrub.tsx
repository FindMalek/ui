import { Field, FieldLabel } from "@ui-sdk/react/field"
import {
  NumberInput,
  NumberInputGroup,
  NumberInputControl,
  NumberInputScrubArea,
  NumberInputScrubAreaCursor,
} from "@ui-sdk/react/number-input"
import { MoveHorizontal, MoveVertical } from "lucide-react"

export function Example() {
  return (
    <div className="flex flex-wrap gap-6">
      <Field className="flex items-center gap-2">
        <NumberInput defaultValue={320} min={0} className="flex items-center gap-2">
          <NumberInputScrubArea
            pixelsPerStep={2}
            className="cursor-ew-resize text-muted-foreground select-none data-scrubbing:text-foreground"
          >
            <FieldLabel className="cursor-ew-resize text-sm leading-none font-medium">Width</FieldLabel>
            <NumberInputScrubAreaCursor className="z-50 -mt-2.5 -ml-2.5 text-foreground drop-shadow-sm">
              <MoveHorizontal aria-hidden="true" className="size-5" />
            </NumberInputScrubAreaCursor>
          </NumberInputScrubArea>
          <NumberInputGroup className="flex h-8 w-20 items-center gap-0.5 rounded-2xl border border-transparent bg-input/50 px-1 transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30 motion-reduce:transition-none data-scrubbing:border-ring data-scrubbing:ring-3 data-scrubbing:ring-ring/30">
            <NumberInputControl className="h-full w-full min-w-0 border-0 bg-transparent px-1 py-0 text-center text-base text-foreground tabular-nums outline-none data-disabled:opacity-50 md:text-sm" />
          </NumberInputGroup>
        </NumberInput>
      </Field>
      <Field className="flex items-center gap-2">
        <NumberInput defaultValue={240} min={0} className="flex items-center gap-2">
          <NumberInputScrubArea
            orientation="vertical"
            pixelsPerStep={2}
            className="cursor-ns-resize text-muted-foreground select-none data-scrubbing:text-foreground"
          >
            <FieldLabel className="cursor-ns-resize text-sm leading-none font-medium">Height</FieldLabel>
            <NumberInputScrubAreaCursor className="z-50 -mt-2.5 -ml-2.5 text-foreground drop-shadow-sm">
              <MoveVertical aria-hidden="true" className="size-5" />
            </NumberInputScrubAreaCursor>
          </NumberInputScrubArea>
          <NumberInputGroup className="flex h-8 w-20 items-center gap-0.5 rounded-2xl border border-transparent bg-input/50 px-1 transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30 motion-reduce:transition-none data-scrubbing:border-ring data-scrubbing:ring-3 data-scrubbing:ring-ring/30">
            <NumberInputControl className="h-full w-full min-w-0 border-0 bg-transparent px-1 py-0 text-center text-base text-foreground tabular-nums outline-none data-disabled:opacity-50 md:text-sm" />
          </NumberInputGroup>
        </NumberInput>
      </Field>
    </div>
  )
}
