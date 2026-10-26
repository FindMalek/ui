"use client"

import { cn } from "cn"
import { TabsList as TabsListPrimitive, TabsTab as TabsTabPrimitive } from "@ui-sdk/react/tabs"
import type { ComponentProps } from "react"

function TabsList({
  className,
  ...props
}: Omit<ComponentProps<typeof TabsListPrimitive>, "className"> & { className?: string }) {
  return <TabsListPrimitive className={cn("flex items-center gap-4", className)} {...props} />
}

function TabsTab({
  className,
  ...props
}: Omit<ComponentProps<typeof TabsTabPrimitive>, "className"> & { className?: string }) {
  return (
    <TabsTabPrimitive
      className={cn(
        "group/tabs-tab rounded-md text-[13px] text-subtle outline-none transition-colors select-none hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:text-foreground",
        className,
      )}
      {...props}
    />
  )
}

export { TabsList, TabsTab }
export { Tabs, TabsPanel } from "@ui-sdk/react/tabs"
