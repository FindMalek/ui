import {
  FileInput,
  FileInputDropzone,
  FileInputItem,
  FileInputItemRemove,
  FileInputList,
  FileInputTrigger,
  formatFileSize,
} from "@ui-sdk/react/file-input"
import { FileIcon, Upload, X } from "lucide-react"

export function Example() {
  return (
    <FileInput multiple className="flex w-full max-w-md min-w-0 flex-col gap-3 text-foreground">
      <FileInputDropzone className="flex flex-col items-center gap-4 px-6 py-8 text-center rounded-3xl border border-dashed border-border transition-colors duration-200 data-dragging:border-ring data-dragging:bg-muted/50 data-drag-reject:border-foreground data-drag-reject:bg-muted data-disabled:opacity-50 motion-reduce:transition-none">
        <div className="flex size-10 items-center justify-center rounded-xl bg-muted text-foreground">
          <Upload aria-hidden="true" className="size-5" />
        </div>
        <div className="flex min-w-0 flex-col gap-1">
          <p className="m-0 text-sm font-medium">Drag and drop files here</p>
          <p className="min-h-5 text-sm text-muted-foreground">Or paste them, or browse your computer.</p>
        </div>
        <FileInputTrigger className="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none data-disabled:pointer-events-none data-disabled:opacity-50 disabled:pointer-events-none disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10">
          Browse files
        </FileInputTrigger>
      </FileInputDropzone>
      <FileInputList aria-label="Files" className="flex h-40 min-w-0 flex-col gap-2 overflow-y-auto p-1">
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
  )
}
