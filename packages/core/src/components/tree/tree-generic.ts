import type { PrimitiveGeneric } from "../../foundation/kernel/primitive-types"
import type { TreeOptions, TreeSelectionMode } from "./tree"

// Tree's types as functions of its selection mode `T`, so every renderer's
// `Tree` infers it from `selectionMode` and types the value from it. `T` is
// declared a string, not a `TreeSelectionMode`: TypeScript infers nothing
// through a parameter whose bound is a union of literals.
interface TreeGeneric extends PrimitiveGeneric {
  T: string
  defaults: { T: "single" }
  options: TreeOptions<this["T"] & TreeSelectionMode>
}

export type { TreeGeneric }
