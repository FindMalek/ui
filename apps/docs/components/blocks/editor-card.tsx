"use client"

import { cn } from "cn"
import { Field, FieldLabel } from "@ui-sdk/react/field"
import { Textarea } from "@ui-sdk/react/textarea"
import { Toggle, ToggleGroup } from "@ui-sdk/react/toggle"
import { Tooltip, TooltipContent, TooltipTrigger } from "@ui-sdk/react/tooltip"
import { Bold, Italic, PenLine, Underline } from "lucide-react"
import * as React from "react"
import { BlockButton, BlockCard, BlockFooter, control, focus } from "./primitives"

const FORMATS = [
  { value: "bold", label: "Bold", icon: Bold },
  { value: "italic", label: "Italic", icon: Italic },
  { value: "underline", label: "Underline", icon: Underline },
]

function EditorCard() {
  const [text, setText] = React.useState(
    "The best ideas usually start as a small note. A half-formed thought, a what-if, a little spark.\n\nGive yours a place to land.",
  )
  const [format, setFormat] = React.useState(["bold"])
  const [saved, setSaved] = React.useState(false)
  return (
    <BlockCard
      title="Catch a thought"
      description="A small space for something worth keeping."
      icon={<PenLine />}
    >
      <div className="flex flex-1 flex-col gap-4 px-6 pb-6">
        <div className="flex items-center justify-between gap-3">
          <ToggleGroup
            multiple
            value={format}
            onValueChange={(value) => {
              setFormat(value)
              setSaved(false)
            }}
            aria-label="Note formatting"
            className="flex gap-1"
          >
            {FORMATS.map(({ value, label, icon: Icon }) => (
              <Tooltip key={value}>
                <TooltipTrigger
                  render={
                    <Toggle
                      value={value}
                      aria-label={label}
                      className={cn(
                        "flex size-11 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted data-pressed:bg-muted data-pressed:text-foreground md:size-8",
                        focus,
                      )}
                    />
                  }
                >
                  <Icon className="size-4" />
                </TooltipTrigger>
                <TooltipContent className="rounded-lg bg-foreground px-2.5 py-1.5 text-xs text-background">
                  {label}
                </TooltipContent>
              </Tooltip>
            ))}
          </ToggleGroup>
          <span className="rounded-md border border-border px-2 py-1 font-mono text-[10px] text-muted-foreground">
            DRAFT
          </span>
        </div>
        <Field className="flex flex-col gap-2">
          <FieldLabel className="sr-only">Your note</FieldLabel>
          <Textarea
            value={text}
            onValueChange={(value) => {
              setText(value)
              setSaved(false)
            }}
            className={cn(
              control,
              "min-h-44 resize-y py-3 leading-6 md:min-h-44",
              format.includes("bold") && "font-semibold",
              format.includes("italic") && "italic",
              format.includes("underline") && "underline",
            )}
          />
        </Field>
        <div className="flex items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>{text.trim() ? text.trim().split(/\s+/).length : 0} words</span>
          <span>Just for you.</span>
        </div>
        <div className="mt-auto rounded-xl bg-muted/50 px-3.5 py-3 text-xs leading-5 text-muted-foreground">
          A first draft is a good place to start. You can make it great later.
        </div>
      </div>
      <BlockFooter status={saved ? "Note saved in this preview." : undefined}>
        <BlockButton variant="outline" onClick={() => setSaved(true)} disabled={!text.trim()}>
          Save note
        </BlockButton>
      </BlockFooter>
    </BlockCard>
  )
}

export { EditorCard }
