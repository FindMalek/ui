import { Toggle, ToggleIcon } from "@ui-sdk/solid/toggle"

export function Example() {
  return (
    <div dir="rtl">
      <Toggle class="group inline-flex h-8 min-w-8 shrink-0 items-center justify-center gap-1 rounded-2xl ps-2 pe-2.5 text-sm font-medium whitespace-nowrap outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted data-disabled:pointer-events-none data-disabled:opacity-50">
        <ToggleIcon class="flex">
          <svg
            class="size-4 group-data-pressed:fill-current"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" />
          </svg>
        </ToggleIcon>
        إشارة مرجعية
      </Toggle>
    </div>
  )
}
