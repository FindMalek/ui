"use client"

import { frameworkIds, type Framework } from "@/lib/frameworks"
import { frameworkCookie } from "@/lib/sections"
import * as React from "react"

const listeners = new Set<() => void>()

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

function setFramework(framework: Framework) {
  if (!frameworkIds.includes(framework)) {
    return
  }
  document.cookie = `${frameworkCookie}=${framework}; path=/; max-age=31536000; samesite=lax`
  document.documentElement.dataset.framework = framework
  listeners.forEach((listener) => listener())
}

/** The reader's saved framework choice, if they've made one. */
function readSavedFramework() {
  if (typeof document === "undefined") {
    return undefined
  }
  const match = document.cookie.match(new RegExp(`(?:^|;\\s*)${frameworkCookie}=([^;]+)`))
  return frameworkIds.find((framework) => framework === match?.[1])
}

/** The saved framework choice, or undefined before the reader has made one. */
function useSavedFramework() {
  return React.useSyncExternalStore(subscribe, readSavedFramework, () => undefined)
}

/** The shared framework preference, else React, persisted for links and server redirects. */
function useFramework() {
  const framework = useSavedFramework() ?? "react"
  return [framework, setFramework] as const
}

// Remembers the framework being read, so links from Core and Agents, like
// /docs/components/field, go to its pages.
function RememberFramework({ framework }: { framework: Framework }) {
  React.useEffect(() => {
    setFramework(framework)
  }, [framework])
  return null
}

export { RememberFramework, setFramework, useFramework, useSavedFramework }
