<script lang="ts">
  import { Moon, Sun } from "@lucide/svelte"
  import { Switch, SwitchThumb } from "@ui-sdk/svelte/switch"
</script>

<label class="flex items-center gap-2 text-sm font-medium">
  <Switch>
    {#snippet render({ props, state })}
      <button
        {...props}
        class={[
          "inline-flex h-5 w-8 shrink-0 items-center rounded-full border-2 outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30",
          state.checked ? "border-primary bg-primary" : "border-transparent bg-input/90",
        ]}
      >
        <SwitchThumb
          class="flex size-4 items-center justify-center rounded-full bg-background text-foreground shadow-sm transition-transform data-checked:translate-x-[calc(100%-4px)] rtl:data-checked:-translate-x-[calc(100%-4px)] dark:bg-foreground dark:text-background dark:data-checked:bg-primary-foreground dark:data-checked:text-foreground"
        >
          {#snippet render({ props, state: thumbState })}
            <span {...props}>
              {#if thumbState.checked}<Moon class="size-3" />{:else}<Sun class="size-3" />{/if}
            </span>
          {/snippet}
        </SwitchThumb>
      </button>
    {/snippet}
  </Switch>
  Dark mode
</label>
