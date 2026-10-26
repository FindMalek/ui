<script lang="ts">
  import { TokenInput, TokenInputEditor, type TokenInputValue } from "@ui-sdk/svelte/token-input"

  const draft: TokenInputValue = [
    "Explain ",
    { type: "file", value: "src/routes.ts", label: "routes.ts" },
    " in two sentences.",
  ]

  let submitted = $state("")
  let disabled = $state(false)
  let readOnly = $state(false)
  const formId = $props.id()

  function submit(event: Event) {
    event.preventDefault()
    submitted = String(new FormData(event.currentTarget as HTMLFormElement).get("prompt") ?? "")
  }
</script>

<div class="flex w-full max-w-sm min-w-0 flex-col gap-3">
  <div class="flex flex-wrap items-center gap-3 text-sm">
    <label class="flex items-center gap-2">
      <input bind:checked={disabled} type="checkbox" class="size-4 accent-primary" />
      Disabled
    </label>
    <label class="flex items-center gap-2">
      <input bind:checked={readOnly} type="checkbox" class="size-4 accent-primary" />
      Read-only
    </label>
  </div>
  <TokenInput form={formId} name="prompt" required defaultValue={draft} {disabled} {readOnly}>
    <!-- svelte-ignore a11y_label_has_associated_control -->
    <label id={`${formId}-label`} class="text-sm leading-none font-medium">Prompt</label>
    <TokenInputEditor
      aria-labelledby={`${formId}-label`}
      class="h-28 overflow-y-auto rounded-2xl border border-transparent bg-input/50 px-2.5 py-2 text-base leading-6 outline-none transition-[color,box-shadow] duration-200 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-not-allowed data-disabled:opacity-50 data-readonly:border-input data-readonly:bg-transparent md:text-sm [&_[data-token-type]]:rounded-2xl [&_[data-token-type]]:bg-input [&_[data-token-type]]:px-1.5 [&_[data-token-type]]:font-medium dark:[&_[data-token-type]]:bg-input/60 motion-reduce:transition-none"
    />
  </TokenInput>
  <form onreset={() => submitted = ""} id={formId} class="flex flex-col gap-3" onsubmit={submit}>
    <div class="flex gap-2">
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
    <p class="h-12 overflow-y-auto font-mono text-xs break-all text-muted-foreground">{submitted}</p>
  </form>
</div>
