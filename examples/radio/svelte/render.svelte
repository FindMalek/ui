<script lang="ts">
  import { Bell, Check, Mail, Moon } from "@lucide/svelte"
  import { Radio, RadioGroup } from "@ui-sdk/svelte/radio"

  const options = [
    { value: "all", label: "Everything", description: "Every message and update.", icon: Bell },
    { value: "mentions", label: "Mentions", description: "Only when someone mentions you.", icon: Mail },
    { value: "none", label: "Nothing", description: "Turn notifications off.", icon: Moon },
  ]

  const id = $props.id()
</script>

<RadioGroup
  class="grid w-full max-w-sm gap-2"
  aria-label="Notify me about"
  defaultValue="mentions"
>
  {#each options as option (option.value)}
    {@const Icon = option.icon}
    <Radio
      value={option.value}
      aria-labelledby={`${id}-notify-${option.value}-label`}
      aria-describedby={`${id}-notify-${option.value}-description`}
    >
      {#snippet render({ props, state })}
        <button
          {...props}
          class={state.checked
            ? "flex w-full items-center gap-3 rounded-2xl border border-border px-4 py-3 text-start text-sm cursor-default outline-none transition-[color,background-color,box-shadow] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 bg-input/30 motion-reduce:transition-none"
            : "flex w-full items-center gap-3 rounded-2xl border border-border px-4 py-3 text-start text-sm cursor-default outline-none transition-[color,background-color,box-shadow] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 hover:bg-input/40 motion-reduce:transition-none"}
        >
          <Icon class="size-4 shrink-0 text-muted-foreground" />
          <span class="flex flex-1 flex-col">
            <span
              id={`${id}-notify-${option.value}-label`}
              class="font-medium"
            >{option.label}</span>
            <span
              id={`${id}-notify-${option.value}-description`}
              class="text-muted-foreground"
            >
              {option.description}
            </span>
          </span>
          {#if state.checked}<Check class="size-4 shrink-0" />{/if}
        </button>
      {/snippet}
    </Radio>
  {/each}
</RadioGroup>
