import { Field, FieldDescription, FieldLabel } from "@ui-sdk/react/field"
import { Input } from "@ui-sdk/react/input"

export function Example() {
  return (
    <Field name="code" className="flex w-full max-w-sm flex-col gap-2 text-foreground">
      <FieldLabel className="text-sm leading-none font-medium text-foreground data-disabled:opacity-50">
        Verification code
      </FieldLabel>
      <Input
        inputMode="numeric"
        autoComplete="one-time-code"
        maxLength={6}
        onValueChange={(value, details) => {
          if (!/^\d*$/.test(value)) details.cancel()
        }}
        className="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base text-foreground transition-[color,box-shadow] duration-200 outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10 motion-reduce:transition-none md:text-sm font-mono tracking-widest"
      />
      <FieldDescription className="min-h-5 text-sm text-muted-foreground">
        Six digits from the text we sent.
      </FieldDescription>
    </Field>
  )
}
