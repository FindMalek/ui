import type { SliderController } from "@ui-sdk/core/slider"
import "@ui-sdk/web/slider"
import "@ui-sdk/web/field"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex w-full max-w-xs flex-col gap-3">
      <ui-field>
        <ui-slider default-value="40" class="flex flex-col gap-2">
          <div class="flex items-center justify-between text-sm">
            <ui-field-label class="font-medium">Volume</ui-field-label>
            <ui-slider-value class="text-muted-foreground tabular-nums"></ui-slider-value>
          </div>
          <ui-slider-control class="flex w-full items-center py-2 select-none data-disabled:opacity-50">
            <ui-slider-track class="h-1 w-full rounded-2xl bg-input/90">
              <ui-slider-indicator class="rounded-2xl bg-primary"></ui-slider-indicator>
              <ui-slider-thumb class="block size-4 shrink-0 cursor-default rounded-2xl bg-white shadow-md ring-1 ring-black/10 transition-[color,box-shadow] duration-200 not-data-disabled:hover:ring-4 not-data-disabled:hover:ring-ring/30 has-focus-visible:ring-4 has-focus-visible:ring-ring/30 data-dragging:ring-4 data-dragging:ring-ring/30 motion-reduce:transition-none"></ui-slider-thumb>
            </ui-slider-track>
          </ui-slider-control>
        </ui-slider>
      </ui-field>
      <div class="flex flex-wrap gap-2">
        <button type="button" data-action="mute" class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none">Mute</button>
        <button type="button" data-action="louder" class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none">Louder</button>
        <button type="button" data-action="read" class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none">Read</button>
        <button type="button" data-action="focus" class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none">Focus</button>
      </div>
      <output class="text-sm text-muted-foreground" hidden></output>
    </div>
  `
  const slider = root.querySelector("ui-slider") as HTMLElement & { api: SliderController<number> }
  const volume = slider.api
  const reading = root.querySelector("output")!
  const actions: Record<string, () => void> = {
    mute: () => volume.setValue(0),
    louder: () => volume.setValue(volume.getValue() + 10),
    read: () => {
      reading.textContent = `Volume is ${volume.getValue()}.`
      reading.hidden = false
    },
    focus: () => volume.focus(),
  }
  root.querySelectorAll<HTMLButtonElement>("[data-action]").forEach((button) => {
    button.addEventListener("click", () => actions[button.dataset.action!]())
  })
}

export { mount }
