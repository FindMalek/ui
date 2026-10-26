"use client"

import * as React from "react"
import {
  Menu,
  MenuCheckboxItem,
  MenuContent,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSeparator,
  MenuSub,
  MenuSubContent,
  MenuSubTrigger,
  MenuTrigger,
} from "@ui-sdk/react/menu"
import {
  Check,
  ChevronRight,
  CircleHelp,
  Keyboard,
  Link,
  LogOut,
  Mail,
  MessageCircle,
  Monitor,
  Moon,
  Plus,
  Settings,
  Sun,
  User,
  UserPlus,
  Users,
} from "lucide-react"

function Example() {
  const [action, setAction] = React.useState("")
  const [sidebar, setSidebar] = React.useState(true)
  const [theme, setTheme] = React.useState("system")

  return (
    <>
      <Menu onAction={setAction}>
        <MenuTrigger className="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">
          Workspace
        </MenuTrigger>
        <MenuContent className="min-w-56 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 **:data-[slot=menu-shortcut]:ms-auto **:data-[slot=menu-shortcut]:ps-4 **:data-[slot=menu-shortcut]:text-xs **:data-[slot=menu-shortcut]:tracking-widest **:data-[slot=menu-shortcut]:text-muted-foreground motion-reduce:transition-none">
          <MenuGroup>
            <MenuGroupLabel className="px-2 py-1 text-xs text-muted-foreground">My account</MenuGroupLabel>
            <MenuItem
              className="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
              value="profile"
              shortcut="mod+shift+p"
            >
              <User className="size-4 text-muted-foreground group-data-highlighted:text-current" />
              Profile
            </MenuItem>
            <MenuItem
              className="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
              value="settings"
              shortcut="mod+,"
            >
              <Settings
                aria-hidden="true"
                className="size-4 text-muted-foreground group-data-highlighted:text-current"
              />
              Settings
            </MenuItem>
            <MenuItem
              className="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
              value="shortcuts"
              shortcut="mod+k"
            >
              <Keyboard className="size-4 text-muted-foreground group-data-highlighted:text-current" />
              Keyboard shortcuts
            </MenuItem>
          </MenuGroup>
          <MenuSeparator className="-mx-1 my-1 h-px bg-border/50" />
          <MenuGroup>
            <MenuItem
              className="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
              value="team"
            >
              <Users className="size-4 text-muted-foreground group-data-highlighted:text-current" />
              Team
            </MenuItem>
            <MenuSub>
              <MenuSubTrigger className="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 data-open:bg-accent data-open:text-accent-foreground">
                <UserPlus
                  aria-hidden="true"
                  className="size-4 text-muted-foreground group-data-highlighted:text-current"
                />
                Invite people
                <ChevronRight aria-hidden="true" className="ms-auto size-4 rtl:rotate-180" />
              </MenuSubTrigger>
              <MenuSubContent className="min-w-40 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none">
                <MenuItem
                  className="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
                  value="invite-email"
                >
                  <Mail className="size-4 text-muted-foreground group-data-highlighted:text-current" />
                  Email
                </MenuItem>
                <MenuItem
                  className="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
                  value="invite-message"
                >
                  <MessageCircle className="size-4 text-muted-foreground group-data-highlighted:text-current" />
                  Message
                </MenuItem>
                <MenuSeparator className="-mx-1 my-1 h-px bg-border/50" />
                <MenuItem
                  className="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
                  value="invite-link"
                >
                  <Link className="size-4 text-muted-foreground group-data-highlighted:text-current" />
                  Copy invite link
                </MenuItem>
              </MenuSubContent>
            </MenuSub>
            <MenuItem
              className="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
              value="new-team"
              shortcut="mod+t"
            >
              <Plus className="size-4 text-muted-foreground group-data-highlighted:text-current" />
              New team
            </MenuItem>
          </MenuGroup>
          <MenuSeparator className="-mx-1 my-1 h-px bg-border/50" />
          <MenuCheckboxItem
            className="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
            value="sidebar"
            checked={sidebar}
            onCheckedChange={setSidebar}
          >
            <Monitor className="size-4 text-muted-foreground group-data-highlighted:text-current" />
            Show sidebar
            <Check aria-hidden="true" className="invisible ms-auto size-4 group-data-checked:visible" />
          </MenuCheckboxItem>
          <MenuSub>
            <MenuSubTrigger className="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 data-open:bg-accent data-open:text-accent-foreground">
              {theme === "dark" ? (
                <Moon className="size-4 text-muted-foreground group-data-highlighted:text-current" />
              ) : (
                <Sun className="size-4 text-muted-foreground group-data-highlighted:text-current" />
              )}
              Theme
              <ChevronRight aria-hidden="true" className="ms-auto size-4 rtl:rotate-180" />
            </MenuSubTrigger>
            <MenuSubContent className="min-w-36 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none">
              <MenuRadioGroup value={theme} onValueChange={setTheme}>
                <MenuRadioItem
                  className="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
                  value="light"
                >
                  <Sun className="size-4 text-muted-foreground group-data-highlighted:text-current" />
                  Light
                  <Check aria-hidden="true" className="invisible ms-auto size-4 group-data-checked:visible" />
                </MenuRadioItem>
                <MenuRadioItem
                  className="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
                  value="dark"
                >
                  <Moon className="size-4 text-muted-foreground group-data-highlighted:text-current" />
                  Dark
                  <Check aria-hidden="true" className="invisible ms-auto size-4 group-data-checked:visible" />
                </MenuRadioItem>
                <MenuRadioItem
                  className="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
                  value="system"
                >
                  <Monitor className="size-4 text-muted-foreground group-data-highlighted:text-current" />
                  System
                  <Check aria-hidden="true" className="invisible ms-auto size-4 group-data-checked:visible" />
                </MenuRadioItem>
              </MenuRadioGroup>
            </MenuSubContent>
          </MenuSub>
          <MenuSeparator className="-mx-1 my-1 h-px bg-border/50" />
          <MenuItem
            className="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
            value="help"
          >
            <CircleHelp className="size-4 text-muted-foreground group-data-highlighted:text-current" />
            Help
          </MenuItem>
          <MenuItem
            className="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4"
            value="sign-out"
            shortcut="mod+shift+q"
          >
            <LogOut
              aria-hidden="true"
              className="size-4 text-muted-foreground group-data-highlighted:text-current"
            />
            Sign out
          </MenuItem>
        </MenuContent>
      </Menu>
      <output className="mt-3 text-sm text-muted-foreground block min-h-5">
        {action ? `Ran ${action}` : `Sidebar ${sidebar ? "shown" : "hidden"}, ${theme} theme`}
      </output>
    </>
  )
}

export { Example }
