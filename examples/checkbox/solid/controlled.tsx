import { createCheckboxController, type CheckedState } from "@ui-sdk/core/checkbox"
import { Checkbox, CheckboxIndicator } from "@ui-sdk/solid/checkbox"
import { createSignal } from "solid-js"

function Example() {
  const updates = createCheckboxController()
  const [checked, setChecked] = createSignal<CheckedState>(false)
  const [reason, setReason] = createSignal("")

  return (
    <div class="flex w-full max-w-sm flex-col items-start gap-4">
      <label class="flex items-center gap-3 text-sm font-medium">
        <Checkbox
          class="relative flex size-4 shrink-0 cursor-default appearance-none items-center justify-center rounded-[5px] border border-transparent bg-input/90 p-0 text-primary-foreground outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 aria-invalid:border-foreground aria-invalid:ring-3 aria-invalid:ring-foreground/20 aria-invalid:aria-checked:border-primary focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-indeterminate:border-primary data-indeterminate:bg-primary data-disabled:opacity-50 motion-reduce:transition-none"
          checked={checked()}
          onCheckedChange={(next, details) => {
            setChecked(next)
            setReason(details.reason)
          }}
          controller={updates}
        >
          <CheckboxIndicator class="grid place-content-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
              class="size-3.5"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </CheckboxIndicator>
        </Checkbox>
        Email me about product updates
      </label>
      <button
        type="button"
        class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground outline-none select-none transition-colors hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
        onClick={() => updates.toggle()}
      >
        Toggle from outside
      </button>
      <output class="block min-h-5 text-sm text-muted-foreground">
        Checked: {String(checked())}
        {reason() && `, last change: ${reason()}`}
      </output>
    </div>
  )
}

export { Example }
