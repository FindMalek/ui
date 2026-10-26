import "@ui-sdk/web/tooltip"
import { createElement, File } from "lucide"

const files = [
  "Quarterly report, final revised version for the board.pdf",
  "Notes.txt",
  "Design review recording, October 2nd.mp4",
  "Budget.xlsx",
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ul class="w-64 divide-y divide-border overflow-hidden rounded-2xl border border-border">
      ${files
        .map(
          (file) => `
      <li>
        <ui-tooltip type="label">
          <ui-tooltip-trigger><button class="flex w-full items-center gap-2 px-3 py-2 text-start text-sm outline-none transition-colors hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset motion-reduce:transition-none">${createElement(File, { class: "size-4 shrink-0 text-muted-foreground", "aria-hidden": "true" }).outerHTML}<span class="truncate">${file}</span></button></ui-tooltip-trigger>
          <ui-tooltip-content class="inline-flex w-fit max-w-xs origin-(--transform-origin) items-center gap-1.5 rounded-xl bg-foreground px-3 py-1.5 text-xs text-background transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 data-instant:transition-none motion-reduce:transition-none">${file}</ui-tooltip-content>
        </ui-tooltip>
      </li>`,
        )
        .join("")}
    </ul>
  `
  for (const tooltip of root.querySelectorAll("ui-tooltip"))
    tooltip.addEventListener("openchange", (event) => {
      const name = tooltip.querySelector("span")
      if (event.detail.value && name && name.scrollWidth <= name.clientWidth) event.preventDefault()
    })
}

export { mount }
