import { Field, FieldLabel } from "@ui-sdk/react/field"
import { PasswordInput, PasswordInputControl, PasswordInputToggle } from "@ui-sdk/react/password-input"
import { Check, Eye, EyeOff, X } from "lucide-react"
import * as React from "react"

const rules = [
  { label: "At least 8 characters", test: (password: string) => password.length >= 8 },
  { label: "A number", test: (password: string) => /\d/.test(password) },
  {
    label: "An uppercase and a lowercase letter",
    test: (password: string) => /[a-z]/.test(password) && /[A-Z]/.test(password),
  },
]

export function Example() {
  const [password, setPassword] = React.useState("")
  return (
    <Field name="new-password" className="flex w-full max-w-sm flex-col gap-2 text-foreground">
      <FieldLabel className="text-sm leading-none font-medium text-foreground data-disabled:opacity-50">
        Create a password
      </FieldLabel>
      <PasswordInput
        value={password}
        autoComplete="new-password"
        onValueChange={(value) => setPassword(value)}
        className="flex h-8 w-full min-w-0 items-center gap-2 rounded-2xl border border-transparent bg-input/50 ps-2.5 pe-1 text-sm text-muted-foreground transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30 data-disabled:opacity-50 motion-reduce:transition-none"
      >
        <PasswordInputControl className="h-full min-w-0 flex-1 border-0 bg-transparent p-0 text-base text-foreground outline-none placeholder:text-muted-foreground md:text-sm" />
        <PasswordInputToggle
          aria-label="Show password"
          className="inline-flex size-6 shrink-0 cursor-default items-center justify-center rounded-xl border-0 bg-transparent p-0 text-muted-foreground transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none aria-pressed:text-foreground data-disabled:pointer-events-none"
        >
          {(state) =>
            state.visible ? (
              <EyeOff aria-hidden="true" className="size-4 shrink-0" />
            ) : (
              <Eye aria-hidden="true" className="size-4 shrink-0" />
            )
          }
        </PasswordInputToggle>
      </PasswordInput>
      <ul aria-label="Password requirements" className="flex flex-col gap-1 text-sm">
        {rules.map((rule) =>
          rule.test(password) ? (
            <li key={rule.label} className="flex items-center gap-2 text-foreground">
              <Check aria-hidden="true" className="size-4 shrink-0" />
              <span className="sr-only">Done:</span>
              {rule.label}
            </li>
          ) : (
            <li key={rule.label} className="flex items-center gap-2 text-muted-foreground">
              <X aria-hidden="true" className="size-4 shrink-0" />
              <span className="sr-only">To do:</span>
              {rule.label}
            </li>
          ),
        )}
      </ul>
    </Field>
  )
}
