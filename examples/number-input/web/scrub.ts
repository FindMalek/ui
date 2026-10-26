import "@ui-sdk/web/number-input"
import "@ui-sdk/web/field"
import { createElement, MoveHorizontal, MoveVertical } from "lucide"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex flex-wrap gap-6">
      <ui-field class="flex items-center gap-2">
        <ui-number-input default-value="320" min="0" class="flex items-center gap-2">
          <ui-number-input-scrub-area orientation="horizontal" pixels-per-step="2" class="cursor-ew-resize text-muted-foreground select-none data-scrubbing:text-foreground">
            <ui-field-label class="cursor-ew-resize text-sm leading-none font-medium">Width</ui-field-label>
            <ui-number-input-scrub-area-cursor class="z-50 -mt-2.5 -ml-2.5 text-foreground drop-shadow-sm">
              ${createElement(MoveHorizontal, { class: "size-5", "aria-hidden": "true" }).outerHTML}
            </ui-number-input-scrub-area-cursor>
          </ui-number-input-scrub-area>
          <ui-number-input-group class="flex h-8 w-20 items-center gap-0.5 rounded-2xl border border-transparent bg-input/50 px-1 transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30 motion-reduce:transition-none data-scrubbing:border-ring data-scrubbing:ring-3 data-scrubbing:ring-ring/30">
            <ui-number-input-control>
              <input class="h-full w-full min-w-0 border-0 bg-transparent px-1 py-0 text-center text-base text-foreground tabular-nums outline-none data-disabled:opacity-50 md:text-sm" />
            </ui-number-input-control>
          </ui-number-input-group>
        </ui-number-input>
      </ui-field>
      <ui-field class="flex items-center gap-2">
        <ui-number-input default-value="240" min="0" class="flex items-center gap-2">
          <ui-number-input-scrub-area orientation="vertical" pixels-per-step="2" class="cursor-ns-resize text-muted-foreground select-none data-scrubbing:text-foreground">
            <ui-field-label class="cursor-ns-resize text-sm leading-none font-medium">Height</ui-field-label>
            <ui-number-input-scrub-area-cursor class="z-50 -mt-2.5 -ml-2.5 text-foreground drop-shadow-sm">
              ${createElement(MoveVertical, { class: "size-5", "aria-hidden": "true" }).outerHTML}
            </ui-number-input-scrub-area-cursor>
          </ui-number-input-scrub-area>
          <ui-number-input-group class="flex h-8 w-20 items-center gap-0.5 rounded-2xl border border-transparent bg-input/50 px-1 transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30 motion-reduce:transition-none data-scrubbing:border-ring data-scrubbing:ring-3 data-scrubbing:ring-ring/30">
            <ui-number-input-control>
              <input class="h-full w-full min-w-0 border-0 bg-transparent px-1 py-0 text-center text-base text-foreground tabular-nums outline-none data-disabled:opacity-50 md:text-sm" />
            </ui-number-input-control>
          </ui-number-input-group>
        </ui-number-input>
      </ui-field>
    </div>
  `
}
