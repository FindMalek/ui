"use client"

import { isFramework } from "@/lib/frameworks"
import { menu } from "@/lib/menu"
import type { Section } from "@/lib/sections"
import { usePathname } from "next/navigation"
import { useFramework } from "./remember-framework"

// Where a menu link goes and whether it's the current section.
function useMenuLink(section?: Section) {
  const [framework] = useFramework()
  const pathname = usePathname()
  const activeLink = menu.findLast(({ href }) => pathname === href || pathname.startsWith(`${href}/`))
  return (href: string) => {
    if (href === "/docs/components") {
      return {
        href: `/docs/${section && isFramework(section) ? section : framework}`,
        current: !!section && isFramework(section),
      }
    }
    return { href, current: href === activeLink?.href }
  }
}

export { useMenuLink }
