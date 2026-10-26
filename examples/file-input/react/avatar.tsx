import { FileInput, FileInputDropzone, FileInputTrigger } from "@ui-sdk/react/file-input"
import { User } from "lucide-react"
import * as React from "react"

export function Example() {
  const [value, setValue] = React.useState<File[]>([])
  const [url, setUrl] = React.useState<string | null>(null)

  React.useEffect(() => {
    if (!value[0]) {
      setUrl(null)
      return
    }
    const next = URL.createObjectURL(value[0])
    setUrl(next)
    return () => URL.revokeObjectURL(next)
  }, [value])

  return (
    <FileInput
      accept="image/*"
      maxSize={5_000_000}
      value={value}
      onValueChange={setValue}
      className="flex w-full max-w-md min-w-0 items-center gap-4 text-foreground"
    >
      <FileInputDropzone className="relative flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-muted-foreground data-drag-accept:ring-3 data-drag-accept:ring-ring/30 data-drag-reject:ring-3 data-drag-reject:ring-foreground/30">
        {url ? (
          <img src={url} alt="" className="size-full object-cover" />
        ) : (
          <User aria-hidden="true" className="size-6" />
        )}
      </FileInputDropzone>
      <div className="flex min-w-0 flex-col gap-1.5">
        <div className="flex flex-wrap gap-2">
          <FileInputTrigger className="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none data-disabled:pointer-events-none data-disabled:opacity-50 disabled:pointer-events-none disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10">
            {url ? "Change photo" : "Upload photo"}
          </FileInputTrigger>
          {url && (
            <button
              type="button"
              onClick={() => setValue([])}
              className="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none data-disabled:pointer-events-none data-disabled:opacity-50 disabled:pointer-events-none disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10"
            >
              Remove
            </button>
          )}
        </div>
        <p className="min-h-5 text-sm text-muted-foreground">Or drop an image on the avatar. Up to 5 MB.</p>
      </div>
    </FileInput>
  )
}
