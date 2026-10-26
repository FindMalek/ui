"use client"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@ui-sdk/react/navigation-menu"
import { menu } from "@/lib/menu"
import type { Section } from "@/lib/sections"
import Link from "next/link"
import { useMenuLink } from "./section-nav"

function HeaderMenu({ section }: { section?: Section }) {
  const link = useMenuLink(section)

  return (
    <NavigationMenu aria-label="Sections">
      <NavigationMenuList className="flex items-center gap-6">
        {menu.map((item) => {
          const { href, current } = link(item.href)
          return (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuLink
                active={current}
                render={<Link href={href} />}
                className="inline-flex rounded-md py-1.5 text-sm text-subtle outline-none transition-colors hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 data-active:text-foreground"
              >
                {item.title}
              </NavigationMenuLink>
            </NavigationMenuItem>
          )
        })}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export { HeaderMenu }
