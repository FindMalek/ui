import { Field, FieldLabel } from "@ui-sdk/solid/field"
import { PasswordInput, PasswordInputControl, PasswordInputToggle } from "@ui-sdk/solid/password-input"
import { createSignal, For } from "solid-js"

const rules = [
  { label: "At least 8 characters", test: (password: string) => password.length >= 8 },
  { label: "A number", test: (password: string) => /\d/.test(password) },
  {
    label: "An uppercase and a lowercase letter",
    test: (password: string) => /[a-z]/.test(password) && /[A-Z]/.test(password),
  },
]

export function Example() {
  const [password, setPassword] = createSignal("")
  return (
    <Field name="new-password" class="flex w-full max-w-sm flex-col gap-2 text-foreground">
      <FieldLabel class="text-sm leading-none font-medium text-foreground data-disabled:opacity-50">
        Create a password
      </FieldLabel>
      <PasswordInput
        value={password()}
        autoComplete="new-password"
        onValueChange={(value) => setPassword(value)}
        class="flex h-8 w-full min-w-0 items-center gap-2 rounded-2xl border border-transparent bg-input/50 ps-2.5 pe-1 text-sm text-muted-foreground transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30 data-disabled:opacity-50 motion-reduce:transition-none"
      >
        <PasswordInputControl class="h-full min-w-0 flex-1 border-0 bg-transparent p-0 text-base text-foreground outline-none placeholder:text-muted-foreground md:text-sm" />
        <PasswordInputToggle
          aria-label="Show password"
          class="inline-flex size-6 shrink-0 cursor-default items-center justify-center rounded-xl border-0 bg-transparent p-0 text-muted-foreground transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none aria-pressed:text-foreground data-disabled:pointer-events-none"
        >
          {(state) =>
            state.visible ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
                class="size-4 shrink-0"
              >
                <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
                <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
                <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
                <path d="m2 2 20 20" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
                class="size-4 shrink-0"
              >
                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )
          }
        </PasswordInputToggle>
      </PasswordInput>
      <ul aria-label="Password requirements" class="flex flex-col gap-1 text-sm">
        <For each={rules}>
          {(rule) => (
            <>
              {rule.test(password()) ? (
                <li class="flex items-center gap-2 text-foreground">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                    class="size-4 shrink-0"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span class="sr-only">Done:</span>
                  {rule.label}
                </li>
              ) : (
                <li class="flex items-center gap-2 text-muted-foreground">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                    class="size-4 shrink-0"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                  <span class="sr-only">To do:</span>
                  {rule.label}
                </li>
              )}
            </>
          )}
        </For>
      </ul>
    </Field>
  )
}
