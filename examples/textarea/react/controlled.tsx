import { Field, FieldDescription, FieldLabel } from "@ui-sdk/react/field"
import { Textarea } from "@ui-sdk/react/textarea"
import * as React from "react"

export function Example() {
  const [bio, setBio] = React.useState("")
  return (
    <Field name="bio" className="flex w-full max-w-sm flex-col gap-2 text-foreground">
      <FieldLabel className="text-sm leading-none font-medium text-foreground data-disabled:opacity-50">
        Bio
      </FieldLabel>
      <Textarea
        value={bio}
        onValueChange={setBio}
        maxLength={160}
        required
        className="min-h-16 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 resize-none px-2.5 py-2 text-base text-foreground transition-[color,box-shadow] duration-200 outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10 motion-reduce:transition-none md:text-sm"
      />
      <FieldDescription className="min-h-5 text-sm text-muted-foreground tabular-nums">
        {bio.length} / 160
      </FieldDescription>
    </Field>
  )
}
