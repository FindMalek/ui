import "@ui-sdk/web/slider"
import "@ui-sdk/web/field"

const save = () => new Promise((resolve) => setTimeout(resolve, 600))

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-field class="flex w-full max-w-xs flex-col gap-3">
      <ui-slider default-value="50" class="flex flex-col gap-2">
        <div class="flex items-center justify-between text-sm">
          <ui-field-label class="font-medium">Brightness</ui-field-label>
          <ui-slider-value class="text-muted-foreground tabular-nums"></ui-slider-value>
        </div>
        <ui-slider-control class="flex w-full items-center py-2 select-none data-disabled:opacity-50">
          <ui-slider-track class="h-1 w-full rounded-2xl bg-input/90">
            <ui-slider-indicator class="rounded-2xl bg-primary"></ui-slider-indicator>
            <ui-slider-thumb class="block size-4 shrink-0 cursor-default rounded-2xl bg-white shadow-md ring-1 ring-black/10 transition-[color,box-shadow] duration-200 not-data-disabled:hover:ring-4 not-data-disabled:hover:ring-ring/30 has-focus-visible:ring-4 has-focus-visible:ring-ring/30 data-dragging:ring-4 data-dragging:ring-ring/30 motion-reduce:transition-none"></ui-slider-thumb>
          </ui-slider-track>
        </ui-slider-control>
      </ui-slider>
      <output class="flex flex-col text-sm text-muted-foreground">
        <span>Changes: 0</span>
        <span>Drag to change the brightness.</span>
      </output>
    </ui-field>
  `
  const slider = root.querySelector("ui-slider")!
  const [changes, status] = root.querySelectorAll("output span")
  let count = 0
  slider.addEventListener("valuechange", () => (changes.textContent = `Changes: ${++count}`))
  slider.addEventListener("valuecommit", async (event) => {
    const { value, reason } = (event as CustomEvent<{ value: number; reason: string }>).detail
    status.textContent = "Saving…"
    await save()
    status.textContent = `Saved ${value} (${reason}).`
  })
}

export { mount }
