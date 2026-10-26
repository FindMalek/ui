import { existsSync, readFileSync, readdirSync } from "node:fs"
import path from "node:path"
import { callbackIn, frameworks, type Framework } from "./frameworks"
import { pageMarkdown, type LinkTarget, type PageLinks } from "./page-markdown"
import { docPages, frameworkGuides } from "./pages"
import { repoRoot } from "./repo-root"
import { utilitiesFolder } from "./sections"

// A framework's docs as one Markdown file for an agent's context, served at
// /docs/<framework>/llms.txt and shipped as each package's docs/llms.txt:
// the framework guides whole, every component's anatomy, props,
// state and styling hooks in a few words each, the utilities, and how to
// render a primitive. Examples and test lists stay on the pages it links to.

/** Each framework's package name, after `@ui-sdk/`. */
const packageNames: Record<Framework, string> = {
  react: "react",
  vue: "vue",
  svelte: "svelte",
  solid: "solid",
  "web-components": "web",
}

// Sections of a component page the file keeps.
const kept = ["Usage", "Anatomy", "Styling", "API Reference"]

// Props that mean the same on every component that takes them, which each
// framework's guides describe once. Entries list them by name.
const sharedProps = [
  "disabled",
  "readOnly",
  "required",
  "name",
  "form",
  "debug",
  "controller",
  "container",
  "keepMounted",
  "side",
  "align",
  "sideOffset",
  "alignOffset",
  "collisionPadding",
  "arrowPadding",
  "dismissible",
  "onDismissAttempt",
  "onOpenChangeComplete",
  "loop",
  "orientation",
]

// A list's rows for shared props, folded into one row of names at its end.
function foldShared(text: string, framework: Framework) {
  const shared = new Set(sharedProps.map((name) => callbackIn(name, framework)))
  const out: string[] = []
  let folded: string[] = []
  const flush = () => {
    if (folded.length) out.push(`- Shared: ${folded.map((name) => `\`${name}\``).join(", ")}.`)
    folded = []
  }
  for (const line of text.split("\n")) {
    const name = line.match(/^- `([^`]+?)\??(?: event)?`/)?.[1]
    if (name && shared.has(name)) folded.push(name)
    else {
      if (!line.startsWith("- ")) flush()
      out.push(line)
    }
  }
  flush()
  return out.join("\n")
}

// A Styling section's attributes and variables, without its prose.
const stylingHooks = (section: string) => {
  const lines = section.split("\n")
  const attributes = lines.filter((line) => line.startsWith("- `[data-slot="))
  const variables = lines.find((line) => line.startsWith("`--"))
  return [
    "## Styling",
    "",
    ...attributes,
    ...(variables ? ["", `CSS variables: ${variables}`] : []),
    "",
    "",
  ].join("\n")
}

