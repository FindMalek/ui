import "@ui-sdk/web/hover-card"

const sides = ["left", "top", "bottom", "right"]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex flex-wrap justify-center gap-6">
      ${sides
        .map(
          (side) => `
      <ui-hover-card>
        <ui-hover-card-trigger><a href="https://example.com/${side}" class="rounded-sm text-sm font-medium text-primary capitalize underline-offset-4 outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/30 data-open:underline">${side}</a></ui-hover-card-trigger>
        <ui-hover-card-content side="${side}" class="flex w-56 origin-(--transform-origin) flex-col gap-1 rounded-3xl bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none">
          <p class="font-medium capitalize">${side}</p>
          <p class="text-muted-foreground">The card opens on this side of the link.</p>
        </ui-hover-card-content>
      </ui-hover-card>`,
        )
        .join("")}
    </div>
  `
}

export { mount }
