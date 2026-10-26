import { Field, FieldLabel } from "@ui-sdk/react/field"
import { Input, InputGroup } from "@ui-sdk/react/input"
import { Eye, EyeOff } from "lucide-react"
import * as React from "react"

export function Example() {
  const [visible, setVisible] = React.useState(false)
  return (
    <Field name="password" className="flex w-full max-w-sm flex-col gap-2">
      <FieldLabel className="text-sm leading-none font-medium data-disabled:opacity-50 data-invalid:text-destructive">
        Password
      </FieldLabel>
      <InputGroup className="flex h-8 w-full min-w-0 items-center gap-2 rounded-2xl border border-transparent bg-input/50 px-2.5 text-sm text-muted-foreground transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30 data-disabled:opacity-50">
        <Input
          type={visible ? "text" : "password"}
          autoComplete="current-password"
          className="h-full min-w-0 flex-1 bg-transparent text-base text-foreground outline-none placeholder:text-muted-foreground md:text-sm"
        />
        <button
          type="button"
          aria-label="Show password"
          aria-pressed={visible}
          onClick={() => setVisible((value) => !value)}
          className="-me-1.5 inline-flex size-6 shrink-0 items-center justify-center rounded-xl outline-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 dark:hover:bg-muted/50"
        >
          {visible ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
        </button>
      </InputGroup>
    </Field>
  )
}
