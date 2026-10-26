import {
  createFileInputController,
  FileInput,
  FileInputDropzone,
  FileInputItem,
  FileInputItemRemove,
  FileInputList,
  FileInputTrigger,
  formatFileSize,
  type FileRejection,
} from "@ui-sdk/solid/file-input"
import { createSignal, For } from "solid-js"

const messages: Record<string, string> = {
  duplicate: "is already added",
}

export function Example() {
  const controller = createFileInputController()
  const [rejected, setRejected] = createSignal<FileRejection[]>([])

  return (
    <FileInput
      multiple
      controller={controller}
      validate={(file) =>
        controller.getValue().some((other) => other.name === file.name) ? "duplicate" : null
      }
      onValueChange={() => setRejected([])}
      onReject={setRejected}
      class="flex w-full max-w-md min-w-0 flex-col gap-3 text-foreground"
    >
      <FileInputDropzone class="flex min-w-0 flex-wrap items-center justify-between gap-3 p-4 rounded-3xl border border-dashed border-border transition-colors duration-200 data-dragging:border-ring data-dragging:bg-muted/50 data-drag-reject:border-foreground data-drag-reject:bg-muted data-disabled:opacity-50 motion-reduce:transition-none">
        <span class="min-h-5 text-sm text-muted-foreground">Each name once</span>
        <FileInputTrigger class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none data-disabled:pointer-events-none data-disabled:opacity-50 disabled:pointer-events-none disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10">
          Add files
        </FileInputTrigger>
      </FileInputDropzone>
      <FileInputList aria-label="Files" class="flex h-40 min-w-0 flex-col gap-2 overflow-y-auto p-1">
        <FileInputItem class="flex shrink-0 items-center gap-3 rounded-2xl border border-border py-1.5 ps-3 pe-1.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30">
          {({ file }) => (
            <>
              <svg
                class="size-4 shrink-0 text-muted-foreground"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
                <path d="M14 2v5a1 1 0 0 0 1 1h5" />
              </svg>
              <span class="min-w-0 flex-1 truncate">{file.name}</span>
              <span class="shrink-0 text-xs text-muted-foreground">{formatFileSize(file.size)}</span>
              <FileInputItemRemove class="inline-flex size-6 shrink-0 cursor-default items-center justify-center rounded-xl border-0 bg-transparent p-0 text-muted-foreground transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none data-disabled:pointer-events-none data-disabled:opacity-50">
                <svg
                  class="size-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </FileInputItemRemove>
            </>
          )}
        </FileInputItem>
      </FileInputList>
      <div class="h-12 overflow-y-auto text-sm text-foreground">
        <For each={rejected()}>
          {({ file, reasons }) => (
            <p class="min-h-5 text-sm text-foreground">
              {file.name} {messages[reasons[0]] ?? "was rejected"}
            </p>
          )}
        </For>
      </div>
    </FileInput>
  )
}
