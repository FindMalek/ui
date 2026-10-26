"use client"

import {
  Carousel,
  CarouselContent,
  CarouselIndicator,
  CarouselIndicatorGroup,
  CarouselItem,
  CarouselPlayToggle,
  CarouselViewport,
} from "@ui-sdk/react/carousel"
import { Pause, Play } from "lucide-react"
import * as React from "react"

const photos = [
  { name: "Dunes" },
  { name: "Forest" },
  { name: "Glacier" },
  { name: "Canyon" },
  { name: "Meadow" },
  { name: "Harbor" },
]

function Example() {
  const [log, setLog] = React.useState("")
  return (
    <Carousel
      aria-label="Photos"
      defaultPlaying
      interval={4000}
      onPlayingChange={(playing, details) => setLog(`${playing ? "Playing" : "Stopped"} (${details.reason})`)}
      className="group/carousel mx-auto grid w-full max-w-xs gap-3"
    >
      <CarouselViewport className="rounded-3xl outline-none [scrollbar-width:none] focus-visible:ring-3 focus-visible:ring-ring/30">
        <CarouselContent className="gap-4">
          {photos.map((photo) => (
            <CarouselItem key={photo.name} className="basis-full">
              <div className="flex items-center justify-center rounded-3xl text-lg font-medium aspect-[4/3] bg-muted">
                {photo.name}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </CarouselViewport>
      <div className="flex items-center gap-3">
        <CarouselPlayToggle className="inline-flex size-8 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-secondary text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 not-data-disabled:active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none">
          {(state) =>
            state.playing ? (
              <>
                <Pause className={state.paused ? "size-4 opacity-50" : "size-4"} />
                <span className="sr-only">Stop slide rotation</span>
              </>
            ) : (
              <>
                <Play className="size-4" />
                <span className="sr-only">Start slide rotation</span>
              </>
            )
          }
        </CarouselPlayToggle>
        <CarouselIndicatorGroup aria-label="Choose a photo" className="flex flex-1 gap-1.5">
          {photos.map((photo, index) => (
            <CarouselIndicator
              key={photo.name}
              page={index + 1}
              aria-label={photo.name}
              className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-input outline-none focus-visible:ring-3 focus-visible:ring-ring/30 cursor-default"
            >
              <span className="absolute inset-0 hidden origin-left bg-primary group-data-playing/carousel:animate-[carousel-progress_var(--carousel-interval)_linear] group-data-paused/carousel:[animation-play-state:paused] in-data-selected:block rtl:origin-right cursor-default" />
            </CarouselIndicator>
          ))}
        </CarouselIndicatorGroup>
      </div>
      <p aria-live="polite" className="text-center text-sm text-muted-foreground">
        {log}
      </p>
    </Carousel>
  )
}

export { Example }
