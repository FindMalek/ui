import "@ui-sdk/web/number-input"
import { createElement, MoveHorizontal } from "lucide"

let count = 0

export function mount(root: HTMLElement) {
  const id = `number-input-toolbar-${++count}`
  root.innerHTML = `
    <div role="toolbar" aria-label="Text" class="flex items-center gap-1 rounded-2xl border border-border bg-background p-1 text-foreground">
      <ui-number-input-scrub-area for="${id}" title="Drag to change the letter spacing" class="flex size-8 cursor-ew-resize items-center justify-center rounded-xl text-muted-foreground select-none hover:bg-muted hover:text-foreground data-scrubbing:bg-muted data-scrubbing:text-foreground">
        ${createElement(MoveHorizontal, { class: "size-4 shrink-0", "aria-hidden": "true" }).outerHTML}
        <ui-number-input-scrub-area-cursor class="z-50 -mt-2.5 -ml-2.5 text-foreground drop-shadow-sm">
          ${createElement(MoveHorizontal, { class: "size-5", "aria-hidden": "true" }).outerHTML}
        </ui-number-input-scrub-area-cursor>
      </ui-number-input-scrub-area>
      <ui-number-input id="${id}" default-value="0" min="-5" max="20" step="0.1">
        <ui-number-input-group class="flex h-8 w-20 items-center gap-0.5 rounded-2xl border border-transparent bg-input/50 px-1 transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30 motion-reduce:transition-none">
          <ui-number-input-control>
            <input aria-label="Letter spacing" class="h-full w-full min-w-0 border-0 bg-transparent px-1 py-0 text-center text-base text-foreground tabular-nums outline-none data-disabled:opacity-50 md:text-sm" />
          </ui-number-input-control>
        </ui-number-input-group>
      </ui-number-input>
    </div>
  `
}
