import { exposeLayers } from "tests/fixtures/perf.ts"
import { createApp } from "vue"
import Fixture from "./Fixture.vue"

function mount(root: HTMLElement) {
  exposeLayers()
  createApp(Fixture).mount(root)
}

export { mount }
