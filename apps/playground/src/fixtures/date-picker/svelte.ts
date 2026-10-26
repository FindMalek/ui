import { mount as mountComponent } from "svelte"
import DatePickerFixture from "./DatePickerFixture.svelte"

function mount(root: HTMLElement) {
  mountComponent(DatePickerFixture, { target: root })
}

export { mount }
