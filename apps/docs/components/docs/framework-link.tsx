"use client"

import { utilitiesFolder } from "@/lib/sections"
import Link from "next/link"
import * as React from "react"
import { useFramework } from "./remember-framework"

// A link from Core or Agents to a framework's page, like /docs/components/field,
// pointed at the framework the reader last read once the page is in the
// browser. Before that, and without JavaScript, the site redirects it.
function FrameworkLink({ href, ...props }: React.ComponentProps<typeof Link> & { href: string }) {
  const [framework] = useFramework()
  const [resolved, setResolved] = React.useState(href)
  React.useEffect(() => {
    const [, , folder, ...rest] = href.split("/")
    const target = folder === "utilities" ? utilitiesFolder(framework) : folder
    setResolved(["", "docs", framework, target, ...rest].join("/"))
  }, [framework, href])
  return <Link href={resolved} {...props} />
}

export { FrameworkLink }
