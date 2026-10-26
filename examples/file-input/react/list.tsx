import {
  FileInput,
  FileInputItem,
  FileInputItemRemove,
  FileInputList,
  FileInputTrigger,
  formatFileSize,
} from "@ui-sdk/react/file-input"
import { Plus, X } from "lucide-react"
import * as React from "react"

export function Example() {
  return (
    <FileInput
      multiple
      accept="image/*"
      className="flex w-full max-w-md min-w-0 flex-col gap-3 text-foreground"
    >
      <FileInputTrigger className="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none data-disabled:pointer-events-none data-disabled:opacity-50 disabled:pointer-events-none disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10">
        <Plus aria-hidden="true" className="size-4 shrink-0" />
        Add images
      </FileInputTrigger>
      <FileInputList
        aria-label="Images"
        className="grid h-48 w-full grid-cols-3 content-start gap-2 overflow-y-auto p-1"
      >
        <FileInputItem className="group relative aspect-square overflow-hidden rounded-2xl bg-muted outline-none focus-visible:ring-3 focus-visible:ring-ring/30">
          {({ file, index }) => (
            <>
              <Preview file={file} />
              <span className="absolute inset-x-0 bottom-0 truncate bg-background/90 px-2 py-1 text-xs text-foreground">
                {index + 1}. {file.name}, {formatFileSize(file.size)}
              </span>
              <FileInputItemRemove className="inline-flex size-6 shrink-0 cursor-default items-center justify-center rounded-xl border-0 bg-transparent p-0 text-muted-foreground transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none data-disabled:pointer-events-none data-disabled:opacity-50 absolute end-1 top-1 bg-background/90">
                <X aria-hidden="true" className="size-3.5" />
              </FileInputItemRemove>
            </>
          )}
        </FileInputItem>
      </FileInputList>
    </FileInput>
  )
}

function Preview({ file }: { file: File }) {
  const [url, setUrl] = React.useState<string>()
  React.useEffect(() => {
    const next = URL.createObjectURL(file)
    setUrl(next)
    return () => URL.revokeObjectURL(next)
  }, [file])
  return url ? <img src={url} alt="" className="size-full object-cover" /> : null
}
