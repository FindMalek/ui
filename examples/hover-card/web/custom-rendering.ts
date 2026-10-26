import "@ui-sdk/web/hover-card"

const ada = {
  handle: "ada",
  name: "Ada Lovelace",
  initials: "AL",
  bio: "Wrote the first published program, for the Analytical Engine.",
}

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-hover-card>
      <ui-hover-card-trigger>
        <a href="https://example.com/people/ada" class="group inline-flex items-center gap-2 rounded-full pe-3 text-sm font-medium outline-none focus-visible:ring-3 focus-visible:ring-ring/30">
          <span aria-hidden="true" class="flex size-8 items-center justify-center rounded-full bg-muted text-xs text-muted-foreground group-data-open:bg-primary group-data-open:text-primary-foreground">${ada.initials}</span>
          ${ada.name}
        </a>
      </ui-hover-card-trigger>
      <ui-hover-card-content class="flex w-72 origin-(--transform-origin) flex-col gap-1 rounded-3xl bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:pointer-events-none data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none">
        <p class="font-medium">@${ada.handle}</p>
        <p>${ada.bio}</p>
      </ui-hover-card-content>
    </ui-hover-card>
  `
}

export { mount }
