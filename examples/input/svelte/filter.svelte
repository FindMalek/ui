<script lang="ts">
  import { Field, FieldDescription, FieldLabel } from "@ui-sdk/svelte/field"
  import { Input } from "@ui-sdk/svelte/input"
</script>

<Field name="code" class="flex w-full max-w-sm flex-col gap-2 text-foreground">
  <FieldLabel
    class="text-sm leading-none font-medium text-foreground data-disabled:opacity-50"
  >
    Verification code
  </FieldLabel>
  <Input
    inputmode="numeric"
    autocomplete="one-time-code"
    maxlength={6}
    class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base text-foreground transition-[color,box-shadow] duration-200 outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10 motion-reduce:transition-none md:text-sm font-mono tracking-widest"
    onValueChange={(value: string, details: { cancel: () => void }) => {
      if (!/^\d*$/.test(value)) details.cancel()
    }}
  />
  <FieldDescription class="min-h-5 text-sm text-muted-foreground">
    Six digits from the text we sent.
  </FieldDescription>
</Field>
