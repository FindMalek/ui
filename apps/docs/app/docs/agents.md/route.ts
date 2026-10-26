import { sectionMarkdown } from "@/lib/section-markdown"

export const dynamic = "force-static"

// The Agents docs as one Markdown file.
export async function GET() {
  return new Response(await sectionMarkdown("agents"), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  })
}
