import {
  Menu,
  MenuCheckboxItem,
  MenuContent,
  MenuGroup,
  MenuGroupLabel,
  MenuTrigger,
} from "@ui-sdk/react/menu"
import { Bell, Check, Mail, Smartphone } from "lucide-react"
import * as React from "react"

const channels = [
  { value: "email", label: "Email", icon: Mail },
  { value: "sms", label: "Text message", icon: Smartphone },
  { value: "push", label: "Push", icon: Bell },
]

export function Example() {
  const [enabled, setEnabled] = React.useState(["email", "push"])

  return (
    <>
      <Menu>
        <MenuTrigger className="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-transparent dark:hover:bg-input/30">
          <Bell className="size-4" />
          Notifications
        </MenuTrigger>
        <MenuContent className="min-w-48 origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10">
          <MenuGroup>
            <MenuGroupLabel className="px-2 py-1 text-xs text-muted-foreground">Notify me by</MenuGroupLabel>
            {channels.map((channel) => (
              <MenuCheckboxItem
                key={channel.value}
                className={(state) =>
                  `flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 ${state.checked ? "text-foreground" : "text-muted-foreground"}`
                }
                value={channel.value}
                checked={enabled.includes(channel.value)}
                onCheckedChange={(checked) =>
                  setEnabled((current) =>
                    checked
                      ? [...current, channel.value]
                      : current.filter((value) => value !== channel.value),
                  )
                }
                render={(props, state) => (
                  <div {...props}>
                    <channel.icon className="size-4" />
                    {channel.label}
                    {state.checked && <Check className="ms-auto size-4" />}
                  </div>
                )}
              />
            ))}
          </MenuGroup>
        </MenuContent>
      </Menu>
      <output className="mt-3 text-sm text-muted-foreground">
        {enabled.length ? `On: ${enabled.join(", ")}` : "All notifications off"}
      </output>
    </>
  )
}
