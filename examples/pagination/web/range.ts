import { paginationRange } from "@ui-sdk/web"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex flex-col items-center gap-3">
      <div role="group" aria-label="Slides" class="flex h-6 items-center gap-2"></div>
      <output class="text-sm text-muted-foreground"></output>
    </div>
  `
  const dots = root.querySelector('[role="group"]')!

  function show(slide: number) {
    const focused = dots.contains(document.activeElement)
    dots.innerHTML = paginationRange({ page: slide, pageCount: 20, siblings: 2, boundaries: 1 })
      .map((item) =>
        typeof item === "number"
          ? `<button type="button" data-slide="${item}" aria-label="Slide ${item}" ${item === slide ? 'aria-current="true"' : ""} class="size-2.5 rounded-full bg-foreground/20 outline-none transition-[width] hover:bg-foreground/40 focus-visible:ring-3 focus-visible:ring-ring/30 aria-[current=true]:w-6 aria-[current=true]:bg-primary motion-reduce:transition-none"></button>`
          : `<span aria-hidden="true" class="size-1.5 rounded-full bg-foreground/20"></span>`,
      )
      .join("")
    root.querySelector("output")!.textContent = `Slide ${slide} of 20`
    if (focused) {
      dots.querySelector<HTMLElement>(`[data-slide="${slide}"]`)?.focus()
    }
  }

  dots.addEventListener("click", (event) => {
    const dot = (event.target as Element).closest<HTMLElement>("[data-slide]")
    if (dot) {
      show(Number(dot.dataset.slide))
    }
  })
  show(1)
}

export { mount }
