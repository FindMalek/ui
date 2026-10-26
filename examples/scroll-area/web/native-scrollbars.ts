import "@ui-sdk/web/scroll-area"

const tags = Array.from({ length: 50 }, (_, index) => `v1.2.0-beta.${50 - index}`)

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-scroll-area class="h-72 w-48 rounded-2xl border border-border">
      <ui-scroll-area-viewport class="size-full rounded-[inherit] outline-none transition-[color,box-shadow] focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none">
        <ui-scroll-area-content class="p-4 text-sm">
          ${tags.map((tag) => `<div class="py-1.5">${tag}</div>`).join("")}
        </ui-scroll-area-content>
      </ui-scroll-area-viewport>
    </ui-scroll-area>
  `
}

export { mount }
