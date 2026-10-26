"use client"

import { Listbox, ListboxItem, ListboxItemIcon } from "@ui-sdk/react/listbox"
import { File } from "lucide-react"
import * as React from "react"

const files = [
  { value: "readme", label: "README.md" },
  { value: "package", label: "package.json" },
  { value: "tsconfig", label: "tsconfig.json" },
  { value: "index", label: "index.ts" },
  { value: "styles", label: "styles.css" },
  { value: "logo", label: "logo.svg" },
]

function Example() {
  const [value, setValue] = React.useState<string[]>(["readme"])

  return (
    <div className="flex w-full max-w-64 flex-col gap-3">
      <Listbox
        multiple
        activation="automatic"
        value={value}
        onValueChange={setValue}
        aria-label="Files"
        className="box-border flex w-full max-w-64 flex-col gap-0.5 rounded-2xl border border-border bg-background p-1 text-sm leading-5 text-foreground outline-none"
      >
        {files.map((file) => (
          <ListboxItem
            key={file.value}
            value={file.value}
            className="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm leading-5 outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50 data-selected:bg-accent data-selected:text-accent-foreground data-selected:font-medium"
          >
            <ListboxItemIcon className="flex text-muted-foreground group-data-highlighted:text-accent-foreground group-data-selected:text-accent-foreground">
              <File aria-hidden="true" className="pointer-events-none block size-4 shrink-0" />
            </ListboxItemIcon>
            {file.label}
          </ListboxItem>
        ))}
      </Listbox>
      <output className="m-0 block min-h-10 text-sm leading-5 break-words text-muted-foreground">
        {value.length} selected
      </output>
    </div>
  )
}

export { Example }
