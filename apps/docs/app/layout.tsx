import { frameworkScript } from "@/lib/sections"
import { themeScript } from "@/lib/theme"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import Script from "next/script"
import "./global.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" })

const DESCRIPTION = "An open source library of behaviors that an agent can use to build components. Written in TypeScript. Available for all frameworks."

export const metadata: Metadata = {
  title: { default: "UI SDK", template: "%s · UI SDK" },
  description: DESCRIPTION,
  openGraph: {
    title: "UI SDK",
    description: DESCRIPTION,
    url: "https://ui-sdk.dev",
    siteName: "UI SDK",
  },
}

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={geist.variable} suppressHydrationWarning>
      <head>
        <Script id="theme" strategy="beforeInteractive">
          {themeScript}
        </Script>
        <script dangerouslySetInnerHTML={{ __html: frameworkScript }} />
      </head>
      <body className="min-h-dvh bg-canvas font-sans text-foreground">
        {children}
      </body>
    </html>
  )
}
