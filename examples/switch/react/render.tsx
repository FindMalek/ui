import { Switch, SwitchThumb } from "@ui-sdk/react/switch"
import { Moon, Sun } from "lucide-react"

export function Example() {
  return (
    <label className="flex items-center gap-2 text-sm font-medium">
      <Switch
        className={(state) =>
          `inline-flex h-5 w-8 shrink-0 items-center rounded-full border-2 outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 ${state.checked ? "border-primary bg-primary" : "border-transparent bg-input/90"}`
        }
      >
        <SwitchThumb
          className="flex size-4 items-center justify-center rounded-full bg-background text-foreground shadow-sm transition-transform data-checked:translate-x-[calc(100%-4px)] rtl:data-checked:-translate-x-[calc(100%-4px)] dark:bg-foreground dark:text-background dark:data-checked:bg-primary-foreground dark:data-checked:text-foreground"
          render={(props, state) => (
            <span {...props}>{state.checked ? <Moon className="size-3" /> : <Sun className="size-3" />}</span>
          )}
        />
      </Switch>
      Dark mode
    </label>
  )
}
