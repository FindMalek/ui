import { Field, FieldControl, FieldDescription, FieldLabel } from "@ui-sdk/react/field"
import * as React from "react"

const limit = 280

export function Example() {
  const [bio, setBio] = React.useState(
    "Designer and engineer. I build tools for people who make things on the web.",
  )

  return (
    <Field className="flex w-full max-w-sm min-w-0 flex-col gap-3 text-foreground">
      <FieldLabel className="text-sm leading-snug font-medium text-foreground data-disabled:opacity-50">
        Bio
      </FieldLabel>
      <FieldControl
        render={<textarea rows={4} />}
        className="h-28 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-2 text-base text-foreground transition-[color,box-shadow] duration-200 outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10 motion-reduce:transition-none md:text-sm resize-none data-disabled:opacity-50"
        name="bio"
        maxLength={limit}
        value={bio}
        onChange={(event) => setBio(event.currentTarget.value)}
      />
      <FieldDescription
        className="flex justify-between gap-4 text-sm text-muted-foreground"
        render={(props) => (
          <p {...props}>
            <span>Shown on your public profile.</span>
            <span className="shrink-0 text-foreground tabular-nums">
              {bio.length} / {limit}
            </span>
          </p>
        )}
      />
    </Field>
  )
}
