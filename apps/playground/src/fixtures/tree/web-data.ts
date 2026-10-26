import { treeFixture } from "tests/fixtures/tree.ts"
import { markup, setUp } from "./web"

// The same tree as data: the element renders its own items, as copies of the parts in its
// <template>.
const template = `
  <template>
    <ui-tree-item class="tree-item">
      <ui-tree-item-indicator class="tree-indicator"></ui-tree-item-indicator>
      <ui-tree-item-checkbox class="tree-checkbox"></ui-tree-item-checkbox>
      <ui-tree-item-label class="tree-label"></ui-tree-item-label>
      <ui-tree-group class="tree-group"></ui-tree-group>
    </ui-tree-item>
  </template>
`

async function mount(root: HTMLElement) {
  root.innerHTML = markup(template)
  const tree = (await setUp(root)) as HTMLElement & { items?: unknown }
  tree.items = treeFixture.items
}

export { mount }
