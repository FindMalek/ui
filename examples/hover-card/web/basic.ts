import "@ui-sdk/web/hover-card"

const ada = {
  handle: "ada",
  initials: "AL",
  bio: "Wrote the first published program, for the Analytical Engine.",
  joined: "Joined December 1842",
}

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-hover-card>
      <ui-hover-card-trigger><a href="https://example.com/people/ada" class="rounded-sm text-sm font-medium text-primary underline-offset-4 outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/30 data-open:underline">@${ada.handle}</a></ui-hover-card-trigger>
      <ui-hover-card-content class="flex w-72 origin-(--transform-origin) flex-col gap-4 rounded-3xl bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none">
        <div class="flex gap-4">
          <div aria-hidden="true" class="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted text-sm text-muted-foreground">${ada.initials}</div>
          <div class="flex flex-col gap-1">
            <p class="font-medium">@${ada.handle}</p>
            <p>${ada.bio}</p>
            <p class="text-xs text-muted-foreground">${ada.joined}</p>
          </div>
        </div>
      </ui-hover-card-content>
    </ui-hover-card>
  `
}

export { mount }
