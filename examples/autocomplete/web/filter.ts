import "@ui-sdk/web/autocomplete"

const tags = [
  { value: "feature", label: "feature", keywords: ["enhancement", "request"] },
  { value: "fix", label: "fix", keywords: ["bug", "patch"] },
  { value: "docs", label: "docs", keywords: ["documentation", "readme"] },
  { value: "performance", label: "performance", keywords: ["speed", "slow"] },
  { value: "security", label: "security", keywords: ["vulnerability"] },
  { value: "refactor", label: "refactor", keywords: ["cleanup"] },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-autocomplete filter="startsWith">
      <div class="flex w-64 max-w-full flex-col gap-2">
        <ui-autocomplete-label class="text-sm leading-none font-medium">Tag</ui-autocomplete-label>
        <ui-autocomplete-input>
          <input placeholder="Try “bug”" class="m-0 box-border h-8 w-full min-w-0 shrink-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base leading-6 text-inherit transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm md:leading-5" />
        </ui-autocomplete-input>
      </div>
      <ui-autocomplete-content class="max-h-[min(18rem,var(--available-height))] scroll-py-1 overflow-x-hidden overflow-y-auto box-border w-(--anchor-width) min-w-36 rounded-2xl border-0 bg-popover p-1 text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none origin-(--transform-origin) transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0">
        <ui-autocomplete-empty class="m-0 py-2 text-center text-sm leading-5 text-muted-foreground empty:hidden">No tags found.</ui-autocomplete-empty>
        <ui-autocomplete-list>
          ${tags
            .map(
              (tag) => `
                <ui-autocomplete-item value="${tag.value}" label="${tag.label}" keywords="${tag.keywords.join(",")}" class="relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-xl py-1.5 px-2 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 ring-ring/30 ring-inset in-data-[modality=keyboard]:data-highlighted:ring-2">
                  <span class="size-2 shrink-0 rounded-full bg-muted-foreground"></span>
                  ${tag.label}
                  <span class="ms-auto text-xs leading-4 text-muted-foreground">${tag.keywords[0]}</span>
                </ui-autocomplete-item>
              `,
            )
            .join("")}
        </ui-autocomplete-list>
      </ui-autocomplete-content>
    </ui-autocomplete>
  `
}

export { mount }
