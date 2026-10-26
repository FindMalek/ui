import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandGroupLabel,
  CommandInput,
  CommandItem,
  CommandItemIcon,
  CommandList,
} from "@ui-sdk/solid/command"
import {
  Dialog,
  DialogBackdrop,
  DialogContent,
  DialogShortcut,
  DialogTitle,
  DialogTrigger,
} from "@ui-sdk/solid/dialog"
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
const Calendar = icon(
  '<path d="M8 2v3" /><path d="M16 2v3" /><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" />',
)
const Smile = icon(
  '<path d="M15 10V9" /><path d="M16.472 15a6 6 0 01-8.943 0" /><path d="M9 10V9" /><circle cx="12" cy="12" r="10" />',
)
const Calculator = icon(
  '<rect width="16" height="20" x="4" y="2" rx="2" /><line x1="8" x2="16" y1="6" y2="6" /><line x1="16" x2="16" y1="14" y2="18" /><path d="M16 10h.01" /><path d="M12 10h.01" /><path d="M8 10h.01" /><path d="M12 14h.01" /><path d="M8 14h.01" /><path d="M12 18h.01" /><path d="M8 18h.01" />',
)
const User = icon('<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />')
const CreditCard = icon(
  '<rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" /><path d="M6 14h2" />',
)
const Settings = icon(
  '<path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" /><circle cx="12" cy="12" r="3" />',
)
const Search = icon('<path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" />')

const commands = [
  { value: "calendar", label: "Calendar", icon: Calendar },
  { value: "emoji", label: "Search Emoji", icon: Smile },
  { value: "calculator", label: "Calculator", icon: Calculator, disabled: true },
  { value: "profile", label: "Profile", icon: User },
  { value: "billing", label: "Billing", icon: CreditCard },
  { value: "settings", label: "Settings", icon: Settings },
]

function Example() {
  const [open, setOpen] = createSignal(false)
  const [ran, setRan] = createSignal("")
  return (
    <div class="flex w-full max-w-sm flex-col items-start gap-3">
      <Dialog open={open()} onOpenChange={(next) => setOpen(next)}>
        <DialogTrigger
          shortcut="mod+k"
          class="inline-flex h-8 w-fit shrink-0 cursor-default items-center w-56 max-w-full justify-between gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm leading-5 font-medium whitespace-nowrap text-foreground transition-all select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 hover:bg-muted hover:text-foreground active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 text-muted-foreground data-open:bg-muted data-open:text-foreground"
        >
          Search…
          <DialogShortcut class="inline-flex h-5 min-w-5 items-center justify-center gap-1 rounded-lg bg-muted px-1 font-sans text-xs leading-4 font-medium text-muted-foreground" />
        </DialogTrigger>
        <DialogBackdrop class="fixed inset-0 bg-black/30 transition-opacity duration-100 supports-backdrop-filter:backdrop-blur-sm data-starting-style:opacity-0 data-ending-style:opacity-0" />
        <DialogContent class="fixed top-[min(6rem,10dvh)] left-1/2 max-h-[80dvh] w-full max-w-[calc(100%-2rem)] -translate-x-1/2 overflow-y-auto rounded-3xl border-0 bg-popover p-0 text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 sm:max-w-md">
          <DialogTitle class="sr-only">Command palette</DialogTitle>
          <Command
            onAction={(value) => {
              setRan(value)
              setOpen(false)
            }}
            class="flex h-80 flex-col p-1"
          >
            <div class="shrink-0 p-1 pb-0">
              <div class="box-border flex h-8 items-center gap-2 rounded-2xl border border-transparent bg-input/50 px-2.5 transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30">
                <Search aria-hidden="true" class="pointer-events-none block size-4 shrink-0 opacity-50" />
                <CommandInput
                  aria-label="Search commands"
                  placeholder="Type a command or search..."
                  class="m-0 h-full w-full min-w-0 border-0 bg-transparent p-0 text-base leading-6 text-inherit outline-none placeholder:text-muted-foreground md:text-sm md:leading-5"
                />
              </div>
            </div>
            <CommandEmpty class="m-0 shrink-0 py-6 text-center text-sm leading-5 text-muted-foreground empty:hidden">
              No results found.
            </CommandEmpty>
            <CommandList class="min-h-0 flex-1 scroll-py-1 overflow-x-hidden overflow-y-auto outline-none">
              <CommandGroup class="overflow-hidden p-1 text-foreground">
                <CommandGroupLabel class="px-2 py-1.5 text-xs leading-4 font-medium text-muted-foreground">
                  Suggestions
                </CommandGroupLabel>
                <For each={commands}>
                  {(item) => (
                    <CommandItem
                      value={item.value}
                      disabled={item.disabled}
                      class="group relative flex min-h-7 cursor-default items-center gap-2 rounded-2xl px-2 py-1.5 text-sm leading-5 outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
                    >
                      <CommandItemIcon class="flex shrink-0 text-muted-foreground group-data-highlighted:text-foreground">
                        <item.icon class="pointer-events-none block size-4 shrink-0" />
                      </CommandItemIcon>
                      {item.label}
                    </CommandItem>
                  )}
                </For>
              </CommandGroup>
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>
      <output class="block min-h-5 text-sm leading-5 text-muted-foreground">
        {ran() ? `Ran ${ran()}` : "Press ⌘K or Ctrl+K"}
      </output>
    </div>
  )
}

export { Example }
