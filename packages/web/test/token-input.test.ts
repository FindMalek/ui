// @vitest-environment jsdom
import { afterEach, expect, test } from "vitest"
import { instanceOf } from "../src/define-element"
import { defineTokenInputElements } from "../src/token-input"
import { defineTriggerMenuElements } from "../src/trigger-menu"

const wait = () => new Promise((resolve) => setTimeout(resolve, 20))

afterEach(() => document.body.replaceChildren())

function tokenInputs(count: number) {
  ElementInternals.prototype.setFormValue ??= () => {}
  ElementInternals.prototype.setValidity ??= () => {}
  defineTokenInputElements()
  defineTriggerMenuElements()
  const editor = `<ui-token-input-editor aria-label="Prompt"></ui-token-input-editor>`
  document.body.innerHTML =
    `<ui-token-input>${editor}<ui-trigger-menu></ui-trigger-menu></ui-token-input>` +
    `<ui-token-input>${editor}</ui-token-input>`.repeat(count - 1)
  const inputs = [...document.querySelectorAll("ui-token-input")]
  const menu = document.querySelector("ui-trigger-menu")!
  // The editor a token input has now, and the one its trigger menu suggests into.
  const editorOf = (input: Element) => instanceOf<{ editor: object }>(input)?.api.editor
  const used = () => instanceOf(menu)?.get() as { editor?: object } | undefined
  return { inputs, menu, editor: editorOf, used }
}

test("a token input put back on the page gives its trigger menu its new editor", async () => {
  const { inputs, editor, used } = tokenInputs(1)
  await wait()
  const first = editor(inputs[0])
  expect(used()?.editor).toBe(first)
  inputs[0].remove()
  await wait()
  document.body.append(inputs[0])
  await wait()
  expect(editor(inputs[0])).not.toBe(first)
  expect(used()?.editor).toBe(editor(inputs[0]))
})

test("a trigger menu moved into another token input suggests into that one's editor", async () => {
  const { inputs, menu, editor, used } = tokenInputs(2)
  await wait()
  menu.remove()
  await wait()
  inputs[1].append(menu)
  await wait()
  expect(used()?.editor).toBe(editor(inputs[1]))
})
