import { Switch, SwitchThumb } from "@ui-sdk/react/switch"

export function Example() {
  return (
    <div dir="rtl">
      <label className="flex items-center gap-2 text-sm font-medium">
        <Switch className="inline-flex h-5 w-8 shrink-0 items-center rounded-full border-2 border-transparent bg-input/90 outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-disabled:opacity-50">
          <SwitchThumb className="block size-4 rounded-full bg-background shadow-sm transition-transform data-checked:translate-x-[calc(100%-4px)] rtl:data-checked:-translate-x-[calc(100%-4px)] dark:bg-foreground dark:data-checked:bg-primary-foreground" />
        </Switch>
        وضع الطيران
      </label>
    </div>
  )
}
