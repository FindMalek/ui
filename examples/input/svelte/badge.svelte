<script lang="ts">
  import { Field, FieldDescription, FieldLabel } from "@ui-sdk/svelte/field"
  import { Input } from "@ui-sdk/svelte/input"
</script>

<Field name="webhook" class="flex w-full max-w-sm flex-col gap-2">
  <FieldLabel
    class="flex items-center gap-2 text-sm leading-none font-medium data-disabled:opacity-50 data-invalid:text-destructive"
  >
    Webhook URL
    <span
      class="inline-flex h-5 items-center gap-1 rounded-2xl border border-transparent bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground"
    >
      Recommended
    </span>
  </FieldLabel>
  <Input
    type="url"
    placeholder="https://example.com/hooks"
    class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 md:text-sm data-invalid:border-destructive data-invalid:ring-3 data-invalid:ring-destructive/20 dark:data-invalid:border-destructive/50 dark:data-invalid:ring-destructive/40"
  />
  <FieldDescription class="text-sm text-muted-foreground">
    We'll post an event here for every new order.
  </FieldDescription>
</Field>
