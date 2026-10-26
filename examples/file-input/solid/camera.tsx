import { FileInput, FileInputTrigger } from "@ui-sdk/solid/file-input"

export function Example() {
  return (
    <FileInput accept="image/*" capture="environment" class="flex min-w-0 items-center gap-3">
      {(state) => (
        <>
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
              <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
              <path d="M12 18h.01" />
            </svg>
            Take a photo
          </FileInputTrigger>
          <span class="min-w-0 flex-1 truncate text-sm text-muted-foreground">
            {state.value[0]?.name ?? "No photo yet"}
          </span>
        </>
      )}
    </FileInput>
  )
}
