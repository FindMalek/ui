import {
  Menu,
  MenuCheckboxItem,
  MenuContent,
  MenuGroup,
  MenuGroupLabel,
  MenuTrigger,
} from "@ui-sdk/solid/menu"
import { createSignal, For, Show } from "solid-js"

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
const Bell = icon(
  '<path d="M10.268 21a2 2 0 0 0 3.464 0" /><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />',
)
const Mail = icon(
  '<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" />',
)
const Smartphone = icon('<rect width="14" height="20" x="5" y="2" rx="2" ry="2" /><path d="M12 18h.01" />')

const channels = [
  { value: "email", label: "Email", icon: Mail },
  { value: "sms", label: "Text message", icon: Smartphone },
  { value: "push", label: "Push", icon: Bell },
]

export function Example() {
  const [enabled, setEnabled] = createSignal(["email", "push"])

  return (
    <>
      <Menu>
        <MenuTrigger class="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-transparent dark:hover:bg-input/30">
          <Bell class="size-4" />
          Notifications
        </MenuTrigger>
        <MenuContent class="min-w-48 origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10">
          <MenuGroup>
            <MenuGroupLabel class="px-2 py-1 text-xs text-muted-foreground">Notify me by</MenuGroupLabel>
            <For each={channels}>
              {(channel) => (
                <MenuCheckboxItem
                  class={(state) =>
                    `flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 ${state.checked ? "text-foreground" : "text-muted-foreground"}`
                  }
                  value={channel.value}
                  checked={enabled().includes(channel.value)}
                  onCheckedChange={(checked) =>
                    setEnabled((current) =>
                      checked
                        ? [...current, channel.value]
                        : current.filter((value) => value !== channel.value),
                    )
                  }
                  render={(props, state) => (
                    <div {...props}>
                      <channel.icon class="size-4" />
                      {channel.label}
                      <Show when={state.checked}>
                        <svg
                          class="ms-auto size-4"
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
                      </Show>
                    </div>
                  )}
                />
              )}
            </For>
          </MenuGroup>
        </MenuContent>
      </Menu>
      <output class="mt-3 text-sm text-muted-foreground">
        {enabled().length ? `On: ${enabled().join(", ")}` : "All notifications off"}
      </output>
    </>
  )
}
