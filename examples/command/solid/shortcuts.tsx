import {
  Command,
  CommandGroup,
  CommandGroupLabel,
  CommandInput,
  CommandItem,
  CommandItemIcon,
  CommandList,
  CommandShortcut,
} from "@ui-sdk/solid/command"
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
const User = icon('<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />')
const CreditCard = icon(
  '<rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" /><path d="M6 14h2" />',
)
const Settings = icon(
  '<path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" /><circle cx="12" cy="12" r="3" />',
)

const settings = [
  { value: "profile", label: "Profile", icon: User, shortcut: "mod+p" },
  { value: "billing", label: "Billing", icon: CreditCard, shortcut: "mod+b" },
  { value: "settings", label: "Settings", icon: Settings, shortcut: "mod+s" },
]

function Example() {
  const [ran, setRan] = createSignal("")
  return (
    <div class="flex w-full max-w-sm flex-col gap-3">
      <Command
        onAction={(value) => {
          setRan(value)
        }}
        class="flex h-80 w-full max-w-sm flex-col overflow-hidden rounded-3xl bg-popover p-1 text-popover-foreground ring-1 ring-foreground/5"
      >
        <div class="shrink-0 p-1 pb-0">
          <CommandInput
            aria-label="Search settings"
            placeholder="Search settings..."
            class="m-0 box-border h-8 w-full min-w-0 shrink-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base leading-6 text-inherit transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm md:leading-5"
          />
        </div>
        <CommandList class="min-h-0 flex-1 scroll-py-1 overflow-x-hidden overflow-y-auto outline-none">
          <CommandGroup class="overflow-hidden p-1 text-foreground">
            <CommandGroupLabel class="px-2 py-1.5 text-xs leading-4 font-medium text-muted-foreground">
              Settings
            </CommandGroupLabel>
            <For each={settings}>
              {(item) => (
                <CommandItem
                  value={item.value}
                  shortcut={item.shortcut}
                  class="group relative flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm leading-5 outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
                >
                  <CommandItemIcon class="flex shrink-0 text-muted-foreground group-data-highlighted:text-foreground">
                    <item.icon class="pointer-events-none block size-4 shrink-0" />
                  </CommandItemIcon>
                  <span>{item.label}</span>
                  <CommandShortcut class="ms-auto shrink-0 text-xs leading-4 tracking-widest text-muted-foreground group-data-highlighted:text-foreground">
                    {(state) => state.text}
                  </CommandShortcut>
                </CommandItem>
              )}
            </For>
          </CommandGroup>
        </CommandList>
      </Command>
      <output class="block min-h-5 text-sm leading-5 text-muted-foreground">
        {ran() ? `Ran ${ran()}` : "Try a shortcut"}
      </output>
    </div>
  )
}

export { Example }
