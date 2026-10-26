import type { PrimitiveGeneric } from "../../foundation/kernel/primitive-types"
import type { TabsOptions, TabsRootState } from "./tabs"

// Tabs' types as functions of its value type `T`, so every renderer's `Tabs`
// infers `T` from `value`, `defaultValue` or `onValueChange`.
interface TabsGeneric extends PrimitiveGeneric {
  T: string
  options: TabsOptions<this["T"] & string>
  state: TabsStates<this["T"] & string>
}
type TabsStates<T extends string> = { root: TabsRootState<T> }

export type { TabsGeneric }
