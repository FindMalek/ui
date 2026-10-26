import { Field, FieldLabel } from "@ui-sdk/react/field"
import { Textarea, createInputController } from "@ui-sdk/react/textarea"
import * as React from "react"

export function Example() {
  const [message] = React.useState(createInputController)
  const [sent, setSent] = React.useState<string[]>([])
  return (
    <form
      className="flex min-h-72 w-full max-w-sm flex-col gap-2 text-foreground"
      onSubmit={(event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        setSent((list) => [...list, String(data.get("message"))])
        message.clear()
      }}
    >
      <Field name="message" className="flex flex-col gap-2">
        <FieldLabel className="text-sm leading-none font-medium text-foreground data-disabled:opacity-50">
          Message
        </FieldLabel>
        <Textarea
          controller={message}
          required
          autoResize
          className="min-h-16 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 resize-none px-2.5 py-2 text-base text-foreground transition-[color,box-shadow] duration-200 outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10 motion-reduce:transition-none md:text-sm field-sizing-content max-h-40"
        />
      </Field>
      <button
        type="submit"
        className="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none"
      >
        Send message
      </button>
      <p className="min-h-5 text-sm text-muted-foreground">
        {sent.length ? `Sent: ${sent.at(-1)}` : "Nothing sent yet."}
      </p>
    </form>
  )
}
