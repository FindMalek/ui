import { Field, FieldLabel } from "@ui-sdk/solid/field"
import { PasswordInput, PasswordInputControl, PasswordInputToggle } from "@ui-sdk/solid/password-input"
import { createSignal, For } from "solid-js"

function strength(password: string) {
  return [
    password.length >= 8,
    password.length >= 12,
    /[a-z]/.test(password) && /[A-Z]/.test(password),
    /\d/.test(password) && /[^a-zA-Z\d]/.test(password),
  ].filter(Boolean).length
}

export function Example() {
  const [value, setValue] = createSignal("")
  const score = () => strength(value())
  return (
    <Field name="new-password" class="flex w-full max-w-sm flex-col gap-2">
      <FieldLabel class="text-sm leading-none font-medium data-disabled:opacity-50">New password</FieldLabel>
      <PasswordInput
        value={value()}
        onValueChange={(next) => setValue(next)}
        autoComplete="new-password"
        class="flex h-8 w-full min-w-0 items-center gap-2 rounded-2xl border border-transparent bg-input/50 ps-2.5 pe-1 transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30 data-disabled:opacity-50"
      >
        <PasswordInputControl class="h-full min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground md:text-sm" />
        <PasswordInputToggle
          aria-label="Show password"
          class="inline-flex size-6 shrink-0 items-center justify-center rounded-xl text-muted-foreground outline-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:text-foreground data-disabled:pointer-events-none dark:hover:bg-muted/50"
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
                class="size-4"
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
                class="size-4"
              >
                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )
          }
        </PasswordInputToggle>
      </PasswordInput>
      <div aria-hidden="true" class="flex gap-1">
        <For each={[1, 2, 3, 4]}>
          {(level) => (
            <div
              class={
                score() >= level ? "h-1 flex-1 rounded-full bg-primary" : "h-1 flex-1 rounded-full bg-muted"
              }
            />
          )}
        </For>
      </div>
      <output class="text-sm text-muted-foreground">
        {value()
          ? `Strength: ${["Weak", "Weak", "Fair", "Good", "Strong"][score()]} (${value().length} characters)`
          : "Type a password to rate it."}
      </output>
    </Field>
  )
}
