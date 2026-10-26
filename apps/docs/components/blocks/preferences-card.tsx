"use client"

import { cn } from "cn"
import { Field, FieldDescription, FieldLabel } from "@ui-sdk/react/field"
import { Switch, SwitchThumb } from "@ui-sdk/react/switch"
import { Tabs, TabsList, TabsPanel, TabsTab } from "@ui-sdk/react/tabs"
import { Bell, Mail, Smartphone } from "lucide-react"
import * as React from "react"
import { BlockButton, BlockCard, BlockFooter, focus } from "./primitives"

const OPTIONS = [
  {
    key: "mentions",
    title: "Mentions & replies",
    description: "When someone brings you into the conversation.",
  },
  {
    key: "projects",
    title: "Project updates",
    description: "Milestones, handoffs, and things moving forward.",
  },
  { key: "digest", title: "Weekly roundup", description: "A quiet recap of the week, every Friday." },
]

function PreferencesCard() {
  const [settings, setSettings] = React.useState<Record<string, boolean>>({
    "email-mentions": true,
    "email-projects": true,
    "push-mentions": true,
  })
  const [saved, setSaved] = React.useState(false)
  return (
    <BlockCard
      title="A little less noise"
      description="The right updates, in the right place."
      icon={<Bell />}
    >
      <Tabs defaultValue="email" className="flex flex-1 flex-col">
        <TabsList
          aria-label="Notification channel"
          className="mx-6 mb-2 grid grid-cols-2 gap-1 rounded-xl bg-muted p-1"
        >
          {[
            { value: "email", icon: Mail, label: "Email" },
            { value: "push", icon: Smartphone, label: "Push" },
          ].map(({ value, icon: Icon, label }) => (
            <TabsTab
              key={value}
              value={value}
              className={cn(
                "flex min-h-11 items-center justify-center gap-2 rounded-lg text-xs font-medium text-muted-foreground data-selected:bg-background data-selected:text-foreground data-selected:shadow-xs md:min-h-8",
                focus,
              )}
            >
              <Icon className="size-3.5" />
              {label}
            </TabsTab>
          ))}
        </TabsList>
        {["email", "push"].map((channel) => (
          <TabsPanel key={channel} value={channel} className="px-6 pb-6 outline-none">
            {OPTIONS.map((option) => (
              <Field
                key={option.key}
                className="flex items-center justify-between gap-4 border-b border-border py-5 last:border-0 last:pb-0"
              >
                <div className="flex flex-col gap-1.5">
                  <FieldLabel className="text-xs font-medium">{option.title}</FieldLabel>
                  <FieldDescription className="max-w-52 text-xs leading-5 text-muted-foreground">
                    {option.description}
                  </FieldDescription>
                </div>
                <Switch
                  checked={!!settings[`${channel}-${option.key}`]}
                  onCheckedChange={(checked) => {
                    setSettings((previous) => ({ ...previous, [`${channel}-${option.key}`]: checked }))
                    setSaved(false)
                  }}
                  className={cn(
                    "group relative flex h-11 w-11 shrink-0 items-center rounded-full before:absolute before:inset-x-0 before:h-6 before:rounded-full before:bg-input before:transition-colors data-checked:before:bg-primary",
                    focus,
                  )}
                >
                  <SwitchThumb className="relative ml-0.5 block size-5 rounded-full bg-white shadow-xs transition-transform group-data-checked:translate-x-5 motion-reduce:transition-none dark:bg-primary-foreground" />
                </Switch>
              </Field>
            ))}
          </TabsPanel>
        ))}
      </Tabs>
      <BlockFooter status={saved ? "Preferences saved." : undefined}>
        <BlockButton variant="outline" onClick={() => setSaved(true)}>
          Save changes
        </BlockButton>
      </BlockFooter>
    </BlockCard>
  )
}

export { PreferencesCard }
