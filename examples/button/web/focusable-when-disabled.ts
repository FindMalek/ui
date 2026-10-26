import "@ui-sdk/web/button"

function mount(root: HTMLElement) {
  const hintId = `publish-hint-${crypto.randomUUID()}`
  root.innerHTML = `
    <div class="flex w-full max-w-sm flex-col gap-3 text-foreground">
      <label class="flex flex-col gap-2 text-sm leading-5">Title<input class="h-8 w-full min-w-0 appearance-none rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base text-foreground outline-none transition-[color,box-shadow] duration-200 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 md:text-sm motion-reduce:transition-none" /></label>
      <div class="flex items-center gap-3">
        <ui-button disabled focusable-when-disabled>
          <button aria-describedby="${hintId}" class="inline-flex h-8 shrink-0 cursor-default appearance-none items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-clip-padding px-3 py-0 text-sm leading-5 font-medium whitespace-nowrap outline-none select-none transition-all focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50 data-disabled:opacity-50 motion-reduce:transition-none bg-secondary text-secondary-foreground hover:not-aria-disabled:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] enabled:active:not-aria-disabled:translate-y-px data-disabled:cursor-default">Publish</button>
        </ui-button>
        <p id="${hintId}" class="m-0 flex min-h-10 items-center text-sm leading-5 text-muted-foreground">Add a title to publish.</p>
      </div>
    </div>
  `
  const title = root.querySelector("input")!
  const publish = root.querySelector("ui-button")!
  const hint = root.querySelector("p")!
  title.addEventListener("input", () => {
    const ready = title.value.trim() !== ""
    publish.disabled = !ready
    hint.textContent = ready ? "Ready to publish." : "Add a title to publish."
  })
  publish.addEventListener("action", () => {
    hint.textContent = "Published."
  })
}

export { mount }
