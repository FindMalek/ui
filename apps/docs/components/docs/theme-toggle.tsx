"use client"

import { Toggle, ToggleGroup } from "@/components/ui/toggle-group"
import { applyTheme, themeKey } from "@/lib/theme"
import { MonitorIcon, MoonIcon, SunIcon } from "lucide-react"
import * as React from "react"

const themes = [
  { value: "system", label: "System", icon: MonitorIcon },
  { value: "light", label: "Light", icon: SunIcon },
  { value: "dark", label: "Dark", icon: MoonIcon },
]

function ThemeToggle() {
  // The stored theme is only known in the browser, so the first render shows none pressed.
  const [theme, setTheme] = React.useState<string[]>([])

  React.useEffect(() => {
    setTheme([localStorage.getItem(themeKey) ?? "system"])
  }, [])

  // Follows the system while it's the choice.
  React.useEffect(() => {
    if (theme[0] !== "system") return
    const query = matchMedia("(prefers-color-scheme: dark)")
    const update = () => applyTheme("system")
    query.addEventListener("change", update)
    return () => query.removeEventListener("change", update)
  }, [theme])

  return (
    <ToggleGroup
      aria-label="Theme"
      value={theme}
      onValueChange={(next) => {
        // A pressed toggle stays pressed: there's always a theme.
        if (!next.length) return
        const value = next[next.length - 1]
        setTheme([value])
        localStorage.setItem(themeKey, value)
        applyTheme(value)
      }}
    >
      {themes.map(({ value, label, icon: Icon }) => (
        <Toggle key={value} value={value} aria-label={label}>
          <Icon />
        </Toggle>
      ))}
    </ToggleGroup>
  )
}

export { ThemeToggle }
