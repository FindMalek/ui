import "@ui-sdk/web/radio"

function mount(root: HTMLElement) {
  const id = crypto.randomUUID()
  root.innerHTML = `
    <div class="flex flex-wrap gap-8">
      <div class="flex flex-col gap-3">
        <span class="text-sm font-medium text-muted-foreground" id="${id}-theme-heading">Theme</span>
        <ui-radio-group class="flex flex-col gap-3" default-value="light" disabled aria-labelledby="${id}-theme-heading">
          <label class="flex w-fit items-center gap-3 text-sm font-medium has-data-disabled:cursor-default has-data-disabled:opacity-50">
            <ui-radio class="relative flex size-4 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-input/90 outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:bg-primary data-checked:text-primary-foreground data-disabled:cursor-default motion-reduce:transition-none" value="light">
              <ui-radio-indicator class="size-2 rounded-full bg-primary-foreground"></ui-radio-indicator>
            </ui-radio>
            Light
          </label>
          <label class="flex w-fit items-center gap-3 text-sm font-medium has-data-disabled:cursor-default has-data-disabled:opacity-50">
            <ui-radio class="relative flex size-4 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-input/90 outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:bg-primary data-checked:text-primary-foreground data-disabled:cursor-default motion-reduce:transition-none" value="dark">
              <ui-radio-indicator class="size-2 rounded-full bg-primary-foreground"></ui-radio-indicator>
            </ui-radio>
            Dark
          </label>
          <label class="flex w-fit items-center gap-3 text-sm font-medium has-data-disabled:cursor-default has-data-disabled:opacity-50">
            <ui-radio class="relative flex size-4 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-input/90 outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:bg-primary data-checked:text-primary-foreground data-disabled:cursor-default motion-reduce:transition-none" value="system">
              <ui-radio-indicator class="size-2 rounded-full bg-primary-foreground"></ui-radio-indicator>
            </ui-radio>
            System
          </label>
        </ui-radio-group>
      </div>
      <div class="flex flex-col gap-3">
        <span class="text-sm font-medium text-muted-foreground" id="${id}-notify-heading">Notify me about</span>
        <ui-radio-group class="flex flex-col gap-3" default-value="all" aria-labelledby="${id}-notify-heading">
          <label class="flex w-fit items-center gap-3 text-sm font-medium has-data-disabled:cursor-default has-data-disabled:opacity-50">
            <ui-radio class="relative flex size-4 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-input/90 outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:bg-primary data-checked:text-primary-foreground data-disabled:cursor-default motion-reduce:transition-none" value="all">
              <ui-radio-indicator class="size-2 rounded-full bg-primary-foreground"></ui-radio-indicator>
            </ui-radio>
            All
          </label>
          <label class="flex w-fit items-center gap-3 text-sm font-medium has-data-disabled:cursor-default has-data-disabled:opacity-50">
            <ui-radio class="relative flex size-4 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-input/90 outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:bg-primary data-checked:text-primary-foreground data-disabled:cursor-default motion-reduce:transition-none" value="mentions" disabled>
              <ui-radio-indicator class="size-2 rounded-full bg-primary-foreground"></ui-radio-indicator>
            </ui-radio>
            Mentions
          </label>
          <label class="flex w-fit items-center gap-3 text-sm font-medium has-data-disabled:cursor-default has-data-disabled:opacity-50">
            <ui-radio class="relative flex size-4 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-input/90 outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:bg-primary data-checked:text-primary-foreground data-disabled:cursor-default motion-reduce:transition-none" value="nothing">
              <ui-radio-indicator class="size-2 rounded-full bg-primary-foreground"></ui-radio-indicator>
            </ui-radio>
            Nothing
          </label>
        </ui-radio-group>
      </div>
    </div>
  `
}

export { mount }
