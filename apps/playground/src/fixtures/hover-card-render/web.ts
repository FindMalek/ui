async function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="fixture">
      <button>Before</button>
      <ui-hover-card delay="100" close-delay="100">
        <ui-hover-card-trigger><a href="#repo">ui-sdk</a></ui-hover-card-trigger>
        <ui-hover-card-content as-child><section class="hover-card" aria-label="Repository">A headless UI kit.</section></ui-hover-card-content>
      </ui-hover-card>
      <button>After</button>
    </div>
  `
  await import("@ui-sdk/web/hover-card")
}

export { mount }
