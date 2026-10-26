import "@ui-sdk/web/combobox"
import { Check, createElement } from "lucide"

const frameworks = [
  { value: "next", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt", label: "Nuxt" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
  { value: "solidstart", label: "SolidStart" },
  { value: "qwik", label: "Qwik City" },
]

const sides = ["top", "right", "bottom", "left"]
const aligns = ["start", "center", "end"]

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex flex-col items-center gap-4">
      <div class="flex flex-col items-center gap-2">
        <div role="group" aria-label="Side" class="inline-flex h-8 w-fit items-center justify-center rounded-2xl bg-muted p-[3px] text-muted-foreground">
          ${sides
            .map(
              (value) => `
                <button type="button" data-side="${value}" aria-pressed="${value === "bottom"}" class="inline-flex h-full flex-1 items-center justify-center rounded-2xl border border-transparent px-2.5 py-0.5 text-sm font-medium whitespace-nowrap text-foreground/60 outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:bg-background aria-pressed:text-foreground aria-pressed:shadow-sm dark:text-muted-foreground dark:aria-pressed:border-input dark:aria-pressed:bg-input/30 dark:aria-pressed:text-foreground">
                  ${value}
                </button>
              `,
            )
            .join("")}
        </div>
        <div role="group" aria-label="Align" class="inline-flex h-8 w-fit items-center justify-center rounded-2xl bg-muted p-[3px] text-muted-foreground">
          ${aligns
            .map(
              (value) => `
                <button type="button" data-align="${value}" aria-pressed="${value === "start"}" class="inline-flex h-full flex-1 items-center justify-center rounded-2xl border border-transparent px-2.5 py-0.5 text-sm font-medium whitespace-nowrap text-foreground/60 outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:bg-background aria-pressed:text-foreground aria-pressed:shadow-sm dark:text-muted-foreground dark:aria-pressed:border-input dark:aria-pressed:bg-input/30 dark:aria-pressed:text-foreground">
                  ${value}
                </button>
              `,
            )
            .join("")}
        </div>
        <label class="flex items-center gap-2 text-sm text-muted-foreground">
          <input type="checkbox" class="size-4 accent-primary" />
          Anchor to the box
        </label>
      </div>
      <div id="combobox-positioning-box" class="flex items-center justify-center rounded-3xl border border-dashed border-border p-6">
        <ui-combobox>
          <div class="w-40">
            <ui-combobox-input>
              <input aria-label="Framework" placeholder="Framework" class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 md:text-sm" />
            </ui-combobox-input>
          </div>
          <ui-combobox-content side="bottom" align="start" side-offset="10" align-offset="0" collision-padding="16" class="w-44 min-w-36 origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10">
            <ui-combobox-arrow class="size-2.5 rotate-45 border-foreground/5 bg-popover data-[side=bottom]:-top-[5px] data-[side=bottom]:border-t data-[side=bottom]:border-l data-[side=left]:-right-[5px] data-[side=left]:border-t data-[side=left]:border-r data-[side=right]:-left-[5px] data-[side=right]:border-b data-[side=right]:border-l data-[side=top]:-bottom-[5px] data-[side=top]:border-r data-[side=top]:border-b dark:border-foreground/10"></ui-combobox-arrow>
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
      </div>
    </div>
  `
  const content = root.querySelector("ui-combobox-content")!
  for (const name of ["side", "align"]) {
    const buttons = root.querySelectorAll<HTMLButtonElement>(`[data-${name}]`)
    for (const button of buttons)
      button.addEventListener("click", () => {
        content.setAttribute(name, button.getAttribute(`data-${name}`)!)
        for (const other of buttons) other.setAttribute("aria-pressed", String(other === button))
      })
  }
  const anchored = root.querySelector<HTMLInputElement>('input[type="checkbox"]')!
  anchored.addEventListener("change", () => {
    if (anchored.checked) content.setAttribute("anchor", "#combobox-positioning-box")
    else content.removeAttribute("anchor")
  })
}
