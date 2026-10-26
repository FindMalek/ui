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
      <div class="pointer-events-none absolute inset-x-0 top-0 h-[min(2rem,var(--scroll-area-overflow-y-start))] [--scroll-area-overflow-y-start:inherit] rounded-t-2xl bg-linear-to-b from-background to-transparent"></div>
      <div class="pointer-events-none absolute inset-x-0 bottom-0 h-[min(2rem,var(--scroll-area-overflow-y-end))] [--scroll-area-overflow-y-end:inherit] rounded-b-2xl bg-linear-to-t from-background to-transparent"></div>
      <ui-scroll-area-scrollbar class="flex w-2.5 border-s border-s-transparent p-px opacity-0 transition-opacity duration-150 data-visible:opacity-100 motion-reduce:transition-none">
        <ui-scroll-area-thumb class="relative flex-1 rounded-full bg-border"></ui-scroll-area-thumb>
      </ui-scroll-area-scrollbar>
    </ui-scroll-area>
  `
}

export { mount }
