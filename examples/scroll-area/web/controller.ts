import "@ui-sdk/web/scroll-area"

const tags = Array.from({ length: 50 }, (_, index) => `v1.2.0-beta.${50 - index}`)

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex w-full max-w-sm flex-col items-center gap-3">
      <ui-scroll-area class="h-60 w-full rounded-2xl border border-border">
        <ui-scroll-area-viewport class="size-full rounded-[inherit] outline-none transition-[color,box-shadow] focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none">
          <ui-scroll-area-content class="p-4 text-sm">
            ${tags.map((tag) => `<div class="py-1.5">${tag}</div>`).join("")}
          </ui-scroll-area-content>
        </ui-scroll-area-viewport>
        <ui-scroll-area-scrollbar class="flex w-2.5 border-s border-s-transparent p-px opacity-0 transition-opacity duration-150 data-visible:opacity-100 motion-reduce:transition-none">
          <ui-scroll-area-thumb class="relative flex-1 rounded-full bg-border"></ui-scroll-area-thumb>
        </ui-scroll-area-scrollbar>
      </ui-scroll-area>
      <div class="flex flex-col gap-2">
        <button type="button" data-start class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors enabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 enabled:active:translate-y-px disabled:opacity-50 motion-reduce:transition-none motion-reduce:transform-none">Back to top</button>
        <button type="button" data-end class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors enabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 enabled:active:translate-y-px disabled:opacity-50 motion-reduce:transition-none motion-reduce:transform-none">Jump to the end</button>
        <output class="text-sm text-muted-foreground">At the start</output>
      </div>
    </div>
  `
  const area = root.querySelector("ui-scroll-area")!
  const output = root.querySelector("output")!
  root
    .querySelector("[data-start]")!
    .addEventListener("click", () => area.api.scrollToStart({ behavior: "smooth" }))
  root
    .querySelector("[data-end]")!
    .addEventListener("click", () => area.api.scrollToEnd({ behavior: "instant" }))
  root.querySelector("ui-scroll-area-viewport")!.addEventListener("scroll", () => {
    output.textContent = area.api.isAtEnd()
      ? "At the end"
      : area.api.isAtStart()
        ? "At the start"
        : "In between"
  })
}

export { mount }
