import * as React from "react"
import { definePrimitive, pageLocale, userLocale } from "@ui-sdk/core"
import { createParts } from "@ui-sdk/react/primitive"
import { ChevronDownIcon } from "lucide-react"

const priceList = definePrimitive({
  name: "price-list",
  state: () => ({}),
  api: () => ({}),
  slots: (slot) => ({
    root: slot({}),
    language: slot({
      bind: (el) => {
        el.textContent = `Page: ${pageLocale(el)}, you: ${userLocale()}`
      },
    }),
    price: slot<{ amount: number }>({
      props: { amount: "number" },
      bind: (el, part) => {
        const format = new Intl.NumberFormat(pageLocale(el), { style: "currency", currency: "EUR" })
        el.textContent = format.format(part.props.amount)
      },
    }),
    names: slot<{ names: string[] }>({
      props: { names: "list" },
      bind: (el, part) => {
        const locale = pageLocale(el)
        const sorted = [...part.props.names].sort(new Intl.Collator(locale).compare)
        el.textContent = new Intl.ListFormat(locale).format(sorted)
      },
    }),
  }),
})

const parts = createParts(priceList, { root: "div", language: "p", price: "p", names: "p" })

const PriceList = parts.Root

const PriceListLanguage = parts.Language

const PriceListPrice = parts.Price

const PriceListNames = parts.Names

const languages = { "en-US": "English", "de-DE": "Deutsch", "sv-SE": "Svenska", "ar-EG": "العربية" }

function Example() {
  const [lang, setLang] = React.useState("en-US")
  return (
    <div className="flex w-72 flex-col gap-3 text-sm">
      <div className="relative">
        <select
          aria-label="Language"
          value={lang}
          onChange={(event) => setLang(event.target.value)}
          className="h-8 w-full appearance-none rounded-lg border border-border bg-background ps-3 pe-8 outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          {Object.entries(languages).map(([tag, name]) => (
            <option key={tag} value={tag}>
              {name}
            </option>
          ))}
        </select>
        <ChevronDownIcon
          className="pointer-events-none absolute end-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden="true"
        />
      </div>
      <div lang={lang}>
        <PriceList key={lang} className="flex flex-col gap-1">
          <PriceListPrice amount={1234.5} data-price className="text-lg font-medium tabular-nums" />
          <PriceListNames names={["Örjan", "Zoë", "Åsa", "Anna"]} data-names />
          <PriceListLanguage data-language className="text-muted-foreground" />
        </PriceList>
      </div>
    </div>
  )
}

export { Example, priceList, PriceList, PriceListLanguage, PriceListNames, PriceListPrice }
