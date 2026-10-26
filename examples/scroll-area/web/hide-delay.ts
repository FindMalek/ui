import "@ui-sdk/web/scroll-area"

const tags = Array.from({ length: 20 }, (_, index) => `v1.2.0-beta.${50 - index}`)

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex gap-4">
      ${[0, 2000]
        .map(
          (delay) => `
            <div class="flex flex-col gap-2">
              <code class="text-xs text-muted-foreground">scroll-hide-delay="${delay}"</code>
              <ui-scroll-area type="scroll" scroll-hide-delay="${delay}" class="h-40 w-40 rounded-2xl border border-border">
                <ui-scroll-area-viewport class="size-full rounded-[inherit] outline-none transition-[color,box-shadow] focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none">
                  <ui-scroll-area-content class="px-3 py-2 text-sm">
                    ${tags.map((tag) => `<div class="py-1">${tag}</div>`).join("")}
                  </ui-scroll-area-content>
                </ui-scroll-area-viewport>
                <ui-scroll-area-scrollbar class="flex w-2.5 border-s border-s-transparent p-px opacity-0 transition-opacity duration-300 data-visible:opacity-100 data-visible:duration-75 motion-reduce:transition-none">
                  <ui-scroll-area-thumb class="relative flex-1 rounded-full bg-border"></ui-scroll-area-thumb>
                </ui-scroll-area-scrollbar>
              </ui-scroll-area>
            </div>`,
        )
        .join("")}
    </div>
  `
}

export { mount }
