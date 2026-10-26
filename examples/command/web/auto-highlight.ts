import "@ui-sdk/web/command"

const commands = ["Home", "Inbox", "Documents", "Downloads", "Pictures", "Music", "New file", "New folder"]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-command auto-highlight="false" loop="false" class="flex h-80 w-full max-w-sm flex-col overflow-hidden rounded-3xl bg-popover p-1 text-popover-foreground ring-1 ring-foreground/5">
      <div class="shrink-0 p-1 pb-0">
        <ui-command-input>
          <input aria-label="Search commands" placeholder="Type, then press ArrowDown" class="m-0 box-border h-8 w-full min-w-0 shrink-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base leading-6 text-inherit transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm md:leading-5" />
        </ui-command-input>
      </div>
      <ui-command-list class="min-h-0 flex-1 scroll-py-1 overflow-x-hidden overflow-y-auto outline-none max-h-48 p-1">
        ${commands.map((label) => `<ui-command-item value="${label}" class="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm leading-5 outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50">${label}</ui-command-item>`).join("")}
      </ui-command-list>
    </ui-command>
  `
}

export { mount }
