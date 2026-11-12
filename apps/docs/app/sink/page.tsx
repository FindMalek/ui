import { MobileNav } from "@/components/mobile-nav"
import { Search } from "@/components/search"
import { sectionPages, sectionTree } from "@/lib/section-tree"
import { GeistPixelSquare } from "geist/font/pixel"
import { GeistSerifRegular } from "geist/font/serif"
import type { Metadata } from "next"
import { Sink } from "./sink"

export const metadata: Metadata = {
  title: "Sink",
  description:
    "A hundred small interfaces built on ui-sdk, tagged with the components and behaviors each one uses.",
}

export default function SinkPage() {
  const core = sectionTree("core")
  const pages = core ? sectionPages(core) : []

  return (
    <div
      className={`${GeistSerifRegular.variable} ${GeistPixelSquare.variable} relative flex flex-1 flex-col`}
    >
      <MobileNav />
      <Search pages={pages} />
      <Sink />
    </div>
  )
}
