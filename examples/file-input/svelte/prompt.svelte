<script lang="ts">
  import { FileIcon, ImageIcon, Plus, X } from "@lucide/svelte"
  import {
    createFileInputController,
    FileInput,
    FileInputDropzone,
    FileInputItem,
    FileInputItemRemove,
    FileInputList,
    FileInputTrigger,
  } from "@ui-sdk/svelte/file-input"

  const controller = createFileInputController()
  let text = $state("")
  let input = $state<HTMLTextAreaElement | null>(null)

  function onKeydown(event: KeyboardEvent, value: readonly File[]) {
    const last = value.at(-1)
    if (event.key !== "Backspace" || text !== "" || !last) return
    event.preventDefault()
    controller.removeFile(last, { reason: "remove-press" })
  }

  function send() {
    text = ""
    controller.clear()
  }
</script>

<FileInput
  multiple
  accept={["image/*", ".pdf", ".txt", ".md"]}
  maxSize={10_000_000}
  {controller}
  class="w-full max-w-md min-w-0 text-foreground"
>
  {#snippet children(state)}
    <FileInputDropzone
      pasteTarget={() => input}
      class="flex flex-col gap-2 rounded-3xl border border-transparent bg-input/50 p-3 has-[textarea:focus-visible]:border-ring has-[textarea:focus-visible]:ring-3 has-[textarea:focus-visible]:ring-ring/30 data-dragging:border-ring data-dragging:ring-3 data-dragging:ring-ring/30"
    >
      <FileInputList
        aria-label="Attachments"
        class="flex h-16 flex-wrap content-start gap-2 overflow-y-auto p-1"
      >
        <FileInputItem
          class="flex h-7 items-center gap-1.5 rounded-xl bg-background ps-2 pe-1 text-xs outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
        >
          {#snippet children(item)}
            {#if item.file.type.startsWith("image/")}
              <ImageIcon aria-hidden="true" class="size-3.5 shrink-0 text-muted-foreground" />
            {:else}
              <FileIcon aria-hidden="true" class="size-3.5 shrink-0 text-muted-foreground" />
            {/if}
            <span class="max-w-40 truncate">{item.file.name}</span>
            <FileInputItemRemove
              class="inline-flex size-6 shrink-0 cursor-default items-center justify-center rounded-xl border-0 bg-transparent p-0 text-muted-foreground transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none data-disabled:pointer-events-none data-disabled:opacity-50"
            >
              <X aria-hidden="true" class="size-3" />
            </FileInputItemRemove>
          {/snippet}
        </FileInputItem>
      </FileInputList>
      <textarea
        bind:this={input}
        bind:value={text}
        aria-label="Message"
        placeholder="Ask anything. Paste or drop files to attach them."
        class="h-20 w-full resize-none border-0 bg-transparent px-1 py-0 text-base text-foreground outline-none placeholder:text-muted-foreground md:text-sm"
        onkeydown={(event) => onKeydown(event, state.value)}
      ></textarea>
      <div class="flex flex-wrap items-center justify-between gap-2">
        <FileInputTrigger
          aria-label="Attach files"
          class="inline-flex h-8 w-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding p-0 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none data-disabled:pointer-events-none data-disabled:opacity-50 disabled:pointer-events-none disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10"
        >
          <Plus aria-hidden="true" class="size-4 shrink-0" />
        </FileInputTrigger>
        <button
          type="button"
          disabled={!text && !state.value.length}
          class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none data-disabled:pointer-events-none data-disabled:opacity-50 disabled:pointer-events-none disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10"
          onclick={send}
        >
          Send
        </button>
      </div>
    </FileInputDropzone>
  {/snippet}
</FileInput>
