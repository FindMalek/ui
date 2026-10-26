import { Field, FieldLabel } from "@ui-sdk/react/field"
import { PasswordInput, PasswordInputControl, PasswordInputToggle } from "@ui-sdk/react/password-input"
import { Eye, EyeOff, Lock } from "lucide-react"

export function Example() {
  return (
    <Field name="password" className="group flex w-full max-w-sm flex-col gap-2 text-foreground">
      <FieldLabel className="text-sm leading-none font-medium text-foreground data-disabled:opacity-50">
        Password
      </FieldLabel>
      <PasswordInput className="flex h-8 w-full min-w-0 items-center gap-2 rounded-2xl border border-transparent bg-input/50 ps-2.5 pe-1 text-sm text-muted-foreground transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30 data-disabled:opacity-50 motion-reduce:transition-none">
        {(state) => (
          <>
            <PasswordInputControl className="h-full min-w-0 flex-1 border-0 bg-transparent p-0 text-base text-foreground outline-none placeholder:text-muted-foreground md:text-sm" />
            <span className="inline-flex size-4 shrink-0">
              {state.capsLock && (
                <Lock aria-hidden="true" className="size-4 shrink-0 text-muted-foreground" />
              )}
            </span>
            <PasswordInputToggle
              aria-label="Show password"
              className="inline-flex size-6 shrink-0 cursor-default items-center justify-center rounded-xl border-0 bg-transparent p-0 text-muted-foreground transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none aria-pressed:text-foreground data-disabled:pointer-events-none"
            >
              {(toggle) =>
                toggle.visible ? (
                  <EyeOff aria-hidden="true" className="size-4 shrink-0" />
                ) : (
                  <Eye aria-hidden="true" className="size-4 shrink-0" />
                )
              }
            </PasswordInputToggle>
          </>
        )}
      </PasswordInput>
      <p className="invisible min-h-5 text-sm text-muted-foreground group-has-data-capslock:visible">
        Caps Lock is on.
      </p>
    </Field>
  )
}
