import { createToggleController, Toggle, ToggleIcon } from "@ui-sdk/solid/toggle"
import { createSignal } from "solid-js"

function Example() {
  const notifications = createToggleController()
  const [pressed, setPressed] = createSignal(true)
  const [reason, setReason] = createSignal("")

  return (
    <div class="flex flex-col items-start gap-3">
      <Toggle
        pressed={pressed()}
        onPressedChange={(next, details) => {
          setPressed(next)
          setReason(details.reason)
        }}
        controller={notifications}
        class="group inline-flex h-8 min-w-8 shrink-0 cursor-default items-center justify-center gap-1 rounded-2xl border border-transparent bg-transparent px-2.5 text-sm font-medium whitespace-nowrap outline-none transition-colors not-data-disabled:hover:bg-muted not-data-disabled:hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted disabled:pointer-events-none data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none"
      >
        <ToggleIcon class="flex">
          <svg
            class="size-4 group-data-pressed:fill-current"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M10.268 21a2 2 0 0 0 3.464 0" />
            <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
          </svg>
        </ToggleIcon>
        Notifications
      </Toggle>
      <button
        type="button"
        class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 enabled:active:translate-y-px motion-reduce:transform-none motion-reduce:transition-none"
        onClick={() => notifications.toggle()}
      >
        Toggle from outside
      </button>
      <output class="text-sm text-muted-foreground">
        Notifications: {pressed() ? "on" : "off"}
        {reason() && `, last change: ${reason()}`}
      </output>
    </div>
  )
}

export { Example }
