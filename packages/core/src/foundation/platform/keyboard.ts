// The on-screen keyboard, measured from the visual viewport. iOS and Android
// browsers shrink only the visual viewport when the keyboard opens, so a
// centered dialog or a sheet would sit under it.

// How much of the layout viewport's bottom the keyboard covers, in pixels.
// Pinch zoom also shrinks the visual viewport, so a zoomed page reports none.
function keyboardInset(viewport: { layoutHeight: number; height: number; offsetTop: number; scale: number }) {
  if (viewport.scale !== 1) return 0
  return Math.max(0, Math.round(viewport.layoutHeight - viewport.height - viewport.offsetTop))
}

// Writes --keyboard-inset and --visual-viewport-height on `el`, and
// data-keyboard while the keyboard covers part of the page, until the cleanup
// runs. `onChange` hears an inset change around the write: `before` runs
// first, so it can read the layout the change is about to replace.
function trackKeyboard(el: HTMLElement, onChange?: { before: () => void; after: () => void }) {
  const view = el.ownerDocument.defaultView
  const viewport = view?.visualViewport
  if (!view || !viewport) return () => {}
  let current: number | null = null
  const apply = (size: ViewportSize) => {
    const inset = keyboardInset(size)
    const changed = current !== null && inset !== current
    current = inset
    if (changed) onChange?.before()
    el.style.setProperty("--keyboard-inset", `${inset}px`)
    el.style.setProperty("--visual-viewport-height", `${Math.round(size.height)}px`)
    if (inset > 0) el.setAttribute("data-keyboard", "")
    else el.removeAttribute("data-keyboard")
    if (changed) onChange?.after()
  }
  const update = () => apply(measureViewport(view, viewport))
  apply(early.get(view) ?? measureViewport(view, viewport))
  viewport.addEventListener("resize", update)
  viewport.addEventListener("scroll", update)
  return () => {
    viewport.removeEventListener("resize", update)
    viewport.removeEventListener("scroll", update)
    el.style.removeProperty("--keyboard-inset")
    el.style.removeProperty("--visual-viewport-height")
    el.removeAttribute("data-keyboard")
  }
}

type ViewportSize = Parameters<typeof keyboardInset>[0]

function measureViewport(view: Window, viewport: VisualViewport) {
  return {
    layoutHeight: view.innerHeight,
    height: viewport.height,
    offsetTop: viewport.offsetTop,
    scale: viewport.scale,
  }
}

const early = new WeakMap<Window, ViewportSize>()

/**
 * Measures the viewport for `trackKeyboard` later in the same task. Like
 * `measureScrollerEarly`: a dialog calls it as it starts to open, while
 * reading layout is free, instead of after it rendered and locked the page.
 */
function measureViewportEarly(view: Window | null | undefined) {
  const viewport = view?.visualViewport
  if (!view || !viewport || early.has(view)) return
  early.set(view, measureViewport(view, viewport))
  setTimeout(() => early.delete(view))
}

export { measureViewportEarly, trackKeyboard }
