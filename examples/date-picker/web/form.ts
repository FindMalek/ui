import "@ui-sdk/web/date-picker"
import { Calendar, ChevronLeft, ChevronRight, createElement } from "lucide"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <form class="flex max-w-full flex-col items-start gap-2">
      <ui-date-picker name="due" required class="flex max-w-full flex-col gap-2 text-sm leading-5 text-foreground data-disabled:opacity-50">
        <div class="flex h-8 w-44 max-w-full items-center gap-0.5 rounded-2xl border border-transparent bg-input/50 ps-2.5 pe-1 transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30 has-[input[aria-invalid]]:border-foreground/50 has-[input[aria-invalid]]:ring-3 has-[input[aria-invalid]]:ring-foreground/10">
          <ui-date-picker-input><input aria-label="Due date" class="m-0 h-full w-full min-w-0 border-0 bg-transparent p-0 text-base leading-6 text-inherit tabular-nums outline-none placeholder:text-muted-foreground md:text-sm md:leading-5" /></ui-date-picker-input>
          <ui-date-picker-trigger>
            <button class="inline-flex size-6 cursor-default shrink-0 items-center justify-center rounded-xl border border-transparent bg-transparent p-0 text-muted-foreground outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50">
              ${createElement(Calendar, { class: "pointer-events-none block size-4 shrink-0", "aria-hidden": "true" }).outerHTML}
            </button>
          </ui-date-picker-trigger>
        </div>
        <ui-date-picker-hint class="m-0 min-h-5 text-sm leading-5 text-muted-foreground"></ui-date-picker-hint>
        <ui-date-picker-content class="flex min-h-[min(18rem,var(--available-height))] max-h-(--available-height) max-w-(--available-width) origin-(--transform-origin) flex-col overflow-y-auto rounded-3xl border-0 bg-popover p-3 text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0">
          <div class="flex h-10 shrink-0 items-center justify-between gap-2 pb-2">
            <ui-calendar-previous>
              <button class="inline-flex size-8 cursor-default shrink-0 items-center justify-center rounded-2xl border border-transparent bg-transparent p-0 outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50">
                ${createElement(ChevronLeft, { class: "pointer-events-none block size-4 shrink-0 rtl:rotate-180", "aria-hidden": "true" }).outerHTML}
              </button>
            </ui-calendar-previous>
            <ui-calendar-heading class="m-0 text-sm leading-5 font-medium"></ui-calendar-heading>
            <ui-calendar-next>
              <button class="inline-flex size-8 cursor-default shrink-0 items-center justify-center rounded-2xl border border-transparent bg-transparent p-0 outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50">
                ${createElement(ChevronRight, { class: "pointer-events-none block size-4 shrink-0 rtl:rotate-180", "aria-hidden": "true" }).outerHTML}
              </button>
            </ui-calendar-next>
          </div>
          <ui-calendar-grid class="border-collapse">
            <ui-calendar-weekdays>
              <template><ui-calendar-weekday class="size-8 p-0 text-center align-middle text-[0.8rem] leading-5 font-normal text-muted-foreground"></ui-calendar-weekday></template>
            </ui-calendar-weekdays>
            <ui-calendar-weeks>
              <template><ui-calendar-day class="size-8 cursor-default rounded-2xl p-0 text-center align-middle text-sm leading-5 outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:relative focus-visible:z-10 focus-visible:ring-3 focus-visible:ring-ring/30 data-today:bg-muted data-today:font-medium data-outside:text-muted-foreground data-disabled:text-muted-foreground data-disabled:opacity-50 data-unavailable:line-through data-selected:bg-primary data-selected:text-primary-foreground data-selected:hover:bg-primary/90"></ui-calendar-day></template>
            </ui-calendar-weeks>
          </ui-calendar-grid>
        </ui-date-picker-content>
      </ui-date-picker>
      <button type="submit" class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm leading-5 font-medium whitespace-nowrap text-foreground transition-all select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 hover:bg-muted hover:text-foreground active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50">Submit</button>
      <p class="m-0 min-h-5 text-sm leading-5 text-muted-foreground">Submitted: nothing yet</p>
    </form>
  `
  const form = root.querySelector("form")!
  form.addEventListener("submit", (event) => {
    event.preventDefault()
    root.querySelector("p")!.textContent =
      `Submitted: ${(new FormData(form).get("due") as string) || "nothing yet"}`
  })
}

export { mount }
