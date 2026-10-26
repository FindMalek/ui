import { createSwitchController } from "@ui-sdk/core/switch"
import { Switch, SwitchThumb } from "@ui-sdk/solid/switch"
import { createSignal, Show } from "solid-js"

const save = (_checked: boolean) => new Promise((resolve) => setTimeout(resolve, 800))

function Example() {
  const backups = createSwitchController()
  const [saving, setSaving] = createSignal(false)
  const [saved, setSaved] = createSignal(false)
  let pending = false

  return (
    <div class="flex flex-col items-start gap-2">
      <label class="flex items-center gap-2 text-sm font-medium">
        <Switch
          class="relative inline-flex h-5 w-8 shrink-0 cursor-default appearance-none items-center rounded-2xl border-2 border-transparent bg-input/90 p-0 outline-none transition-colors after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-invalid:border-foreground aria-invalid:ring-3 aria-invalid:ring-foreground/20 data-checked:border-primary data-checked:bg-primary data-disabled:opacity-50 motion-reduce:transition-none aria-busy:cursor-wait aria-busy:opacity-50"
          controller={backups}
          aria-busy={saving() ? "true" : "false"}
          onCheckedChange={(next, details) => {
            if (details.reason === "imperative") return
            details.cancel()
            if (pending) return
            pending = true
            setSaving(true)
            setSaved(false)
            save(next).then(() => {
              pending = false
              backups.setChecked(next, { reason: "imperative" })
              setSaving(false)
              setSaved(true)
            })
          }}
        >
          <SwitchThumb class="pointer-events-none flex size-4 shrink-0 rounded-2xl bg-background shadow-sm transition-transform data-checked:translate-x-[calc(100%-4px)] rtl:data-checked:-translate-x-[calc(100%-4px)] motion-reduce:transition-none items-center justify-center text-foreground">
            <Show when={saving()}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
                class="size-3 animate-spin motion-reduce:animate-none"
              >
                <path d="M21 12a9 9 0 1 1-6.219-8.56" />
              </svg>
            </Show>
          </SwitchThumb>
        </Switch>
        Automatic backups
      </label>
      <p class="m-0 block min-h-5 text-sm text-muted-foreground" role="status">
        {saving() ? "Saving…" : saved() ? "Saved" : ""}
      </p>
    </div>
  )
}

export { Example }
