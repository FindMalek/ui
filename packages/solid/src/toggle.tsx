import {
  toggle,
  toggleGroup as toggleGroupPrimitive,
  type ToggleGroupOptions,
  type ToggleGroupState,
  type ToggleOptions,
  type ToggleState,
} from "@ui-sdk/core/toggle"
import { omit } from "solid-js"
import { useToolbarScope } from "./toolbar-context"
import { createParts, useNearest, usePart, usePrimitive, type PartProps } from "./use-primitive"

const parts = createParts(toggle, { icon: "span" })
const groupParts = createParts(toggleGroupPrimitive, {})

/**
 * A button that stays pressed. Inside a ToggleGroup, the group decides whether it's pressed.
 * @stable
 */
function Toggle(
  props: ToggleOptions &
    Omit<PartProps<"button", ToggleState>, "value" | "defaultValue" | "type" | "onChange" | "onSelect">,
) {
  const group = useNearest(toggleGroupPrimitive)
  const toolbar = useToolbarScope()
  const handle = usePrimitive(toggle, () => ({
    pressed: props.pressed,
    defaultPressed: props.defaultPressed,
    onPressedChange: props.onPressedChange,
    value: props.value,
    disabled: props.disabled,
    focusableWhenDisabled: props.focusableWhenDisabled,
    group: group ? () => group.api : undefined,
    toolbar: toolbar?.(),
    controller: props.controller,
    debug: props.debug,
  }))
  const rest = omit(
    props,
    "pressed",
    "defaultPressed",
    "onPressedChange",
    "value",
    "disabled",
    "focusableWhenDisabled",
    "controller",
    "debug",
  )
  return usePart(handle, "root", undefined, rest, "button")
}

/**
 * An icon inside a toggle. A toggle with only an icon needs an `aria-label`. Screen readers skip
 * it, and `mirror` flips it in right-to-left text.
 * @stable
 */
const ToggleIcon = parts.Icon

/**
 * Toggles that share one value, with one tab stop and arrow keys between them.
 * `T` is inferred from `value`, `defaultValue` or `onValueChange`.
 * @stable
 */
function ToggleGroup<T extends string = string>(
  props: ToggleGroupOptions<T> &
    Omit<PartProps<"div", ToggleGroupState<T>>, "defaultValue" | "onChange" | "onSelect">,
) {
  const toolbar = useToolbarScope()
  const rest = omit(
    props,
    "value",
    "defaultValue",
    "onValueChange",
    "multiple",
    "deselectable",
    "disabled",
    "orientation",
    "loop",
    "controller",
    "debug",
  )
  return (
    <groupParts.Root<T> {...props} toolbar={toolbar?.()}>
      {usePart(toggleGroupPrimitive, "group", undefined, rest, "div")}
    </groupParts.Root>
  )
}

export { createToggleController, createToggleGroupController } from "@ui-sdk/core/toggle"
export type {
  ToggleApi,
  ToggleChangeOptions,
  ToggleController,
  ToggleGroupApi,
  ToggleGroupChangeOptions,
  ToggleGroupController,
  ToggleGroupOptions,
  ToggleGroupOrientation,
  ToggleGroupPrimitive,
  ToggleGroupState,
  ToggleGroupValueChangeReason,
  ToggleIconProps,
  ToggleIconState,
  ToggleOptions,
  TogglePressedChangeReason,
  TogglePrimitive,
  ToggleState,
} from "@ui-sdk/core/toggle"

export { Toggle, ToggleGroup, ToggleIcon }
