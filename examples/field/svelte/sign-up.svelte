<script lang="ts">
  import { Check } from "@lucide/svelte"
  import { Checkbox, CheckboxIndicator } from "@ui-sdk/svelte/checkbox"
  import { Field, FieldControl, FieldDescription, FieldError, FieldLabel } from "@ui-sdk/svelte/field"
  import { Radio, RadioGroup, RadioIndicator } from "@ui-sdk/svelte/radio"
  import { Switch, SwitchThumb } from "@ui-sdk/svelte/switch"

  const planOptions = [
    { value: "hobby", title: "Hobby", description: "For personal projects." },
    { value: "pro", title: "Pro", description: "For teams that ship daily." },
  ]

  let submitted = $state("")

  function submit(event: SubmitEvent) {
    event.preventDefault()
    const data = new FormData(event.currentTarget as HTMLFormElement)
    submitted = Array.from(data.entries())
      .map(([key, value]) => `${key}: ${key === "password" ? "•".repeat(String(value).length) : value}`)
      .join("\n")
  }
</script>

<form class="flex w-full max-w-md min-w-0 flex-col gap-6 text-foreground" onsubmit={submit} onreset={() => (submitted = "")}>
  <Field class="flex min-w-0 flex-col gap-3 text-foreground">
    <FieldLabel class="text-sm leading-snug font-medium text-foreground data-disabled:opacity-50">Name</FieldLabel>
    <FieldControl
      class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base text-foreground transition-[color,box-shadow] duration-200 outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10 motion-reduce:transition-none md:text-sm data-disabled:opacity-50"
      name="name"
      required
      autocomplete="name"
      placeholder="Ada Lovelace"
    />
    <div class="min-h-10">
      <FieldError class="m-0 text-sm text-foreground" match="valueMissing">Enter your name.</FieldError>
    </div>
  </Field>
  <Field class="flex min-w-0 flex-col gap-3 text-foreground" name="email">
    <FieldLabel class="text-sm leading-snug font-medium text-foreground data-disabled:opacity-50">Email</FieldLabel>
    <FieldControl
      class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base text-foreground transition-[color,box-shadow] duration-200 outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10 motion-reduce:transition-none md:text-sm data-disabled:opacity-50"
      type="email"
      required
      autocomplete="email"
      placeholder="m@example.com"
    />
    <div class="min-h-10">
      <FieldError class="m-0 text-sm text-foreground" />
    </div>
  </Field>
  <Field class="flex min-w-0 flex-col gap-3 text-foreground" name="password">
    <FieldLabel class="text-sm leading-snug font-medium text-foreground data-disabled:opacity-50">Password</FieldLabel>
    <FieldControl
      class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base text-foreground transition-[color,box-shadow] duration-200 outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10 motion-reduce:transition-none md:text-sm data-disabled:opacity-50"
      type="password"
      required
      minlength={8}
      pattern=".*[0-9].*"
      autocomplete="new-password"
    />
    <FieldDescription class="m-0 text-sm text-muted-foreground">At least 8 characters, with a number.</FieldDescription>
    <div class="min-h-10">
      <FieldError class="m-0 text-sm text-foreground" match="valueMissing">Enter a password.</FieldError>
      <FieldError class="m-0 text-sm text-foreground" match="tooShort">Use at least 8 characters.</FieldError>
      <FieldError class="m-0 text-sm text-foreground" match="patternMismatch">Include at least one number.</FieldError>
    </div>
  </Field>
  <Field class="flex min-w-0 flex-col gap-3 text-foreground">
    <FieldLabel class="text-sm leading-snug font-medium text-foreground data-disabled:opacity-50">Plan</FieldLabel>
    <RadioGroup class="grid grid-cols-1 gap-4 sm:grid-cols-2" name="plan" required>
      {#each planOptions as plan (plan.value)}
        <label
          class="flex cursor-default items-start gap-3 rounded-2xl border border-border p-3 text-sm hover:bg-input/40 has-data-checked:bg-input/30"
        >
          <Radio
            class="relative flex size-4 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-input/90 outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:bg-primary data-checked:text-primary-foreground data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none"
            value={plan.value}
          >
            <RadioIndicator class="size-2 rounded-full bg-primary-foreground" />
          </Radio>
          <span class="flex min-w-0 flex-col gap-1">
            <span class="text-sm leading-snug font-medium text-foreground data-disabled:opacity-50">{plan.title}</span>
            <span class="m-0 text-sm text-muted-foreground">{plan.description}</span>
          </span>
        </label>
      {/each}
    </RadioGroup>
    <div class="min-h-10">
      <FieldError class="m-0 text-sm text-foreground" match="valueMissing">Choose a plan.</FieldError>
    </div>
  </Field>
  <Field class="flex flex-row items-center justify-between gap-4">
    <div class="flex min-w-0 flex-col gap-1.5">
      <FieldLabel class="text-sm leading-snug font-medium text-foreground data-disabled:opacity-50">Send me updates</FieldLabel>
      <FieldDescription class="m-0 text-sm text-muted-foreground">Product news, about once a month.</FieldDescription>
    </div>
    <Switch
      class="relative inline-flex h-5 w-8 shrink-0 cursor-default appearance-none items-center rounded-2xl border-2 border-transparent bg-input/90 p-0 outline-none transition-colors after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-invalid:border-foreground aria-invalid:ring-3 aria-invalid:ring-foreground/20 data-checked:border-primary data-checked:bg-primary data-disabled:opacity-50 motion-reduce:transition-none"
      name="updates"
      defaultChecked
    >
      <SwitchThumb
        class="pointer-events-none block size-4 shrink-0 rounded-2xl bg-background shadow-sm transition-transform data-checked:translate-x-[calc(100%-4px)] rtl:data-checked:-translate-x-[calc(100%-4px)] motion-reduce:transition-none"
      />
    </Switch>
  </Field>
  <Field class="flex min-w-0 flex-col gap-3 text-foreground">
    <div class="flex items-center gap-3">
      <Checkbox
        class="relative flex size-4 shrink-0 cursor-default appearance-none items-center justify-center rounded-[5px] border border-transparent bg-input/90 p-0 text-primary-foreground outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 aria-invalid:border-foreground aria-invalid:ring-3 aria-invalid:ring-foreground/20 aria-invalid:aria-checked:border-primary focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-indeterminate:border-primary data-indeterminate:bg-primary data-disabled:opacity-50 motion-reduce:transition-none"
        name="terms"
        required
      >
        <CheckboxIndicator class="grid place-content-center">
          <Check aria-hidden="true" class="size-3.5 shrink-0" />
        </CheckboxIndicator>
      </Checkbox>
      <FieldLabel class="text-sm leading-snug font-medium text-foreground data-disabled:opacity-50">
        I accept the terms of service
      </FieldLabel>
    </div>
    <div class="min-h-10">
      <FieldError class="m-0 text-sm text-foreground" match="valueMissing">Accept the terms to continue.</FieldError>
    </div>
  </Field>
  <div class="flex flex-wrap gap-2">
    <button
      type="submit"
      class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none disabled:pointer-events-none disabled:opacity-50"
    >
      Submit
    </button>
    <button
      type="reset"
      class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none disabled:pointer-events-none disabled:opacity-50"
    >
      Reset
    </button>
  </div>
  <output
    aria-label="Submitted"
    class="block h-36 overflow-y-auto rounded-2xl bg-muted p-3 font-mono text-xs whitespace-pre-wrap"
  >{submitted}</output>
</form>
