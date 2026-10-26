import * as React from "react"
import { createParts } from "@ui-sdk/react/primitive"
import { linkPreview, type LinkPreviewPage } from "../link-preview"

const parts = createParts(linkPreview, {
  trigger: "a",
  content: "div",
  title: "p",
  description: "p",
  image: "img",
})

const LinkPreview = parts.Root

const LinkPreviewTrigger = parts.Trigger

const LinkPreviewContent = parts.Content

const LinkPreviewTitle = parts.Title

const LinkPreviewDescription = parts.Description

const LinkPreviewImage = parts.Image

const cover = (from: string, to: string) =>
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 120"><defs><linearGradient id="g" x2="1" y2="1"><stop stop-color="${from}"/><stop offset="1" stop-color="${to}"/></linearGradient></defs><rect width="320" height="120" fill="url(#g)"/></svg>`,
  )}`

const pages = {
  popups: {
    title: "Popups",
    description: "The top layer, placement, presence, dismissal and focus, behind every popup.",
    image: cover("#262626", "#737373"),
  },
  focus: {
    title: "Focus",
    description: "Roving focus, focus recovery and keeping focus where people expect it.",
    image: cover("#525252", "#a3a3a3"),
  },
  motion: {
    title: "Motion",
    description: "Presence and gesture physics: what animates in, out and with a finger.",
  },
} satisfies Record<string, LinkPreviewPage>

const link =
  "rounded-sm font-medium text-foreground underline decoration-border underline-offset-4 outline-none hover:decoration-foreground focus-visible:ring-3 focus-visible:ring-ring/30 data-open:decoration-foreground"

function Example() {
  return (
    <LinkPreview>
      <p className="max-w-md text-sm leading-6 text-muted-foreground">
        Every popup sits on the{" "}
        <LinkPreviewTrigger href="/docs/core/behaviors/popups" payload={pages.popups} className={link}>
          popup layer
        </LinkPreviewTrigger>
        , moves{" "}
        <LinkPreviewTrigger href="/docs/core/behaviors/focus" payload={pages.focus} className={link}>
          focus
        </LinkPreviewTrigger>{" "}
        in and back, and animates with{" "}
        <LinkPreviewTrigger href="/docs/core/behaviors/motion" payload={pages.motion} className={link}>
          motion
        </LinkPreviewTrigger>{" "}
        it shares with the rest of the page.
      </p>
      <LinkPreviewContent
        sideOffset={6}
        className="flex w-72 origin-(--transform-origin) flex-col overflow-hidden rounded-3xl bg-popover text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10"
      >
        {(state) => {
          const page = state.payload as LinkPreviewPage | undefined
          return (
            <>
              <LinkPreviewImage className="h-24 w-full object-cover" />
              <div className="flex flex-col gap-1 p-4">
                <LinkPreviewTitle className="font-medium">{page?.title}</LinkPreviewTitle>
                <LinkPreviewDescription className="text-muted-foreground">
                  {page?.description}
                </LinkPreviewDescription>
              </div>
            </>
          )
        }}
      </LinkPreviewContent>
    </LinkPreview>
  )
}

export {
  Example,
  LinkPreview,
  LinkPreviewContent,
  LinkPreviewDescription,
  LinkPreviewImage,
  LinkPreviewTitle,
  LinkPreviewTrigger,
}
