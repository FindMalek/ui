"use client"

import {
  ScrollArea,
  ScrollAreaContent,
  ScrollAreaCorner,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "@ui-sdk/react/scroll-area"

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

function Example() {
  return (
    <ScrollArea type="auto" className="h-64 w-full max-w-md rounded-2xl border border-border">
      <ScrollAreaViewport className="size-full rounded-[inherit] outline-none transition-[color,box-shadow] focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none">
        <ScrollAreaContent>
          <table className="text-sm whitespace-nowrap">
            <tbody>
              {releases.map((release) => (
                <tr key={release.version} className="border-b border-border">
                  <th className="px-4 py-2 text-start font-medium">{release.version}</th>
                  {release.cells.map((cell) => (
                    <td key={cell} className="px-4 py-2 text-muted-foreground">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </ScrollAreaContent>
      </ScrollAreaViewport>
      <ScrollAreaScrollbar className="flex w-2.5 border-s border-s-transparent p-px">
        <ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
      </ScrollAreaScrollbar>
      <ScrollAreaScrollbar
        orientation="horizontal"
        className="flex h-2.5 flex-col border-t border-t-transparent p-px"
      >
        <ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
      </ScrollAreaScrollbar>
      <ScrollAreaCorner className="bg-muted" />
    </ScrollArea>
  )
}

export { Example }
