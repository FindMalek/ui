import * as React from "react"
import {
  dateFormatter,
  firstDayOfWeek,
  formatDate,
  formatDateRange,
  formatDateToParts,
  monthNames,
  weekdayNames,
} from "@ui-sdk/core/date"

const locales = [
  ["en-US", "English (US)"],
  ["en-US-u-fw-mon", "English (US), weeks from Monday"],
  ["de-DE", "Deutsch"],
  ["fr-FR", "Français"],
  ["ja-JP", "日本語"],
  ["fa-IR", "فارسی"],
]

const date = "2026-10-16"

function Example() {
  const [locale, setLocale] = React.useState("en-US")
  const first = firstDayOfWeek(locale)
  return (
    <div className="flex w-80 flex-col gap-3 text-sm">
      <select
        aria-label="Locale"
        value={locale}
        onChange={(event) => setLocale(event.target.value)}
        className="self-start rounded-md border border-border bg-background px-2 py-1 text-xs"
      >
        {locales.map(([value, text]) => (
          <option key={value} value={value}>
            {text}
          </option>
        ))}
      </select>
      <p data-label className="text-2xl">
        {formatDateToParts(date, locale, { month: "long", day: "numeric" }).map((part, index) => (
          <span key={index} className={part.type === "day" ? "font-semibold" : "text-muted-foreground"}>
            {part.value}
          </span>
        ))}
      </p>
      <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-xs">
        <dt className="text-muted-foreground">Long</dt>
        <dd data-long>{formatDate(date, locale)}</dd>
        <dt className="text-muted-foreground">Range</dt>
        <dd data-range>{formatDateRange(date, "2026-10-20", locale)}</dd>
        <dt className="text-muted-foreground">Week</dt>
        <dd data-weekdays>{weekdayNames(locale, "short", first).join(" ")}</dd>
        <dt className="text-muted-foreground">Months</dt>
        <dd data-months>{monthNames(locale, "short").slice(0, 4).join(", ")}, …</dd>
        <dt className="text-muted-foreground">Calendar</dt>
        <dd data-calendar>{dateFormatter(locale, { month: "long" }).resolvedOptions().calendar}</dd>
      </dl>
    </div>
  )
}

export { Example }
