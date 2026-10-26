<script lang="ts">
  import { Bell } from "@lucide/svelte"
  import type { TogglePressedChangeReason } from "@ui-sdk/svelte/toggle"
  import { createToggleController, Toggle, ToggleIcon } from "@ui-sdk/svelte/toggle"

  const notifications = createToggleController()
  let pressed = $state(true)
  let reason = $state("")

  function onPressedChange(_pressed: boolean, details: { reason: TogglePressedChangeReason }) {
    reason = details.reason
  }
</script>

<div class="flex flex-col items-start gap-3">
  <Toggle
    bind:pressed
    controller={notifications}
    class="group inline-flex h-8 min-w-8 shrink-0 cursor-default items-center justify-center gap-1 rounded-2xl border border-transparent bg-transparent px-2.5 text-sm font-medium whitespace-nowrap outline-none transition-colors not-data-disabled:hover:bg-muted not-data-disabled:hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted disabled:pointer-events-none data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none"
    {onPressedChange}
  >
    <ToggleIcon class="flex">
      <Bell class="size-4 group-data-pressed:fill-current" />
    </ToggleIcon>
    Notifications
  </Toggle>
  <button
    type="button"
    class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 enabled:active:translate-y-px motion-reduce:transform-none motion-reduce:transition-none"
    onclick={() => notifications.toggle()}
  >
    Toggle from outside
  </button>
  <output class="text-sm text-muted-foreground">
    Notifications: {pressed ? "on" : "off"}{reason && `, last change: ${reason}`}
  </output>
</div>
