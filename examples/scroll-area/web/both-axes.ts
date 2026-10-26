import "@ui-sdk/web/scroll-area"

const releases = Array.from({ length: 12 }, (_, row) => ({
  version: `v1.${12 - row}.0`,
  cells: [
    "Stable",
    "Downloads 12k",
    "Node 20+",
    "MIT",
    "4.1 MB",
    `2026-0${(row % 9) + 1}-14`,
    "No breaking changes",
  ],
}))

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-scroll-area type="auto" class="h-64 w-full max-w-md rounded-2xl border border-border">
      <ui-scroll-area-viewport class="size-full rounded-[inherit] outline-none transition-[color,box-shadow] focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none">
        <ui-scroll-area-content>
          <table class="text-sm whitespace-nowrap">
            <tbody>
              ${releases
                .map(
                  (release) => `
                    <tr class="border-b border-border">
                      <th class="px-4 py-2 text-start font-medium">${release.version}</th>
                      ${release.cells.map((cell) => `<td class="px-4 py-2 text-muted-foreground">${cell}</td>`).join("")}
                    </tr>`,
                )
                .join("")}
            </tbody>
          </table>
        </ui-scroll-area-content>
      </ui-scroll-area-viewport>
      <ui-scroll-area-scrollbar class="flex w-2.5 border-s border-s-transparent p-px">
        <ui-scroll-area-thumb class="relative flex-1 rounded-full bg-border"></ui-scroll-area-thumb>
      </ui-scroll-area-scrollbar>
      <ui-scroll-area-scrollbar orientation="horizontal" class="flex h-2.5 flex-col border-t border-t-transparent p-px">
        <ui-scroll-area-thumb class="relative flex-1 rounded-full bg-border"></ui-scroll-area-thumb>
      </ui-scroll-area-scrollbar>
      <ui-scroll-area-corner class="bg-muted"></ui-scroll-area-corner>
    </ui-scroll-area>
  `
}

export { mount }
