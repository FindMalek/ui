import * as React from "react"
import { createRovingFocus, definePrimitive, selects } from "@ui-sdk/core"
import { createParts } from "@ui-sdk/react/primitive"

type TagListOptions = {
  onAdd?: (tag: string) => void
  onCountChange?: (count: number) => void
}

type TagListState = { focused: string | null }

const tagList = definePrimitive({
  name: "tag-list",
  options: { onAdd: "callback", onCountChange: "callback" },
  state: (_options: TagListOptions): TagListState => ({ focused: null }),
  api: (context) => {
    const roving = createRovingFocus<TagListState, { value: string }>(context, {
      slot: "tag",
      key: "focused",
      orientation: () => "horizontal",
      onItemsChange: () => context.options().onCountChange?.(roving.items().length),
    })
    return {
      roving,
      add(input: HTMLInputElement) {
        const tag = input.value.trim()
        if (!tag) return
        context.options().onAdd?.(tag)
        input.value = ""
        roving.focus(tag)
      },
    }
  },
  slots: (slot) => ({
    root: slot({}),
    input: slot({
      on: {
        keydown: (event, { el, api }) => {
          if (event.key !== "Enter") return
          event.preventDefault()
          api.add(el as HTMLInputElement)
        },
      },
    }),
    list: slot({}),
    tag: slot<{ value: string }>({
      props: { value: "string" },
      selects: selects({ focused: ({ key }) => [key, null] }),
      attrs: (state, part) => ({ type: "button", tabindex: part.api.roving.tabIndex(state, part) }),
      on: { keydown: (event, { el, api }) => api.roving.keydown(event, el!) },
      bind: (el, part) => part.api.roving.bind(el, part),
    }),
  }),
})

const parts = createParts(tagList, { root: "div", input: "input", list: "div", tag: "button" })

const TagList = parts.Root

const TagListInput = parts.Input

const TagListList = parts.List

const TagListTag = parts.Tag

function Example() {
  const [tags, setTags] = React.useState(["design", "docs"])
  const [count, setCount] = React.useState(tags.length)
  return (
    <TagList
      onAdd={(tag: string) => setTags((tags) => (tags.includes(tag) ? tags : [...tags, tag]))}
      onCountChange={setCount}
      className="flex w-72 flex-col gap-3 text-sm"
    >
      <TagListInput
        aria-label="New tag"
        placeholder="Type a tag and press Enter"
        className="h-8 rounded-lg border border-border bg-transparent px-2 outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
      />
      <TagListList
        role="group"
        aria-label="Tags"
        className="flex h-28 flex-wrap content-start items-start gap-1 overflow-y-auto p-1"
      >
        {tags.map((tag) => (
          <TagListTag
            key={tag}
            value={tag}
            className="rounded-full border border-border px-2.5 py-1 outline-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            {tag}
          </TagListTag>
        ))}
      </TagListList>
      <p className="text-muted-foreground">
        {count} {count === 1 ? "tag" : "tags"}
      </p>
    </TagList>
  )
}

export { Example, tagList, TagList, TagListInput, TagListList, type TagListOptions, TagListTag }
