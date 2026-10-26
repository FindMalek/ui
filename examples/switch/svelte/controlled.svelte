<script lang="ts">
  import { createSwitchController, Switch, SwitchThumb } from "@ui-sdk/svelte/switch"

  const wifi = createSwitchController()
  let checked = $state(true)
  let reason = $state("")

  function onCheckedChange(_checked: boolean, details: { reason: string }) {
    reason = details.reason
  }
</script>

<div class="flex w-full max-w-sm flex-col items-start gap-4">
  <label class="flex items-center gap-2 text-sm font-medium">
    <Switch
      bind:checked
      class="relative inline-flex h-5 w-8 shrink-0 cursor-default appearance-none items-center rounded-2xl border-2 border-transparent bg-input/90 p-0 outline-none transition-colors after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-invalid:border-foreground aria-invalid:ring-3 aria-invalid:ring-foreground/20 data-checked:border-primary data-checked:bg-primary data-disabled:opacity-50 motion-reduce:transition-none"
      controller={wifi}
      {onCheckedChange}
    >
      <SwitchThumb
        class="pointer-events-none block size-4 shrink-0 rounded-2xl bg-background shadow-sm transition-transform data-checked:translate-x-[calc(100%-4px)] rtl:data-checked:-translate-x-[calc(100%-4px)] motion-reduce:transition-none"
      />
    </Switch>
    Wi-Fi
  </label>
  <button
    type="button"
    class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground outline-none select-none transition-colors hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
    onclick={() => wifi.toggle()}
  >
    Toggle from outside
  </button>
  <output class="m-0 block min-h-5 text-sm text-muted-foreground">
    Wi-Fi: {checked ? "on" : "off"}{reason ? `, last change: ${reason}` : ""}
  </output>
</div>
