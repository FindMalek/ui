import { Field, FieldControl, FieldDescription, FieldError, FieldLabel } from "@ui-sdk/react/field"
import * as React from "react"

function register(email: string) {
  return new Promise<string | null>((resolve) =>
    setTimeout(() => resolve(email === "ada@example.com" ? "This email is already registered." : null), 400),
  )
}

export function Example() {
  const [serverError, setServerError] = React.useState<string | null>(null)
  const [pending, setPending] = React.useState(false)
  const [status, setStatus] = React.useState("")

  return (
    <form
      className="flex w-full max-w-sm min-w-0 flex-col gap-6 text-foreground"
      onSubmit={async (event) => {
        event.preventDefault()
        const email = String(new FormData(event.currentTarget).get("email"))
        setPending(true)
        const message = await register(email)
        setPending(false)
        setServerError(message)
        setStatus(message ? "" : `Account created for ${email}.`)
      }}
    >
      <Field
        className="flex min-w-0 flex-col gap-3 text-foreground"
        name="email"
        invalid={serverError !== null || undefined}
      >
        <FieldLabel className="text-sm leading-snug font-medium text-foreground data-disabled:opacity-50">
          Email
        </FieldLabel>
        <FieldControl
          className="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base text-foreground transition-[color,box-shadow] duration-200 outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10 motion-reduce:transition-none md:text-sm data-disabled:opacity-50"
          type="email"
          readOnly={pending}
          required
          defaultValue="ada@example.com"
          onChange={() => setServerError(null)}
        />
        <FieldDescription className="m-0 text-sm text-muted-foreground">
          We'll email you a sign-in link.
        </FieldDescription>
        <div className="min-h-10">
          <FieldError className="m-0 text-sm text-foreground" match="valueMissing">
            Enter your email address.
          </FieldError>
          <FieldError className="m-0 text-sm text-foreground" match="typeMismatch">
            Enter an email address like m@example.com.
          </FieldError>
          {serverError && (
            <FieldError className="m-0 text-sm text-foreground" match>
              {serverError}
            </FieldError>
          )}
        </div>
      </Field>
      <button
        type="submit"
        className="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none disabled:pointer-events-none disabled:opacity-50"
        disabled={pending}
      >
        {pending ? "Creating…" : "Create account"}
      </button>
      <output className="block min-h-10 text-sm text-muted-foreground">{status}</output>
    </form>
  )
}
