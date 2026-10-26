<script lang="ts">
  import {
    createHoverCardController,
    HoverCard,
    HoverCardContent,
    type HoverCardContentState,
    HoverCardTrigger,
  } from "@ui-sdk/svelte/hover-card"

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

  const card = createHoverCardController<Person>()
  const profileOf = (person: Person | undefined) => `https://example.com/people/${person?.handle}`
</script>

<ul class="w-full max-w-sm divide-y divide-border rounded-2xl border border-border text-sm">
  {#each people as person (person.handle)}
    <li class="flex items-center gap-3 px-3 py-2">
      <HoverCardTrigger
        controller={card}
        payload={person}
        href={profileOf(person)}
        class="rounded-sm text-sm font-medium text-primary underline-offset-4 outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/30 data-open:underline"
      >
        {person.name}
      </HoverCardTrigger>
      <span class="ms-auto text-muted-foreground">@{person.handle}</span>
    </li>
  {/each}
</ul>
<HoverCard controller={card}>
  <HoverCardContent
    align="start"
    class="flex w-72 origin-(--transform-origin) flex-col gap-4 rounded-3xl bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none"
  >
    {#snippet children(state: HoverCardContentState<Person>)}
      <div class="flex gap-4">
        <div
          aria-hidden="true"
          class="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted text-sm text-muted-foreground"
        >
          {state.payload?.initials}
        </div>
        <div class="flex flex-col items-start gap-1">
          <p class="font-medium">{state.payload?.name}</p>
          <p>{state.payload?.bio}</p>
          <a
            href={profileOf(state.payload)}
            class="rounded-sm font-medium text-primary underline underline-offset-4 outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
          >
            View profile
          </a>
        </div>
      </div>
    {/snippet}
  </HoverCardContent>
</HoverCard>
