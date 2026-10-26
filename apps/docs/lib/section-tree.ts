import type { Section } from "./sections"
import { source } from "./source"
import { flattenTree, type Root } from "fumadocs-core/page-tree"

// A section's sidebar: the folder under /docs whose home is /docs/<section>.
function sectionTree(section: Section) {
  const home = `/docs/${section}`
  const folder = source
    .getPageTree()
    .children.find(
      (node) =>
        node.type === "folder" &&
        (node.index?.url === home ||
          node.children.some((child) => child.type === "page" && child.url === home)),
    )
  if (folder?.type !== "folder") return undefined
  const tree: Root = {
    name: folder.name,
    children: [...(folder.index ? [folder.index] : []), ...folder.children],
  }
  return tree
}

// A section's pages in sidebar order, for search before a query.
function sectionPages(tree: Root) {
  return flattenTree(tree.children).map((page) => ({ name: String(page.name), url: page.url }))
}

export { sectionPages, sectionTree }
