async function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="fixture">
      <button>Before</button>
      <ui-dialog>
        <ui-dialog-trigger><button>Shipping</button></ui-dialog-trigger>
        <ui-dialog-backdrop class="dialog-backdrop"></ui-dialog-backdrop>
        <ui-dialog-content class="dialog">
          <ui-dialog-title as-child><h3>Shipping</h3></ui-dialog-title>
          <ui-dialog-description>Arrives in two days.</ui-dialog-description>
          <ui-dialog-close><a href="#done">Done</a></ui-dialog-close>
        </ui-dialog-content>
      </ui-dialog>
      <button>After</button>
    </div>
  `
  await import("@ui-sdk/web/dialog")
}

export { mount }
