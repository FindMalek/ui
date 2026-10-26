import { Field, FieldLabel } from "@ui-sdk/solid/field"
import { PasswordInput, PasswordInputControl, PasswordInputToggle } from "@ui-sdk/solid/password-input"
import { createSignal } from "solid-js"

export function Example() {
  const [visible, setVisible] = createSignal(false)
  const [reason, setReason] = createSignal("")
  return (
    <div class="flex w-full max-w-sm flex-col gap-3 text-foreground">
      <Field name="password" class="flex w-full flex-col gap-2">
        <FieldLabel class="text-sm leading-none font-medium text-foreground data-disabled:opacity-50">
          Password
        </FieldLabel>
        <PasswordInput
          visible={visible()}
          onVisibleChange={(next, details) => {
            setVisible(next)
            setReason(details.reason)
          }}
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
      </Field>
      <output class="min-h-5 text-sm text-muted-foreground">
        {visible() ? "The password is shown" : "The password is hidden"}
        {reason() ? ` (${reason()}).` : "."}
      </output>
    </div>
  )
}