// The reference in fewer lines: each part's state on one line, a
// controller's methods by name, and tables without their padding.
const tighten = (section: string) =>
  section
    .replace(/^What render functions.*\n\n/m, "")
    .replace(/^`(\w+)`:\n\n(`.*)\n/gm, "- `$1`: $2")
    .replace(/((?:^- `\w+\([^`]*\)`.*\n)+)/gm, (methods: string) => {
      const names = [...methods.matchAll(/^- (`\w+\([^`]*\)`)/gm)].map((match) => match[1])
      return `Methods: ${names.join(", ")}.\n`
    })
    .replace(/^\|.*\|$/gm, (row) => row.replace(/ {2,}/g, " ").replace(/-{3,}/g, "---"))

// Headings one level deeper for each of `levels`, outside fenced code.
const demote = (text: string, levels: number) =>
  text
    .split(/^( *```[\s\S]*?^ *```)$/m)
    .map((part, index) => (index % 2 ? part : part.replace(/^(#{1,6}) /gm, `$1${"#".repeat(levels)} `)))
    .join("")

// A page's Markdown without its title, and its description, which come first.
const bodyOf = (markdown: string) => markdown.replace(/^# .*\n\n(?:(?!#|```).*\n\n)?/, "")

// The imports a component's examples write, like `@ui-sdk/react/popover`,
// the most used first.
function importsOf(component: string, framework: Framework) {
  const dir = path.join(repoRoot, "examples", component, frameworks[framework].example)
  if (!existsSync(dir)) return []
  const count = new Map<string, number>()
  const pattern = new RegExp(`["'](@ui-sdk/${packageNames[framework]}(?:/[\\w-]+)?)["']`, "g")
  for (const file of readdirSync(dir, { withFileTypes: true }).filter((file) => file.isFile()))
    for (const [, entry] of readFileSync(path.join(dir, file.name), "utf8").matchAll(pattern))
      if (!entry.endsWith("/agent")) count.set(entry, (count.get(entry) ?? 0) + 1)
  const own = `@ui-sdk/${packageNames[framework]}/${component}`
  return [...count.keys()].sort((a, b) => (a === own ? -1 : b === own ? 1 : count.get(b)! - count.get(a)!))
}

// A component's entry in the file: what it is, where it's imported from, and
// the page's anatomy, styling hooks and reference, compact.
async function componentEntry(file: string, slug: string, framework: Framework, link: PageLinks) {
  const markdown = await pageMarkdown(file, framework, link, { compact: true })
  const [head, ...sections] = markdown.split(/^(?=## )/m)
  const description = head.replace(/^# .*\n+/, "").trim()
  const imports = importsOf(slug, framework)
  const from =
    framework === "web-components"
      ? imports.length && `Defined by \`import "${imports[0]}"\`.`
      : imports.length && `Import from \`${imports[0]}\`.`
  const page = link({ slugs: [framework, "components", slug] })
  const body = sections
    .filter((section) => kept.includes(section.match(/^## (.*)/)![1]))
    .map((section) =>
      section.startsWith("## Styling") ? stylingHooks(section) : tighten(foldShared(section, framework)),
    )
    .join("")
  return [
    `### ${readPageTitle(file)}`,
    [description, from, page && `[Full page](${page}).`].filter(Boolean).join(" "),
    demote(body, 2).trim(),
  ].join("\n\n")
}

const readPageTitle = (file: string) => readFileSync(file, "utf8").match(/^title: (.*)$/m)![1]

/**
 * `framework`'s llms.txt. Links go through `link`, like the site's pages or
 * the package's own Markdown copies.
 */
async function frameworkLlms(framework: Framework, link: PageLinks) {
  const { label } = frameworks[framework]
  const name = `@ui-sdk/${packageNames[framework]}`
  const guides = await Promise.all(
    frameworkGuides(framework).map(
      async (page) =>
        `## ${page.title}\n\n${demote(bodyOf(await pageMarkdown(page.file, framework, link)), 1).trim()}`,
    ),
  )
  const to = (target: LinkTarget) => link(target) ?? `/docs/${target.slugs.join("/")}`

  const components = docPages(`${framework}/components`).filter((entry) => entry.slugs.length === 3)
  const utilities = docPages(`${framework}/${utilitiesFolder(framework)}`).filter(
    (entry) => entry.slugs.length === 3,
  )
  const entries = await Promise.all(
    components.map((entry) => componentEntry(entry.file, entry.slugs[2], framework, link)),
  )
  const utilityPages = await Promise.all(
    utilities.map(
      async (entry) =>
        `### ${entry.title}\n\n${demote(bodyOf(await pageMarkdown(entry.file, framework, link, { compact: true })), 2).trim()}`,
    ),
  )

  return `# ui-sdk for ${label}

> ${name} renders ui-sdk's framework-free TypeScript core in ${label}. How an interface behaves lives in the core; ${name} turns each primitive into parts. No styles, no dependencies, no providers, no portals.

This file is the context an agent needs to build with ${name}: how ${label} renders a primitive, the conventions every part shares, then every component's parts, props, state and styling hooks in a few words each. Each component links to its full page, with examples and every prop's whole description. It's generated from the docs, for this release.

- [Core](${to({ slugs: ["core"] })}): build a component, compose behaviors, and explore the foundations, from defining a primitive to working with state, the browser and text.
- [Agents](${to({ slugs: ["agents"] })}): letting an agent operate a page, and WebMCP.

${guides.join("\n\n")}

## Components

${entries.join("\n\n")}

## ${framework === "react" ? "Hooks" : "Utilities"}

${utilityPages.join("\n\n")}
`
}

export { frameworkLlms, packageNames }
