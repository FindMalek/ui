"use client"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldError, FieldLabel } from "@ui-sdk/react/field"
import { Input } from "@ui-sdk/react/input"
import { Menu, MenuContent, MenuItem, MenuTrigger } from "@ui-sdk/react/menu"
import { Check, Link as LinkIcon, MoreHorizontal, Plus, Users, X } from "lucide-react"
import * as React from "react"
import { BlockButton, BlockCard, BlockSelect, control, focus, PersonAvatar } from "./primitives"

const MEMBERS = [
  {
    name: "Alex Morgan",
    email: "alex@example.com",
    color: "bg-orange-100 text-orange-900 dark:bg-orange-950 dark:text-orange-200",
    role: "Owner",
  },
  {
    name: "Jamie Park",
    email: "jamie@example.com",
    color: "bg-violet-100 text-violet-900 dark:bg-violet-950 dark:text-violet-200",
    role: "Editor",
  },
  {
    name: "Sam Rivera",
    email: "sam@example.com",
    color: "bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200",
    role: "Viewer",
  },
]

function TeamCard() {
  const [members, setMembers] = React.useState(MEMBERS)
  const [access, setAccess] = React.useState("invited")
  const [copied, setCopied] = React.useState(false)
  const [message, setMessage] = React.useState("")
  const [open, setOpen] = React.useState(false)
  return (
    <BlockCard title="Better, together" description="Bring your people into the process." icon={<Users />}>
      <div className="flex flex-1 flex-col gap-6 px-6 pb-6">
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-medium">
            People with access <span className="ml-1 text-muted-foreground">{members.length}</span>
          </span>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger render={<BlockButton variant="outline" className="px-2.5" />}>
              <Plus />
              Invite
            </DialogTrigger>
            <DialogContent className="gap-5 p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <DialogTitle className="text-lg font-semibold">Invite a teammate</DialogTitle>
                  <DialogDescription className="text-muted-foreground">
                    Add someone to this preview workspace.
                  </DialogDescription>
                </div>
                <DialogClose
                  aria-label="Close invitation"
                  className={`flex size-11 shrink-0 items-center justify-center rounded-xl hover:bg-muted ${focus}`}
                >
                  <X className="size-4" />
                </DialogClose>
              </div>
              <form
                className="flex flex-col gap-4"
                onSubmit={(event) => {
                  event.preventDefault()
                  const email = String(new FormData(event.currentTarget).get("email"))
                  if (members.some((member) => member.email.toLowerCase() === email.toLowerCase())) {
                    setMessage("This person already has access.")
                    setOpen(false)
                    return
                  }
                  setMembers((previous) => [
                    ...previous,
                    { name: email.split("@")[0], email, role: "Viewer", color: "bg-muted" },
                  ])
                  setMessage(`${email} added to the preview.`)
                  setOpen(false)
                }}
              >
                <Field name="email" className="flex flex-col gap-2">
                  <FieldLabel>Email address</FieldLabel>
                  <Input
                    required
                    type="email"
                    autoComplete="email"
                    placeholder="teammate@example.com"
                    className={control}
                  />
                  <FieldError className="text-xs text-destructive" />
                </Field>
                <BlockButton type="submit">
                  Add to workspace <Plus />
                </BlockButton>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        <ul className="flex max-h-56 flex-col gap-5 overflow-y-auto">
          {members.map((member) => (
            <li key={member.email} className="flex min-w-0 items-center gap-3">
              <PersonAvatar name={member.name} className={member.color} />
              <div className="min-w-0 flex-1">
                <p className="break-words text-sm font-medium">{member.name}</p>
                <p className="break-all text-xs text-muted-foreground">{member.email}</p>
              </div>
              <span className="text-xs text-muted-foreground">{member.role}</span>
              {member.role !== "Owner" && (
                <Menu>
                  <MenuTrigger
                    aria-label={`Manage ${member.name}`}
                    className={`flex size-11 shrink-0 items-center justify-center rounded-lg hover:bg-muted md:size-8 ${focus}`}
                  >
                    <MoreHorizontal className="size-4" />
                  </MenuTrigger>
                  <MenuContent className="min-w-40 rounded-xl border border-border bg-popover p-1 text-sm shadow-lg">
                    {["Editor", "Viewer"].map((role) => (
                      <MenuItem
                        key={role}
                        onSelect={() => {
                          setMembers((previous) =>
                            previous.map((person) =>
                              person.email === member.email ? { ...person, role } : person,
                            ),
                          )
                          setMessage(`${member.name} is now ${role === "Editor" ? "an editor" : "a viewer"}.`)
                        }}
                        className={`min-h-11 rounded-lg px-3 py-2 data-highlighted:bg-muted ${focus}`}
                      >
                        Make {role.toLowerCase()}
                      </MenuItem>
                    ))}
                    <MenuItem
                      onSelect={() => {
                        setMembers((previous) => previous.filter((person) => person.email !== member.email))
                        setMessage(`${member.name} removed.`)
                      }}
                      className={`min-h-11 rounded-lg px-3 py-2 text-destructive data-highlighted:bg-muted ${focus}`}
                    >
                      Remove access
                    </MenuItem>
                  </MenuContent>
                </Menu>
              )}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-col gap-3 border-t border-border pt-5">
          <div className="flex items-center gap-2 text-xs font-medium">
            <LinkIcon className="size-3.5" />
            General access
          </div>
          <BlockSelect
            label="General access"
            value={access}
            onValueChange={setAccess}
            options={[
              { value: "invited", label: "Only invited people" },
              { value: "link", label: "Anyone with the link" },
            ]}
          />
          <p className="text-xs leading-5 text-muted-foreground">
            {access === "invited"
              ? "Only people added above can open this workspace."
              : "Anyone with this link can view the workspace."}
          </p>
        </div>
      </div>
      <footer className="flex min-h-17 items-center justify-between gap-3 border-t border-border bg-muted/20 px-6 py-4">
        <p role="status" className="text-xs text-muted-foreground">
          {message || "A little teamwork goes a long way."}
        </p>
        <BlockButton
          variant="outline"
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(`${window.location.origin}/blocks/react`)
              setCopied(true)
              setMessage("Gallery link copied.")
            } catch {
              setMessage("Your browser could not copy the link.")
            }
          }}
        >
          {copied ? <Check /> : <LinkIcon />}
          {copied ? "Copied" : "Copy link"}
        </BlockButton>
      </footer>
    </BlockCard>
  )
}

export { TeamCard }
