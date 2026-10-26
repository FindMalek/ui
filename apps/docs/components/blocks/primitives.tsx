"use client"

import { cn } from "cn"
import { Avatar, AvatarFallback } from "@ui-sdk/react/avatar"
import { Button } from "@ui-sdk/react/button"
import { Check } from "lucide-react"
import type * as React from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const control =
  "min-h-11 w-full min-w-0 rounded-xl border border-input bg-background px-3 text-base shadow-xs outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-invalid:border-destructive md:min-h-9 md:text-sm"
const focus = "outline-none focus-visible:ring-3 focus-visible:ring-ring/30"

function BlockCard({
  title,
  description,
  icon,
  children,
  className,
}: {
  title: string
  description: string
  icon: React.ReactNode
  children: React.ReactNode
  className?: string
}) {
  return (
    <section
      data-slot="block-card"
      className={cn(
        "flex min-w-0 flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-xs",
        className,
      )}
    >
      <header className="flex items-start gap-3 p-6 pb-5">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-muted/40 [&_svg]:size-4">
          {icon}
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-sm font-semibold tracking-tight">{title}</h2>
          <p className="text-xs leading-5 text-muted-foreground">{description}</p>
        </div>
      </header>
      {children}
    </section>
  )
}

function BlockButton({
  className,
  variant = "primary",
  ...props
}: Omit<React.ComponentProps<typeof Button>, "className"> & {
  className?: string
  variant?: "primary" | "outline" | "ghost"
}) {
  return (
    <Button
      data-slot="block-button"
      className={cn(
        "inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl px-3.5 text-sm font-medium transition-colors data-disabled:pointer-events-none data-disabled:opacity-50 md:min-h-9 [&_svg]:size-4",
        focus,
        variant === "primary" && "bg-primary text-primary-foreground hover:bg-primary/90",
        variant === "outline" && "border border-input bg-background shadow-xs hover:bg-muted",
        variant === "ghost" && "hover:bg-muted",
        className,
      )}
      {...props}
    />
  )
}

function PersonAvatar({ name, className }: { name: string; className?: string }) {
  return (
    <Avatar
      aria-label={name}
      className={cn(
        "flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium",
        className,
      )}
    >
      <AvatarFallback>
        {name
          .split(" ")
          .map((part) => part[0])
          .join("")
          .slice(0, 2)}
      </AvatarFallback>
    </Avatar>
  )
}

function BlockSelect({
  label,
  value,
  onValueChange,
  options,
  className,
}: {
  label: string
  value: string
  onValueChange: (value: string) => void
  options: { value: string; label: string }[]
  className?: string
}) {
  return (
    <Select
      value={value}
      onValueChange={(next) => {
        if (next !== null) onValueChange(next)
      }}
    >
      <SelectTrigger
        aria-label={label}
        className={cn("min-h-11 rounded-xl border-input bg-background shadow-xs md:min-h-9", className)}
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value} className="min-h-11 md:min-h-8">
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

function BlockFooter({ children, status }: { children: React.ReactNode; status?: string }) {
  return (
    <footer className="mt-auto flex min-h-17 items-center justify-between gap-3 border-t border-border bg-muted/20 px-6 py-4">
      <p role="status" className="flex items-center gap-1.5 text-xs leading-5 text-muted-foreground">
        {status ? (
          <>
            <Check className="size-3.5 shrink-0" />
            {status}
          </>
        ) : (
          "Changes stay in this preview."
        )}
      </p>
      {children}
    </footer>
  )
}

export { BlockButton, BlockCard, BlockFooter, BlockSelect, control, focus, PersonAvatar }
