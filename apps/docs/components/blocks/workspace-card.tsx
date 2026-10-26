"use client"

import { Checkbox, CheckboxIndicator } from "@ui-sdk/react/checkbox"
import { Field, FieldDescription, FieldError, FieldLabel } from "@ui-sdk/react/field"
import { Input } from "@ui-sdk/react/input"
import { ArrowRight, Check, Layers } from "lucide-react"
import * as React from "react"
import { BlockButton, BlockCard, BlockFooter, BlockSelect, control, focus } from "./primitives"

function WorkspaceCard() {
  const [size, setSize] = React.useState("small")
  const [created, setCreated] = React.useState("")
  return (
    <BlockCard
      title="A home for your next idea"
      description="Good things start with a little space."
      icon={<Layers />}
    >
      <form
        className="flex flex-1 flex-col"
        onSubmit={(event) => {
          event.preventDefault()
          setCreated(`${new FormData(event.currentTarget).get("workspace")} created.`)
        }}
      >
        <div className="flex flex-col gap-5 px-6 pb-6">
          <Field name="workspace" className="flex flex-col gap-2">
            <FieldLabel className="text-xs font-medium">Workspace name</FieldLabel>
            <Input
              required
              defaultValue="Studio North"
              placeholder="Your workspace"
              className={control}
              onValueChange={() => setCreated("")}
            />
            <FieldDescription className="text-xs text-muted-foreground">
              You can always change this later.
            </FieldDescription>
            <FieldError className="text-xs text-destructive" />
          </Field>
          <Field name="email" className="flex flex-col gap-2">
            <FieldLabel className="text-xs font-medium">Work email</FieldLabel>
            <Input
              required
              type="email"
              placeholder="you@example.com"
              className={control}
              onValueChange={() => setCreated("")}
            />
            <FieldError className="text-xs text-destructive" />
          </Field>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium">Team size</span>
            <BlockSelect
              label="Team size"
              value={size}
              onValueChange={(value) => {
                setSize(value)
                setCreated("")
              }}
              options={[
                { value: "solo", label: "Just me" },
                { value: "small", label: "2–10 people" },
                { value: "large", label: "11–50 people" },
              ]}
            />
          </div>
          <label className="flex min-h-11 cursor-pointer items-center gap-2.5 text-xs text-muted-foreground md:min-h-6">
            <Checkbox
              defaultChecked
              className={`flex size-4 shrink-0 items-center justify-center rounded border border-input bg-background data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground ${focus}`}
            >
              <CheckboxIndicator>
                <Check className="size-3" />
              </CheckboxIndicator>
            </Checkbox>
            Keep me in the loop with product updates.
          </label>
        </div>
        <BlockFooter status={created}>
          <BlockButton type="submit">
            Create <ArrowRight />
          </BlockButton>
        </BlockFooter>
      </form>
    </BlockCard>
  )
}

export { WorkspaceCard }
