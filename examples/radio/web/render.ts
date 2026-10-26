import "@ui-sdk/web/radio"
import { Bell, Check, createElement, Mail, Moon } from "lucide"

const options = [
  { value: "all", label: "Everything", description: "Every message and update.", icon: Bell },
  { value: "mentions", label: "Mentions", description: "Only when someone mentions you.", icon: Mail },
  { value: "none", label: "Nothing", description: "Turn notifications off.", icon: Moon },
]

function mount(root: HTMLElement) {
  const id = crypto.randomUUID()
  root.innerHTML = `
    <ui-radio-group class="grid w-full max-w-sm gap-2" aria-label="Notify me about" default-value="mentions">
      ${options
        .map(
          (option) => `
            <ui-radio
              class="group flex w-full items-center gap-3 rounded-2xl border border-border px-4 py-3 text-start text-sm cursor-default outline-none transition-[color,background-color,box-shadow] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 hover:bg-input/40 data-checked:bg-input/30 motion-reduce:transition-none"
              value="${option.value}"
              aria-labelledby="${id}-notify-${option.value}-label"
              aria-describedby="${id}-notify-${option.value}-description"
            >
              ${createElement(option.icon, { class: "size-4 shrink-0 text-muted-foreground", "aria-hidden": "true" }).outerHTML}
              <span class="flex flex-1 flex-col">
                <span class="font-medium" id="${id}-notify-${option.value}-label">${option.label}</span>
                <span class="text-muted-foreground" id="${id}-notify-${option.value}-description">${option.description}</span>
              </span>
              ${createElement(Check, { class: "hidden size-4 shrink-0 group-data-checked:block", "aria-hidden": "true" }).outerHTML}
            </ui-radio>`,
        )
        .join("")}
    </ui-radio-group>
  `
}

export { mount }
