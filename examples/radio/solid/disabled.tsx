import { createUniqueId } from "solid-js"
import { Radio, RadioGroup, RadioIndicator } from "@ui-sdk/solid/radio"

function Example() {
  const id = createUniqueId()
  return (
    <div class="flex flex-wrap gap-8">
      <div class="flex flex-col gap-3">
        <span class="text-sm font-medium text-muted-foreground" id={`${id}-theme-heading`}>
          Theme
        </span>
        <RadioGroup
          class="flex flex-col gap-3"
          defaultValue="light"
          disabled
          aria-labelledby={`${id}-theme-heading`}
        >
          <label class="flex w-fit items-center gap-3 text-sm font-medium has-data-disabled:cursor-default has-data-disabled:opacity-50">
            <Radio
              class="relative flex size-4 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-input/90 outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:bg-primary data-checked:text-primary-foreground data-disabled:cursor-default motion-reduce:transition-none"
              value="light"
            >
              <RadioIndicator class="size-2 rounded-full bg-primary-foreground" />
            </Radio>
            Light
          </label>
          <label class="flex w-fit items-center gap-3 text-sm font-medium has-data-disabled:cursor-default has-data-disabled:opacity-50">
            <Radio
              class="relative flex size-4 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-input/90 outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:bg-primary data-checked:text-primary-foreground data-disabled:cursor-default motion-reduce:transition-none"
              value="dark"
            >
              <RadioIndicator class="size-2 rounded-full bg-primary-foreground" />
            </Radio>
            Dark
          </label>
          <label class="flex w-fit items-center gap-3 text-sm font-medium has-data-disabled:cursor-default has-data-disabled:opacity-50">
            <Radio
              class="relative flex size-4 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-input/90 outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:bg-primary data-checked:text-primary-foreground data-disabled:cursor-default motion-reduce:transition-none"
              value="system"
            >
              <RadioIndicator class="size-2 rounded-full bg-primary-foreground" />
            </Radio>
            System
          </label>
        </RadioGroup>
      </div>
      <div class="flex flex-col gap-3">
        <span class="text-sm font-medium text-muted-foreground" id={`${id}-notify-heading`}>
          Notify me about
        </span>
        <RadioGroup class="flex flex-col gap-3" defaultValue="all" aria-labelledby={`${id}-notify-heading`}>
          <label class="flex w-fit items-center gap-3 text-sm font-medium has-data-disabled:cursor-default has-data-disabled:opacity-50">
            <Radio
              class="relative flex size-4 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-input/90 outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:bg-primary data-checked:text-primary-foreground data-disabled:cursor-default motion-reduce:transition-none"
              value="all"
            >
              <RadioIndicator class="size-2 rounded-full bg-primary-foreground" />
            </Radio>
            All
          </label>
          <label class="flex w-fit items-center gap-3 text-sm font-medium has-data-disabled:cursor-default has-data-disabled:opacity-50">
            <Radio
              class="relative flex size-4 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-input/90 outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:bg-primary data-checked:text-primary-foreground data-disabled:cursor-default motion-reduce:transition-none"
              value="mentions"
              disabled
            >
              <RadioIndicator class="size-2 rounded-full bg-primary-foreground" />
            </Radio>
            Mentions
          </label>
          <label class="flex w-fit items-center gap-3 text-sm font-medium has-data-disabled:cursor-default has-data-disabled:opacity-50">
            <Radio
              class="relative flex size-4 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-input/90 outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:bg-primary data-checked:text-primary-foreground data-disabled:cursor-default motion-reduce:transition-none"
              value="nothing"
            >
              <RadioIndicator class="size-2 rounded-full bg-primary-foreground" />
            </Radio>
            Nothing
          </label>
        </RadioGroup>
      </div>
    </div>
  )
}

export { Example }
