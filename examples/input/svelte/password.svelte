<script lang="ts">
  import { Eye, EyeOff } from "@lucide/svelte"
  import { Field, FieldLabel } from "@ui-sdk/svelte/field"
  import { Input, InputGroup } from "@ui-sdk/svelte/input"

  let visible = $state(false)
</script>

<Field name="password" class="flex w-full max-w-sm flex-col gap-2">
  <FieldLabel
    class="text-sm leading-none font-medium data-disabled:opacity-50 data-invalid:text-destructive"
  >
    Password
  </FieldLabel>
  <InputGroup
    class="flex h-8 w-full min-w-0 items-center gap-2 rounded-2xl border border-transparent bg-input/50 px-2.5 text-sm text-muted-foreground transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30 data-disabled:opacity-50"
  >
    <Input
      type={visible ? 'text' : 'password'}
      autocomplete="current-password"
      class="h-full min-w-0 flex-1 bg-transparent text-base text-foreground outline-none placeholder:text-muted-foreground md:text-sm"
    />
    <button
      type="button"
      aria-label="Show password"
      aria-pressed={visible}
      class="-me-1.5 inline-flex size-6 shrink-0 items-center justify-center rounded-xl outline-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 dark:hover:bg-muted/50"
      onclick={() => (visible = !visible)}
    >
      {#if visible}
        <EyeOff class="size-4" />
      {:else}
        <Eye class="size-4" />
      {/if}
    </button>
  </InputGroup>
</Field>
