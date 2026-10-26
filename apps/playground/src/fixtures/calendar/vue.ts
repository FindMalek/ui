import { createApp } from "vue"
import CalendarFixture from "./CalendarFixture.vue"

function mount(root: HTMLElement) {
  createApp(CalendarFixture).mount(root)
}

export { mount }
