import type { UiPopoverElement } from "@ui-sdk/web/popover"
import "@ui-sdk/web/popover"

type Member = { name: string; role: string }

let count = 0

function mount(root: HTMLElement) {
  const id = `member-editor-${++count}`
  const members: Member[] = [
    { name: "Ada Lovelace", role: "Owner" },
    { name: "Grace Hopper", role: "Editor" },
    { name: "Alan Turing", role: "Viewer" },
  ]
  root.innerHTML = `
    <div class="flex w-full max-w-sm flex-col items-center gap-3">
      <ul class="w-full divide-y divide-border rounded-2xl border border-border"></ul>
      <ui-popover id="${id}">
        <ui-popover-content align="end" class="flex w-72 origin-(--transform-origin) flex-col gap-4 rounded-3xl bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none">
          <div class="flex flex-col gap-1">
            <ui-popover-title class="text-base font-medium"></ui-popover-title>
            <ui-popover-description class="text-sm text-muted-foreground">Roles decide what they can change.</ui-popover-description>
          </div>
          <form method="dialog" class="flex flex-col gap-4">
            <label class="grid gap-2 text-sm leading-none font-medium">
              Role
              <input name="role" class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base font-normal outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 md:text-sm motion-reduce:transition-none" />
            </label>
            <div class="flex gap-2">
              <button value="save" class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-[color,background-color,box-shadow] hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">Save</button>
              <button value="cancel" class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">Cancel</button>
            </div>
          </form>
        </ui-popover-content>
      </ui-popover>
      <button type="button" data-edit-newest class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-transparent bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">Edit the newest member</button>
      <output class="text-sm text-muted-foreground block min-h-5">Not edited yet</output>
    </div>
  `
  const popover = root.querySelector<UiPopoverElement<Member>>("ui-popover")!
  const form = root.querySelector("form")!

  const rows = new Map<Member, HTMLElement>()
  for (const member of members) {
    const item = document.createElement("li")
    item.className = "flex items-center gap-3 px-3 py-2 text-sm"
    item.innerHTML = `${member.name}<span class="ms-auto text-muted-foreground">${member.role}</span>`
    const trigger = Object.assign(document.createElement("ui-popover-trigger"), { payload: member })
    trigger.setAttribute("for", id)
    trigger.toggleAttribute("disabled", member.role === "Owner")
    trigger.innerHTML = `<button aria-label="Edit ${member.name}" class="inline-flex cursor-default h-7 shrink-0 items-center justify-center gap-1 rounded-2xl border border-transparent bg-transparent bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">Edit</button>`
    item.append(trigger)
    rows.set(member, item)
    root.querySelector("ul")!.append(item)
  }

  const show = (member?: Member) => {
    root.querySelector("ui-popover-title")!.textContent = `Edit ${member?.name}`
    form.querySelector("input")!.value = member?.role ?? ""
  }
  popover.addEventListener("payloadchange", (event) => {
    const member = event.detail.value
    show(member)
    if (member) root.querySelector("output")!.textContent = `Editing ${member.name}`
  })
  popover.addEventListener("openchange", (event) => {
    if (event.detail.value) show(popover.api.getPayload())
  })
  form.addEventListener("submit", (event) => {
    const member = popover.api.getPayload()
    if ((event.submitter as HTMLButtonElement).value !== "save" || !member) return
    member.role = String(new FormData(form).get("role"))
    rows.get(member)!.querySelector("span")!.textContent = member.role
  })

  const opener = root.querySelector<HTMLButtonElement>("[data-edit-newest]")!
  opener.addEventListener("click", async () => {
    const result = await popover.api.open({ payload: members[members.length - 1], anchor: opener })
    root.querySelector("output")!.textContent =
      `Closed with ${result.reason}, returned ${result.returnValue ?? "nothing"}`
  })
}

export { mount }
