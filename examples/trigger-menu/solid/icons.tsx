import {
  TriggerMenu,
  TriggerMenuContent,
  TriggerMenuInput,
  TriggerMenuItem,
  TriggerMenuItemIcon,
  TriggerMenuList,
} from "@ui-sdk/solid/trigger-menu"
import { For } from "solid-js"

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
const Reply = icon('<path d="M20 18v-2a4 4 0 0 0-4-4H4" /><path d="m9 17-5-5 5-5" />')
const Clock = icon('<circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />')
const Search = icon('<path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" />')
const Share = icon(
  '<path d="M12 2v13" /><path d="m16 6-4-4-4 4" /><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />',
)
const Trash = icon(
  '<path d="M10 11v6" /><path d="M14 11v6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" /><path d="M3 6h18" /><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />',
)

const commands = [
  { value: "reply", icon: Reply, mirror: true },
  { value: "remind", icon: Clock },
  { value: "search", icon: Search },
  { value: "share", icon: Share },
  { value: "clear", icon: Trash },
]

function Example() {
  return (
    <TriggerMenu triggers={[{ char: "/", boundary: "start", type: "command" }]}>
      <TriggerMenuInput
        aria-label="Message"
        placeholder="Type / for commands"
        class="min-h-20 w-full max-w-sm resize-none rounded-2xl border border-transparent bg-input/50 px-2.5 py-2 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 md:text-sm motion-reduce:transition-none"
      />
      <TriggerMenuContent class="max-h-[min(16rem,var(--available-height))] w-48 max-w-[calc(100vw-2rem)] origin-(--transform-origin) scroll-py-1 overflow-y-auto rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10 motion-reduce:transition-none">
        <TriggerMenuList>
          <For each={commands}>
            {(command) => (
              <TriggerMenuItem
                value={command.value}
                class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
              >
                <TriggerMenuItemIcon
                  mirror={command.mirror}
                  class="flex text-muted-foreground group-data-highlighted:text-foreground"
                >
                  <command.icon class="size-4" />
                </TriggerMenuItemIcon>
                {command.value}
              </TriggerMenuItem>
            )}
          </For>
        </TriggerMenuList>
      </TriggerMenuContent>
    </TriggerMenu>
  )
}

export { Example }
