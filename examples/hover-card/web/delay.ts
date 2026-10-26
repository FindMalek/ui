import "@ui-sdk/web/hover-card"

const timings = [
  { label: "Instant", delay: 0, closeDelay: 0 },
  { label: "Default", delay: 600, closeDelay: 300 },
  { label: "Patient", delay: 1200, closeDelay: 600 },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex flex-col items-center gap-6">
      <div class="flex gap-6">
        ${timings
          .map(
            (timing) => `
        <ui-hover-card delay="${timing.delay}" close-delay="${timing.closeDelay}">
          <ui-hover-card-trigger><a href="https://example.com/${timing.label.toLowerCase()}" class="rounded-sm text-sm font-medium text-primary underline-offset-4 outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/30 data-open:underline">${timing.label}</a></ui-hover-card-trigger>
          <ui-hover-card-content class="flex w-56 origin-(--transform-origin) flex-col gap-1 rounded-3xl bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none">
            <p class="font-medium">${timing.label}</p>
            <p class="text-muted-foreground">Opens after ${timing.delay}ms and closes ${timing.closeDelay}ms after the pointer leaves.</p>
          </ui-hover-card-content>
        </ui-hover-card>`,
          )
          .join("")}
      </div>
      <label class="flex items-center gap-2 text-sm text-muted-foreground"><input type="checkbox" checked class="size-4 accent-primary" /> Show cards</label>
    </div>
  `
  const show = root.querySelector("input")!
  show.addEventListener("change", () => {
    for (const card of root.querySelectorAll("ui-hover-card")) card.toggleAttribute("disabled", !show.checked)
  })
}

export { mount }
