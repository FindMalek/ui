import {
  FileInput,
  FileInputItem,
  FileInputItemRemove,
  FileInputList,
  FileInputTrigger,
  formatFileSize,
} from "@ui-sdk/solid/file-input"
import { createMemo, onCleanup } from "solid-js"

export function Example() {
  return (
    <FileInput multiple accept="image/*" class="flex w-full max-w-md min-w-0 flex-col gap-3 text-foreground">
      <FileInputTrigger class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none data-disabled:pointer-events-none data-disabled:opacity-50 disabled:pointer-events-none disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10">
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
        Add images
      </FileInputTrigger>
      <FileInputList
        aria-label="Images"
        class="grid h-48 w-full grid-cols-3 content-start gap-2 overflow-y-auto p-1"
      >
        <FileInputItem class="group relative aspect-square overflow-hidden rounded-2xl bg-muted outline-none focus-visible:ring-3 focus-visible:ring-ring/30">
          {({ file, index }) => (
            <>
              <Preview file={file} />
              <span class="absolute inset-x-0 bottom-0 truncate bg-background/90 px-2 py-1 text-xs text-foreground">
                {index + 1}. {file.name}, {formatFileSize(file.size)}
              </span>
              <FileInputItemRemove class="inline-flex size-6 shrink-0 cursor-default items-center justify-center rounded-xl border-0 bg-transparent p-0 text-muted-foreground transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none data-disabled:pointer-events-none data-disabled:opacity-50 absolute end-1 top-1 bg-background/90">
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
    </FileInput>
  )
}

function Preview(props: { file: File }) {
  const url = createMemo(() => {
    const next = URL.createObjectURL(props.file)
    onCleanup(() => URL.revokeObjectURL(next))
    return next
  })
  return <img src={url()} alt="" class="size-full object-cover" />
}
