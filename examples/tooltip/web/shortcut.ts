import "@ui-sdk/web/tooltip"
import { registerShortcut } from "@ui-sdk/web"
import { createElement, Save, Share2 } from "lucide"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex flex-col items-center">
      <div class="flex gap-2">
        <ui-tooltip shortcut="mod+s">
          <ui-tooltip-trigger><button data-action="save" class="inline-flex size-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-aria-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-disabled:opacity-50 motion-reduce:transition-none">${createElement(Save, { class: "size-4", "aria-hidden": "true" }).outerHTML}</button></ui-tooltip-trigger>
          <ui-tooltip-content class="inline-flex w-fit max-w-xs origin-(--transform-origin) items-center gap-1.5 rounded-xl bg-foreground px-3 py-1.5 text-xs text-background transition-[opacity,scale] duration-100 has-data-[slot=tooltip-shortcut]:pe-1.5 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 data-instant:transition-none motion-reduce:transition-none">
            Save
            <ui-tooltip-shortcut class="inline-flex h-5 min-w-5 items-center justify-center gap-1 rounded-lg bg-background/20 px-1 font-sans text-xs font-medium text-background dark:bg-background/10"></ui-tooltip-shortcut>
          </ui-tooltip-content>
        </ui-tooltip>
        <ui-tooltip shortcut="mod+shift+e">
          <ui-tooltip-trigger><button data-action="share" class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-aria-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-disabled:opacity-50 motion-reduce:transition-none">${createElement(Share2, { class: "size-4", "aria-hidden": "true" }).outerHTML}Share</button></ui-tooltip-trigger>
          <ui-tooltip-content class="inline-flex w-fit max-w-xs origin-(--transform-origin) items-center gap-1.5 rounded-xl bg-foreground px-3 py-1.5 text-xs text-background transition-[opacity,scale] duration-100 has-data-[slot=tooltip-shortcut]:pe-1.5 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 data-instant:transition-none motion-reduce:transition-none">
            Share with your team
            <ui-tooltip-shortcut class="inline-flex h-5 min-w-5 items-center justify-center gap-1 rounded-lg bg-background/20 px-1 font-sans text-xs font-medium text-background dark:bg-background/10"></ui-tooltip-shortcut>
          </ui-tooltip-content>
        </ui-tooltip>
      </div>
      <output class="mt-3 text-sm text-muted-foreground">Nothing yet</output>
    </div>
  `
  const output = root.querySelector("output")!
  const actions = { save: () => (output.textContent = "Saved"), share: () => (output.textContent = "Shared") }
  root.querySelector('[data-action="save"]')!.addEventListener("click", actions.save)
  root.querySelector('[data-action="share"]')!.addEventListener("click", actions.share)

  const offs = [registerShortcut("mod+s", actions.save), registerShortcut("mod+shift+e", actions.share)]
  return () => offs.forEach((off) => off())
}

export { mount }
