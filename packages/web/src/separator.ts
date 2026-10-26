import { separator } from "@ui-sdk/core/separator"
import { defineParts } from "./define-element"

// <ui-separator> is the line itself. Markup:
//
// <ui-separator></ui-separator>
// <ui-separator orientation="vertical"></ui-separator>
// <ui-separator decorative></ui-separator>
function defineSeparatorElements() {
  defineParts(separator, {
    root: { tag: "ui-separator", display: "block" },
  })
}

export { defineSeparatorElements }
