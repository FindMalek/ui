"use client"

import type * as React from "react"

import type { Framework } from "@/lib/frameworks"
import { useFramework } from "./remember-framework"

function FrameworkContent({ value, children }: { value: Framework; children: React.ReactNode }) {
  const [framework] = useFramework()
  return framework === value ? children : null
}

export { FrameworkContent }
