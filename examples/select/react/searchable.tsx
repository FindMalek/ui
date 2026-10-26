import {
  Select,
  SelectContent,
  SelectEmpty,
  SelectGroup,
  SelectGroupLabel,
  SelectInput,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectLabel,
  SelectList,
  SelectTrigger,
  SelectValue,
} from "@ui-sdk/react/select"
import { Check, ChevronDown, Search } from "lucide-react"

const countries = [
  { value: "ar", label: "Argentina", code: "+54" },
  { value: "au", label: "Australia", code: "+61" },
  { value: "at", label: "Austria", code: "+43" },
  { value: "be", label: "Belgium", code: "+32" },
  { value: "br", label: "Brazil", code: "+55" },
  { value: "ca", label: "Canada", code: "+1" },
  { value: "cl", label: "Chile", code: "+56" },
  { value: "cn", label: "China", code: "+86" },
  { value: "dk", label: "Denmark", code: "+45" },
  { value: "fi", label: "Finland", code: "+358" },
  { value: "fr", label: "France", code: "+33" },
  { value: "de", label: "Germany", code: "+49" },
  { value: "gr", label: "Greece", code: "+30" },
  { value: "in", label: "India", code: "+91" },
  { value: "ie", label: "Ireland", code: "+353" },
  { value: "it", label: "Italy", code: "+39" },
  { value: "jp", label: "Japan", code: "+81" },
  { value: "mx", label: "Mexico", code: "+52" },
  { value: "nl", label: "Netherlands", code: "+31" },
  { value: "no", label: "Norway", code: "+47" },
  { value: "pt", label: "Portugal", code: "+351" },
  { value: "es", label: "Spain", code: "+34" },
  { value: "se", label: "Sweden", code: "+46" },
  { value: "ch", label: "Switzerland", code: "+41" },
]

const popularCountries = [
  { type: "group" as const, label: "Popular", items: [countries[5], countries[11], countries[16]] },
]

export function Example() {
  return (
    <Select
      items={countries}
      emptyItems={popularCountries}
      placeholder="Select a country"
      filter="contains"
      announcement={(change) =>
        change.type === "results"
          ? `${change.count} ${change.count === 1 ? "country" : "countries"} found`
          : null
      }
    >
      <div className="flex w-64 flex-col gap-2">
        <SelectLabel className="text-sm leading-none font-medium">Country</SelectLabel>
        <SelectTrigger className="flex h-8 w-full min-w-0 items-center justify-between gap-1.5 rounded-2xl border border-transparent bg-input/50 px-3 py-2 text-sm outline-none transition-[color,box-shadow] duration-200 select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-placeholder:text-muted-foreground data-disabled:opacity-50">
          <SelectValue className="flex-1 truncate text-start" />
          <ChevronDown className="size-4 shrink-0 text-muted-foreground" />
        </SelectTrigger>
      </div>
      <SelectContent className="flex max-h-[min(20rem,var(--available-height))] w-(--anchor-width) origin-(--transform-origin) flex-col overflow-hidden rounded-2xl bg-popover text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10">
        <div className="m-1 flex h-8 items-center gap-2 rounded-2xl bg-input/50 px-2.5 focus-within:ring-3 focus-within:ring-ring/30">
          <Search className="size-4 shrink-0 text-muted-foreground" />
          <SelectInput
            aria-label="Search countries"
            placeholder="Search countries…"
            className="h-full w-full min-w-0 bg-transparent text-base outline-none placeholder:text-muted-foreground md:text-sm"
          />
        </div>
        <SelectEmpty className="py-2 text-center text-sm text-muted-foreground empty:hidden">
          No countries found.
        </SelectEmpty>
        <SelectList className="overflow-y-auto p-1">
          {(state) =>
            (state.items as ((typeof countries)[number] | (typeof popularCountries)[number])[]).map(
              (entry) =>
                "items" in entry ? (
                  <SelectGroup key={entry.label}>
                    <SelectGroupLabel className="px-2 py-1 text-xs text-muted-foreground">
                      {entry.label}
                    </SelectGroupLabel>
                    {entry.items.map((country) => (
                      <CountryItem key={country.value} country={country} />
                    ))}
                  </SelectGroup>
                ) : (
                  <CountryItem key={entry.value} country={entry} />
                ),
            )
          }
        </SelectList>
      </SelectContent>
    </Select>
  )
}

function CountryItem({ country }: { country: { value: string; label: string } }) {
  return (
    <SelectItem
      value={country.value}
      label={country.label}
      className="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm ring-ring/30 outline-none select-none ring-inset data-highlighted:bg-accent data-highlighted:text-accent-foreground data-selected:font-medium data-disabled:pointer-events-none data-disabled:opacity-50 in-data-[modality=keyboard]:data-highlighted:ring-2"
    >
      <SelectItemText className="[&_mark]:bg-transparent [&_mark]:font-semibold [&_mark]:text-foreground [&_mark]:underline [&_mark]:underline-offset-2" />
      <SelectItemIndicator className="pointer-events-none absolute end-2 flex size-4 items-center justify-center">
        <Check className="size-4" />
      </SelectItemIndicator>
    </SelectItem>
  )
}
