import { createSignal } from "solid-js"
import { Button } from "@ui-sdk/solid/button"

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

function Example() {
  const [fail, setFail] = createSignal(false)

  return (
    <div class="flex w-full max-w-sm flex-col items-start gap-3 text-foreground">
      <label class="flex items-center gap-2 text-sm leading-5">
        <input
          type="checkbox"
          checked={fail()}
          onChange={(event) => setFail(event.currentTarget.checked)}
          class="m-0 size-4 shrink-0 accent-primary outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
        />
        Make saving fail
      </label>
      <Button
        onClick={async () => {
          await wait(1000)
          if (fail()) {
            throw new Error("Couldn't save. Check your connection and try again.")
          }
        }}
        class="inline-flex h-8 shrink-0 cursor-default appearance-none items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-clip-padding px-3 py-0 text-sm leading-5 font-medium whitespace-nowrap outline-none select-none transition-all focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50 data-disabled:opacity-50 motion-reduce:transition-none bg-secondary text-secondary-foreground hover:not-aria-disabled:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] enabled:active:not-aria-disabled:translate-y-px min-w-32 data-pending:cursor-progress"
        render={(props, state) => (
          <div class="flex w-full flex-col items-start gap-2">
            <button {...props}>
              {state.pending ? "Saving…" : state.error ? "Try again" : "Save changes"}
            </button>
            <p
              role="alert"
              class="m-0 h-15 w-full overflow-auto text-sm leading-5 wrap-break-word text-muted-foreground"
            >
              {state.error instanceof Error && state.error.message}
            </p>
          </div>
        )}
      />
    </div>
  )
}

export { Example }
