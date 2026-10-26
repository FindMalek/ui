<script lang="ts">
  import { Meter, MeterIndicator, MeterLabel, MeterTrack, MeterValue } from "@ui-sdk/svelte/meter"

</script>

<Meter value={42} class="flex w-full max-w-xs flex-wrap items-center gap-x-3 gap-y-2">
  <MeterLabel class="text-sm font-medium">Battery</MeterLabel>
  <MeterValue class="ms-auto text-sm text-muted-foreground tabular-nums" />
  <MeterTrack class="h-2 w-full overflow-hidden rounded-full bg-muted">
    <MeterIndicator class="h-full bg-primary transition-[width]" />
  </MeterTrack>
</Meter>
