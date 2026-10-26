<script lang="ts">
  import { FileIcon, ImageIcon, X } from "@lucide/svelte"
  import {
    FileInput,
    FileInputDropzone,
    FileInputItem,
    FileInputItemRemove,
    FileInputList,
    FileInputTrigger,
    formatFileSize,
    type FileRejection,
  } from "@ui-sdk/svelte/file-input"

  const messages: Record<string, string> = {
    "file-type": "isn't a supported type",
  }

  let rejected = $state<FileRejection[]>([])
</script>

<FileInput
  multiple
  accept={["image/*", ".pdf"]}
  class="flex w-full max-w-md min-w-0 flex-col gap-3 text-foreground"
  onValueChange={() => (rejected = [])}
  onReject={(next) => (rejected = next)}
>
  <FileInputDropzone
    class="flex min-w-0 flex-wrap items-center justify-between gap-3 p-4 rounded-3xl border border-dashed border-border transition-colors duration-200 data-dragging:border-ring data-dragging:bg-muted/50 data-drag-reject:border-foreground data-drag-reject:bg-muted data-disabled:opacity-50 motion-reduce:transition-none"
  >
    <ImageIcon aria-hidden="true" class="size-4 shrink-0 text-muted-foreground" />
    <span class="min-w-0 flex-1 truncate text-sm text-muted-foreground">Images and PDFs</span>
    <FileInputTrigger
      class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none data-disabled:pointer-events-none data-disabled:opacity-50 disabled:pointer-events-none disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10"
    >
      Browse
    </FileInputTrigger>
  </FileInputDropzone>
  <FileInputList aria-label="Files" class="flex h-40 min-w-0 flex-col gap-2 overflow-y-auto p-1">
    <FileInputItem
      class="flex shrink-0 items-center gap-3 rounded-2xl border border-border py-1.5 ps-3 pe-1.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
    >
      {#snippet children(state)}
        {#if state.file.type.startsWith("image/")}
          <ImageIcon aria-hidden="true" class="size-4 shrink-0 text-muted-foreground" />
        {:else}
          <FileIcon aria-hidden="true" class="size-4 shrink-0 text-muted-foreground" />
        {/if}
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
  <div class="h-12 overflow-y-auto text-sm text-foreground">{#each rejected as { file, reasons }, index (index)}
    <p class="min-h-5 text-sm text-foreground">{file.name} {messages[reasons[0]] ?? "was rejected"}</p>
  {/each}</div>
</FileInput>
