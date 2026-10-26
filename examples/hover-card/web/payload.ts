import "@ui-sdk/web/hover-card"
import type { UiHoverCardElement } from "@ui-sdk/web/hover-card"

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

function mount(root: HTMLElement) {
  const id = `hover-card-${crypto.randomUUID()}`
  root.innerHTML = `
    <ul class="w-full max-w-sm divide-y divide-border rounded-2xl border border-border text-sm"></ul>
    <ui-hover-card id="${id}">
      <ui-hover-card-content align="start" class="flex w-72 origin-(--transform-origin) flex-col gap-4 rounded-3xl bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none">
        <div class="flex gap-4">
          <div aria-hidden="true" data-initials class="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted text-sm text-muted-foreground"></div>
          <div class="flex flex-col items-start gap-1">
            <p data-name class="font-medium"></p>
            <p data-bio></p>
            <a data-profile class="rounded-sm font-medium text-primary underline underline-offset-4 outline-none focus-visible:ring-3 focus-visible:ring-ring/30">View profile</a>
          </div>
        </div>
      </ui-hover-card-content>
    </ui-hover-card>
  `
  const list = root.querySelector("ul")!
  for (const person of people) {
    const item = document.createElement("li")
    item.className = "flex items-center gap-3 px-3 py-2"
    const trigger = Object.assign(document.createElement("ui-hover-card-trigger"), { payload: person })
    trigger.setAttribute("for", id)
    trigger.innerHTML = `<a href="https://example.com/people/${person.handle}" class="rounded-sm text-sm font-medium text-primary underline-offset-4 outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/30 data-open:underline">${person.name}</a>`
    item.append(trigger)
    item.insertAdjacentHTML(
      "beforeend",
      `<span class="ms-auto text-muted-foreground">@${person.handle}</span>`,
    )
    list.append(item)
  }
  const card = root.querySelector<UiHoverCardElement<Person>>("ui-hover-card")!
  card.addEventListener("payloadchange", (event) => {
    const person = event.detail.value
    if (!person) {
      return
    }
    card.querySelector("[data-initials]")!.textContent = person.initials
    card.querySelector("[data-name]")!.textContent = person.name
    card.querySelector("[data-bio]")!.textContent = person.bio
    card.querySelector("[data-profile]")!.setAttribute("href", `https://example.com/people/${person.handle}`)
  })
}

export { mount }
