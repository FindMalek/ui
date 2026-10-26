import "@ui-sdk/web/tooltip"
import { Bold, Code, createElement, Italic, Link, Underline } from "lucide"

const tools = [
  { icon: Bold, label: "Bold" },
  { icon: Italic, label: "Italic" },
  { icon: Underline, label: "Underline" },
  { icon: Link, label: "Link" },
  { icon: Code, label: "Code" },
]
const groups = [
  { name: "delay", values: ["0", "600", "1200"], current: "600" },
  { name: "close-delay", label: "closeDelay", values: ["0", "300"], current: "0" },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex flex-col items-center gap-6">
      <div class="grid grid-cols-[auto_auto] items-center gap-x-3 gap-y-2">
        ${groups
          .map(
            ({ name, label, values, current }) => `
        <span class="text-end text-sm text-muted-foreground">${label ?? name}</span>
        <div role="group" aria-label="${label ?? name}" data-attribute="${name}" class="inline-flex h-8 w-fit items-center justify-center rounded-2xl bg-muted p-[3px] text-muted-foreground">
          ${values.map((value) => `<button type="button" value="${value}" aria-pressed="${value === current}" class="inline-flex h-full flex-1 cursor-default items-center justify-center rounded-2xl border border-transparent px-2.5 py-0.5 text-sm font-medium whitespace-nowrap text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:border-border aria-pressed:bg-background aria-pressed:text-foreground motion-reduce:transition-none">${value}</button>`).join("")}
        </div>`,
          )
          .join("")}
      </div>
      <label class="flex items-center gap-2 text-sm text-muted-foreground"><input type="checkbox" checked class="size-4 accent-primary" /> Show tooltips</label>
      <div role="group" aria-label="Formatting" class="flex items-center gap-1 rounded-3xl border border-border p-1">
        ${tools
          .map(
            (tool) => `
        <ui-tooltip delay="600" close-delay="0">
          <ui-tooltip-trigger><button class="inline-flex size-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-aria-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-disabled:opacity-50 motion-reduce:transition-none">${createElement(tool.icon, { class: "size-4", "aria-hidden": "true" }).outerHTML}</button></ui-tooltip-trigger>
          <ui-tooltip-content class="inline-flex w-fit max-w-xs origin-(--transform-origin) items-center gap-1.5 rounded-xl bg-foreground px-3 py-1.5 text-xs text-background transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 data-instant:transition-none motion-reduce:transition-none">${tool.label}</ui-tooltip-content>
        </ui-tooltip>`,
          )
          .join("")}
      </div>
    </div>
  `
  const tooltips = root.querySelectorAll("ui-tooltip")
  for (const group of root.querySelectorAll<HTMLElement>("[data-attribute]"))
    group.addEventListener("click", (event) => {
      const button = (event.target as HTMLElement).closest("button")
      if (!button) return
      for (const tooltip of tooltips) tooltip.setAttribute(group.dataset.attribute!, button.value)
      for (const other of group.querySelectorAll("button"))
        other.setAttribute("aria-pressed", String(other === button))
    })
  const show = root.querySelector<HTMLInputElement>("input")!
  show.addEventListener("change", () => {
    for (const tooltip of tooltips) tooltip.toggleAttribute("disabled", !show.checked)
  })
}

export { mount }
