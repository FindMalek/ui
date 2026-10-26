import { FileInput, FileInputDropzone, FileInputTrigger, formatFileSize } from "@ui-sdk/react/file-input"
import { FileIcon } from "lucide-react"

export function Example() {
  return (
    <FileInput accept=".pdf" className="w-full max-w-md min-w-0 text-foreground">
      {({ value: [file] }) => (
        <FileInputDropzone className="flex min-w-0 flex-wrap items-center justify-between gap-3 p-4 rounded-3xl border border-dashed border-border transition-colors duration-200 data-dragging:border-ring data-dragging:bg-muted/50 data-drag-reject:border-foreground data-drag-reject:bg-muted data-disabled:opacity-50 motion-reduce:transition-none">
          <FileIcon aria-hidden="true" className="size-4 shrink-0 text-muted-foreground" />
          <span className="min-w-0 flex-1 truncate text-sm text-muted-foreground">
            {file ? `${file.name}, ${formatFileSize(file.size)}` : "Drop one PDF"}
          </span>
          <FileInputTrigger className="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none data-disabled:pointer-events-none data-disabled:opacity-50 disabled:pointer-events-none disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10">
            {file ? "Replace" : "Choose"}
          </FileInputTrigger>
        </FileInputDropzone>
      )}
    </FileInput>
  )
}
