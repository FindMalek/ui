<script lang="ts">
  import { Separator } from "@ui-sdk/svelte/separator"
</script>

<div class="flex w-full max-w-xs flex-col gap-4 text-sm text-foreground">
  <div class="flex flex-col gap-1.5">
    <p class="font-medium">Account</p>
    <p class="text-muted-foreground">Manage your profile and preferences.</p>
  </div>
  <Separator class="shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px data-[orientation=vertical]:self-stretch" />
  <p>Your changes are saved automatically.</p>
</div>
