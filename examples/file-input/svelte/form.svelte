<script lang="ts">
  import { FileIcon, X } from "@lucide/svelte"
  import {
    FileInput,
    FileInputDropzone,
    FileInputItem,
    FileInputItemRemove,
    FileInputList,
    FileInputTrigger,
    formatFileSize,
  } from "@ui-sdk/svelte/file-input"

  const cover = new File(["Dear team,"], "cover-letter.txt", { type: "text/plain" })

  const id = $props.id()
  let sent = $state<string | null>(null)

  function onSubmit(event: SubmitEvent) {
    event.preventDefault()
    const files = new FormData(event.currentTarget as HTMLFormElement).getAll("attachments") as File[]
    sent =
      files
        .filter((file) => file.name)
        .map((file) => file.name)
        .join(", ") || "no files"
  }
</script>

<div class="flex w-full max-w-md min-w-0 flex-col gap-4 text-foreground">
  <FileInput
    name="attachments"
    form={id}
    multiple
    accept="image/*,.pdf,.txt"
    defaultValue={[cover]}
    class="flex min-w-0 flex-col gap-3"
  >
    <FileInputDropzone
      class="flex min-w-0 flex-wrap items-center justify-between gap-3 p-4 rounded-3xl border border-dashed border-border transition-colors duration-200 data-dragging:border-ring data-dragging:bg-muted/50 data-drag-reject:border-foreground data-drag-reject:bg-muted data-disabled:opacity-50 motion-reduce:transition-none"
    >
      <span class="min-h-5 text-sm text-muted-foreground">Images, PDFs and text</span>
      <FileInputTrigger
        class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none data-disabled:pointer-events-none data-disabled:opacity-50 disabled:pointer-events-none disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10"
      >
        Attach
      </FileInputTrigger>
    </FileInputDropzone>
    <FileInputList aria-label="Attachments" class="flex h-40 min-w-0 flex-col gap-2 overflow-y-auto p-1">
      <FileInputItem
        class="flex shrink-0 items-center gap-3 rounded-2xl border border-border py-1.5 ps-3 pe-1.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
      >
        {#snippet children(state)}
          <FileIcon aria-hidden="true" class="size-4 shrink-0 text-muted-foreground" />
          <span class="min-w-0 flex-1 truncate">{state.file.name}</span>
          <span class="shrink-0 text-xs text-muted-foreground">{formatFileSize(state.file.size)}</span>
          <FileInputItemRemove
            class="inline-flex size-6 shrink-0 cursor-default items-center justify-center rounded-xl border-0 bg-transparent p-0 text-muted-foreground transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none data-disabled:pointer-events-none data-disabled:opacity-50"
          >
            <X aria-hidden="true" class="size-3.5" />
          </FileInputItemRemove>
        {/snippet}
      </FileInputItem>
    </FileInputList>
  </FileInput>
  <form {id} class="flex flex-wrap gap-2" onsubmit={onSubmit} onreset={() => (sent = null)}>
    <button
      type="submit"
      class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none data-disabled:pointer-events-none data-disabled:opacity-50 disabled:pointer-events-none disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10"
    >
      Send
    </button>
    <button
      type="reset"
      class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none data-disabled:pointer-events-none data-disabled:opacity-50 disabled:pointer-events-none disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10"
    >
      Reset
    </button>
    <span class="min-h-5 basis-full text-sm text-muted-foreground">{sent ? `Sent ${sent}.` : ""}</span>
  </form>
</div>
