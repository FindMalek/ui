import { Checkbox, CheckboxIndicator } from "@ui-sdk/react/checkbox"
import { Field, FieldControl, FieldDescription, FieldError, FieldLabel } from "@ui-sdk/react/field"
import { Radio, RadioGroup, RadioIndicator } from "@ui-sdk/react/radio"
import { Switch, SwitchThumb } from "@ui-sdk/react/switch"
import { Check } from "lucide-react"
import * as React from "react"

const planOptions = [
  { value: "hobby", title: "Hobby", description: "For personal projects." },
  { value: "pro", title: "Pro", description: "For teams that ship daily." },
]

function summarize(data: FormData) {
  return Array.from(data.entries())
    .map(([key, value]) => `${key}: ${key === "password" ? "•".repeat(String(value).length) : value}`)
    .join("\n")
}

export function Example() {
  const [submitted, setSubmitted] = React.useState("")

  return (
    <form
      className="flex w-full max-w-md min-w-0 flex-col gap-6 text-foreground"
      onSubmit={(event) => {
        event.preventDefault()
        setSubmitted(summarize(new FormData(event.currentTarget)))
      }}
      onReset={() => setSubmitted("")}
    >
      <Field className="flex min-w-0 flex-col gap-3 text-foreground">
        <FieldLabel className="text-sm leading-snug font-medium text-foreground data-disabled:opacity-50">
          Name
        </FieldLabel>
        <FieldControl
          className="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base text-foreground transition-[color,box-shadow] duration-200 outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10 motion-reduce:transition-none md:text-sm data-disabled:opacity-50"
          name="name"
          required
          autoComplete="name"
          placeholder="Ada Lovelace"
        />
        <div className="min-h-10">
          <FieldError className="m-0 text-sm text-foreground" match="valueMissing">
            Enter your name.
          </FieldError>
        </div>
      </Field>
      <Field className="flex min-w-0 flex-col gap-3 text-foreground" name="email">
        <FieldLabel className="text-sm leading-snug font-medium text-foreground data-disabled:opacity-50">
          Email
        </FieldLabel>
        <FieldControl
          className="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base text-foreground transition-[color,box-shadow] duration-200 outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10 motion-reduce:transition-none md:text-sm data-disabled:opacity-50"
          type="email"
          required
          autoComplete="email"
          placeholder="m@example.com"
        />
        <div className="min-h-10">
          <FieldError className="m-0 text-sm text-foreground" />
        </div>
      </Field>
      <Field className="flex min-w-0 flex-col gap-3 text-foreground" name="password">
        <FieldLabel className="text-sm leading-snug font-medium text-foreground data-disabled:opacity-50">
          Password
        </FieldLabel>
        <FieldControl
          className="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base text-foreground transition-[color,box-shadow] duration-200 outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10 motion-reduce:transition-none md:text-sm data-disabled:opacity-50"
          type="password"
          required
          minLength={8}
          pattern=".*[0-9].*"
          autoComplete="new-password"
        />
        <FieldDescription className="m-0 text-sm text-muted-foreground">
          At least 8 characters, with a number.
        </FieldDescription>
        <div className="min-h-10">
          <FieldError className="m-0 text-sm text-foreground" match="valueMissing">
            Enter a password.
          </FieldError>
          <FieldError className="m-0 text-sm text-foreground" match="tooShort">
            Use at least 8 characters.
          </FieldError>
          <FieldError className="m-0 text-sm text-foreground" match="patternMismatch">
            Include at least one number.
          </FieldError>
        </div>
      </Field>
      <Field className="flex min-w-0 flex-col gap-3 text-foreground">
        <FieldLabel className="text-sm leading-snug font-medium text-foreground data-disabled:opacity-50">
          Plan
        </FieldLabel>
        <RadioGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2" name="plan" required>
          {planOptions.map((plan) => (
            <label
              key={plan.value}
              className="flex cursor-default items-start gap-3 rounded-2xl border border-border p-3 text-sm hover:bg-input/40 has-data-checked:bg-input/30"
            >
              <Radio
                className="relative flex size-4 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-input/90 outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:bg-primary data-checked:text-primary-foreground data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none"
                value={plan.value}
              >
                <RadioIndicator className="size-2 rounded-full bg-primary-foreground" />
              </Radio>
              <span className="flex min-w-0 flex-col gap-1">
                <span className="text-sm leading-snug font-medium text-foreground data-disabled:opacity-50">
                  {plan.title}
                </span>
                <span className="m-0 text-sm text-muted-foreground">{plan.description}</span>
              </span>
            </label>
          ))}
        </RadioGroup>
        <div className="min-h-10">
          <FieldError className="m-0 text-sm text-foreground" match="valueMissing">
            Choose a plan.
          </FieldError>
        </div>
      </Field>
      <Field className="flex flex-row items-center justify-between gap-4">
        <div className="flex min-w-0 flex-col gap-1.5">
          <FieldLabel className="text-sm leading-snug font-medium text-foreground data-disabled:opacity-50">
            Send me updates
          </FieldLabel>
          <FieldDescription className="m-0 text-sm text-muted-foreground">
            Product news, about once a month.
          </FieldDescription>
        </div>
        <Switch
          className="relative inline-flex h-5 w-8 shrink-0 cursor-default appearance-none items-center rounded-2xl border-2 border-transparent bg-input/90 p-0 outline-none transition-colors after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-invalid:border-foreground aria-invalid:ring-3 aria-invalid:ring-foreground/20 data-checked:border-primary data-checked:bg-primary data-disabled:opacity-50 motion-reduce:transition-none"
          name="updates"
          defaultChecked
        >
          <SwitchThumb className="pointer-events-none block size-4 shrink-0 rounded-2xl bg-background shadow-sm transition-transform data-checked:translate-x-[calc(100%-4px)] rtl:data-checked:-translate-x-[calc(100%-4px)] motion-reduce:transition-none" />
        </Switch>
      </Field>
      <Field className="flex min-w-0 flex-col gap-3 text-foreground">
        <div className="flex items-center gap-3">
          <Checkbox
            className="relative flex size-4 shrink-0 cursor-default appearance-none items-center justify-center rounded-[5px] border border-transparent bg-input/90 p-0 text-primary-foreground outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 aria-invalid:border-foreground aria-invalid:ring-3 aria-invalid:ring-foreground/20 aria-invalid:aria-checked:border-primary focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-indeterminate:border-primary data-indeterminate:bg-primary data-disabled:opacity-50 motion-reduce:transition-none"
            name="terms"
            required
          >
            <CheckboxIndicator className="grid place-content-center">
              <Check aria-hidden="true" className="size-3.5 shrink-0" />
            </CheckboxIndicator>
          </Checkbox>
          <FieldLabel className="text-sm leading-snug font-medium text-foreground data-disabled:opacity-50">
            I accept the terms of service
          </FieldLabel>
        </div>
        <div className="min-h-10">
          <FieldError className="m-0 text-sm text-foreground" match="valueMissing">
            Accept the terms to continue.
          </FieldError>
        </div>
      </Field>
      <div className="flex flex-wrap gap-2">
        <button
          type="submit"
          className="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none disabled:pointer-events-none disabled:opacity-50"
        >
          Submit
        </button>
        <button
          type="reset"
          className="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none disabled:pointer-events-none disabled:opacity-50"
        >
          Reset
        </button>
      </div>
      <output
        aria-label="Submitted"
        className="block h-36 overflow-y-auto rounded-2xl bg-muted p-3 font-mono text-xs whitespace-pre-wrap"
      >
        {submitted}
      </output>
    </form>
  )
}
