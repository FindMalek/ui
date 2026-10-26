import "@ui-sdk/web/scroll-area"
import { mountWhenAsked, perfItems, perfSize } from "tests/fixtures/perf.ts"

// A scroll area of N items for the counts specs, with its
// scrollbar always shown. Web components have no renders to count.
function mount(root: HTMLElement) {
  mountWhenAsked(root, (target) => {
    const items = perfItems(perfSize())
      .map((item) => `<p class="scroll-area-item">${item.label}</p>`)
      .join("")
    target.innerHTML = `
      <div class="fixture scroll-fixture">
        <button>Before</button>
        <ui-scroll-area class="scroll-area" type="always">
          <ui-scroll-area-viewport class="scroll-area-viewport" role="region" aria-label="Items">
            <ui-scroll-area-content>${items}</ui-scroll-area-content>
          </ui-scroll-area-viewport>
          <ui-scroll-area-scrollbar class="scroll-area-scrollbar">
            <ui-scroll-area-thumb class="scroll-area-thumb"></ui-scroll-area-thumb>
          </ui-scroll-area-scrollbar>
        </ui-scroll-area>
        <button>After</button>
      </div>
    `
  })
}

export { mount }
