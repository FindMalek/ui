<script lang="ts">
  import { LoaderCircle } from "@lucide/svelte"
  import { createSwitchController, Switch, SwitchThumb } from "@ui-sdk/svelte/switch"

  const save = (_checked: boolean) => new Promise((resolve) => setTimeout(resolve, 800))

  const backups = createSwitchController()
  let saving = $state(false)
  let saved = $state(false)

  function onCheckedChange(next: boolean, details: { reason: string; cancel: () => void }) {
    if (details.reason === "imperative") return
    details.cancel()
    if (saving) return
    saving = true
    saved = false
    save(next).then(() => {
      saving = false
      backups.setChecked(next, { reason: "imperative" })
      saved = true
    })
  }
</script>

<div class="flex flex-col items-start gap-2">
  <label class="flex items-center gap-2 text-sm font-medium">
    <Switch
      class="relative inline-flex h-5 w-8 shrink-0 cursor-default appearance-none items-center rounded-2xl border-2 border-transparent bg-input/90 p-0 outline-none transition-colors after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-invalid:border-foreground aria-invalid:ring-3 aria-invalid:ring-foreground/20 data-checked:border-primary data-checked:bg-primary data-disabled:opacity-50 motion-reduce:transition-none aria-busy:cursor-wait aria-busy:opacity-50"
      controller={backups}
      aria-busy={saving}
      {onCheckedChange}
    >
      <SwitchThumb
        class="pointer-events-none flex size-4 shrink-0 rounded-2xl bg-background shadow-sm transition-transform data-checked:translate-x-[calc(100%-4px)] rtl:data-checked:-translate-x-[calc(100%-4px)] motion-reduce:transition-none items-center justify-center text-foreground"
      >
        {#if saving}<LoaderCircle aria-hidden="true" class="size-3 animate-spin motion-reduce:animate-none" />{/if}
      </SwitchThumb>
    </Switch>
    Automatic backups
  </label>
  <p class="m-0 block min-h-5 text-sm text-muted-foreground" role="status">
    {saving ? "Saving…" : saved ? "Saved" : ""}
  </p>
</div>
