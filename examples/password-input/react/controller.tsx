import { Field, FieldLabel } from "@ui-sdk/react/field"
import {
  createPasswordInputController,
  PasswordInput,
  PasswordInputControl,
  PasswordInputToggle,
} from "@ui-sdk/react/password-input"
import { Eye, EyeOff } from "lucide-react"
import * as React from "react"

export function Example() {
  const [password] = React.useState(createPasswordInputController)
  const [reading, setReading] = React.useState("")
  return (
    <div className="flex w-full max-w-sm flex-col gap-3 text-foreground">
      <Field name="new-password" className="flex w-full flex-col gap-2">
        <FieldLabel className="text-sm leading-none font-medium text-foreground data-disabled:opacity-50">
          New password
        </FieldLabel>
        <PasswordInput
          controller={password}
          autoComplete="new-password"
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
      </Field>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          className="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none"
          onClick={() => {
            password.setValue("plum-kettle-orbit-42")
            password.setVisible(true)
          }}
        >
          Suggest
        </button>
        <button
          type="button"
          className="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none"
          onClick={() => password.toggleVisible()}
        >
          Toggle
        </button>
        <button
          type="button"
          className="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none"
          onClick={() => password.clear()}
        >
          Clear
        </button>
        <button
          type="button"
          className="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none"
          onClick={() =>
            setReading(
              `${password.getValue().length} characters, ${password.isVisible() ? "shown" : "hidden"}.`,
            )
          }
        >
          Read
        </button>
        <button
          type="button"
          className="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none"
          onClick={() => password.focus()}
        >
          Focus
        </button>
      </div>
      <output className="min-h-5 text-sm text-muted-foreground">{reading}</output>
    </div>
  )
}
