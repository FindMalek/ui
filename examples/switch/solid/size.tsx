import { Switch, SwitchThumb } from "@ui-sdk/solid/switch"

export function Example() {
  return (
    <div class="flex items-center gap-6">
      <label class="flex items-center gap-2 text-sm font-medium">
        <Switch class="inline-flex h-4 w-6 shrink-0 items-center rounded-full border-2 border-transparent bg-input/90 outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-disabled:opacity-50">
          <SwitchThumb class="block size-3 rounded-full bg-background shadow-sm transition-transform data-checked:translate-x-[calc(100%-4px)] rtl:data-checked:-translate-x-[calc(100%-4px)] dark:bg-foreground dark:data-checked:bg-primary-foreground" />
        </Switch>
        Small
      </label>
      <label class="flex items-center gap-2 text-sm font-medium">
        <Switch class="inline-flex h-5 w-8 shrink-0 items-center rounded-full border-2 border-transparent bg-input/90 outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-disabled:opacity-50">
          <SwitchThumb class="block size-4 rounded-full bg-background shadow-sm transition-transform data-checked:translate-x-[calc(100%-4px)] rtl:data-checked:-translate-x-[calc(100%-4px)] dark:bg-foreground dark:data-checked:bg-primary-foreground" />
        </Switch>
        Default
      </label>
    </div>
  )
}
