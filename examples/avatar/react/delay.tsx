import { Avatar, AvatarFallback } from "@ui-sdk/react/avatar"
import * as React from "react"

export function Example() {
  const [run, setRun] = React.useState(0)

  return (
    <div className="flex flex-col items-start gap-4 text-foreground">
      <div key={run} className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Avatar className="relative flex size-8 shrink-0 rounded-full select-none after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken dark:after:mix-blend-lighten bg-muted/50">
            <AvatarFallback className="flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground">
              <span aria-hidden="true">AT</span>
              <span className="sr-only">Alan Turing</span>
            </AvatarFallback>
          </Avatar>
          At once
        </div>
        <div className="flex items-center gap-2">
          <Avatar className="relative flex size-8 shrink-0 rounded-full select-none after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken dark:after:mix-blend-lighten bg-muted/50">
            <AvatarFallback
              delay={600}
              className="flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground"
            >
              <span aria-hidden="true">MH</span>
              <span className="sr-only">Margaret Hamilton</span>
            </AvatarFallback>
          </Avatar>
          After 600 ms
        </div>
      </div>
      <button
        type="button"
        className="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklab,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px aria-pressed:ring-1 aria-pressed:ring-ring motion-reduce:transition-none"
        onClick={() => setRun((count) => count + 1)}
      >
        Replay
      </button>
    </div>
  )
}
