import {
  createFileInputController,
  FileInput,
  FileInputDropzone,
  FileInputItem,
  FileInputItemRemove,
  FileInputList,
  FileInputTrigger,
} from "@ui-sdk/solid/file-input"
import { createSignal } from "solid-js"

export function Example() {
  const controller = createFileInputController()
  const [text, setText] = createSignal("")
  let input: HTMLTextAreaElement | undefined

  return (
    <FileInput
      multiple
      accept={["image/*", ".pdf", ".txt", ".md"]}
      maxSize={10_000_000}
      controller={controller}
      class="w-full max-w-md min-w-0 text-foreground"
    >
      {(state) => (
        <FileInputDropzone
          pasteTarget={() => input}
          class="flex flex-col gap-2 rounded-3xl border border-transparent bg-input/50 p-3 has-[textarea:focus-visible]:border-ring has-[textarea:focus-visible]:ring-3 has-[textarea:focus-visible]:ring-ring/30 data-dragging:border-ring data-dragging:ring-3 data-dragging:ring-ring/30"
        >
          <FileInputList
            aria-label="Attachments"
            class="flex h-16 flex-wrap content-start gap-2 overflow-y-auto p-1"
          >
            <FileInputItem class="flex h-7 items-center gap-1.5 rounded-xl bg-background ps-2 pe-1 text-xs outline-none focus-visible:ring-3 focus-visible:ring-ring/30">
              {({ file }) => (
                <>
                  {file.type.startsWith("image/") ? (
                    <svg
                      class="size-3.5 shrink-0 text-muted-foreground"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      aria-hidden="true"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                      <circle cx="9" cy="9" r="2" />
                      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                    </svg>
                  ) : (
                    <svg
                      class="size-3.5 shrink-0 text-muted-foreground"
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
                  )}
                  <span class="max-w-40 truncate">{file.name}</span>
                  <FileInputItemRemove class="inline-flex size-6 shrink-0 cursor-default items-center justify-center rounded-xl border-0 bg-transparent p-0 text-muted-foreground transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none data-disabled:pointer-events-none data-disabled:opacity-50">
                    <svg
                      class="size-3"
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
          <textarea
            ref={input}
            aria-label="Message"
            placeholder="Ask anything. Paste or drop files to attach them."
            value={text()}
            onInput={(event) => setText(event.currentTarget.value)}
            onKeyDown={(event) => {
              const last = state.value.at(-1)
              if (event.key !== "Backspace" || text() !== "" || !last) return
              event.preventDefault()
              controller.removeFile(last, { reason: "remove-press" })
            }}
            class="h-20 w-full resize-none border-0 bg-transparent px-1 py-0 text-base text-foreground outline-none placeholder:text-muted-foreground md:text-sm"
          />
          <div class="flex flex-wrap items-center justify-between gap-2">
            <FileInputTrigger
              aria-label="Attach files"
              class="inline-flex h-8 w-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding p-0 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none data-disabled:pointer-events-none data-disabled:opacity-50 disabled:pointer-events-none disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10"
            >
              <svg
                class="size-4 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
            </FileInputTrigger>
            <button
              type="button"
              disabled={!text() && !state.value.length}
              onClick={() => {
                setText("")
                controller.clear()
              }}
              class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none data-disabled:pointer-events-none data-disabled:opacity-50 disabled:pointer-events-none disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10"
            >
              Send
            </button>
          </div>
        </FileInputDropzone>
      )}
    </FileInput>
  )
}
