import { mount as mountComponent } from "svelte"
import DatePickerFieldFixture from "./DatePickerFieldFixture.svelte"

function mount(root: HTMLElement) {
  mountComponent(DatePickerFieldFixture, { target: root })
}

export { mount }
