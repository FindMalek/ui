import {
  FileInput,
  FileInputDropzone,
  FileInputItem,
  FileInputItemRemove,
  FileInputList,
  FileInputTrigger,
  formatFileSize,
} from "@ui-sdk/react/file-input"
import { FileIcon, X } from "lucide-react"
import * as React from "react"

const cover = new File(["Dear team,"], "cover-letter.txt", { type: "text/plain" })

export function Example() {
  const id = React.useId()
  const [sent, setSent] = React.useState<string | null>(null)

  return (
    <div className="flex w-full max-w-md min-w-0 flex-col gap-4 text-foreground">
      <FileInput
        name="attachments"
        form={id}
        multiple
        accept="image/*,.pdf,.txt"
        defaultValue={[cover]}
        className="flex min-w-0 flex-col gap-3"
      >
        <FileInputDropzone className="flex min-w-0 flex-wrap items-center justify-between gap-3 p-4 rounded-3xl border border-dashed border-border transition-colors duration-200 data-dragging:border-ring data-dragging:bg-muted/50 data-drag-reject:border-foreground data-drag-reject:bg-muted data-disabled:opacity-50 motion-reduce:transition-none">
          <span className="min-h-5 text-sm text-muted-foreground">Images, PDFs and text</span>
          <FileInputTrigger className="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none data-disabled:pointer-events-none data-disabled:opacity-50 disabled:pointer-events-none disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10">
            Attach
          </FileInputTrigger>
        </FileInputDropzone>
        <FileInputList
          aria-label="Attachments"
          className="flex h-40 min-w-0 flex-col gap-2 overflow-y-auto p-1"
        >
          <FileInputItem className="flex shrink-0 items-center gap-3 rounded-2xl border border-border py-1.5 ps-3 pe-1.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30">
            {({ file }) => (
              <>
                <FileIcon aria-hidden="true" className="size-4 shrink-0 text-muted-foreground" />
                <span className="min-w-0 flex-1 truncate">{file.name}</span>
                <span className="shrink-0 text-xs text-muted-foreground">{formatFileSize(file.size)}</span>
                <FileInputItemRemove className="inline-flex size-6 shrink-0 cursor-default items-center justify-center rounded-xl border-0 bg-transparent p-0 text-muted-foreground transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none data-disabled:pointer-events-none data-disabled:opacity-50">
                  <X aria-hidden="true" className="size-3.5" />
                </FileInputItemRemove>
              </>
            )}
          </FileInputItem>
        </FileInputList>
      </FileInput>
      <form
        id={id}
        onSubmit={(event) => {
          event.preventDefault()
          const files = new FormData(event.currentTarget).getAll("attachments") as File[]
          setSent(
            files
              .filter((file) => file.name)
              .map((file) => file.name)
              .join(", ") || "no files",
          )
        }}
        onReset={() => setSent(null)}
        className="flex flex-wrap gap-2"
      >
        <button
          type="submit"
          className="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none data-disabled:pointer-events-none data-disabled:opacity-50 disabled:pointer-events-none disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10"
        >
          Send
        </button>
        <button
          type="reset"
          className="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none data-disabled:pointer-events-none data-disabled:opacity-50 disabled:pointer-events-none disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10"
        >
          Reset
        </button>
        <span className="min-h-5 basis-full text-sm text-muted-foreground">
          {sent ? `Sent ${sent}.` : ""}
        </span>
      </form>
    </div>
  )
}
