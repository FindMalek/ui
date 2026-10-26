import { FileInput, FileInputTrigger } from "@ui-sdk/react/file-input"
import { Upload } from "lucide-react"

export function Example() {
  return (
    <FileInput className="flex min-w-0 items-center gap-3">
      {(state) => (
        <>
          <FileInputTrigger className="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none data-disabled:pointer-events-none data-disabled:opacity-50 disabled:pointer-events-none disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10">
            <Upload aria-hidden="true" className="size-4 shrink-0" />
            Upload a file
          </FileInputTrigger>
          <span className="min-w-0 flex-1 truncate text-sm text-muted-foreground">
            {state.value[0]?.name ?? "No file chosen"}
          </span>
        </>
      )}
    </FileInput>
  )
}
