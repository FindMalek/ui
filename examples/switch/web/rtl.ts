import "@ui-sdk/web/switch"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <div dir="rtl">
      <label class="flex items-center gap-2 text-sm font-medium">
        <ui-switch class="inline-flex h-5 w-8 shrink-0 items-center rounded-full border-2 border-transparent bg-input/90 outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-disabled:opacity-50">
          <ui-switch-thumb class="block size-4 rounded-full bg-background shadow-sm transition-transform data-checked:translate-x-[calc(100%-4px)] rtl:data-checked:-translate-x-[calc(100%-4px)] dark:bg-foreground dark:data-checked:bg-primary-foreground"></ui-switch-thumb>
        </ui-switch>
        وضع الطيران
      </label>
    </div>
  `
}
