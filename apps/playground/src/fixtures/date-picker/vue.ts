import { createApp } from "vue"
import DatePickerFixture from "./DatePickerFixture.vue"

function mount(root: HTMLElement) {
  createApp(DatePickerFixture).mount(root)
}

export { mount }
