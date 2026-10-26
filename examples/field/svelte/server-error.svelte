<script lang="ts">
  import { Field, FieldControl, FieldDescription, FieldError, FieldLabel } from "@ui-sdk/svelte/field"

  let email = $state("ada@example.com")
  let serverError: string | null = $state(null)
  let pending = $state(false)
  let status = $state("")

  function register(email: string) {
    return new Promise<string | null>((resolve) =>
      setTimeout(() => resolve(email === "ada@example.com" ? "This email is already registered." : null), 400),
    )
  }

  async function submit(event: SubmitEvent) {
    event.preventDefault()
    const email = String(new FormData(event.currentTarget as HTMLFormElement).get("email"))
    pending = true
    const message = await register(email)
    pending = false
    serverError = message
    status = message ? "" : `Account created for ${email}.`
  }

  function edit(event: Event) {
    email = (event.target as HTMLInputElement).value
    serverError = null
  }
</script>

<form class="flex w-full max-w-sm min-w-0 flex-col gap-6 text-foreground" onsubmit={submit}>
  <Field class="flex min-w-0 flex-col gap-3 text-foreground" name="email" invalid={serverError !== null || undefined}>
    <FieldLabel class="text-sm leading-snug font-medium text-foreground data-disabled:opacity-50">Email</FieldLabel>
    <FieldControl
      class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base text-foreground transition-[color,box-shadow] duration-200 outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10 motion-reduce:transition-none md:text-sm data-disabled:opacity-50"
      type="email"
          readonly={pending}
      required
      value={email}
      oninput={edit}
    />
    <FieldDescription class="m-0 text-sm text-muted-foreground">We'll email you a sign-in link.</FieldDescription>
    <div class="min-h-10">
      <FieldError class="m-0 text-sm text-foreground" match="valueMissing">Enter your email address.</FieldError>
      <FieldError class="m-0 text-sm text-foreground" match="typeMismatch">
        Enter an email address like m@example.com.
      </FieldError>
      <FieldError class="m-0 text-sm text-foreground" match>{serverError}</FieldError>
    </div>
  </Field>
  <button
    type="submit"
    class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none disabled:pointer-events-none disabled:opacity-50"
    disabled={pending}
  >
    {pending ? "Creating…" : "Create account"}
  </button>
  <output class="block min-h-10 text-sm text-muted-foreground">{status}</output>
</form>
