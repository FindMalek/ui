// Checks a primitive's horizontal arrows follow the reading direction: in
// right to left text, ArrowLeft does what ArrowRight does in left to right,
// with no provider, only `dir` on the page.
import { mount } from "./mount"
import type { OptionsOf, Primitive } from "../foundation/kernel/primitive-types"

// What a press changed, comparable across directions: the focused part's slot
// and key, and the state, with ids, which differ per mount, left out. Right to
// left, physical sides in state swap, like a tab indicator moving `"left"` to
// the next tab, so they're mirrored back to compare.
function outcome(view: ReturnType<typeof mount>, dir: "ltr" | "rtl") {
  const focused = document.activeElement as HTMLElement | null
  const slot = focused?.getAttribute("data-slot") ?? ""
  const key = focused?.getAttribute("data-value") ?? focused?.textContent?.trim() ?? ""
  const mirrored: Record<string, string> = { left: "right", right: "left" }
  const state = JSON.stringify(view.state, (name, value) =>
    name === "id" || name.endsWith("Id")
      ? undefined
      : dir === "rtl" && typeof value === "string" && value in mirrored
        ? mirrored[value]
        : value,
  )
  return { focus: `${slot} ${key}`, state }
}

async function press(primitive: Primitive, options: object, markup: string, dir: "ltr" | "rtl", key: string) {
  const html = document.documentElement
  const before = html.getAttribute("dir")
  html.setAttribute("dir", dir)
  const view = mount(primitive, options as never, markup)
  try {
    await view.keys("Tab")
    const start = outcome(view, dir)
    await view.keys(key)
    return { start, end: outcome(view, dir) }
  } finally {
    view.unmount()
    if (before === null) html.removeAttribute("dir")
    else html.setAttribute("dir", before)
  }
}

/**
 * Mounts a primitive left to right and right to left, Tabs into it, and
 * presses each horizontal arrow, checking ArrowLeft in right to left does
 * what ArrowRight does in left to right, and the other way around. Fails too
 * when the arrows do nothing, since there's nothing to check. Markup is
 * `mount`'s. Throws one error that lists every problem.
 *
 * @example
 * await checkDirection(tabs, { defaultValue: "a" }, `<root><list><tab value="a">A</tab><tab value="b">B</tab></list></root>`)
 *
 * @experimental
 */
async function checkDirection<P extends Primitive>(primitive: P, options: OptionsOf<P>, markup: string) {
  const problems: string[] = []
  for (const [forward, mirrored] of [
    ["ArrowRight", "ArrowLeft"],
    ["ArrowLeft", "ArrowRight"],
  ]) {
    const ltr = await press(primitive, options, markup, "ltr", forward)
    const rtl = await press(primitive, options, markup, "rtl", mirrored)
    const moved = ltr.end.focus !== ltr.start.focus || ltr.end.state !== ltr.start.state
    if (forward === "ArrowRight" && !moved) {
      problems.push("ArrowRight changes nothing left to right, so there's no direction to check")
      break
    }
    if (rtl.end.focus !== ltr.end.focus)
      problems.push(
        `${mirrored} right to left focuses ${rtl.end.focus || "nothing"}, where ${forward} left to right focuses ${ltr.end.focus || "nothing"}`,
      )
    if (rtl.end.state !== ltr.end.state)
      problems.push(
        `${mirrored} right to left leaves state ${rtl.end.state}, where ${forward} left to right leaves ${ltr.end.state}`,
      )
  }
  if (problems.length)
    throw new Error(
      `checkDirection found ${problems.length} problem${problems.length === 1 ? "" : "s"}:\n- ${problems.join("\n- ")}`,
    )
}

export { checkDirection }
