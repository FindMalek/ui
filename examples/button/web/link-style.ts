import "@ui-sdk/web/button"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <p class="text-sm text-muted-foreground">
      Didn't get the email?
      <ui-button>
        <button class="inline h-auto rounded-md p-0 font-medium text-primary underline-offset-4 outline-none hover:underline focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30">
          Resend code
        </button>
      </ui-button>
    </p>
  `
}
