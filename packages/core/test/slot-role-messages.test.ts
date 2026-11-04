import path from "node:path"
import ts from "typescript"
import { expect, test } from "vitest"

// What TypeScript says about each mistake a slot can make, since agents fix
// what the message names. Unions in the slot types can make it blame the
// wrong field, like telling an option without `focus` to add keys.
const cases = {
  option: ['slot({ role: "option", press })', "Property 'focus' is missing"],
  button: ['slot({ role: "button", focus: "native" })', "Property 'press' is missing"],
  slider: ['slot({ role: "slider", focus: "native" })', "keys, on"],
  keyed: ['slot({ role: "slider", keys: ["ArrowUp"], on: { keydown } })', "Property 'focus' is missing"],
  unhandled: ['slot({ role: "listbox", keys: ["ArrowDown"] })', "Property 'on' is missing"],
  unhandledGroup: ['slot({ role: "group", keys: ["Enter"] })', "Property 'on' is missing"],
} as const

test("type errors name what a slot leaves out", () => {
  const configPath = path.join(import.meta.dirname, "../tsconfig.test.json")
  const config = ts.getParsedCommandLineOfConfigFile(
    configPath,
    {},
    { ...ts.sys, onUnRecoverableConfigFileDiagnostic() {} },
  )!
  const fixture = path.join(import.meta.dirname, "slot-role-messages.fixture.ts")
  const names = Object.keys(cases) as (keyof typeof cases)[]
  const source = [
    'import { definePrimitive } from "../src/index"',
    "const press = () => {}",
    "const keydown = () => {}",
    'definePrimitive({ name: "m", state: () => ({}), api: () => ({}), slots: (slot) => ({',
    ...names.map((name) => `  ${name}: ${cases[name][0]},`),
    "}) })",
  ].join("\n")
  const host = ts.createCompilerHost(config.options)
  const getSourceFile = host.getSourceFile
  host.getSourceFile = (file, language, ...rest) =>
    file === fixture ? ts.createSourceFile(file, source, language) : getSourceFile(file, language, ...rest)
  const fileExists = host.fileExists
  host.fileExists = (file) => file === fixture || fileExists(file)
  const program = ts.createProgram([fixture], { ...config.options, noEmit: true }, host)
  const file = program.getSourceFile(fixture)!
  const messages = new Map<string, string>()
  for (const diagnostic of ts.getPreEmitDiagnostics(program, file)) {
    const line = file.getLineAndCharacterOfPosition(diagnostic.start!).line
    messages.set(names[line - 4]!, ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n"))
  }
  for (const name of names) expect(messages.get(name), name).toContain(cases[name][1])
})
