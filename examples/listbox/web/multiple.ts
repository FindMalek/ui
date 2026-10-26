import "@ui-sdk/web/listbox"
import { Check, createElement } from "lucide"

const toppings = [
  { value: "basil", label: "Basil" },
  { value: "cheese", label: "Extra cheese" },
  { value: "mushroom", label: "Mushroom" },
  { value: "olive", label: "Olive" },
  { value: "onion", label: "Onion" },
  { value: "pepper", label: "Pepper" },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex w-full max-w-64 flex-col gap-3">
      <ui-listbox multiple default-value="cheese,onion" aria-label="Toppings" class="box-border flex w-full max-w-64 flex-col gap-0.5 rounded-2xl border border-border bg-background p-1 text-sm leading-5 text-foreground outline-none">
        ${toppings
          .map(
            (topping) => `
              <ui-listbox-item value="${topping.value}" class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm leading-5 outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50">
                <ui-listbox-item-indicator keep-mounted class="pointer-events-none flex size-4 shrink-0 items-center justify-center rounded-[5px] border border-transparent bg-input/90 text-transparent data-selected:border-primary data-selected:bg-primary data-selected:text-primary-foreground">${createElement(Check, { class: "pointer-events-none block size-3.5 shrink-0", "aria-hidden": "true" }).outerHTML}</ui-listbox-item-indicator>
                ${topping.label}
              </ui-listbox-item>`,
          )
          .join("")}
      </ui-listbox>
      <output class="m-0 block min-h-10 text-sm leading-5 break-words text-muted-foreground">Value: ["cheese","onion"]</output>
    </div>
  `
  const output = root.querySelector("output")!
  root.querySelector("ui-listbox")!.addEventListener("valuechange", (event) => {
    output.textContent = `Value: ${JSON.stringify(event.detail.value)}`
  })
}

export { mount }
