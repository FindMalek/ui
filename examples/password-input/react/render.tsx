import { Field, FieldLabel } from "@ui-sdk/react/field"
import { PasswordInput, PasswordInputControl, PasswordInputToggle } from "@ui-sdk/react/password-input"
import { Eye, EyeOff } from "lucide-react"

export function Example() {
  return (
    <Field name="password" className="flex w-full max-w-sm flex-col gap-2">
      <FieldLabel className="text-sm leading-none font-medium data-disabled:opacity-50">Password</FieldLabel>
      <PasswordInput
        className={(state) =>
          state.filled
            ? "flex h-8 w-full min-w-0 items-center gap-2 rounded-2xl border border-ring bg-input/50 ps-2.5 pe-1 transition-[color,box-shadow] duration-200 has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30"
            : "flex h-8 w-full min-w-0 items-center gap-2 rounded-2xl border border-transparent bg-input/50 ps-2.5 pe-1 transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30"
        }
      >
        <PasswordInputControl
          className={(state) =>
            state.visible
              ? "h-full min-w-0 flex-1 bg-transparent font-mono text-base tracking-wide outline-none placeholder:text-muted-foreground md:text-sm"
              : "h-full min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground md:text-sm"
          }
        />
        <PasswordInputToggle
          aria-label="Show password"
          render={(props, state) => (
            <button {...props}>
              {state.visible ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
            </button>
          )}
          className="inline-flex size-6 shrink-0 items-center justify-center rounded-xl text-muted-foreground outline-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:text-foreground dark:hover:bg-muted/50"
        />
      </PasswordInput>
    </Field>
  )
}
