import { Field, FieldDescription, FieldError, FieldLabel } from "@ui-sdk/react/field"
import { OTPInput, OTPInputGroup, OTPInputSlot } from "@ui-sdk/react/otp-input"
import * as React from "react"

export function Example() {
  const [submitted, setSubmitted] = React.useState("")

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 text-foreground">
      <form
        id="verify"
        className="flex flex-col gap-4"
        onSubmit={(event) => {
          event.preventDefault()
          const data = [...new FormData(event.currentTarget)].map(([name, value]) => `${name}=${value}`)
          setSubmitted(data.join(", "))
        }}
        onReset={() => setSubmitted("")}
      >
        <Field className="flex min-w-0 flex-col gap-2 text-foreground">
          <FieldLabel className="text-sm leading-none font-medium text-foreground data-disabled:opacity-50">
            Verification code
          </FieldLabel>
          <OTPInput
            name="code"
            required
            autoComplete="one-time-code"
            className="group/otp flex items-center gap-2 text-foreground data-disabled:opacity-50"
          >
            <OTPInputGroup className="flex items-center rounded-2xl group-has-aria-invalid/otp:ring-3 group-has-aria-invalid/otp:ring-foreground/10">
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <OTPInputSlot
                  key={index}
                  index={index}
                  className="relative flex size-8 items-center justify-center border-y border-e border-input bg-input/50 text-sm transition-[color,box-shadow] duration-200 outline-none first:rounded-s-2xl first:border-s last:rounded-e-2xl data-active:z-10 data-active:border-ring data-active:ring-3 data-active:ring-ring/30 data-fake-caret:after:absolute data-fake-caret:after:h-4 data-fake-caret:after:w-px data-fake-caret:after:animate-caret-blink data-fake-caret:after:bg-foreground motion-reduce:transition-none motion-reduce:after:animate-none group-has-aria-invalid/otp:border-foreground/50 group-has-aria-invalid/otp:data-active:ring-foreground/10"
                />
              ))}
            </OTPInputGroup>
          </OTPInput>
          <FieldDescription className="min-h-5 text-sm text-muted-foreground">
            Enter the six-digit code from your message.
          </FieldDescription>
          <div className="min-h-5">
            <FieldError className="min-h-5 text-sm text-foreground" />
          </div>
        </Field>
        <div className="flex flex-wrap gap-2">
          <button
            type="submit"
            className="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none"
          >
            Verify
          </button>
          <button
            type="reset"
            className="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none"
          >
            Reset
          </button>
        </div>
      </form>
      <Field className="flex flex-col gap-2 border-t border-border pt-4">
        <FieldLabel className="text-sm leading-none font-medium text-foreground data-disabled:opacity-50">
          Recovery code (optional)
        </FieldLabel>
        <OTPInput
          name="recovery"
          form="verify"
          maxLength={8}
          pattern="alphanumeric"
          className="flex items-center gap-2 text-foreground data-disabled:opacity-50"
        >
          <OTPInputGroup className="flex items-center">
            {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => (
              <OTPInputSlot
                key={index}
                index={index}
                className="relative flex size-8 items-center justify-center border-y border-e border-input bg-input/50 text-sm transition-[color,box-shadow] duration-200 outline-none first:rounded-s-2xl first:border-s last:rounded-e-2xl data-active:z-10 data-active:border-ring data-active:ring-3 data-active:ring-ring/30 data-fake-caret:after:absolute data-fake-caret:after:h-4 data-fake-caret:after:w-px data-fake-caret:after:animate-caret-blink data-fake-caret:after:bg-foreground motion-reduce:transition-none motion-reduce:after:animate-none"
              />
            ))}
          </OTPInputGroup>
        </OTPInput>
      </Field>
      <output className="min-h-5 text-sm text-muted-foreground">
        {submitted ? `Submitted: ${submitted}` : ""}
      </output>
    </div>
  )
}
