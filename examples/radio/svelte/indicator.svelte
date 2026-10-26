<script lang="ts">
  import { Radio, RadioGroup, RadioIndicator } from "@ui-sdk/svelte/radio"

  const themes = [
    { value: "light", label: "Light" },
    { value: "dark", label: "Dark" },
    { value: "system", label: "System" },
  ]
</script>

<RadioGroup
  class="flex flex-col gap-3"
  defaultValue="system"
  aria-label="Theme"
>
  {#each themes as theme (theme.value)}
    <label class="group flex w-fit items-center gap-3 text-sm font-medium">
      <Radio
        class="relative flex size-4 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-input/90 outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:bg-primary data-checked:text-primary-foreground data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none"
        value={theme.value}
      >
        <RadioIndicator
          class="size-2 rounded-full bg-primary-foreground transition-[scale,opacity] duration-200 ease-out data-starting-style:scale-0 data-starting-style:opacity-0 data-ending-style:scale-0 data-ending-style:opacity-0 data-unchecked:scale-75 data-unchecked:bg-primary data-unchecked:opacity-0 group-hover:data-unchecked:opacity-30 motion-reduce:transition-none"
          keepMounted
        />
      </Radio>
      {theme.label}
    </label>
  {/each}
</RadioGroup>
