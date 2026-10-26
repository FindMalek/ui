import { FileInput, FileInputDropzone, FileInputTrigger } from "@ui-sdk/solid/file-input"
import { createMemo, createSignal, onCleanup, Show } from "solid-js"

export function Example() {
  const [value, setValue] = createSignal<File[]>([])

  const url = createMemo(() => {
    const file = value()[0]
    if (!file) return null
    const next = URL.createObjectURL(file)
    onCleanup(() => URL.revokeObjectURL(next))
    return next
  })

  return (
    <FileInput
      accept="image/*"
      maxSize={5_000_000}
      value={value()}
      onValueChange={setValue}
      class="flex w-full max-w-md min-w-0 items-center gap-4 text-foreground"
    >
      <FileInputDropzone class="relative flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-full bg-muted text-muted-foreground data-drag-accept:ring-3 data-drag-accept:ring-ring/30 data-drag-reject:ring-3 data-drag-reject:ring-foreground/30">
        <Show
          when={url()}
          fallback={
            <svg
              class="size-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          }
        >
          {(url) => <img src={url()} alt="" class="size-full object-cover" />}
        </Show>
      </FileInputDropzone>
      <div class="flex min-w-0 flex-col gap-1.5">
        <div class="flex flex-wrap gap-2">
          <FileInputTrigger class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none data-disabled:pointer-events-none data-disabled:opacity-50 disabled:pointer-events-none disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10">
            {url() ? "Change photo" : "Upload photo"}
          </FileInputTrigger>
          <Show when={url()}>
            <button
              type="button"
              onClick={() => setValue([])}
              class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none data-disabled:pointer-events-none data-disabled:opacity-50 disabled:pointer-events-none disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10"
            >
              Remove
            </button>
          </Show>
        </div>
        <p class="min-h-5 text-sm text-muted-foreground">Or drop an image on the avatar. Up to 5 MB.</p>
      </div>
    </FileInput>
  )
}
