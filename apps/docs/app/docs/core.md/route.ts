import { sectionMarkdown } from "@/lib/section-markdown"

export const dynamic = "force-static"

// The Core docs as one Markdown file. No framework changes
// them; each framework's Rendering page renders what they define.
export async function GET() {
  return new Response(await sectionMarkdown("core"), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  })
}
