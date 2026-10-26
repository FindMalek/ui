<script lang="ts">
  import { FileIcon, Upload, X } from "@lucide/svelte"
  import {
    FileInput,
    FileInputDropzone,
    FileInputItem,
    FileInputItemRemove,
    FileInputList,
    formatFileSize,
  } from "@ui-sdk/svelte/file-input"

</script>

<FileInput multiple class="flex w-full max-w-md min-w-0 flex-col gap-3 text-foreground">
  <p class="min-h-5 text-sm text-muted-foreground">Drag a file anywhere over this page.</p>
  <FileInputDropzone
    target="document"
    class="pointer-events-none fixed inset-0 z-50 hidden place-items-center bg-black/30 backdrop-blur-sm data-dragging:grid"
  >
    <div
      class="flex flex-col items-center gap-3 rounded-3xl border border-border bg-background p-6 text-foreground shadow-xl"
    >
      <Upload aria-hidden="true" class="size-6" />
      <p class="m-0 text-base font-medium">Drop to attach</p>
    </div>
  </FileInputDropzone>
  <FileInputList aria-label="Files" class="flex h-40 min-w-0 flex-col gap-2 overflow-y-auto p-1">
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
