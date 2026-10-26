import {
  FileInput,
  FileInputDropzone,
  FileInputItem,
  FileInputItemRemove,
  FileInputList,
  FileInputTrigger,
} from "@ui-sdk/react/file-input"
import { Check, ImageIcon, X } from "lucide-react"

export function Example() {
  return (
    <FileInput multiple accept="image/*" maxFiles={4} className="flex w-full max-w-md flex-col gap-3">
      <FileInputDropzone
        render={<section aria-label="Gallery upload" />}
        className={(state) =>
          `flex flex-col items-center gap-4 rounded-3xl border border-dashed px-6 py-10 text-center transition-colors ${
            state.dragReject
              ? "border-destructive bg-destructive/10 text-destructive dark:bg-destructive/20"
              : state.dragAccept
                ? "border-ring bg-muted/50"
                : "border-border"
          }`
        }
      >
        {(state) => (
          <>
            {state.dragReject ? (
              <X className="size-5" />
            ) : state.dragAccept ? (
              <Check className="size-5" />
            ) : (
              <ImageIcon className="size-5" />
            )}
            <p className="text-sm font-medium">
              {state.dragReject
                ? "Only up to 4 images"
                : state.dragAccept
                  ? "Release to add"
                  : "Drag up to 4 images here"}
            </p>
            {!state.dragging && (
              <FileInputTrigger className="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-transparent dark:hover:bg-input/30">
                Browse
              </FileInputTrigger>
            )}
          </>
        )}
      </FileInputDropzone>
      <FileInputList render={<ul aria-label="Images" />} className="flex flex-wrap gap-2">
        <FileInputItem
          render={<li />}
          className={(state) =>
            `flex h-7 items-center gap-1.5 rounded-2xl ps-3 pe-1 text-xs outline-none focus-visible:ring-3 focus-visible:ring-ring/30 ${
              state.index === 0
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground"
            }`
          }
        >
          {(state) => (
            <>
              {state.index === 0 && <span className="font-medium">Cover:</span>}
              <span className="max-w-32 truncate">{state.file.name}</span>
              <FileInputItemRemove
                className={(remove) =>
                  `inline-flex size-5 items-center justify-center rounded-xl outline-none ${
                    remove.disabled ? "opacity-50" : "hover:bg-current/10"
                  }`
                }
              >
                <X className="size-3" />
              </FileInputItemRemove>
            </>
          )}
        </FileInputItem>
      </FileInputList>
    </FileInput>
  )
}
