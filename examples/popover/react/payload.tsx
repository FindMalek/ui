"use client"

import * as React from "react"
import {
  createPopoverController,
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverTitle,
  PopoverTrigger,
} from "@ui-sdk/react/popover"

type Member = { name: string; role: string }

function Example() {
  const [popover] = React.useState(() => createPopoverController<Member>())
  const [members, setMembers] = React.useState<Member[]>([
    { name: "Ada Lovelace", role: "Owner" },
    { name: "Grace Hopper", role: "Editor" },
    { name: "Alan Turing", role: "Viewer" },
  ])
  const [status, setStatus] = React.useState("")

  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-3">
      <ul className="w-full divide-y divide-border rounded-2xl border border-border">
        {members.map((member) => (
          <li key={member.name} className="flex items-center gap-3 px-3 py-2 text-sm">
            {member.name}
            <span className="ms-auto text-muted-foreground">{member.role}</span>
            <PopoverTrigger
              controller={popover}
              payload={member}
              disabled={member.role === "Owner"}
              aria-label={`Edit ${member.name}`}
              className="inline-flex cursor-default h-7 shrink-0 items-center justify-center gap-1 rounded-2xl border border-transparent bg-transparent bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none"
            >
              Edit
            </PopoverTrigger>
          </li>
        ))}
      </ul>
      <Popover
        controller={popover}
        onPayloadChange={(payload) => {
          const member = payload as Member | undefined
          if (member) setStatus(`Editing ${member.name}`)
        }}
      >
        <PopoverContent<Member>
          align="end"
          className="flex w-72 origin-(--transform-origin) flex-col gap-4 rounded-3xl bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none"
        >
          {(state) => {
            const member = state.payload
            return (
              <>
                <div className="flex flex-col gap-1">
                  <PopoverTitle className="text-base font-medium">Edit {member?.name}</PopoverTitle>
                  <PopoverDescription className="text-sm text-muted-foreground">
                    Roles decide what they can change.
                  </PopoverDescription>
                </div>
                <form
                  method="dialog"
                  className="flex flex-col gap-4"
                  onSubmit={(event) => {
                    const submitter = (event.nativeEvent as SubmitEvent).submitter as HTMLButtonElement
                    if (submitter.value !== "save" || !member) return
                    const next = String(new FormData(event.currentTarget).get("role"))
                    setMembers((current) =>
                      current.map((entry) => (entry.name === member.name ? { ...entry, role: next } : entry)),
                    )
                  }}
                >
                  <label className="grid gap-2 text-sm leading-none font-medium">
                    Role
                    <input
                      key={member?.name}
                      name="role"
                      defaultValue={member?.role}
                      className="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base font-normal outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 md:text-sm motion-reduce:transition-none"
                    />
                  </label>
                  <div className="flex gap-2">
                    <button
                      value="save"
                      className="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-[color,background-color,box-shadow] hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none"
                    >
                      Save
                    </button>
                    <button
                      value="cancel"
                      className="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </>
            )
          }}
        </PopoverContent>
      </Popover>
      <button
        type="button"
        onClick={async (event) => {
          const result = await popover.open({
            payload: members[members.length - 1],
            anchor: event.currentTarget,
          })
          setStatus(`Closed with ${result.reason}, returned ${result.returnValue ?? "nothing"}`)
        }}
        className="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-transparent bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none"
      >
        Edit the newest member
      </button>
      <output className="text-sm text-muted-foreground block min-h-5">{status || "Not edited yet"}</output>
    </div>
  )
}

export { Example }
