import { Field, FieldDescription, FieldError, FieldLabel } from "@ui-sdk/react/field"
import { FileInput, FileInputDropzone, FileInputTrigger } from "@ui-sdk/react/file-input"
import * as React from "react"

export function Example() {
  const [sent, setSent] = React.useState(false)

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        setSent(true)
      }}
      onReset={() => setSent(false)}
      className="flex w-full max-w-md min-w-0 flex-col gap-4 text-foreground"
    >
      <Field className="flex min-w-0 flex-col gap-2">
        <FieldLabel className="text-sm leading-none font-medium text-foreground data-disabled:opacity-50">
          Proof of address
        </FieldLabel>
        <FileInput name="proof" required accept={["image/*", ".pdf"]}>
          {({ value: [file] }) => (
            <FileInputDropzone className="flex min-w-0 flex-wrap items-center justify-between gap-3 p-4 rounded-3xl border border-dashed border-border transition-colors duration-200 data-dragging:border-ring data-dragging:bg-muted/50 data-drag-reject:border-foreground data-drag-reject:bg-muted data-disabled:opacity-50 motion-reduce:transition-none">
              <span className="min-w-0 flex-1 truncate text-sm text-muted-foreground">
                {file?.name ?? "Drop a scan here"}
              </span>
              <FileInputTrigger className="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none data-disabled:pointer-events-none data-disabled:opacity-50 disabled:pointer-events-none disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10">
                {file ? "Replace" : "Choose a file"}
              </FileInputTrigger>
            </FileInputDropzone>
          )}
        </FileInput>
        <FieldDescription className="min-h-5 text-sm text-muted-foreground">
          A utility bill or bank statement from the last 3 months.
        </FieldDescription>
        <div className="min-h-5">
          <FieldError match="valueMissing" className="min-h-5 text-sm text-foreground">
            Add a scan to continue.
          </FieldError>
        </div>
      </Field>
      <div className="flex flex-wrap gap-2">
        <button
          type="submit"
          className="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none data-disabled:pointer-events-none data-disabled:opacity-50 disabled:pointer-events-none disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10"
        >
          Continue
        </button>
        <button
          type="reset"
          className="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none data-disabled:pointer-events-none data-disabled:opacity-50 disabled:pointer-events-none disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10"
        >
          Reset
        </button>
        <span className="min-h-5 basis-full text-sm text-muted-foreground">{sent ? "Sent." : ""}</span>
      </div>
    </form>
  )
}
