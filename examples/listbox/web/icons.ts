import "@ui-sdk/web/listbox"
import { Archive, ArrowRight, createElement, Mail, Pencil, Star } from "lucide"

const views = [
  { value: "inbox", label: "Inbox", icon: Mail },
  { value: "starred", label: "Starred", icon: Star },
  { value: "drafts", label: "Drafts", icon: Pencil },
  { value: "archive", label: "Archive", icon: Archive },
  { value: "next", label: "Next page", icon: ArrowRight },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-listbox default-value="inbox" aria-label="Mailbox" class="box-border flex w-full max-w-64 flex-col gap-0.5 rounded-2xl border border-border bg-background p-1 text-sm leading-5 text-foreground outline-none">
      ${views
        .map(
          (view) => `
            <ui-listbox-item value="${view.value}" class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm leading-5 outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50 data-selected:font-medium">
              <ui-listbox-item-icon${view.icon === ArrowRight ? " mirror" : ""} class="flex text-muted-foreground group-data-highlighted:text-accent-foreground group-data-selected:text-accent-foreground">${createElement(view.icon, { class: "pointer-events-none block size-4 shrink-0", "aria-hidden": "true" }).outerHTML}</ui-listbox-item-icon>
              ${view.label}
            </ui-listbox-item>`,
        )
        .join("")}
    </ui-listbox>
  `
}

export { mount }
