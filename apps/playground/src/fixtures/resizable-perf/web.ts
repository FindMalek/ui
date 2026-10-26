import { perfItems, perfSize } from "tests/fixtures/perf.ts"

// A group of N panels for the counts specs. The first two take
// a quarter each and the rest share the other half, so the first handle has
// room to move. Web components have no renders to count.
async function mount(root: HTMLElement) {
  const panels = perfItems(perfSize())
    .map(({ value, label }, index) => {
      const handle =
        index > 0
          ? `<ui-resizable-handle class="resizable-perf-handle" aria-label="Handle ${index}"></ui-resizable-handle>`
          : ""
      const size = index < 2 ? ` default-size="25"` : ""
      return `${handle}<ui-resizable-panel id="${value}"${size} class="resizable-panel">${label}</ui-resizable-panel>`
    })
    .join("")
  root.innerHTML = `
    <div class="fixture">
      <button>Before</button>
      <ui-resizable class="resizable-perf">${panels}</ui-resizable>
      <button>After</button>
    </div>
  `
  await import("@ui-sdk/web/resizable")
}

export { mount }
