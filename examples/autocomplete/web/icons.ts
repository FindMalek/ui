import "@ui-sdk/web/autocomplete"
import { Archive, Clock, createElement, File, Pencil, Reply, Star } from "lucide"

const mailSearches = [
  { value: "Starred", icon: Star },
  { value: "Drafts", icon: Pencil },
  { value: "Replies", icon: Reply, mirror: true },
  { value: "Attachments", icon: File },
  { value: "Archived", icon: Archive },
  { value: "Scheduled", icon: Clock },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-autocomplete>
      <ui-autocomplete-input>
        <input type="search" aria-label="Search mail" placeholder="Search mail…" class="m-0 box-border h-8 w-64 max-w-full min-w-0 shrink-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base leading-6 text-inherit transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm md:leading-5" />
      </ui-autocomplete-input>
      <ui-autocomplete-content class="max-h-[min(18rem,var(--available-height))] scroll-py-1 overflow-x-hidden overflow-y-auto box-border w-(--anchor-width) min-w-36 rounded-2xl border-0 bg-popover p-1 text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none origin-(--transform-origin) transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0">
        <ui-autocomplete-empty class="m-0 py-2 text-center text-sm leading-5 text-muted-foreground empty:hidden">No searches found.</ui-autocomplete-empty>
        <ui-autocomplete-list>
          ${mailSearches
            .map(
              (search) => `
                <ui-autocomplete-item value="${search.value}" class="group relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-xl py-1.5 px-2 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 ring-ring/30 ring-inset in-data-[modality=keyboard]:data-highlighted:ring-2"><ui-autocomplete-item-icon ${search.mirror ? "mirror" : ""} class="flex shrink-0 text-muted-foreground group-data-highlighted:text-accent-foreground">${createElement(search.icon, { class: "pointer-events-none block size-4 shrink-0", "aria-hidden": "true" }).outerHTML}</ui-autocomplete-item-icon>${search.value}</ui-autocomplete-item>
              `,
            )
            .join("")}
        </ui-autocomplete-list>
      </ui-autocomplete-content>
    </ui-autocomplete>
  `
}

export { mount }
