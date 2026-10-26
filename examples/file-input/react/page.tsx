import {
  FileInput,
  FileInputDropzone,
  FileInputItem,
  FileInputItemRemove,
  FileInputList,
  formatFileSize,
} from "@ui-sdk/react/file-input"
import { FileIcon, Upload, X } from "lucide-react"

export function Example() {
  return (
    <FileInput multiple className="flex w-full max-w-md min-w-0 flex-col gap-3 text-foreground">
      <p className="min-h-5 text-sm text-muted-foreground">Drag a file anywhere over this page.</p>
      <FileInputDropzone
        target="document"
        className="pointer-events-none fixed inset-0 z-50 hidden place-items-center bg-black/30 backdrop-blur-sm data-dragging:grid"
      >
        <div className="flex flex-col items-center gap-3 rounded-3xl border border-border bg-background p-6 text-foreground shadow-xl">
          <Upload aria-hidden="true" className="size-6" />
          <p className="m-0 text-base font-medium">Drop to attach</p>
        </div>
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
