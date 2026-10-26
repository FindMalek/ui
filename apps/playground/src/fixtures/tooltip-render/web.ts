async function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="fixture tooltip-page">
      <button>Before</button>
      <ui-tooltip delay="100">
        <ui-tooltip-trigger><a href="#docs">Docs</a></ui-tooltip-trigger>
        <ui-tooltip-content class="tooltip">Read the docs</ui-tooltip-content>
      </ui-tooltip>
      <ui-tooltip delay="100">
        <ui-tooltip-trigger><button>Status</button></ui-tooltip-trigger>
        <ui-tooltip-content class="tooltip">All systems normal</ui-tooltip-content>
      </ui-tooltip>
      <button>After</button>
    </div>
  `
  await import("@ui-sdk/web/tooltip")
}

export { mount }
