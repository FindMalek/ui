import "@ui-sdk/web/listbox"
import { Check, createElement } from "lucide"

const produce = [
  {
    label: "Fruits",
    items: [
      { value: "apple", label: "Apple" },
      { value: "banana", label: "Banana" },
      { value: "orange", label: "Orange" },
    ],
  },
  {
    label: "Vegetables",
    items: [
      { value: "carrot", label: "Carrot" },
      { value: "broccoli", label: "Broccoli" },
      { value: "spinach", label: "Spinach" },
    ],
  },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-listbox multiple default-value="banana" aria-label="Produce" class="box-border flex w-full max-w-64 flex-col gap-0.5 rounded-2xl border border-border bg-background p-1 text-sm leading-5 text-foreground outline-none">
      ${produce
        .map(
          (group, index) => `
            ${index > 0 ? `<ui-listbox-separator class="-mx-1 my-1 h-px bg-border/50"></ui-listbox-separator>` : ""}
            <ui-listbox-group class="flex flex-col gap-0.5">
              <ui-listbox-group-label class="px-2 py-1.5 text-xs leading-4 font-medium text-muted-foreground">${group.label}</ui-listbox-group-label>
              ${group.items
                .map(
                  (item) => `
                    <ui-listbox-item value="${item.value}" class="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm leading-5 outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50">
                      ${item.label}
                      <ui-listbox-item-indicator class="pointer-events-none absolute end-2 flex size-4 items-center justify-center">${createElement(Check, { class: "pointer-events-none block size-4 shrink-0", "aria-hidden": "true" }).outerHTML}</ui-listbox-item-indicator>
                    </ui-listbox-item>`,
                )
                .join("")}
            </ui-listbox-group>`,
        )
        .join("")}
    </ui-listbox>
  `
}

export { mount }
