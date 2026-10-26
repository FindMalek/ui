import { Tooltip, TooltipContent, TooltipTrigger } from "@ui-sdk/solid/tooltip"
import { render } from "@solidjs/web"
import { For } from "solid-js"
import { countRender, mountWhenAsked, perfSize } from "tests/fixtures/perf.ts"

// N tooltip triggers in a row, like a toolbar of icon buttons, for the counts
// specs. Keyboard focus opens a tooltip at once, so Tab shows
// each in turn. Triggers and contents count their renders, so specs can tell
// what a focus move rendered.
const tips = Array.from({ length: perfSize() }, (_, index) => index + 1)

function Fixture() {
  return (
    <div class="fixture tooltip-page" style={{ "flex-wrap": "wrap" }}>
      <button>Before</button>
      <For each={tips}>
        {(tip) => (
          <div class="tooltip-row">
            <Tooltip delay={0}>
              <TooltipTrigger
                class="tooltip-trigger"
                render={(part) => {
                  countRender("trigger")
                  return <button {...part} />
                }}
              >
                Tip {tip}
              </TooltipTrigger>
              <TooltipContent
                class="tooltip"
                render={(part) => {
                  countRender("tooltip")
                  return <div {...part} />
                }}
              >
                Hint {tip}
              </TooltipContent>
            </Tooltip>
          </div>
        )}
      </For>
      <button>After</button>
    </div>
  )
}

function mount(root: HTMLElement) {
  mountWhenAsked(root, (target) => render(() => <Fixture />, target))
}

export { mount }
