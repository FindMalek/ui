import "@ui-sdk/web/dialog"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-dialog presentation="sheet">
      <ui-dialog-trigger><button class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground outline-none select-none transition-colors hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 data-open:bg-muted">Edit profile</button></ui-dialog-trigger>
      <ui-dialog-content class="grid gap-6 border-0 bg-popover p-6 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none motion-reduce:transition-none data-[presentation=dialog]:fixed data-[presentation=dialog]:top-1/2 data-[presentation=dialog]:left-1/2 data-[presentation=dialog]:w-full data-[presentation=dialog]:max-w-[calc(100%-2rem)] data-[presentation=dialog]:-translate-1/2 data-[presentation=dialog]:rounded-[min(var(--radius-4xl),24px)] data-[presentation=dialog]:transition-[opacity,scale] data-[presentation=dialog]:duration-100 data-[presentation=dialog]:backdrop:bg-black/30 data-[presentation=dialog]:data-starting-style:scale-95 data-[presentation=dialog]:data-starting-style:opacity-0 data-[presentation=dialog]:data-ending-style:scale-95 data-[presentation=dialog]:data-ending-style:opacity-0 data-[presentation=dialog]:sm:max-w-md data-[presentation=sheet]:rounded-t-[min(var(--radius-4xl),24px)] data-[presentation=sheet]:pb-[max(env(safe-area-inset-bottom),1.5rem)] data-[presentation=sheet]:[--sheet-backdrop:rgb(0_0_0/0.3)]">
        <div class="flex flex-col gap-1.5">
          <ui-dialog-title class="m-0 text-base leading-none font-medium">Edit profile</ui-dialog-title>
          <ui-dialog-description class="m-0 text-sm text-muted-foreground">Make changes to your profile here. Click save when you're done.</ui-dialog-description>
        </div>
        <div class="grid gap-4">
          <label class="grid gap-2 text-sm font-medium">
            Name
            <input value="Pedro Duarte" class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base font-normal text-foreground outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:opacity-50 md:text-sm" />
          </label>
          <label class="grid gap-2 text-sm font-medium">
            Username
            <input value="@peduarte" class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base font-normal text-foreground outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:opacity-50 md:text-sm" />
          </label>
        </div>
        <div class="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <ui-dialog-close><button class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground outline-none select-none transition-colors hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50">Cancel</button></ui-dialog-close>
          <ui-dialog-close value="save"><button class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary px-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-colors hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50">Save changes</button></ui-dialog-close>
        </div>
      </ui-dialog-content>
    </ui-dialog>
  `
}

export { mount }
