import "@ui-sdk/web/otp-input"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-otp-input max-length="5" aria-label="Invite code" class="flex items-center gap-2 rounded-3xl p-1 transition-colors data-complete:bg-muted data-focused:not-data-complete:bg-muted/50">
      <ui-otp-input-group class="flex items-center gap-1.5">
        <ui-otp-input-slot class="flex size-10 items-center justify-center rounded-2xl border border-transparent bg-input/50 text-lg font-medium transition-[color,box-shadow] duration-200 data-active:border-ring data-active:ring-3 data-active:ring-ring/30 data-fake-caret:after:h-5 data-fake-caret:after:w-px data-fake-caret:after:animate-caret-blink data-fake-caret:after:bg-foreground"></ui-otp-input-slot>
        <ui-otp-input-slot class="flex size-10 items-center justify-center rounded-2xl border border-transparent bg-input/50 text-lg font-medium transition-[color,box-shadow] duration-200 data-active:border-ring data-active:ring-3 data-active:ring-ring/30 data-fake-caret:after:h-5 data-fake-caret:after:w-px data-fake-caret:after:animate-caret-blink data-fake-caret:after:bg-foreground"></ui-otp-input-slot>
        <ui-otp-input-slot class="flex size-10 items-center justify-center rounded-2xl border border-transparent bg-input/50 text-lg font-medium transition-[color,box-shadow] duration-200 data-active:border-ring data-active:ring-3 data-active:ring-ring/30 data-fake-caret:after:h-5 data-fake-caret:after:w-px data-fake-caret:after:animate-caret-blink data-fake-caret:after:bg-foreground"></ui-otp-input-slot>
        <ui-otp-input-slot class="flex size-10 items-center justify-center rounded-2xl border border-transparent bg-input/50 text-lg font-medium transition-[color,box-shadow] duration-200 data-active:border-ring data-active:ring-3 data-active:ring-ring/30 data-fake-caret:after:h-5 data-fake-caret:after:w-px data-fake-caret:after:animate-caret-blink data-fake-caret:after:bg-foreground"></ui-otp-input-slot>
        <ui-otp-input-slot class="flex size-10 items-center justify-center rounded-2xl border border-transparent bg-input/50 text-lg font-medium transition-[color,box-shadow] duration-200 data-active:border-ring data-active:ring-3 data-active:ring-ring/30 data-fake-caret:after:h-5 data-fake-caret:after:w-px data-fake-caret:after:animate-caret-blink data-fake-caret:after:bg-foreground"></ui-otp-input-slot>
      </ui-otp-input-group>
    </ui-otp-input>
  `
}
