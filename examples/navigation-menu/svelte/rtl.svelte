<script lang="ts">
  import { ChevronDown } from "@lucide/svelte"
  import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@ui-sdk/svelte/navigation-menu"

  const sections = [
    {
      value: "guides",
      label: "الأدلة",
      links: [
        {
          title: "مقدمة",
          href: "https://example.com/docs",
          description: "مكونات بلا أنماط بنواة واحدة لكل إطار عمل.",
        },
        {
          title: "التثبيت",
          href: "https://example.com/docs/installation",
          description: "أضف الحزمة لإطار عملك واعرض أول جزء.",
        },
        {
          title: "التنسيق",
          href: "https://example.com/docs/styling",
          description: "نسّق الأجزاء بسمات البيانات ومتغيرات CSS.",
        },
      ],
    },
    {
      value: "components",
      label: "المكونات",
      links: [
        {
          title: "مربع تنبيه",
          href: "https://example.com/docs/components/alert-dialog",
          description: "يطلب قرارًا قبل استخدام أي شيء آخر في الصفحة.",
        },
        {
          title: "بطاقة التمرير",
          href: "https://example.com/docs/components/hover-card",
          description: "معاينة لما يشير إليه الرابط.",
        },
        {
          title: "علامات التبويب",
          href: "https://example.com/docs/components/tabs",
          description: "تعرض لوحة واحدة من المحتوى في كل مرة.",
        },
      ],
    },
  ]
</script>

<div dir="rtl">
  <NavigationMenu aria-label="الرئيسية">
    <NavigationMenuList class="flex flex-wrap items-center">
      {#each sections as section (section.value)}
        <NavigationMenuItem value={section.value}>
          <NavigationMenuTrigger
            class="group inline-flex h-8 items-center justify-center rounded-2xl px-2.5 text-sm font-medium outline-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted/50 data-open:hover:bg-muted cursor-default motion-reduce:transition-none"
          >
            {section.label}
            <ChevronDown
              class="relative top-px ms-1 size-3 transition-transform duration-300 group-data-open:rotate-180 motion-reduce:transition-none"
            />
          </NavigationMenuTrigger>
          <NavigationMenuContent class="absolute start-0 top-0 w-[min(300px,calc(100vw-2rem))] p-1.5 max-h-[var(--available-height,var(--panel-height))] overflow-y-auto">
            <ul class="grid gap-1">
              {#each section.links as link (link.href)}
                <li>
                  <NavigationMenuLink
                    href={link.href}
                    class="flex flex-col gap-1 rounded-xl p-2 text-sm outline-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none"
                  >
                    <span class="leading-none font-medium">{link.title}</span>
                    <span class="line-clamp-2 leading-snug text-muted-foreground">{link.description}</span>
                  </NavigationMenuLink>
                </li>
              {/each}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      {/each}
      <NavigationMenuItem>
        <NavigationMenuLink
          href="https://example.com/docs"
          class="inline-flex h-8 items-center rounded-2xl px-2.5 text-sm font-medium outline-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 cursor-default motion-reduce:transition-none"
        >
          المستندات
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
    <NavigationMenuViewport
      class="h-(--viewport-height) w-(--viewport-width) [--panel-height:var(--available-height)] origin-(--transform-origin) overflow-hidden rounded-3xl bg-popover text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale,width,height,left,top] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none dark:ring-foreground/10"
    />
  </NavigationMenu>
</div>
