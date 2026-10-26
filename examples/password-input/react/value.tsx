import { Field, FieldLabel } from "@ui-sdk/react/field"
import { PasswordInput, PasswordInputControl, PasswordInputToggle } from "@ui-sdk/react/password-input"
import { Eye, EyeOff } from "lucide-react"
import * as React from "react"

function strength(password: string) {
  return [
    password.length >= 8,
    password.length >= 12,
    /[a-z]/.test(password) && /[A-Z]/.test(password),
    /\d/.test(password) && /[^a-zA-Z\d]/.test(password),
  ].filter(Boolean).length
}

export function Example() {
  const [value, setValue] = React.useState("")
  const score = strength(value)
  return (
    <Field name="new-password" className="flex w-full max-w-sm flex-col gap-2">
      <FieldLabel className="text-sm leading-none font-medium data-disabled:opacity-50">
        New password
      </FieldLabel>
      <PasswordInput
        value={value}
        onValueChange={(next) => setValue(next)}
        autoComplete="new-password"
        className="flex h-8 w-full min-w-0 items-center gap-2 rounded-2xl border border-transparent bg-input/50 ps-2.5 pe-1 transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30 data-disabled:opacity-50"
      >
        <PasswordInputControl className="h-full min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground md:text-sm" />
        <PasswordInputToggle
          aria-label="Show password"
          className="inline-flex size-6 shrink-0 items-center justify-center rounded-xl text-muted-foreground outline-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:text-foreground data-disabled:pointer-events-none dark:hover:bg-muted/50"
        >
          {(state) => (state.visible ? <EyeOff className="size-4" /> : <Eye className="size-4" />)}
        </PasswordInputToggle>
      </PasswordInput>
      <div aria-hidden="true" className="flex gap-1">
        {[1, 2, 3, 4].map((level) => (
          <div
            key={level}
            className={
              score >= level ? "h-1 flex-1 rounded-full bg-primary" : "h-1 flex-1 rounded-full bg-muted"
            }
          />
        ))}
      </div>
      <output className="text-sm text-muted-foreground">
        {value
          ? `Strength: ${["Weak", "Weak", "Fair", "Good", "Strong"][score]} (${value.length} characters)`
          : "Type a password to rate it."}
      </output>
    </Field>
  )
}
