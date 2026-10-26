// @vitest-environment jsdom
// The marks an app writes for the agent bridge: `data-agent-confirm` leaves a
// change to a person, `data-agent-hidden` keeps a region from agents, and
// `data-agent-secret` keeps values from the model. `bind` from the kernel
// stands in for an adapter.
import { afterEach, describe, expect, test, vi } from "vitest"
import { button } from "../src/components/button/button"
import { input } from "../src/components/input/input"
import { bind } from "../src/foundation/kernel/part"
import { createAgent, registerTools } from "../src/page/agent/agent"
import { observe, type ObservedChange } from "../src/page/observe/observe"

let cleanups: (() => void)[] = []
afterEach(() => {
  cleanups.forEach((cleanup) => cleanup())
  cleanups = []
  document.body.innerHTML = ""
})

// A Button with its text, inside `parent`, which a test marks.
function mountButton(text: string, parent: HTMLElement = document.body) {
  const instance = button({ id: text })
  const el = document.createElement("button")
  el.textContent = text
  const onClick = vi.fn()
  el.addEventListener("click", onClick)
  parent.append(el)
  cleanups.push(bind(instance.part("root"), el), () => instance.destroy())
  return { el, onClick }
}

// An input with a label, inside `parent`.
function mountInput(label: string, parent: HTMLElement = document.body, onValueChange = vi.fn()) {
  const instance = input({ id: label, onValueChange })
  const el = document.createElement("input")
  el.setAttribute("aria-label", label)
  parent.append(el)
  const unbind = bind(instance.part("root"), el)
  let mounted = true
  const unmount = () => {
    if (!mounted) return
    mounted = false
    unbind()
    instance.destroy()
  }
  cleanups.push(unmount)
  return { instance, unmount }
}

// The components on the page now. Ones earlier tests took off it stay listed with `offPage`.
const onPage = (agent: ReturnType<typeof createAgent>) =>
  agent.snapshot().filter((component) => !component.offPage)

// A region with one mark.
function region(mark: string, value = "") {
  const el = document.createElement("section")
  el.setAttribute(mark, value)
  document.body.append(el)
  return el
}

