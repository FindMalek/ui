<script lang="ts">
  import { Bookmark } from "@lucide/svelte"
  import { Toggle, ToggleIcon } from "@ui-sdk/svelte/toggle"
</script>

<div dir="rtl">
  <Toggle
    class="group inline-flex h-8 min-w-8 shrink-0 items-center justify-center gap-1 rounded-2xl ps-2 pe-2.5 text-sm font-medium whitespace-nowrap outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted data-disabled:pointer-events-none data-disabled:opacity-50"
  >
    <ToggleIcon class="flex">
      <Bookmark class="size-4 group-data-pressed:fill-current" />
    </ToggleIcon>
    إشارة مرجعية
  </Toggle>
</div>
