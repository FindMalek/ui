import { toText, type Token } from "@ui-sdk/core/token-input"
import "@ui-sdk/web/token-input"
import "@ui-sdk/web/trigger-menu"
import { Check, ChevronRight, Clock, Code, createElement, File, Plus, X } from "lucide"

const files = [
  { value: "src/app.tsx", label: "app.tsx", keywords: ["src"] },
  { value: "src/routes.ts", label: "routes.ts", keywords: ["src"] },
  { value: "src/styles.css", label: "styles.css", keywords: ["src"] },
  { value: "README.md", label: "README.md" },
  { value: "package.json", label: "package.json" },
]

const skills = [
  { value: "search", label: "search", arguments: [{ name: "query", hint: "<query>", required: true }] },
  { value: "review", label: "review" },
  { value: "summarize", label: "summarize" },
]

const loadFile = () => new Promise<void>((resolve) => setTimeout(resolve, 800))

export function mount(root: HTMLElement) {
  let sendTimer: ReturnType<typeof setTimeout> | undefined
  root.innerHTML = `
    <form class="flex w-full max-w-md min-w-0 flex-col gap-3">
      <ul class="flex h-16 flex-col gap-1 overflow-y-auto text-sm text-muted-foreground"></ul>
      <ui-token-input>
        <div class="flex flex-col rounded-2xl border border-transparent bg-input/50 transition-[color,box-shadow] duration-200 has-[[data-slot=token-input-editor]:focus-visible]:border-ring has-[[data-slot=token-input-editor]:focus-visible]:ring-3 has-[[data-slot=token-input-editor]:focus-visible]:ring-ring/30 motion-reduce:transition-none">
          <ui-token-input-editor aria-label="Prompt" placeholder="Ask anything. @ adds a file, / runs a skill" class="relative h-24 overflow-y-auto px-3 pt-2.5 text-base leading-6 outline-none data-empty:before:pointer-events-none data-empty:before:absolute data-empty:before:text-muted-foreground data-empty:before:content-[attr(aria-placeholder)] md:text-sm"></ui-token-input-editor>
          <div class="flex items-center justify-between px-2 pb-2">
            <button type="button" data-action="readme" class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none disabled:pointer-events-none disabled:opacity-50">${createElement(Plus, { class: "size-4", "aria-hidden": "true" }).outerHTML} README</button>
            <button type="submit" aria-label="Send" class="inline-flex size-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none disabled:pointer-events-none disabled:opacity-50">${createElement(ChevronRight, { class: "size-4", "aria-hidden": "true" }).outerHTML}</button>
          </div>
        </div>
        <ui-trigger-menu>
          <ui-trigger-menu-hint class="font-mono text-sm text-muted-foreground"></ui-trigger-menu-hint>
          <ui-trigger-menu-content class="max-h-[min(18rem,var(--available-height))] w-56 origin-(--transform-origin) scroll-py-1 overflow-y-auto rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10 motion-reduce:transition-none">
            <ui-trigger-menu-empty class="py-2 text-center text-sm text-muted-foreground empty:hidden">No matches</ui-trigger-menu-empty>
            <ui-trigger-menu-list></ui-trigger-menu-list>
          </ui-trigger-menu-content>
          <template>
            <ui-trigger-menu-item class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
            </ui-trigger-menu-item>
          </template>
        </ui-trigger-menu>
      </ui-token-input>
    </form>
  `
  const input = root.querySelector("ui-token-input")!
  const menu = root.querySelector("ui-trigger-menu")!
  const form = root.querySelector("form")!
  const sent = root.querySelector("ul")!
  const submit = root.querySelector<HTMLButtonElement>('button[type="submit"]')!
  const readme = root.querySelector<HTMLButtonElement>('[data-action="readme"]')!
  menu.triggers = [
    { char: "@", type: "file", items: files },
    { char: "/", boundary: "start", type: "skill", items: skills },
  ]
  menu.addEventListener("select", (event) => {
    if (event.detail.trigger === "@") event.detail.waitUntil(loadFile())
  })
  input.renderToken = (token: Token, host: HTMLElement) => {
    const run = token.data?.run
    host.innerHTML = `
      <ui-token-input-token class="inline-flex items-center gap-1 rounded-2xl bg-input ps-1.5 pe-0.5 align-baseline font-medium text-foreground data-pending:animate-pulse data-pending:opacity-60 data-unresolved:border data-unresolved:border-dashed data-unresolved:border-ring data-selected:ring-3 data-selected:ring-ring/30 data-[token-type=skill]:bg-primary data-[token-type=skill]:text-primary-foreground dark:bg-input/60 dark:data-[token-type=skill]:bg-primary motion-reduce:animate-none">
        ${createElement(token.type === "skill" ? Code : File, { class: "size-3.5 shrink-0", "aria-hidden": "true" }).outerHTML}
        <span></span>
        ${run === "running" ? createElement(Clock, { class: "size-3.5 animate-spin", "aria-hidden": "true" }).outerHTML : ""}
        ${run === "done" ? createElement(Check, { class: "size-3.5", "aria-hidden": "true" }).outerHTML : ""}
        <ui-token-input-token-remove class="-ms-0.5 flex size-4.5 cursor-default items-center justify-center rounded-full opacity-50 hover:opacity-100">${createElement(X, { class: "size-3", "aria-hidden": "true" }).outerHTML}</ui-token-input-token-remove>
      </ui-token-input-token>`
    host.querySelector("span")!.textContent = token.type === "skill" ? `/${token.label}` : token.label
  }
  readme.addEventListener("mousedown", (event) => event.preventDefault())
  readme.addEventListener("click", () =>
    input.api.insert({ type: "file", value: "README.md", label: "README.md" }, { resolve: loadFile() }),
  )
  const setRunning = (running: boolean) => {
    submit.disabled = running
    submit.setAttribute("aria-label", running ? "Running" : "Send")
    submit.innerHTML = createElement(running ? Clock : ChevronRight, {
      class: "size-4",
      "aria-hidden": "true",
    }).outerHTML
  }
  form.addEventListener("submit", (event) => {
    event.preventDefault()
    if (submit.disabled || !input.api.getLabel().trim()) return
    setRunning(true)
    const skillTokens = input.api
      .getValue()
      .filter((segment): segment is Token => typeof segment !== "string" && segment.type === "skill")
    for (const skill of skillTokens)
      input.api.updateToken(skill.id!, { data: { ...skill.data, run: "running" } })
    sendTimer = setTimeout(() => {
      for (const skill of skillTokens)
        input.api.updateToken(skill.id!, { data: { ...skill.data, run: "done" } })
      const item = document.createElement("li")
      item.className = "truncate font-mono text-xs"
      item.textContent = toText(input.api.getValue())
      sent.append(item)
      input.api.clear()
      setRunning(false)
    }, 1500)
  })

  return () => clearTimeout(sendTimer)
}
