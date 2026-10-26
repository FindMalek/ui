<script lang="ts">
  import { Eye, EyeOff } from "@lucide/svelte"
  import { Field, FieldLabel } from "@ui-sdk/svelte/field"
  import { PasswordInput, PasswordInputControl, PasswordInputToggle } from "@ui-sdk/svelte/password-input"

</script>

<Field name="password" class="flex w-full max-w-sm flex-col gap-2">
  <FieldLabel class="text-sm leading-none font-medium data-disabled:opacity-50">Password</FieldLabel>
  <PasswordInput>
    {#snippet render({ props, state })}
      <div
        {...props}
        class={
          state.filled
            ? 'flex h-8 w-full min-w-0 items-center gap-2 rounded-2xl border border-ring bg-input/50 ps-2.5 pe-1 transition-[color,box-shadow] duration-200 has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30'
            : 'flex h-8 w-full min-w-0 items-center gap-2 rounded-2xl border border-transparent bg-input/50 ps-2.5 pe-1 transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30'
        }
      >
        <PasswordInputControl>
          {#snippet render({ props: control, state: field })}
            <input
              {...control}
              class={
                field.visible
                  ? 'h-full min-w-0 flex-1 bg-transparent font-mono text-base tracking-wide outline-none placeholder:text-muted-foreground md:text-sm'
                  : 'h-full min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground md:text-sm'
              }
            />
          {/snippet}
        </PasswordInputControl>
        <PasswordInputToggle aria-label="Show password">
          {#snippet render({ props: toggle, state: shown })}
            <button
              {...toggle}
              class="inline-flex size-6 shrink-0 items-center justify-center rounded-xl text-muted-foreground outline-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:text-foreground dark:hover:bg-muted/50"
            >
              {#if shown.visible}
                <EyeOff class="size-4" />
              {:else}
                <Eye class="size-4" />
              {/if}
            </button>
          {/snippet}
        </PasswordInputToggle>
      </div>
    {/snippet}
  </PasswordInput>
</Field>
