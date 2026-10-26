import {
  FileInput,
  FileInputDropzone,
  FileInputItem,
  FileInputItemRemove,
  FileInputList,
  FileInputTrigger,
} from "@ui-sdk/solid/file-input"
import { Show } from "solid-js"

export function Example() {
  return (
    <FileInput multiple accept="image/*" maxFiles={4} class="flex w-full max-w-md flex-col gap-3">
      <FileInputDropzone
        render={(props) => <section {...props} aria-label="Gallery upload" />}
        class={(state) =>
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
              <svg
                class="size-5"
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
            ) : state.dragAccept ? (
              <svg
                class="size-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            ) : (
              <svg
                class="size-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
              </svg>
            )}
            <p class="text-sm font-medium">
              {state.dragReject
                ? "Only up to 4 images"
                : state.dragAccept
                  ? "Release to add"
                  : "Drag up to 4 images here"}
            </p>
            <Show when={!state.dragging}>
              <FileInputTrigger class="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-transparent dark:hover:bg-input/30">
                Browse
              </FileInputTrigger>
            </Show>
          </>
        )}
      </FileInputDropzone>
      <FileInputList render={(props) => <ul {...props} aria-label="Images" />} class="flex flex-wrap gap-2">
        <FileInputItem
          render={(props) => <li {...props} />}
          class={(state) =>
            `flex h-7 items-center gap-1.5 rounded-2xl ps-3 pe-1 text-xs outline-none focus-visible:ring-3 focus-visible:ring-ring/30 ${
              state.index === 0
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground"
            }`
          }
        >
          {(state) => (
            <>
              <Show when={state.index === 0}>
                <span class="font-medium">Cover:</span>
              </Show>
              <span class="max-w-32 truncate">{state.file.name}</span>
              <FileInputItemRemove
                class={(remove) =>
                  `inline-flex size-5 items-center justify-center rounded-xl outline-none ${
                    remove.disabled ? "opacity-50" : "hover:bg-current/10"
                  }`
                }
              >
                <svg
                  class="size-3"
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
