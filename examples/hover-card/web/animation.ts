import "@ui-sdk/web/hover-card"

const grace = {
  handle: "grace",
  name: "Grace Hopper",
  bio: "Built the first compiler and popularized the word “debugging”.",
}

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex flex-col items-center gap-3">
      <ui-hover-card>
        <ui-hover-card-trigger><a href="https://example.com/people/grace" class="rounded-sm text-sm font-medium text-primary underline-offset-4 outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/30 data-open:underline">@${grace.handle}</a></ui-hover-card-trigger>
        <ui-hover-card-content keep-mounted class="flex w-72 origin-(--transform-origin) flex-col gap-1 rounded-3xl bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale,translate] duration-300 ease-out data-starting-style:-translate-y-1 data-starting-style:scale-90 data-starting-style:opacity-0 data-ending-style:scale-90 data-ending-style:opacity-0 motion-reduce:transition-none">
          <p class="font-medium">${grace.name}</p>
          <p>${grace.bio}</p>
        </ui-hover-card-content>
      </ui-hover-card>
      <output class="text-sm text-muted-foreground">Closed</output>
    </div>
  `
  const card = root.querySelector("ui-hover-card")!
  const status = root.querySelector("output")!
  card.addEventListener("openchange", (event) => {
    status.textContent = event.detail.value ? "Opening" : "Closing"
  })
  card.addEventListener("openchangecomplete", (event) => {
    status.textContent = event.detail.value ? "Open" : "Closed"
  })
}

export { mount }
