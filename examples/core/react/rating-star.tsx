import * as React from "react"
import { StarIcon } from "lucide-react"
import { createParts } from "@ui-sdk/react/primitive"
import { rating } from "./rating-stages/star"

const { Root: Rating, Star: RatingStar } = createParts(rating, { root: "div", star: "button" })

function Example() {
  const [value, setValue] = React.useState(0)

  return (
    <div className="flex flex-col items-center gap-1 py-4">
      <output data-value aria-label="Rating" className="text-3xl font-semibold tracking-tight tabular-nums">
        {value}
      </output>
      <Rating onValueChange={setValue} aria-label="Rating" className="flex text-muted-foreground">
        <RatingStar
          value="1"
          aria-label="1 star"
          className="group inline-flex size-12 items-center justify-center rounded-lg outline-none transition-colors hover:text-amber-600 focus-visible:ring-3 focus-visible:ring-ring/50 data-filled:text-amber-600 dark:hover:text-amber-400 dark:data-filled:text-amber-400"
        >
          <StarIcon
            aria-hidden="true"
            className="size-10 fill-muted transition-colors group-hover:fill-current group-data-filled:fill-current"
            strokeWidth={1.5}
          />
        </RatingStar>
      </Rating>
    </div>
  )
}

export { Example, rating }
