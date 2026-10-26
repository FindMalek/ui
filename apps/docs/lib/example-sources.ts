import { readFile } from "node:fs/promises"
import path from "node:path"
import { frameworks, type Framework } from "./frameworks"
import { repoRoot } from "./repo-root"

async function readExampleSources(name: string, framework: Framework) {
  const { example, ext, lang } = frameworks[framework]
  const [component, base] = name.split("/")
  const directory = path.join(repoRoot, "examples", component, example)
  const filename = `${base}.${ext}`
  const code = await readFile(path.join(directory, filename), "utf8").catch(() => null)
  if (!code) {
    return null
  }

  return { files: [{ name: filename, lang, code: code.trimEnd() }] }
}

export { readExampleSources }
