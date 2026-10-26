function createCodeTabPreference({
  key,
  fallback,
  values,
  persist = true,
}: {
  key: string
  fallback: string
  values?: readonly string[]
  persist?: boolean
}) {
  let current: string | undefined
  let memoryOnly = !persist
  const listeners = new Set<() => void>()
  const valid = (value: string | null) => (value && (!values || values.includes(value)) ? value : fallback)

  function read() {
    try {
      return valid(window.localStorage.getItem(key))
    } catch {
      return current ?? fallback
    }
  }

  function notify() {
    for (const listener of listeners) listener()
  }

  function storageChanged(event: StorageEvent) {
    if (event.key !== null && event.key !== key) return
    try {
      if (event.storageArea !== window.localStorage) return
    } catch {
      return
    }
    current = valid(event.newValue)
    memoryOnly = false
    notify()
  }

  function subscribe(listener: () => void) {
    if (!listeners.size) {
      if (!memoryOnly) current = read()
      if (persist) window.addEventListener("storage", storageChanged)
    }
    listeners.add(listener)
    return () => {
      listeners.delete(listener)
      if (!listeners.size && persist) window.removeEventListener("storage", storageChanged)
    }
  }

  function getSnapshot() {
    if (typeof window === "undefined") return fallback
    current ??= persist ? read() : fallback
    return current
  }

  function set(value: string) {
    current = valid(value)
    if (persist) {
      try {
        window.localStorage.setItem(key, current)
        memoryOnly = false
      } catch {
        // Keep the new choice usable even if an older stored value cannot be replaced.
        memoryOnly = true
      }
    }
    notify()
  }

  return { subscribe, getSnapshot, getServerSnapshot: () => fallback, set }
}

export { createCodeTabPreference }
