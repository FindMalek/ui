<script lang="ts">
  import { Meter, MeterIndicator, MeterLabel, MeterTrack, MeterValue } from "@ui-sdk/svelte/meter"

</script>

<Meter value={68} class="flex w-full max-w-xs flex-wrap gap-3 text-foreground">
  <MeterLabel class="text-sm font-medium">Storage used</MeterLabel>
  <MeterValue class="ms-auto text-sm text-muted-foreground tabular-nums" />
  <MeterTrack class="relative flex h-2 w-full items-center overflow-x-hidden rounded-2xl bg-muted">
    <MeterIndicator class="h-full bg-primary transition-[width] motion-reduce:transition-none" />
  </MeterTrack>
</Meter>
