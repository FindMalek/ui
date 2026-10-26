import "@ui-sdk/web/radio"

const sizes = [
  { value: "s", label: "S" },
  { value: "m", label: "M" },
  { value: "l", label: "L" },
  { value: "xl", label: "XL" },
]

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex flex-col gap-3">
      <span class="text-sm font-medium" id="size-heading">Size</span>
      <ui-radio-group class="flex gap-2" default-value="m" aria-labelledby="size-heading">
        ${sizes
          .map(
            (size) => `
              <ui-radio class="inline-flex h-8 min-w-10 cursor-default items-center justify-center rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-transparent data-checked:bg-primary data-checked:text-primary-foreground data-checked:hover:bg-primary/80 data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-transparent dark:hover:bg-input/30 dark:data-checked:bg-primary dark:data-checked:hover:bg-primary/80" value="${size.value}">${size.label}</ui-radio>`,
          )
          .join("")}
      </ui-radio-group>
    </div>
  `
}
