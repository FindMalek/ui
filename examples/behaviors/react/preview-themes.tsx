import * as React from "react"
import { createChange, createPreview, createRovingFocus, definePrimitive, selects } from "@ui-sdk/core"
import { createParts } from "@ui-sdk/react/primitive"

type ThemesState = { value: string; preview: string | null; focused: string | null }

const names: Record<string, string> = { light: "Light", dark: "Dark", sepia: "Sepia", contrast: "Contrast" }

const themes = definePrimitive({
  name: "themes",
  state: (): ThemesState => ({ value: "light", preview: null, focused: null }),
  api: (context) => {
    const { store } = context
    const change = createChange(context)
    return {
      roving: createRovingFocus<ThemesState, { value: string }>(context, { slot: "theme", key: "focused" }),
      preview: createPreview<ThemesState>(context, {
        key: "preview",
        slot: "theme",
        value: () => store.get().value,
        choose: (key, details) => change("value", key, details),
        disabled: (key) => key === "contrast",
        label: (key) => `the ${names[key]} theme`,
        message: (label) => `Trying ${label}. Enter keeps it, Escape puts it back.`,
      }),
    }
  },
  slots: (slot) => ({
    root: slot<{}, { shown: string }>({ state: (state) => ({ shown: state.preview ?? state.value }) }),
    list: slot({
      attrs: () => ({ role: "radiogroup" }),
      on: {
        focusout: (event, { el, api }) => {
          if (!el?.contains(event.relatedTarget as Node)) api.preview.clear({ reason: "focus-out", event })
        },
      },
    }),
    theme: slot<{ value: string }>({
      props: { value: "string" },
      selects: selects({ focused: ({ key }) => [key, null] }),
      attrs: (state, part) => ({
        type: "button",
        role: "radio",
        "aria-checked": String(state.value === part.key),
        "aria-disabled": part.key === "contrast" ? "true" : undefined,
        tabindex: part.api.roving.tabIndex(state, part),
        "data-previewing": state.preview === part.key ? "" : undefined,
      }),
      on: {
        pointerenter: (event, { api, key }) => api.preview.show(key, { reason: "item-hover", event }),
        pointerleave: (event, { api }) => api.preview.clear({ reason: "item-hover", event }),
        click: (event, { api, key }) => api.preview.choose(key, { event }),
        keydown: (event, { el, api, key }) => {
          if (api.preview.keydown(event, key)) return
          const moved = api.roving.keydown(event, el!)
          if (moved) api.preview.show(moved.key, { reason: "list-navigation", event })
        },
      },
      bind: (el, part) => part.api.roving.bind(el, part),
    }),
  }),
})

const parts = createParts(themes, { root: "div", list: "div", theme: "button" })

const Themes = parts.Root

const ThemesList = parts.List

const ThemesOption = parts.Theme

const looks: Record<string, string> = {
  light: "bg-white text-neutral-900",
  dark: "bg-neutral-900 text-neutral-100",
  sepia: "bg-[#f4ecd8] text-[#5b4636]",
  contrast: "bg-black text-yellow-300",
}

function Example() {
  return (
    <Themes className="flex w-72 flex-col gap-3">
      {({ shown }) => (
        <>
          <p className={`rounded-xl border border-border p-4 text-sm ${looks[shown]}`}>
            Showing {names[shown]}
          </p>
          <ThemesList aria-label="Theme" className="flex flex-col gap-1">
            {Object.keys(names).map((theme) => (
              <ThemesOption
                key={theme}
                value={theme}
                className="rounded-md px-3 py-1.5 text-left text-sm outline-none focus-visible:ring-3 focus-visible:ring-ring/50 aria-checked:bg-muted aria-checked:font-medium aria-disabled:text-muted-foreground data-previewing:bg-muted/60"
              >
                {names[theme]}
                {theme === "contrast" && " (soon)"}
              </ThemesOption>
            ))}
          </ThemesList>
        </>
      )}
    </Themes>
  )
}

export { Example, themes, Themes, ThemesList, ThemesOption, type ThemesState }
