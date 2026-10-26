import type { Page } from "@playwright/test"

// Helpers for behavior every popup shares, like Menu and Popover.

// A scroll box with a scrollbar at the bottom left of the page. Returns a point
// on its scrollbar, or nothing when the browser draws no scrollbars.
async function addScroller(page: Page) {
  return page.evaluate(() => {
    const style = document.createElement("style")
    style.textContent =
      "#scroller::-webkit-scrollbar { width: 16px; background: #ccc } #scroller::-webkit-scrollbar-thumb { background: #666 }"
    document.head.append(style)
    const el = document.createElement("div")
    el.id = "scroller"
    el.style.cssText = "position: fixed; left: 0; bottom: 0; width: 200px; height: 100px; overflow-y: scroll"
    el.innerHTML = '<div style="height: 400px"></div>'
    document.body.append(el)
    const width = el.offsetWidth - el.clientWidth
    const rect = el.getBoundingClientRect()
    return width > 0 ? { x: rect.left + el.clientWidth + width / 2, y: rect.top + 50 } : undefined
  })
}

// Presses Escape on the focused element while an input method composes text,
// like a Japanese candidate list that Escape should close first.
async function composingEscape(page: Page) {
  await page.evaluate(() =>
    document.activeElement?.dispatchEvent(
      new KeyboardEvent("keydown", { key: "Escape", isComposing: true, bubbles: true, cancelable: true }),
    ),
  )
}

export { addScroller, composingEscape }
