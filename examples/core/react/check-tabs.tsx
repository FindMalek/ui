import * as React from "react"
import { checkPattern } from "@ui-sdk/core/testing"
import { Tabs, TabsList, TabsPanel, TabsTab } from "./tabs"

const tab =
  "h-11 min-w-11 rounded-2xl px-2 text-sm font-medium text-muted-foreground outline-none hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 aria-selected:bg-muted aria-selected:text-foreground"

const panel =
  "min-h-16 rounded-xl bg-muted/50 p-3 text-muted-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/30"

function Example() {
  const root = React.useRef<HTMLDivElement>(null)
  const [named, setNamed] = React.useState(true)
  const [result, setResult] = React.useState<{ ok: boolean; text: string } | null>(null)

  async function check() {
    setResult(null)
    try {
      await checkPattern(root.current!, "tabs")
      setResult({ ok: true, text: "Passes: roles, states, names, one tab stop, the arrows, Home and End." })
    } catch (error) {
      setResult({ ok: false, text: (error as Error).message })
    }
  }

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 text-sm">
      <Tabs ref={root} defaultValue="overview" className="flex flex-col gap-3">
        <TabsList aria-label={named ? "Project" : undefined} className="grid grid-cols-3 gap-1">
          <TabsTab value="overview" className={tab}>
            Overview
          </TabsTab>
          <TabsTab value="activity" className={tab}>
            Activity
          </TabsTab>
          <TabsTab value="files" className={tab}>
            Files
          </TabsTab>
        </TabsList>
        <TabsPanel value="overview" className={panel}>
          The project plan and upcoming milestones.
        </TabsPanel>
        <TabsPanel value="activity" className={panel}>
          Recent updates from the project team.
        </TabsPanel>
        <TabsPanel value="files" className={panel}>
          Briefs, mockups and other project files.
        </TabsPanel>
      </Tabs>
      <div className="flex flex-wrap items-center gap-3 border-t border-border pt-4">
        <button
          type="button"
          onClick={check}
          className="min-h-11 rounded-2xl bg-foreground px-3 font-medium text-background outline-none hover:bg-foreground/80 focus-visible:ring-3 focus-visible:ring-ring/30"
        >
          Check the tabs pattern
        </button>
        <label className="flex min-h-11 items-center gap-2 text-muted-foreground">
          <input
            type="checkbox"
            className="size-4 shrink-0 accent-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
            checked={!named}
            onChange={(event) => {
              setNamed(!event.target.checked)
              setResult(null)
            }}
          />
          Leave the tab list unnamed
        </label>
      </div>
      {result && (
        <p
          role="status"
          className={result.ok ? "text-foreground" : "whitespace-pre-wrap font-medium text-foreground"}
        >
          {result.text}
        </p>
      )}
    </div>
  )
}

export { Example }
