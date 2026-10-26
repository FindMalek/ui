import { Toggle, ToggleGroup, ToggleIcon } from "@ui-sdk/react/toggle"
import { TextAlignCenter, TextAlignEnd, TextAlignStart } from "lucide-react"

const alignments = [
  { value: "left", label: "Align left", icon: TextAlignStart },
  { value: "center", label: "Align center", icon: TextAlignCenter },
  { value: "right", label: "Align right", icon: TextAlignEnd },
]

function Example() {
  return (
    <ToggleGroup
      defaultValue={["left"]}
      aria-label="Text alignment"
      className="flex w-fit items-center gap-1"
    >
      {alignments.map((item) => (
        <Toggle
          key={item.value}
          value={item.value}
          aria-label={item.label}
          className="inline-flex h-8 min-w-8 shrink-0 cursor-default items-center justify-center gap-1 rounded-2xl border border-transparent bg-transparent px-2.5 text-sm font-medium whitespace-nowrap outline-none transition-colors not-data-disabled:hover:bg-muted not-data-disabled:hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted disabled:pointer-events-none data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none"
        >
          <ToggleIcon className="flex">
            <item.icon className="size-4" />
          </ToggleIcon>
        </Toggle>
      ))}
    </ToggleGroup>
  )
}

export { Example }
