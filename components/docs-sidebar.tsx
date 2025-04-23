"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { Input } from "@/components/ui/input"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

const docsNavigation = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "#introduction" },
      { title: "Installation", href: "#installation" },
      { title: "Quick Start", href: "#quick-start" },
    ],
  },
  {
    title: "Core Concepts",
    items: [
      { title: "How It Works", href: "#how-it-works" },
      { title: "AI Models", href: "#ai-models" },
      { title: "Conversation Context", href: "#conversation-context" },
      {
        title: "Advanced Features",
        href: "#advanced-features",
        items: [
          { title: "Memory Management", href: "#memory-management" },
          { title: "Context Window", href: "#context-window" },
          { title: "Prompt Engineering", href: "#prompt-engineering" },
        ],
      },
    ],
  },
  {
    title: "Features",
    items: [
      { title: "Natural Language Understanding", href: "#natural-language-understanding" },
      { title: "Conversation History", href: "#conversation-history" },
      { title: "Multi-turn Conversations", href: "#multi-turn-conversations" },
    ],
  },
  {
    title: "API Reference",
    items: [
      { title: "Authentication", href: "#authentication" },
      { title: "Endpoints", href: "#endpoints" },
      { title: "Rate Limits", href: "#rate-limits" },
      { title: "Error Handling", href: "#error-handling" },
    ],
  },
  {
    title: "Guides",
    items: [
      { title: "Best Practices", href: "#best-practices" },
      { title: "Integration Examples", href: "#integration-examples" },
      { title: "Troubleshooting", href: "#troubleshooting" },
    ],
  },
]

export function DocsSidebar() {
  const pathname = usePathname()
  const [search, setSearch] = useState("")

  const filteredNavigation = search
    ? docsNavigation
        .map((section) => ({
          ...section,
          items: section.items.filter((item) => item.title.toLowerCase().includes(search.toLowerCase())),
        }))
        .filter((section) => section.items.length > 0)
    : docsNavigation

  return (
    <Sidebar className="pt-0 border-r">
      <SidebarHeader className="pt-4 px-4">
        <Input
          placeholder="Search documentation..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full"
        />
      </SidebarHeader>
      <SidebarContent>
        {filteredNavigation.map((section) => (
          <SidebarGroup key={section.title}>
            <SidebarGroupLabel>{section.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => {
                  if (item.items) {
                    return (
                      <Collapsible key={item.title} className="w-full">
                        <SidebarMenuItem>
                          <CollapsibleTrigger className="w-full" asChild>
                            <SidebarMenuButton className="justify-between">
                              {item.title}
                              <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
                            </SidebarMenuButton>
                          </CollapsibleTrigger>
                          <CollapsibleContent>
                            <SidebarMenuSub>
                              {item.items.map((subItem) => (
                                <SidebarMenuSubItem key={subItem.title}>
                                  <SidebarMenuSubButton asChild>
                                    <Link href={subItem.href}>{subItem.title}</Link>
                                  </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                              ))}
                            </SidebarMenuSub>
                          </CollapsibleContent>
                        </SidebarMenuItem>
                      </Collapsible>
                    )
                  }
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <Link href={item.href}>{item.title}</Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}
