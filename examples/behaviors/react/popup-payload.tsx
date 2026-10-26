import * as React from "react"
import {
  createPopup,
  definePrimitive,
  popupArrow,
  popupContent,
  popupDescription,
  popupState,
  popupTitle,
  popupTrigger,
  type ChangeDetails,
} from "@ui-sdk/core"
import { popoverPreset } from "@ui-sdk/core/popover"
import { createParts } from "@ui-sdk/react/primitive"

type Person = { name: string; role: string; initials: string }

type TeamCardOptions = {
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean, details: ChangeDetails<string>) => void
  onPayloadChange?: (person: unknown, details: ChangeDetails<string>) => void
}

const teamCard = definePrimitive({
  name: "team-card",
  options: { open: "boolean", defaultOpen: "boolean", onOpenChange: "callback", onPayloadChange: "callback" },
  state: (options: TeamCardOptions) => popupState(options),
  sync: (options) => (options.open === undefined ? {} : { open: options.open }),
  api: (context) => createPopup(context, { preset: popoverPreset }),
  slots: (slot) => ({
    trigger: popupTrigger(slot),
    content: popupContent(slot),
    title: popupTitle(slot),
    description: popupDescription(slot),
    arrow: popupArrow(slot),
  }),
})

const parts = createParts(teamCard, {
  trigger: "button",
  content: "div",
  title: "p",
  description: "p",
  arrow: "span",
})

const TeamCard = parts.Root

const TeamCardTrigger = parts.Trigger

const TeamCardContent = parts.Content

const TeamCardTitle = parts.Title

const TeamCardDescription = parts.Description

const TeamCardArrow = parts.Arrow

const team: Person[] = [
  { name: "Ada Lovelace", role: "Engineering", initials: "AL" },
  { name: "Grace Hopper", role: "Compilers", initials: "GH" },
  { name: "Alan Turing", role: "Research", initials: "AT" },
]

function Example() {
  const [shown, setShown] = React.useState("")
  return (
    <div className="flex flex-col gap-3 text-sm">
      <TeamCard
        onPayloadChange={(person: unknown, details: ChangeDetails<string>) =>
          setShown(`${(person as Person).name}, by ${details.reason}`)
        }
      >
        <div className="flex gap-2">
          {team.map((person) => (
            <TeamCardTrigger
              key={person.initials}
              payload={person}
              aria-label={person.name}
              className="grid size-9 place-items-center rounded-full bg-muted text-xs font-medium"
            >
              {person.initials}
            </TeamCardTrigger>
          ))}
        </div>
        <TeamCardContent
          sideOffset={8}
          className="flex w-44 flex-col gap-0.5 rounded-xl bg-popover p-3 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none"
        >
          {(state) => {
            const person = state.payload as Person | undefined
            return (
              <>
                <TeamCardArrow className="size-2.5 rotate-45 bg-popover data-[side=bottom]:-top-1 data-[side=top]:-bottom-1" />
                <TeamCardTitle className="font-medium">{person?.name}</TeamCardTitle>
                <TeamCardDescription className="text-xs text-muted-foreground">
                  {person?.role}
                </TeamCardDescription>
              </>
            )
          }}
        </TeamCardContent>
      </TeamCard>
      <p data-team-shown className="text-xs text-muted-foreground">
        {shown}
      </p>
    </div>
  )
}

export {
  Example,
  type Person,
  teamCard,
  TeamCard,
  TeamCardArrow,
  TeamCardContent,
  TeamCardDescription,
  type TeamCardOptions,
  TeamCardTitle,
  TeamCardTrigger,
}
