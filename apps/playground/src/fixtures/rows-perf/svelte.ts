import { mount as mountComponent } from "svelte"
import { mountWhenAsked } from "tests/fixtures/perf.ts"
import RowsPerfFixture from "./RowsPerfFixture.svelte"

function mount(root: HTMLElement) {
  mountWhenAsked(root, (target) => mountComponent(RowsPerfFixture, { target }))
}

export { mount }
