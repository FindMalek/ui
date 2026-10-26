<script setup lang="ts">
import { Eye, EyeOff } from "@lucide/vue"
import { Field, FieldLabel } from "@ui-sdk/vue/field"
import { Input } from "@ui-sdk/vue/input"
import { PasswordInput, PasswordInputControl, PasswordInputToggle } from "@ui-sdk/vue/password-input"
import { ref } from "vue"

const submitted = ref("")

function onSubmit(event: Event) {
  const data = new FormData(event.currentTarget as HTMLFormElement)
  const length = String(data.get("password")).length
  submitted.value = `Signed in as ${data.get("email")}, with a password of ${length} characters.`
}
</script>

<template>
  <div class="flex w-full max-w-sm flex-col gap-4 text-foreground">
    <form id="sign-in" class="flex flex-col gap-4" @submit.prevent="onSubmit" @reset="submitted = ''">
      <Field name="email" class="flex w-full flex-col gap-2">
        <FieldLabel class="text-sm leading-none font-medium text-foreground data-disabled:opacity-50"
          >Email</FieldLabel
        >
        <Input
          type="email"
          required
          autocomplete="username"
          class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base text-foreground transition-[color,box-shadow] duration-200 outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10 motion-reduce:transition-none md:text-sm"
        />
      </Field>
    </form>
    <Field class="flex w-full flex-col gap-2">
      <FieldLabel class="text-sm leading-none font-medium text-foreground data-disabled:opacity-50"
        >Password</FieldLabel
      >
      <PasswordInput
        name="password"
        form="sign-in"
        required
        class="flex h-8 w-full min-w-0 items-center gap-2 rounded-2xl border border-transparent bg-input/50 ps-2.5 pe-1 text-sm text-muted-foreground transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30 data-disabled:opacity-50 motion-reduce:transition-none"
      >
        <PasswordInputControl
          class="h-full min-w-0 flex-1 border-0 bg-transparent p-0 text-base text-foreground outline-none placeholder:text-muted-foreground md:text-sm"
        />
        <PasswordInputToggle
          v-slot="{ state }"
          aria-label="Show password"
          class="inline-flex size-6 shrink-0 cursor-default items-center justify-center rounded-xl border-0 bg-transparent p-0 text-muted-foreground transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none aria-pressed:text-foreground data-disabled:pointer-events-none"
        >
          <EyeOff aria-hidden="true" v-if="state.visible" class="size-4 shrink-0" />
          <Eye aria-hidden="true" v-else class="size-4 shrink-0" />
        </PasswordInputToggle>
      </PasswordInput>
    </Field>
    <div class="flex flex-wrap gap-2">
      <button
        type="submit"
        form="sign-in"
        class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none"
      >
        Sign in
      </button>
      <button
        type="reset"
        form="sign-in"
        class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none"
      >
        Reset
      </button>
    </div>
    <output class="h-10 overflow-auto text-sm wrap-anywhere text-muted-foreground">{{ submitted }}</output>
  </div>
</template>
