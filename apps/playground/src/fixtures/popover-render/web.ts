async function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="fixture">
      <button>Before</button>
      <ui-popover>
        <ui-popover-trigger><button>Details</button></ui-popover-trigger>
        <ui-popover-content class="popup">
          <ui-popover-title as-child><h3>Shipping</h3></ui-popover-title>
          <ui-popover-close><a href="#done">Done</a></ui-popover-close>
        </ui-popover-content>
      </ui-popover>
      <button>After</button>
    </div>
  `
  await import("@ui-sdk/web/popover")
}

export { mount }
