import { Tooltip, TooltipContent, TooltipTrigger } from "@ui-sdk/react/tooltip"
import { createRoot } from "react-dom/client"
import { countRender, mountWhenAsked, perfSize } from "tests/fixtures/perf.ts"

// N tooltip triggers in a row, like a toolbar of icon buttons, for the counts
// specs. Keyboard focus opens a tooltip at once, so Tab shows
// each in turn. Triggers and contents count their renders, so specs can tell
// what a focus move rendered.
const tips = Array.from({ length: perfSize() }, (_, index) => index + 1)

function Fixture() {
  return (
    <div className="fixture tooltip-page" style={{ flexWrap: "wrap" }}>
      <button>Before</button>
      {tips.map((tip) => (
        <div key={tip} className="tooltip-row">
          <Tooltip delay={0}>
            <TooltipTrigger
              className="tooltip-trigger"
              render={(props) => {
                countRender("trigger")
                return <button {...props} />
              }}
            >
              Tip {tip}
            </TooltipTrigger>
            <TooltipContent
              className="tooltip"
              render={(props) => {
                countRender("tooltip")
                return <div {...props} />
              }}
            >
              Hint {tip}
            </TooltipContent>
          </Tooltip>
        </div>
      ))}
      <button>After</button>
    </div>
  )
}

function mount(root: HTMLElement) {
  mountWhenAsked(root, (target) => createRoot(target).render(<Fixture />))
}

export { mount }
