import "@ui-sdk/web/combobox"
import { Check, ChevronDown, createElement } from "lucide"

const frameworks = [
  { value: "next", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt", label: "Nuxt" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
  { value: "solidstart", label: "SolidStart" },
  { value: "qwik", label: "Qwik City" },
]

const modes = [
  { value: "false", label: "Non-modal" },
  { value: "pointer", label: "Pointer" },
  { value: "true", label: "Modal" },
]

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex w-64 flex-col gap-4">
      <div role="group" aria-label="Modal" class="inline-flex h-8 w-fit items-center justify-center rounded-2xl bg-muted p-[3px] text-muted-foreground">
        ${modes
          .map(
            (mode) => `
              <button type="button" data-mode="${mode.value}" aria-pressed="${mode.value === "false"}" class="inline-flex h-full flex-1 items-center justify-center rounded-2xl border border-transparent px-2.5 py-0.5 text-sm font-medium whitespace-nowrap text-foreground/60 outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:bg-background aria-pressed:text-foreground aria-pressed:shadow-sm dark:text-muted-foreground dark:aria-pressed:border-input dark:aria-pressed:bg-input/30 dark:aria-pressed:text-foreground">
                ${mode.label}
              </button>
            `,
          )
          .join("")}
      </div>
      <ui-combobox modal="false">
        <div class="flex flex-col gap-2">
          <ui-combobox-label class="text-sm leading-none font-medium">Framework</ui-combobox-label>
          <div class="relative">
            <ui-combobox-input>
              <input placeholder="Select a framework" class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 py-1 ps-2.5 pe-8 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 md:text-sm" />
            </ui-combobox-input>
            <ui-combobox-trigger>
              <button aria-label="Show frameworks" class="group absolute end-1 top-1/2 inline-flex size-6 -translate-y-1/2 items-center justify-center rounded-xl text-muted-foreground outline-none transition-[color,background-color] hover:bg-muted hover:text-foreground data-open:bg-muted data-disabled:pointer-events-none dark:hover:bg-muted/50">${createElement(ChevronDown, { class: "size-4 transition-transform group-data-open:rotate-180", "aria-hidden": "true" }).outerHTML}</button>
            </ui-combobox-trigger>
          </div>
        </div>
        <ui-combobox-content class="max-h-[min(18rem,var(--available-height))] w-(--anchor-width) min-w-36 origin-(--transform-origin) scroll-py-1 overflow-y-auto rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10">
          <ui-combobox-empty class="py-2 text-center text-sm text-muted-foreground empty:hidden">No frameworks found.</ui-combobox-empty>
          <ui-combobox-list>
            ${frameworks
              .map(
                (framework) => `
                  <ui-combobox-item value="${framework.value}" label="${framework.label}" class="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm ring-ring/30 outline-none select-none ring-inset data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 in-data-[modality=keyboard]:data-highlighted:ring-2">
                    ${framework.label}
                    <ui-combobox-item-indicator class="pointer-events-none absolute end-2 flex size-4 items-center justify-center">${createElement(Check, { class: "size-4", "aria-hidden": "true" }).outerHTML}</ui-combobox-item-indicator>
                  </ui-combobox-item>
                `,
              )
              .join("")}
          </ui-combobox-list>
        </ui-combobox-content>
      </ui-combobox>
      <button type="button" data-press class="self-start inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-transparent dark:hover:bg-input/30">Pressed 0 times</button>
    </div>
  `
  const combobox = root.querySelector("ui-combobox")!
  const buttons = root.querySelectorAll<HTMLButtonElement>("[data-mode]")
  for (const button of buttons)
    button.addEventListener("click", () => {
      combobox.setAttribute("modal", button.dataset.mode!)
      for (const other of buttons) other.setAttribute("aria-pressed", String(other === button))
    })
  let presses = 0
  const press = root.querySelector<HTMLButtonElement>("[data-press]")!
  press.addEventListener("click", () => (press.textContent = `Pressed ${++presses} times`))
}
