import { Field, FieldLabel } from "@ui-sdk/react/field"
import { Input } from "@ui-sdk/react/input"
import { PasswordInput, PasswordInputControl, PasswordInputToggle } from "@ui-sdk/react/password-input"
import { Eye, EyeOff } from "lucide-react"
import * as React from "react"

export function Example() {
  const [submitted, setSubmitted] = React.useState("")
  return (
    <div className="flex w-full max-w-sm flex-col gap-4 text-foreground">
      <form
        id="sign-in"
        className="flex flex-col gap-4"
        onSubmit={(event) => {
          event.preventDefault()
          const data = new FormData(event.currentTarget)
          const length = String(data.get("password")).length
          setSubmitted(`Signed in as ${data.get("email")}, with a password of ${length} characters.`)
        }}
        onReset={() => setSubmitted("")}
      >
        <Field name="email" className="flex w-full flex-col gap-2">
          <FieldLabel className="text-sm leading-none font-medium text-foreground data-disabled:opacity-50">
            Email
          </FieldLabel>
          <Input
            type="email"
            required
            autoComplete="username"
            className="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base text-foreground transition-[color,box-shadow] duration-200 outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10 motion-reduce:transition-none md:text-sm"
          />
        </Field>
      </form>
      <Field className="flex w-full flex-col gap-2">
        <FieldLabel className="text-sm leading-none font-medium text-foreground data-disabled:opacity-50">
          Password
        </FieldLabel>
        <PasswordInput
          name="password"
          form="sign-in"
          required
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
          type="submit"
          form="sign-in"
          className="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none"
        >
          Sign in
        </button>
        <button
          type="reset"
          form="sign-in"
          className="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none"
        >
          Reset
        </button>
      </div>
      <output className="h-10 overflow-auto text-sm wrap-anywhere text-muted-foreground">{submitted}</output>
    </div>
  )
}
