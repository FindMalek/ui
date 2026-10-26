<script lang="ts">
  import { Button } from "@ui-sdk/svelte/button"
  let title = $state("")
  let published = $state(false)
  const hint = $props.id()
  const ready = $derived(title.trim() !== "")
</script>

<div class="flex w-full max-w-sm flex-col gap-3 text-foreground">
  <label class="flex flex-col gap-2 text-sm leading-5">
    Title
    <input
      bind:value={title}
      oninput={() => (published = false)}
      class="h-8 w-full min-w-0 appearance-none rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base text-foreground outline-none transition-[color,box-shadow] duration-200 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 md:text-sm motion-reduce:transition-none"
    />
  </label>
  <div class="flex items-center gap-3">
    <Button
      disabled={!ready}
      focusableWhenDisabled
      aria-describedby={hint}
      onclick={() => (published = true)}
      class="inline-flex h-8 shrink-0 cursor-default appearance-none items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-clip-padding px-3 py-0 text-sm leading-5 font-medium whitespace-nowrap outline-none select-none transition-all focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50 data-disabled:opacity-50 motion-reduce:transition-none bg-secondary text-secondary-foreground hover:not-aria-disabled:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] enabled:active:not-aria-disabled:translate-y-px data-disabled:cursor-default"
    >Publish</Button>
    <p
      id={hint}
      class="m-0 flex min-h-10 items-center text-sm leading-5 text-muted-foreground"
    >{!ready ? "Add a title to publish." : published ? "Published." : "Ready to publish."}</p>
  </div>
</div>
