import "@ui-sdk/web/listbox"
import { createElement, File } from "lucide"

const files = [
  { value: "readme", label: "README.md" },
  { value: "package", label: "package.json" },
  { value: "tsconfig", label: "tsconfig.json" },
  { value: "index", label: "index.ts" },
  { value: "styles", label: "styles.css" },
  { value: "logo", label: "logo.svg" },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex w-full max-w-64 flex-col gap-3">
      <ui-listbox multiple activation="automatic" default-value="readme" aria-label="Files" class="box-border flex w-full max-w-64 flex-col gap-0.5 rounded-2xl border border-border bg-background p-1 text-sm leading-5 text-foreground outline-none">
        ${files
          .map(
            (file) => `
              <ui-listbox-item value="${file.value}" class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm leading-5 outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50 data-selected:bg-accent data-selected:text-accent-foreground data-selected:font-medium">
                <ui-listbox-item-icon class="flex text-muted-foreground group-data-highlighted:text-accent-foreground group-data-selected:text-accent-foreground">${createElement(File, { class: "pointer-events-none block size-4 shrink-0", "aria-hidden": "true" }).outerHTML}</ui-listbox-item-icon>
                ${file.label}
              </ui-listbox-item>`,
          )
          .join("")}
      </ui-listbox>
      <output class="m-0 block min-h-10 text-sm leading-5 break-words text-muted-foreground">1 selected</output>
    </div>
  `
  const output = root.querySelector("output")!
  root.querySelector("ui-listbox")!.addEventListener("valuechange", (event) => {
    output.textContent = `${(event.detail.value as string[]).length} selected`
  })
}

export { mount }
