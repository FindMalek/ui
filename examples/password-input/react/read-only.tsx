import { Field, FieldDescription, FieldLabel } from "@ui-sdk/react/field"
import { PasswordInput, PasswordInputControl, PasswordInputToggle } from "@ui-sdk/react/password-input"
import { Eye, EyeOff } from "lucide-react"

export function Example() {
  return (
    <Field name="recovery-key" className="flex w-full max-w-sm flex-col gap-2 text-foreground">
      <FieldLabel className="text-sm leading-none font-medium text-foreground data-disabled:opacity-50">
        Recovery key
      </FieldLabel>
      <PasswordInput
        readOnly
        defaultValue="7Hq2-vX9p-Lm4c"
        autoComplete="off"
        className="flex h-8 w-full min-w-0 items-center gap-2 rounded-2xl border border-transparent bg-input/50 ps-2.5 pe-1 text-sm text-muted-foreground transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30 data-disabled:opacity-50 motion-reduce:transition-none data-readonly:border-border data-readonly:bg-transparent"
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
      <FieldDescription className="min-h-5 text-sm text-muted-foreground">
        Keep it somewhere safe. You can show it, but not change it.
      </FieldDescription>
    </Field>
  )
}
