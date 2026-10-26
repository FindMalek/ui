import { createApp } from "vue"
import DatePickerFieldFixture from "./DatePickerFieldFixture.vue"

function mount(root: HTMLElement) {
  createApp(DatePickerFieldFixture).mount(root)
}

export { mount }
