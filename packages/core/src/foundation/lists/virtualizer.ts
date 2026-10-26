// Rendering only the rows a scroller shows, for lists and grids of thousands:
// a data table, a log, a chat history, a file list. Rows can be any height;
// each is measured once it renders and the rest are estimated. Framework-free:
// it reads the scroller and calls `subscribe` listeners, and an adapter
// renders `items()` however it renders.

/**
 * One row to render: where it starts along the scroller, in pixels, and its size.
 * @experimental
 */
type VirtualItem = { index: number; key: string; start: number; size: number }

/**
 * Where `scrollToIndex` puts a row. `auto` scrolls only as far as it takes to show it.
 * @experimental
 */
type VirtualAlign = "auto" | "start" | "center" | "end"

/**
 * How `createVirtualizer` reads the list.
 * @experimental
 */
type VirtualizerOptions = {
  /** How many rows the list has. Read on every update, so it can grow, like a list that loads more. */
  count: () => number
  /** The size of a row before it's measured, in pixels. A close guess keeps the scrollbar steady. */
  estimate: (index: number) => number
  /**
   * A stable key for each row, so a measured size follows its row when the
   * list sorts or filters. Defaults to the index.
   */
  key?: (index: number) => string
  /**
   * How many rows to render past each edge, so a fast scroll or Tab doesn't
   * show a gap. @defaultValue 4
   */
  overscan?: number
  /** Whether the list scrolls sideways. @defaultValue false */
  horizontal?: boolean
  /** Pixels in the scroller before the first row, like a sticky header. @defaultValue 0 */
  scrollMargin?: number
  /**
   * Rows rendered wherever the scroller is, like the one with focus, so
   * scrolling it away doesn't drop focus to the page.
   */
  keep?: () => readonly number[]
  /**
   * Runs when the rendered rows come within `endThreshold` rows of the last,
   * to load more. Runs once per `count`, so it doesn't ask again before the
   * list grows.
   */
  onEnd?: () => void
  /** How close to the end `onEnd` runs, in rows. @defaultValue 10 */
  endThreshold?: number
}

/**
 * Renders a long list by rendering only what's in view. Connect it to the
 * scroller once it mounts, render `items()` absolutely positioned inside a
 * box `size()` tall, and measure each rendered row:
 *
 * ```ts
 * const rows = createVirtualizer({ count: () => data.length, estimate: () => 36 })
 * const disconnect = rows.connect(scroller)
 * rows.subscribe(render)
 * // For each of rows.items(): <div style="position:absolute; top:{start}px" ref={(el) => rows.measure(index, el)}>
 * ```
 *
 * `items()` keeps its identity until something changes, so it works as a
 * snapshot for `useSyncExternalStore` and its kind.
 * @experimental
 */
