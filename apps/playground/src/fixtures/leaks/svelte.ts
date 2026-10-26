import { mount as mountComponent } from "svelte"
import { exposeLayers } from "tests/fixtures/perf.ts"
import LeaksFixture from "./LeaksFixture.svelte"

function mount(root: HTMLElement) {
  exposeLayers()
  mountComponent(LeaksFixture, { target: root })
}

export { mount }
