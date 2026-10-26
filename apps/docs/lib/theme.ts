const themeKey = "theme"

// Runs in <head> before the page paints. Kept free of imports so it can be inlined.
const themeScript = `(() => {
  try {
    const theme = localStorage.getItem("${themeKey}") ?? "system"
    const dark = theme === "dark" || (theme === "system" && matchMedia("(prefers-color-scheme: dark)").matches)
    document.documentElement.classList.toggle("dark", dark)
    document.documentElement.style.colorScheme = dark ? "dark" : "light"
  } catch {}
})()`

function applyTheme(theme: string) {
  const dark = theme === "dark" || (theme === "system" && matchMedia("(prefers-color-scheme: dark)").matches)
  document.documentElement.classList.toggle("dark", dark)
  document.documentElement.style.colorScheme = dark ? "dark" : "light"
}

export { applyTheme, themeKey, themeScript }
