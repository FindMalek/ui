import "@ui-sdk/web/switch"
import "@ui-sdk/web/field"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-field class="flex w-full max-w-md flex-row items-center justify-between gap-4 rounded-2xl border border-border p-4">
      <div class="flex flex-col gap-1.5">
        <ui-field-label class="text-sm leading-snug font-medium">Multi-factor authentication</ui-field-label>
        <ui-field-description class="text-sm text-muted-foreground">
          Enable multi-factor authentication. If you don't have a two-factor device, use a one-time code sent to
          your email.
        </ui-field-description>
      </div>
      <ui-switch class="inline-flex h-5 w-8 shrink-0 items-center rounded-full border-2 border-transparent bg-input/90 outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-disabled:opacity-50" name="mfa">
        <ui-switch-thumb class="block size-4 rounded-full bg-background shadow-sm transition-transform data-checked:translate-x-[calc(100%-4px)] rtl:data-checked:-translate-x-[calc(100%-4px)] dark:bg-foreground dark:data-checked:bg-primary-foreground"></ui-switch-thumb>
      </ui-switch>
    </ui-field>
  `
}
