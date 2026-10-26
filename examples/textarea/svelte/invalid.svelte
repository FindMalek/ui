<script lang="ts">
  import { Field, FieldError, FieldLabel } from "@ui-sdk/svelte/field"
  import { Textarea } from "@ui-sdk/svelte/textarea"
</script>

<Field invalid class="flex w-full max-w-sm flex-col gap-2 text-foreground">
  <FieldLabel
    class="text-sm leading-none font-medium text-foreground data-disabled:opacity-50"
    >Message</FieldLabel
  >
  <Textarea
    defaultValue="hi"
    class="min-h-16 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 resize-none px-2.5 py-2 text-base text-foreground transition-[color,box-shadow] duration-200 outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10 motion-reduce:transition-none md:text-sm"
  />
  <FieldError match class="min-h-5 text-sm text-foreground">Write at least 20 characters.</FieldError>
</Field>
