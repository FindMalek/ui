import { mount as mountComponent } from "svelte"
import CalendarFixture from "./CalendarFixture.svelte"

function mount(root: HTMLElement) {
  mountComponent(CalendarFixture, { target: root })
}

export { mount }
