import { OTPInput, OTPInputGroup, OTPInputSeparator, OTPInputSlot } from "@ui-sdk/react/otp-input"
import { Minus } from "lucide-react"

export function Example() {
  return (
    <OTPInput
      maxLength={8}
      pattern="alphanumeric"
      aria-label="Recovery code"
      className="flex items-center gap-2 text-foreground data-disabled:opacity-50"
    >
      <OTPInputGroup className="flex items-center">
        {[0, 1, 2, 3].map((index) => (
          <OTPInputSlot
            key={index}
            index={index}
            className="relative flex size-8 items-center justify-center border-y border-e border-input bg-input/50 text-sm transition-[color,box-shadow] duration-200 outline-none first:rounded-s-2xl first:border-s last:rounded-e-2xl data-active:z-10 data-active:border-ring data-active:ring-3 data-active:ring-ring/30 data-fake-caret:after:absolute data-fake-caret:after:h-4 data-fake-caret:after:w-px data-fake-caret:after:animate-caret-blink data-fake-caret:after:bg-foreground motion-reduce:transition-none motion-reduce:after:animate-none"
          />
        ))}
      </OTPInputGroup>
      <OTPInputSeparator className="flex items-center text-muted-foreground">
        <Minus aria-hidden="true" className="size-4 shrink-0" />
      </OTPInputSeparator>
      <OTPInputGroup className="flex items-center">
        {[4, 5, 6, 7].map((index) => (
          <OTPInputSlot
            key={index}
            index={index}
            className="relative flex size-8 items-center justify-center border-y border-e border-input bg-input/50 text-sm transition-[color,box-shadow] duration-200 outline-none first:rounded-s-2xl first:border-s last:rounded-e-2xl data-active:z-10 data-active:border-ring data-active:ring-3 data-active:ring-ring/30 data-fake-caret:after:absolute data-fake-caret:after:h-4 data-fake-caret:after:w-px data-fake-caret:after:animate-caret-blink data-fake-caret:after:bg-foreground motion-reduce:transition-none motion-reduce:after:animate-none"
          />
        ))}
      </OTPInputGroup>
    </OTPInput>
  )
}
