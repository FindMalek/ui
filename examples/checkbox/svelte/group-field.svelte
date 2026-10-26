<script lang="ts">
  import { Check } from "@lucide/svelte"
  import { Checkbox, CheckboxGroup, CheckboxIndicator } from "@ui-sdk/svelte/checkbox"
  import { Field, FieldDescription, FieldError, FieldLabel } from "@ui-sdk/svelte/field"

  const channels = [
    { value: "email", label: "Email" },
    { value: "sms", label: "SMS" },
    { value: "push", label: "Push notifications" },
  ]

  let saved = $state<string | null>(null)

  function onSubmit(event: SubmitEvent) {
    event.preventDefault()
    saved = new FormData(event.target as HTMLFormElement).getAll("notifications").join(", ")
  }
</script>

<form class="flex w-full max-w-xs flex-col gap-4" onsubmit={onSubmit}>
  <Field class="flex flex-col gap-3">
    <FieldLabel class="m-0 text-sm font-medium text-foreground">Notifications</FieldLabel>
    <FieldDescription class="m-0 -mt-2 text-sm text-muted-foreground">
      Choose how we tell you about your orders.
    </FieldDescription>
    <CheckboxGroup class="flex flex-col gap-3" name="notifications" required>
      {#each channels as channel (channel.value)}
        <label class="flex w-fit items-center gap-3 text-sm">
          <Checkbox
            class="relative flex size-4 shrink-0 cursor-default appearance-none items-center justify-center rounded-[5px] border border-transparent bg-input/90 p-0 text-primary-foreground outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 aria-invalid:border-foreground aria-invalid:ring-3 aria-invalid:ring-foreground/20 aria-invalid:aria-checked:border-primary focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-indeterminate:border-primary data-indeterminate:bg-primary data-disabled:opacity-50 motion-reduce:transition-none"
            value={channel.value}
          >
            <CheckboxIndicator class="grid place-content-center">
              <Check aria-hidden="true" class="size-3.5" />
            </CheckboxIndicator>
          </Checkbox>
          {channel.label}
        </label>
      {/each}
    </CheckboxGroup>
    <div class="min-h-10"><FieldError class="m-0 text-sm text-muted-foreground">Choose at least one way to be notified.</FieldError></div>
  </Field>
  <button
    class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary px-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-colors hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 self-start"
    type="submit"
  >
    Save
  </button>
  <output class="block min-h-5 text-sm text-muted-foreground">{saved !== null ? `notifications: ${saved}` : ""}</output>
</form>
