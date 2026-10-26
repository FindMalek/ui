import { TokenInput, TokenInputEditor, type TokenInputValue } from "@ui-sdk/react/token-input"
import * as React from "react"

const draft: TokenInputValue = [
  "Explain ",
  { type: "file", value: "src/routes.ts", label: "routes.ts" },
  " in two sentences.",
]

export function Example() {
  const [submitted, setSubmitted] = React.useState("")
  const [disabled, setDisabled] = React.useState(false)
  const [readOnly, setReadOnly] = React.useState(false)
  const formId = React.useId()
  return (
    <div className="flex w-full max-w-sm min-w-0 flex-col gap-3">
      <div className="flex flex-wrap items-center gap-3 text-sm">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={disabled}
            onChange={(event) => setDisabled(event.target.checked)}
            className="size-4 accent-primary"
          />
          Disabled
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={readOnly}
            onChange={(event) => setReadOnly(event.target.checked)}
            className="size-4 accent-primary"
          />
          Read-only
        </label>
      </div>
      <TokenInput
        form={formId}
        name="prompt"
        required
        defaultValue={draft}
        disabled={disabled}
        readOnly={readOnly}
      >
        <label id={`${formId}-label`} className="text-sm leading-none font-medium">
          Prompt
        </label>
        <TokenInputEditor
          aria-labelledby={`${formId}-label`}
          className="h-28 overflow-y-auto rounded-2xl border border-transparent bg-input/50 px-2.5 py-2 text-base leading-6 outline-none transition-[color,box-shadow] duration-200 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-not-allowed data-disabled:opacity-50 data-readonly:border-input data-readonly:bg-transparent md:text-sm [&_[data-token-type]]:rounded-2xl [&_[data-token-type]]:bg-input [&_[data-token-type]]:px-1.5 [&_[data-token-type]]:font-medium dark:[&_[data-token-type]]:bg-input/60 motion-reduce:transition-none"
        />
      </TokenInput>
      <form
        onReset={() => setSubmitted("")}
        id={formId}
        className="flex flex-col gap-3"
        onSubmit={(event) => {
          event.preventDefault()
          setSubmitted(String(new FormData(event.currentTarget).get("prompt") ?? ""))
        }}
      >
        <div className="flex gap-2">
          <button
            type="submit"
            className="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none disabled:pointer-events-none disabled:opacity-50"
          >
            Submit
          </button>
          <button
            type="reset"
            className="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none disabled:pointer-events-none disabled:opacity-50"
          >
            Reset
          </button>
        </div>
        <p className="h-12 overflow-y-auto font-mono text-xs break-all text-muted-foreground">{submitted}</p>
      </form>
    </div>
  )
}
