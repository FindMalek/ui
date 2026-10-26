import "@ui-sdk/web/otp-input"
import type { OTPInputEvents } from "@ui-sdk/web"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex min-w-0 flex-col gap-2 text-foreground">
      <label for="one-time-password" class="text-sm leading-none font-medium text-foreground data-disabled:opacity-50">One-time password</label>
      <ui-otp-input class="flex items-center gap-2 text-foreground data-disabled:opacity-50">
        <ui-otp-input-group class="flex items-center">
          <ui-otp-input-slot class="relative flex size-8 items-center justify-center border-y border-e border-input bg-input/50 text-sm transition-[color,box-shadow] duration-200 outline-none first:rounded-s-2xl first:border-s last:rounded-e-2xl data-active:z-10 data-active:border-ring data-active:ring-3 data-active:ring-ring/30 data-fake-caret:after:absolute data-fake-caret:after:h-4 data-fake-caret:after:w-px data-fake-caret:after:animate-caret-blink data-fake-caret:after:bg-foreground motion-reduce:transition-none motion-reduce:after:animate-none"></ui-otp-input-slot>
          <ui-otp-input-slot class="relative flex size-8 items-center justify-center border-y border-e border-input bg-input/50 text-sm transition-[color,box-shadow] duration-200 outline-none first:rounded-s-2xl first:border-s last:rounded-e-2xl data-active:z-10 data-active:border-ring data-active:ring-3 data-active:ring-ring/30 data-fake-caret:after:absolute data-fake-caret:after:h-4 data-fake-caret:after:w-px data-fake-caret:after:animate-caret-blink data-fake-caret:after:bg-foreground motion-reduce:transition-none motion-reduce:after:animate-none"></ui-otp-input-slot>
          <ui-otp-input-slot class="relative flex size-8 items-center justify-center border-y border-e border-input bg-input/50 text-sm transition-[color,box-shadow] duration-200 outline-none first:rounded-s-2xl first:border-s last:rounded-e-2xl data-active:z-10 data-active:border-ring data-active:ring-3 data-active:ring-ring/30 data-fake-caret:after:absolute data-fake-caret:after:h-4 data-fake-caret:after:w-px data-fake-caret:after:animate-caret-blink data-fake-caret:after:bg-foreground motion-reduce:transition-none motion-reduce:after:animate-none"></ui-otp-input-slot>
          <ui-otp-input-slot class="relative flex size-8 items-center justify-center border-y border-e border-input bg-input/50 text-sm transition-[color,box-shadow] duration-200 outline-none first:rounded-s-2xl first:border-s last:rounded-e-2xl data-active:z-10 data-active:border-ring data-active:ring-3 data-active:ring-ring/30 data-fake-caret:after:absolute data-fake-caret:after:h-4 data-fake-caret:after:w-px data-fake-caret:after:animate-caret-blink data-fake-caret:after:bg-foreground motion-reduce:transition-none motion-reduce:after:animate-none"></ui-otp-input-slot>
          <ui-otp-input-slot class="relative flex size-8 items-center justify-center border-y border-e border-input bg-input/50 text-sm transition-[color,box-shadow] duration-200 outline-none first:rounded-s-2xl first:border-s last:rounded-e-2xl data-active:z-10 data-active:border-ring data-active:ring-3 data-active:ring-ring/30 data-fake-caret:after:absolute data-fake-caret:after:h-4 data-fake-caret:after:w-px data-fake-caret:after:animate-caret-blink data-fake-caret:after:bg-foreground motion-reduce:transition-none motion-reduce:after:animate-none"></ui-otp-input-slot>
          <ui-otp-input-slot class="relative flex size-8 items-center justify-center border-y border-e border-input bg-input/50 text-sm transition-[color,box-shadow] duration-200 outline-none first:rounded-s-2xl first:border-s last:rounded-e-2xl data-active:z-10 data-active:border-ring data-active:ring-3 data-active:ring-ring/30 data-fake-caret:after:absolute data-fake-caret:after:h-4 data-fake-caret:after:w-px data-fake-caret:after:animate-caret-blink data-fake-caret:after:bg-foreground motion-reduce:transition-none motion-reduce:after:animate-none"></ui-otp-input-slot>
        </ui-otp-input-group>
        <ui-otp-input-control><input id="one-time-password" /></ui-otp-input-control>
      </ui-otp-input>
      <p class="min-h-5 text-sm text-muted-foreground">Enter your one-time password.</p>
    </div>
  `
  const message = root.querySelector("p")!
  root.querySelector("ui-otp-input")!.addEventListener("valuechange", (event) => {
    const { value } = (event as OTPInputEvents["valuechange"]).detail
    message.textContent = value ? `You entered: ${value}` : "Enter your one-time password."
  })
}