function createVirtualizer(options: VirtualizerOptions) {
  const keyOf = (index: number) => options.key?.(index) ?? String(index)
  const sizes = new Map<string, number>()
  const listeners = new Set<() => void>()
  let scroller: HTMLElement | undefined
  let offset = 0
  let viewport = 0
  // Where each row starts, rebuilt when a count or size changes.
  let starts: number[] = []
  let dirty = true
  let snapshot: VirtualItem[] = []
  let total = 0
  let endedAt = -1
  // Each measured element and the row it shows now, which changes when the list sorts.
  const measured = new Map<Element, number>()
  let resizes: ResizeObserver | undefined

  const margin = () => options.scrollMargin ?? 0
  const sizeOf = (index: number) => sizes.get(keyOf(index)) ?? options.estimate(index)

  function layout() {
    if (!dirty && starts.length === options.count()) return
    dirty = false
    const count = options.count()
    starts = new Array(count)
    let at = 0
    for (let i = 0; i < count; i++) {
      starts[i] = at
      at += sizeOf(i)
    }
    total = at
  }

  // The first row whose end is past `at`, by binary search.
  function rowAt(at: number) {
    let low = 0
    let high = starts.length - 1
    while (low < high) {
      const middle = (low + high) >> 1
      if (starts[middle] + sizeOf(middle) <= at) low = middle + 1
      else high = middle
    }
    return Math.max(0, low)
  }

  function compute() {
    layout()
    const count = starts.length
    const overscan = options.overscan ?? 4
    const indexes = new Set<number>()
    if (count) {
      const from = rowAt(Math.max(0, offset - margin()))
      let to = from
      const end = offset - margin() + viewport
      while (to < count - 1 && starts[to] + sizeOf(to) < end) to++
      for (let i = Math.max(0, from - overscan); i <= Math.min(count - 1, to + overscan); i++) indexes.add(i)
      for (const index of options.keep?.() ?? []) if (index >= 0 && index < count) indexes.add(index)
      if (options.onEnd && to >= count - 1 - (options.endThreshold ?? 10) && endedAt !== count) {
        endedAt = count
        queueMicrotask(() => options.onEnd?.())
      }
    }
    const next = [...indexes]
      .sort((a, b) => a - b)
      .map((index) => ({ index, key: keyOf(index), start: starts[index], size: sizeOf(index) }))
    const same =
      next.length === snapshot.length &&
      next.every(
        (item, i) =>
          item.key === snapshot[i].key &&
          item.start === snapshot[i].start &&
          item.size === snapshot[i].size &&
          item.index === snapshot[i].index,
      )
    if (same) return false
    snapshot = next
    return true
  }

  function update() {
    if (compute()) for (const listener of [...listeners]) listener()
  }

  function record(el: HTMLElement) {
    const index = measured.get(el)
    if (index === undefined) return
    const rect = el.getBoundingClientRect()
    const size = options.horizontal ? rect.width : rect.height
    const key = keyOf(index)
    if (!size || sizes.get(key) === size) return
    layout()
    // A row above the top that changes size would move what's in view, so
    // the scroller moves with it.
    const above = !!scroller && (starts[index] ?? 0) + margin() < offset
    const change = size - sizeOf(index)
    sizes.set(key, size)
    dirty = true
    if (above && scroller) {
      if (options.horizontal) scroller.scrollLeft += change
      else scroller.scrollTop += change
      read()
    }
    update()
  }

  function read() {
    if (!scroller) return
    offset = options.horizontal ? scroller.scrollLeft : scroller.scrollTop
    viewport = options.horizontal ? scroller.clientWidth : scroller.clientHeight
  }

  const api = {
    /** The rows to render now, in order. Same array until something changes. */
    items() {
      compute()
      return snapshot
    },
    /** The height, or width when horizontal, of every row together, for the box the rows sit in. */
    size() {
      layout()
      return total
    },
    /** Calls `listener` whenever `items()` changes, until the returned function runs. */
    subscribe(listener: () => void) {
      listeners.add(listener)
      return () => void listeners.delete(listener)
    },
    /** Reads the scroller on every scroll and resize, until the returned function runs. */
    connect(el: HTMLElement) {
      scroller = el
      const onScroll = () => {
        read()
        update()
      }
      el.addEventListener("scroll", onScroll, { passive: true })
      const view = el.ownerDocument.defaultView
      const box = view?.ResizeObserver ? new view.ResizeObserver(onScroll) : undefined
      box?.observe(el)
      onScroll()
      return () => {
        el.removeEventListener("scroll", onScroll)
        box?.disconnect()
        if (scroller === el) scroller = undefined
      }
    },
    /**
     * Measures a rendered row, now and whenever it resizes, until the returned
     * function runs. Call it from the row's ref. Fixed-size rows can skip it.
     */
    measure(index: number, el: HTMLElement | null) {
      if (!el) return () => {}
      const first = !measured.has(el)
      measured.set(el, index)
      if (first) {
        const view = el.ownerDocument.defaultView
        if (!resizes && view?.ResizeObserver)
          resizes = new view.ResizeObserver((entries) => {
            for (const entry of entries) record(entry.target as HTMLElement)
          })
        resizes?.observe(el)
      }
      record(el)
      return () => {
        measured.delete(el)
        resizes?.unobserve(el)
      }
    },
    /** Scrolls so a row shows, measuring as it goes. */
    scrollToIndex(
      index: number,
      { align = "auto", behavior }: { align?: VirtualAlign; behavior?: ScrollBehavior } = {},
    ) {
      layout()
      if (!scroller || index < 0 || index >= starts.length) return
      read()
      const start = starts[index] + margin()
      const size = sizeOf(index)
      // The rows show below `scrollMargin`, like under a sticky header.
      let to = offset
      if (align === "start") to = start - margin()
      else if (align === "end") to = start + size - viewport
      else if (align === "center") to = start + size / 2 - (viewport + margin()) / 2
      else if (start < offset + margin()) to = start - margin()
      else if (start + size > offset + viewport) to = start + size - viewport
      if (to === offset) return
      scroller.scrollTo({ [options.horizontal ? "left" : "top"]: Math.max(0, to), behavior })
      read()
      update()
    },
    /** Reads the list again, like after its rows change without a scroll. */
    refresh() {
      dirty = true
      read()
      update()
    },
    /** Forgets every measured size, like after a change that resizes every row. */
    reset() {
      sizes.clear()
      api.refresh()
    },
  }
  return api
}

/**
 * What `createVirtualizer` returns.
 * @experimental
 */
type Virtualizer = ReturnType<typeof createVirtualizer>

export { createVirtualizer, type VirtualAlign, type VirtualItem, type Virtualizer, type VirtualizerOptions }
