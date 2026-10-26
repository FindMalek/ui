"use client"

import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@ui-sdk/react/accordion"
import { Progress, ProgressIndicator, ProgressTrack } from "@ui-sdk/react/progress"
import { Slider, SliderControl, SliderIndicator, SliderThumb, SliderTrack } from "@ui-sdk/react/slider"
import { Archive, ChevronDown, FileText, Image, Video } from "lucide-react"
import * as React from "react"
import { BlockButton, BlockCard, BlockFooter, focus } from "./primitives"

const FILES = [
  { label: "Images", size: "8.2 GB", icon: Image, color: "bg-violet-500" },
  { label: "Documents", size: "3.1 GB", icon: FileText, color: "bg-orange-400" },
  { label: "Video", size: "2.3 GB", icon: Video, color: "bg-emerald-500" },
]

function StorageCard() {
  const [limit, setLimit] = React.useState(80)
  const [saved, setSaved] = React.useState(false)
  return (
    <BlockCard
      title="Everything in its place"
      description="A little housekeeping for your workspace."
      icon={<Archive />}
    >
      <div className="flex flex-1 flex-col gap-5 px-6 pb-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-baseline justify-between gap-2">
            <p className="text-2xl font-semibold tracking-tight">
              13.6 <span className="text-sm font-normal text-muted-foreground">GB used</span>
            </p>
            <span className="text-xs text-muted-foreground">of 20 GB</span>
          </div>
          <Progress value={68} aria-label="Storage used">
            <ProgressTrack className="h-2 overflow-hidden rounded-full bg-muted">
              <ProgressIndicator className="h-full rounded-full bg-violet-500" />
            </ProgressTrack>
          </Progress>
          <p className="text-xs text-muted-foreground">Plenty of space for what comes next.</p>
        </div>
        <ul className="flex flex-col gap-3">
          {FILES.map(({ label, size, icon: Icon, color }) => (
            <li key={label} className="flex items-center gap-2.5 text-xs">
              <span className={`size-1.5 rounded-full ${color}`} />
              <Icon className="size-3.5 text-muted-foreground" />
              <span className="flex-1">{label}</span>
              <span className="tabular-nums text-muted-foreground">{size}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-2 border-t border-border pt-4">
          <div className="flex justify-between text-xs">
            <span id="storage-alert-label" className="font-medium">
              Give me a heads-up at
            </span>
            <output className="tabular-nums text-muted-foreground">{limit}%</output>
          </div>
          <Slider
            value={limit}
            min={50}
            max={95}
            step={5}
            onValueChange={(value) => {
              setLimit(value)
              setSaved(false)
            }}
          >
            <SliderControl className="flex h-11 items-center select-none md:h-8">
              <SliderTrack className="h-1.5 w-full rounded-full bg-muted">
                <SliderIndicator className="rounded-full bg-primary" />
                <SliderThumb
                  aria-labelledby="storage-alert-label"
                  className="block size-5 rounded-full border border-border bg-background shadow-sm outline-none has-focus-visible:ring-3 has-focus-visible:ring-ring/40"
                />
              </SliderTrack>
            </SliderControl>
          </Slider>
        </div>
        <Accordion className="mt-auto border-t border-border" collapsible>
          <AccordionItem value="counted">
            <AccordionHeader>
              <AccordionTrigger
                className={`group flex min-h-11 w-full items-center justify-between gap-3 pt-3 text-start text-xs font-medium ${focus}`}
              >
                What counts toward storage?
                <ChevronDown className="size-3.5 text-muted-foreground transition-transform group-data-open:rotate-180" />
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionPanel className="h-(--accordion-panel-height) overflow-hidden text-xs leading-5 text-muted-foreground">
              <p className="pt-2">
                Uploaded images, documents, and videos count toward your limit. Notes and comments are always
                free.
              </p>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
      <BlockFooter status={saved ? `Alert set to ${limit}%.` : undefined}>
        <BlockButton variant="outline" onClick={() => setSaved(true)}>
          Save alert
        </BlockButton>
      </BlockFooter>
    </BlockCard>
  )
}

export { StorageCard }
