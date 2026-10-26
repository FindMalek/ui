import "@ui-sdk/web/switch"
import "@ui-sdk/web/field"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-field class="flex w-full max-w-sm items-center justify-between gap-6">
      <div class="flex flex-col gap-1.5">
        <ui-field-label class="text-sm leading-none font-medium">Share across devices</ui-field-label>
        <ui-field-description class="m-0 text-sm text-muted-foreground">
          Focus is shared across devices, and turns off when you leave the app.
        </ui-field-description>
      </div>
      <ui-switch class="relative inline-flex h-5 w-8 shrink-0 cursor-default appearance-none items-center rounded-2xl border-2 border-transparent bg-input/90 p-0 outline-none transition-colors after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-invalid:border-foreground aria-invalid:ring-3 aria-invalid:ring-foreground/20 data-checked:border-primary data-checked:bg-primary data-disabled:opacity-50 motion-reduce:transition-none">
        <ui-switch-thumb class="pointer-events-none block size-4 shrink-0 rounded-2xl bg-background shadow-sm transition-transform data-checked:translate-x-[calc(100%-4px)] rtl:data-checked:-translate-x-[calc(100%-4px)] motion-reduce:transition-none"></ui-switch-thumb>
      </ui-switch>
    </ui-field>
  `
}

export { mount }
