import {
  Menu,
  MenuContent,
  MenuGroupLabel,
  MenuRadioGroup,
  MenuRadioItem,
  MenuTrigger,
} from "@ui-sdk/solid/menu"
import { dynamic } from "@solidjs/web"
import { createSignal, For } from "solid-js"

const icon = (markup: string) => (props: { class?: string }) => (
  <svg
    class={props.class}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    innerHTML={markup}
  />
)
const CreditCard = icon(
  '<rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" /><path d="M6 14h2" />',
)
const Landmark = icon(
  '<path d="M10 18v-7" /><path d="M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z" /><path d="M14 18v-7" /><path d="M18 18v-7" /><path d="M3 22h18" /><path d="M6 18v-7" />',
)
const Wallet = icon(
  '<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" /><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />',
)

const methods = [
  { value: "card", label: "Credit card", icon: CreditCard },
  { value: "wallet", label: "Wallet", icon: Wallet },
  { value: "bank", label: "Bank transfer", icon: Landmark, disabled: true },
]

export function Example() {
  const [method, setMethod] = createSignal("card")
  const current = () => methods.find((option) => option.value === method())!
  const CurrentIcon = dynamic(() => current().icon)

  return (
    <>
      <Menu>
        <MenuTrigger class="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-transparent dark:hover:bg-input/30">
          <CurrentIcon class="size-4" />
          Payment method
        </MenuTrigger>
        <MenuContent class="min-w-48 origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10">
          <MenuRadioGroup value={method()} onValueChange={setMethod}>
            <MenuGroupLabel class="px-2 py-1 text-xs text-muted-foreground">Pay with</MenuGroupLabel>
            <For each={methods}>
              {(option) => (
                <MenuRadioItem
                  class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
                  value={option.value}
                  disabled={option.disabled}
                >
                  <option.icon class="size-4 text-muted-foreground group-data-checked:text-current" />
                  {option.label}
                  <svg
                    class="invisible ms-auto size-4 group-data-checked:visible"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </MenuRadioItem>
              )}
            </For>
          </MenuRadioGroup>
        </MenuContent>
      </Menu>
      <output class="mt-3 text-sm text-muted-foreground">Paying with {current().label.toLowerCase()}</output>
    </>
  )
}