describe("data-agent-confirm", () => {
  test("without allow, a marked press fails, says what it does and leaves the click to the person", async () => {
    const agent = createAgent()
    const { el, onClick } = mountButton("Buy credits")
    el.setAttribute("data-agent-confirm", "Charges $20 to your card for 1,000 credits")
    const outcome = await agent.act({ steps: [{ ref: "Buy credits", action: "press" }] })
    expect(outcome).toMatchObject({
      ok: false,
      error: {
        step: 0,
        message:
          'Needs a person: "Charges $20 to your card for 1,000 credits". Ask them to press "Buy credits" themselves.',
      },
    })
    expect(onClick).not.toHaveBeenCalled()
  })

  test("the snapshot says which component needs a person", () => {
    const agent = createAgent()
    mountButton("Buy credits").el.setAttribute("data-agent-confirm", "Charges $20 to your card")
    mountButton("Cancel")
    expect(agent.snapshot()).toEqual([
      expect.objectContaining({ label: "Buy credits", confirm: "Charges $20 to your card" }),
      expect.not.objectContaining({ confirm: expect.anything() }),
    ])
  })

  test("with allow, a marked press waits for the answer and carries what it does", async () => {
    let answer = true
    const allow = vi.fn(async () => answer)
    const agent = createAgent({ allow })
    const { el, onClick } = mountButton("Buy credits")
    el.setAttribute("data-agent-confirm", "Charges $20 to your card")
    expect(await agent.act({ steps: [{ ref: "Buy credits", action: "press" }] })).toMatchObject({ ok: true })
    expect(allow).toHaveBeenCalledWith(
      expect.objectContaining({ action: "press", confirm: "Charges $20 to your card" }),
      { signal: expect.any(AbortSignal) },
    )
    expect(onClick).toHaveBeenCalledTimes(1)
    answer = false
    expect(await agent.act({ steps: [{ ref: "Buy credits", action: "press" }] })).toMatchObject({
      ok: false,
      error: { message: 'The person said no to "Charges $20 to your card".' },
    })
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  test("a mark on a region covers every control inside it, for any action", async () => {
    const agent = createAgent()
    const onValueChange = vi.fn()
    mountInput("Billing email", region("data-agent-confirm", "Changes where invoices go"), onValueChange)
    const outcome = await agent.act({
      steps: [{ ref: "Billing email", action: "setValue", args: ["a@b.co"] }],
    })
    expect(outcome.error?.message).toBe(
      'Needs a person: "Changes where invoices go". Ask them to make this change themselves.',
    )
    expect(onValueChange).not.toHaveBeenCalled()
  })

  test("through WebMCP, registerTools' allow answers for the person", async () => {
    const tools = new Map<string, { execute: (input: object) => Promise<{ ok: boolean }> }>()
    const registerTool = async (tool: {
      name: string
      execute: (input: object) => Promise<{ ok: boolean }>
    }) => {
      tools.set(tool.name, tool)
    }
    Object.assign(document, { modelContext: { registerTool } })
    const allow = vi.fn(() => true)
    const { el, onClick } = mountButton("Buy credits")
    el.setAttribute("data-agent-confirm", "Charges $20")
    cleanups.push(registerTools(createAgent(), { allow }), () =>
      Reflect.deleteProperty(document, "modelContext"),
    )
    expect(
      await tools.get("act")!.execute({ steps: [{ ref: "Buy credits", action: "press" }] }),
    ).toMatchObject({
      ok: true,
    })
    expect(allow).toHaveBeenCalledWith(expect.objectContaining({ confirm: "Charges $20" }), {
      signal: expect.any(AbortSignal),
    })
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  test("a step nobody answers fails after the timeout, aborts allow's signal and frees the next call", async () => {
    let signal: AbortSignal | undefined
    const agent = createAgent({
      timeout: 50,
      allow: (_step, context) => {
        signal = context.signal
        return new Promise<boolean>(() => {})
      },
    })
    mountButton("Buy credits").el.setAttribute("data-agent-confirm", "Charges $20")
    const late = await agent.act({ steps: [{ ref: "Buy credits", action: "press" }] })
    expect(late.error?.message).toMatch(/^No answer to press on c\d+ in 0 seconds\.$/)
    expect(signal?.aborted).toBe(true)
  })
})

describe("data-agent-hidden", () => {
  test("a component inside is left out of the snapshot, and a step that names it is told so", async () => {
    const agent = createAgent()
    mountInput("New password", region("data-agent-hidden"))
    mountInput("Display name")
    expect(onPage(agent).map((component) => component.label)).toEqual(["Display name"])
    const outcome = await agent.act({ steps: [{ ref: "New password", action: "setValue", args: ["x"] }] })
    expect(outcome.error?.message).toBe(`"New password" isn't available to agents here. Ask the person.`)
  })

  test("its buttons can't be pressed, and its fields aren't kept after they leave", async () => {
    const agent = createAgent()
    const { onClick } = mountButton("Rotate keys", region("data-agent-hidden"))
    const { unmount } = mountInput("Recovery code", region("data-agent-hidden"))
    unmount()
    expect(onPage(agent)).toEqual([])
    expect(agent.snapshot().map((component) => component.label)).not.toContain("Recovery code")
    await agent.act({ steps: [{ ref: "Rotate keys", action: "press" }] })
    expect(onClick).not.toHaveBeenCalled()
  })

  test("the agent doesn't hear its changes, and the app's observe does", () => {
    const agent = createAgent()
    const heard: ObservedChange[] = []
    const logged: ObservedChange[] = []
    cleanups.push(
      agent.subscribe((change) => heard.push(change)),
      observe((change) => logged.push(change)),
    )
    const { instance } = mountInput("Recovery email", region("data-agent-hidden"))
    instance.api.setValue("me@example.com")
    expect(heard).toEqual([])
    expect(logged).toEqual([expect.objectContaining({ label: "Recovery email", value: "me@example.com" })])
  })
})

describe("data-agent-secret", () => {
  test("the agent sees a value is filled, never what it is, and can still type it", async () => {
    const agent = createAgent()
    const onValueChange = vi.fn()
    mountInput("Tax ID", region("data-agent-secret"), onValueChange)
    expect(onPage(agent)).toEqual([expect.objectContaining({ label: "Tax ID", value: "" })])
    const outcome = await agent.act({ steps: [{ ref: "Tax ID", action: "setValue", args: ["12-345"] }] })
    expect(onValueChange).toHaveBeenCalledWith("12-345", expect.anything())
    expect(JSON.stringify(outcome)).not.toContain("12-345")
    expect(outcome.values).toMatchObject({ [`${outcome.steps[0].ref} Tax ID`]: "[redacted]" })
    expect(onPage(agent)[0].value).toBe("[redacted]")
  })

  test("observe redacts it too", () => {
    const logged: ObservedChange[] = []
    cleanups.push(observe((change) => logged.push(change)))
    const { instance } = mountInput("Tax ID", region("data-agent-secret"))
    instance.api.setValue("12-345")
    expect(logged).toEqual([expect.objectContaining({ value: "[redacted]", previous: "[redacted]" })])
  })
})

describe("mark names", () => {
  test("development warns about a misspelled mark, and not about an app's own data-agent attribute", () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {})
    const agent = createAgent()
    mountButton("Buy", region("data-agent-confim", "Charges $20"))
    mountButton("Assign", region("data-agent-id", "42"))
    agent.snapshot()
    expect(warn).toHaveBeenCalledTimes(1)
    expect(warn.mock.calls[0][0]).toContain("data-agent-confim isn't an agent mark")
    expect(warn.mock.calls[0][0]).toContain("data-agent-confirm")
    warn.mockRestore()
  })
})
