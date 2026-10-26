import {
  FileInput,
  FileInputDropzone,
  FileInputItem,
  FileInputList,
  FileInputTrigger,
  relativePath,
} from "@ui-sdk/react/file-input"
import { Folder } from "lucide-react"

export function Example() {
  return (
    <FileInput directory className="flex w-full max-w-md min-w-0 flex-col gap-3 text-foreground">
      <FileInputDropzone className="flex min-w-0 flex-wrap items-center justify-between gap-3 p-4 rounded-3xl border border-dashed border-border transition-colors duration-200 data-dragging:border-ring data-dragging:bg-muted/50 data-drag-reject:border-foreground data-drag-reject:bg-muted data-disabled:opacity-50 motion-reduce:transition-none">
        <Folder aria-hidden="true" className="size-4 shrink-0 text-muted-foreground" />
        <span className="min-w-0 flex-1 truncate text-sm text-muted-foreground">Drop a folder</span>
        <FileInputTrigger className="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none data-disabled:pointer-events-none data-disabled:opacity-50 disabled:pointer-events-none disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10">
          Choose a folder
        </FileInputTrigger>
      </FileInputDropzone>
      <FileInputList aria-label="Files" className="flex h-48 min-w-0 flex-col gap-1 overflow-auto p-1">
        <FileInputItem className="shrink-0 truncate rounded-xl px-2 py-1 font-mono text-xs text-muted-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset">
          {({ file }) => relativePath(file)}
        </FileInputItem>
      </FileInputList>
    </FileInput>
  )
}
