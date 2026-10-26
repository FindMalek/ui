import "@ui-sdk/web/toggle"

const views = [
  { value: "list", label: "قائمة" },
  { value: "grid", label: "شبكة" },
  { value: "cards", label: "بطاقات" },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div dir="rtl">
      <ui-toggle-group default-value="list" aria-label="العرض" class="flex w-fit items-center gap-1">
        ${views
          .map(
            (item) => `
              <ui-toggle value="${item.value}">
                <button class="inline-flex h-8 min-w-8 shrink-0 cursor-default items-center justify-center gap-1 rounded-2xl border border-transparent bg-transparent px-2.5 text-sm font-medium whitespace-nowrap outline-none transition-colors not-data-disabled:hover:bg-muted not-data-disabled:hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted disabled:pointer-events-none data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none">${item.label}</button>
              </ui-toggle>
            `,
          )
          .join("")}
      </ui-toggle-group>
    </div>
  `
}

export { mount }
