import { CaretDownIcon } from "@phosphor-icons/react"
import {
  Collapsible,
  CollapsiblePanel,
  CollapsibleTrigger,
} from "@ui-sdk/react/collapsible"
import { Input } from "@ui-sdk/react/input"
import {
  SegmentedControl,
  SegmentedControlIndicator,
  SegmentedControlItem,
} from "@ui-sdk/react/segmented-control"
import { Toggle, ToggleGroup } from "@ui-sdk/react/toggle"
import { useMemo, useRef, useState } from "react"
import { kindOf } from "./registry"

type Props = {
  counts: Map<string, number>
  selected: string[]
  onSelectedChange: (names: string[]) => void
  mode: "any" | "all"
  onModeChange: (mode: "any" | "all") => void
  shown: number
  total: number
}

const kinds = [
  { kind: "component", label: "Components" },
  { kind: "helper", label: "Core helpers" },
  { kind: "hook", label: "Hooks" },
] as const

export function Filter({
  counts,
  selected,
  onSelectedChange,
  mode,
  onModeChange,
  shown,
  total,
}: Props) {
  const [query, setQuery] = useState("")
  const [open, setOpen] = useState(false)
  const trigger = useRef<HTMLButtonElement>(null)
  const names = useMemo(
    () =>
      [...counts.keys()].sort(
        (a, b) =>
          (counts.get(b) ?? 0) - (counts.get(a) ?? 0) || a.localeCompare(b)
      ),
    [counts]
  )
  const q = query.trim().toLowerCase()
  const visible = names.filter(
    (name) => !q || name.toLowerCase().includes(q) || selected.includes(name)
  )
  return (
    <Collapsible
      render={<section />}
      className="filter"
      aria-label="Filter by primitive"
      open={open}
      onOpenChange={setOpen}
    >
      <div className="filter-bar">
        <CollapsibleTrigger ref={trigger} className="filter-toggle">
          Primitives
          <CaretDownIcon className="filter-toggle-caret" aria-hidden />
        </CollapsibleTrigger>
        <Input
          className="filter-search"
          type="search"
          aria-label="Find a primitive"
          placeholder="Find a primitive…"
          value={query}
          onValueChange={(value) => {
            setQuery(value)
            if (value.trim()) {
              setOpen(true)
            }
          }}
        />
        <SegmentedControl
          className="filter-mode"
          aria-label="Match"
          value={mode}
          onValueChange={(value) => value && onModeChange(value)}
        >
          <SegmentedControlIndicator className="filter-mode-indicator" />
          <SegmentedControlItem value="any">Any</SegmentedControlItem>
          <SegmentedControlItem value="all">All</SegmentedControlItem>
        </SegmentedControl>
        <p className="filter-count" aria-live="polite">
          {shown === total ? `${total} tiles` : `${shown} of ${total} tiles`}
        </p>
        {selected.length > 0 && (
          <button
            type="button"
            className="b-btn filter-clear"
            onClick={() => onSelectedChange([])}
          >
            Clear {selected.length}
          </button>
        )}
      </div>
      <CollapsiblePanel
        keepMounted
        className="filter-panel"
        onKeyDown={(event) => {
          if (event.key !== "Escape") {
            return
          }
          setOpen(false)
          trigger.current?.focus()
        }}
      >
        <div className="filter-groups">
          {kinds.map(({ kind, label }) => {
            const all = names.filter((name) => kindOf(name) === kind)
            const list = visible.filter((name) => kindOf(name) === kind)
            const mine = selected.filter((name) => kindOf(name) === kind)
            if (!all.length) {
              return null
            }
            return (
              <div key={kind} className="filter-group">
                <p className="filter-group-label">{label}</p>
                {list.length ? (
                  <ToggleGroup
                    className="filter-chips"
                    aria-label={label}
                    multiple
                    value={mine}
                    onValueChange={(value) =>
                      onSelectedChange([
                        ...selected.filter((name) => kindOf(name) !== kind),
                        ...value,
                      ])
                    }
                  >
                    {list.map((name) => (
                      <Toggle
                        key={name}
                        value={name}
                        className="filter-chip"
                        data-kind={kind}
                      >
                        {name}
                        <span className="filter-chip-count">
                          {counts.get(name)}
                        </span>
                      </Toggle>
                    ))}
                  </ToggleGroup>
                ) : (
                  <p className="filter-none">No match for “{query}”.</p>
                )}
              </div>
            )
          })}
        </div>
      </CollapsiblePanel>
    </Collapsible>
  )
}
