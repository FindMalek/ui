import {
  createHoverCardController,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@ui-sdk/solid/hover-card"
import { For } from "solid-js"

const people = [
  {
    handle: "ada",
    name: "Ada Lovelace",
    initials: "AL",
    bio: "Wrote the first published program, for the Analytical Engine.",
  },
  {
    handle: "grace",
    name: "Grace Hopper",
    initials: "GH",
    bio: "Built the first compiler and popularized the word “debugging”.",
  },
  {
    handle: "alan",
    name: "Alan Turing",
    initials: "AT",
    bio: "Described the universal machine every computer descends from.",
  },
]

type Person = (typeof people)[number]

function Example() {
  const card = createHoverCardController<Person>()
  return (
    <>
      <ul class="w-full max-w-sm divide-y divide-border rounded-2xl border border-border text-sm">
        <For each={people}>
          {(person) => (
            <li class="flex items-center gap-3 px-3 py-2">
              <HoverCardTrigger
                controller={card}
                payload={person}
                href={`https://example.com/people/${person.handle}`}
                class="rounded-sm text-sm font-medium text-primary underline-offset-4 outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/30 data-open:underline"
              >
                {person.name}
              </HoverCardTrigger>
              <span class="ms-auto text-muted-foreground">@{person.handle}</span>
            </li>
          )}
        </For>
      </ul>
      <HoverCard controller={card}>
        <HoverCardContent<Person>
          align="start"
          class="flex w-72 origin-(--transform-origin) flex-col gap-4 rounded-3xl bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none"
        >
          {(state) => {
            const person = () => state.payload
            return (
              <div class="flex gap-4">
                <div
                  aria-hidden="true"
                  class="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted text-sm text-muted-foreground"
                >
                  {person()?.initials}
                </div>
                <div class="flex flex-col items-start gap-1">
                  <p class="font-medium">{person()?.name}</p>
                  <p>{person()?.bio}</p>
                  <a
                    href={`https://example.com/people/${person()?.handle}`}
                    class="rounded-sm font-medium text-primary underline underline-offset-4 outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
                  >
                    View profile
                  </a>
                </div>
              </div>
            )
          }}
        </HoverCardContent>
      </HoverCard>
    </>
  )
}

export { Example }
