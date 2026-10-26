import "@ui-sdk/web/autocomplete"

const recent = ["react hooks", "tailwind grid", "web components", "vue v-model"]
const topics = [...recent, "react server components", "tailwind colors", "vue router"]
const recentSearches = [{ type: "group" as const, label: "Recent searches", items: recent }]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-autocomplete open-on-focus>
      <ui-autocomplete-input>
        <input type="search" aria-label="Search docs" placeholder="Search docs…" class="m-0 box-border h-8 w-72 max-w-full min-w-0 shrink-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base leading-6 text-inherit transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm md:leading-5" />
      </ui-autocomplete-input>
      <ui-autocomplete-content class="max-h-[min(18rem,var(--available-height))] scroll-py-1 overflow-x-hidden overflow-y-auto box-border w-(--anchor-width) min-w-36 rounded-2xl border-0 bg-popover p-1 text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none origin-(--transform-origin) transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0">
        <ui-autocomplete-empty class="m-0 py-2 text-center text-sm leading-5 text-muted-foreground empty:hidden">No topics found.</ui-autocomplete-empty>
        <ui-autocomplete-list></ui-autocomplete-list>
      </ui-autocomplete-content>
      <template>
        <ui-autocomplete-group>
          <ui-autocomplete-group-label class="px-2 py-1 text-xs leading-4 text-muted-foreground"></ui-autocomplete-group-label>
          <ui-autocomplete-item class="relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-xl py-1.5 px-2 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 ring-ring/30 ring-inset in-data-[modality=keyboard]:data-highlighted:ring-2">
            <ui-autocomplete-item-text class="[&_mark]:bg-transparent [&_mark]:font-semibold [&_mark]:text-foreground"></ui-autocomplete-item-text>
          </ui-autocomplete-item>
        </ui-autocomplete-group>
      </template>
    </ui-autocomplete>
  `
  const autocomplete = root.querySelector("ui-autocomplete")!
  autocomplete.announcement = (change) =>
    change.type === "results" ? `${change.count} ${change.count === 1 ? "topic" : "topics"}` : null
  autocomplete.emptyItems = recentSearches
  autocomplete.items = topics
}

export { mount }
