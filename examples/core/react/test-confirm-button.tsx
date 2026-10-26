import * as React from "react"
import { mount } from "@ui-sdk/core/testing"
import { confirmButton } from "./confirm-button"

type Check = { label: string; ok: boolean }

async function test() {
  const checks: Check[] = []
  const expect = (label: string, ok: boolean) => checks.push({ label, ok })
  const button = mount(confirmButton, {}, `<root>Delete</root>`)
  try {
    await button.click(button.root)
    expect("A click arms the button", button.state.armed)
    const change = button.changes.at(-1)
    expect("The change says why: press", change?.reason === "press")
    expect("And how: mouse", change?.source === "mouse")
    await button.keys("Enter")
    expect("Enter confirms, and disarms it", !button.state.armed)
    expect("From the keyboard", button.changes.at(-1)?.source === "keyboard")
    expect("The button is a button", button.part("root")!.getAttribute("type") === "button")
  } finally {
    button.unmount()
  }
  return checks
}

function Example() {
  const [checks, setChecks] = React.useState<Check[] | null>(null)
  return (
    <div className="flex w-80 flex-col gap-3 text-sm">
      <button
        type="button"
        onClick={async () => setChecks(await test())}
        className="h-8 w-fit rounded-lg bg-foreground px-3 font-medium text-background outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
      >
        Run the test
      </button>
      {checks && (
        <ul aria-label="Results" className="flex flex-col gap-1">
          {checks.map((check) => (
            <li key={check.label} data-ok={check.ok} className="data-[ok=false]:font-medium">
              {check.ok ? "✓" : "✗"} {check.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export { Example }
