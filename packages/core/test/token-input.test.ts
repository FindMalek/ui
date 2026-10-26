import { beforeAll, describe, expect, test } from "vitest"
import { setAnnouncer } from "../src/foundation/platform/announce"
import { tokenInput } from "../src/components/token-input/token-input"
import { renderStaticHtml } from "../src/components/token-input/token-input-view"
import type { Token } from "../src/foundation/text/text-editor"

const file = { type: "file", value: "src/a.ts", label: "a.ts" }
const tokens = (value: (string | Token)[]) => value.filter((segment) => typeof segment !== "string")

beforeAll(() => setAnnouncer(() => {}))

describe("pending tokens", () => {
  test("a token removed while it loads comes back settled on undo", async () => {
    const instance = tokenInput({ id: "x" })
    let settle = () => {}
    const loaded = new Promise<void>((resolve) => (settle = resolve))
    instance.api.insert(file, { resolve: loaded })
    const [token] = tokens(instance.api.getValue())
    expect(token.status).toBe("pending")
    instance.api.removeToken(token.id!)
    settle()
    await loaded
    await Promise.resolve()
    instance.api.undo()
    const [restored] = tokens(instance.api.getValue())
    expect(restored.id).toBe(token.id)
    expect(restored.status).toBeUndefined()
  })
})

describe("static markup", () => {
  test("text that reads like the sentinel attribute stays text", () => {
    const html = renderStaticHtml(["data-ui-sentinel"], () => "")
    expect(html).toBe("data-ui-sentinel")
  })
})
