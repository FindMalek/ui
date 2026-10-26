import "@ui-sdk/web/button"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <form class="flex w-full max-w-sm flex-col gap-3 text-foreground">
      <label class="flex flex-col gap-2 text-sm leading-5">Email<input name="email" type="email" value="ada@example.com" class="h-8 w-full min-w-0 appearance-none rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base text-foreground outline-none transition-[color,box-shadow] duration-200 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 md:text-sm motion-reduce:transition-none" /></label>
      <div class="flex gap-2">
        <ui-button><button type="submit" class="inline-flex h-8 shrink-0 cursor-default appearance-none items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-clip-padding px-3 py-0 text-sm leading-5 font-medium whitespace-nowrap outline-none select-none transition-all focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50 data-disabled:opacity-50 motion-reduce:transition-none bg-secondary text-secondary-foreground hover:not-aria-disabled:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] enabled:active:not-aria-disabled:translate-y-px">Subscribe</button></ui-button>
        <ui-button><button type="reset" class="inline-flex h-8 shrink-0 cursor-default appearance-none items-center justify-center gap-1.5 rounded-2xl border bg-clip-padding px-3 py-0 text-sm leading-5 font-medium whitespace-nowrap outline-none select-none transition-all focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50 data-disabled:opacity-50 motion-reduce:transition-none border-border bg-background text-foreground hover:not-aria-disabled:bg-muted dark:bg-transparent dark:hover:not-aria-disabled:bg-input/30 enabled:active:not-aria-disabled:translate-y-px">Reset</button></ui-button>
      </div>
      <output class="block h-10 overflow-auto text-sm leading-5 wrap-break-word text-muted-foreground"></output>
    </form>
  `
  const form = root.querySelector("form")!
  const output = root.querySelector("output")!
  let count = 0
  form.addEventListener("submit", (event) => {
    event.preventDefault()
    count++
    output.textContent = `Submitted: ${new FormData(form).get("email")} (${count} ${count === 1 ? "time" : "times"})`
  })
  form.addEventListener("reset", () => {
    count = 0
    output.textContent = ""
  })
}

export { mount }
