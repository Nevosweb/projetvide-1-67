
"use client"

import * as React from "react"
import { Link } from "react-router-dom"
import { Separator } from "@radix-ui/react-separator"
import { ChevronLeft, ChevronRight, Plus } from "lucide-react"

import { cn } from "@/lib/utils"
import { ShadcnButton } from "@/components/ui/button"

interface SidebarProps {
  className?: string
  defaultCollapsed?: boolean
  navItems: {
    title: string
    items: {
      href: string
      title: string
      icon?: React.ReactNode
      variant?: "default" | "ghost"
      isActive?: boolean
    }[]
  }[]
  showToggleControl?: boolean
}

export function Sidebar({
  className,
  defaultCollapsed = false,
  navItems,
  showToggleControl = true,
}: SidebarProps) {
  const [collapsed, setCollapsed] = React.useState<boolean>(defaultCollapsed)

  return (
    <div className={cn("h-screen", className)}>
      <div
        className={cn(
          "h-screen border-r flex-col border-border group overflow-x-hidden bg-background flex-1 flex",
          collapsed ? "w-16" : "w-64",
          className
        )}
      >
        <div className="h-14 px-4 flex items-center justify-between border-b border-border">
          {!collapsed && (
            <div className="font-medium text-xl">
              <Link to="/">Dashboard</Link>
            </div>
          )}
          {showToggleControl && (
            <div
              className={cn(
                "ml-auto",
                !collapsed ? "" : "w-full flex justify-center"
              )}
            >
              <ShadcnButton
                variant={"ghost"}
                size={"icon"}
                className=""
                onClick={() => setCollapsed(!collapsed)}
              >
                {collapsed ? (
                  <ChevronRight className="h-4 w-4" />
                ) : (
                  <ChevronLeft className="h-4 w-4" />
                )}
              </ShadcnButton>
            </div>
          )}
        </div>

        <nav className="flex-1 py-4 px-3">
          {navItems.map((item: any, i) => (
            <React.Fragment key={`${item.title}-${i}`}>
              <div className="flex items-center h-12 py-2">
                {!collapsed && (
                  <h2 className="text-xs uppercase text-muted-foreground font-medium flex-1">
                    {item.title}
                  </h2>
                )}
                {!collapsed && (
                  <ShadcnButton variant={"ghost"} size={"icon"} className="ml-auto">
                    <Plus className="h-4 w-4 text-muted-foreground" />
                  </ShadcnButton>
                )}
              </div>
              <div className={"flex flex-col space-y-1"}>
                {item.items.map((subItem, i) => (
                  <SidebarItem
                    {...subItem}
                    label={subItem.title}
                    collapsed={collapsed}
                    key={`${subItem.title}-${i}`}
                  />
                ))}
              </div>
              <Separator className="my-4" />
            </React.Fragment>
          ))}
        </nav>
        <div className="h-14 border-t flex items-center border-border px-3">
          <SideBardProfile collapsed={collapsed} />
        </div>
      </div>
    </div>
  )
}

export function SidebarItem({
  href,
  icon,
  label,
  variant = "ghost",
  isActive,
  collapsed,
}: {
  href: string
  label: string
  icon?: React.ReactNode
  variant?: "default" | "ghost"
  isActive?: boolean
  collapsed?: boolean
}) {
  return (
    <Link
      to={href}
      className={cn(
        "w-full flex h-10 items-center rounded-md text-muted-foreground px-2 hover:bg-accent gap-2 hover:text-foreground",
        isActive && "bg-accent text-foreground"
      )}
    >
      <div className="w-6 h-6 flex items-center justify-center text-muted-foreground">
        {icon}
      </div>
      {!collapsed && <div className="text-sm font-medium">{label}</div>}
    </Link>
  )
}

function SideBardProfile({ collapsed }: { collapsed: boolean }) {
  return (
    <div className="w-full flex space-x-2 items-center">
      <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
        <span className="text-muted-foreground text-sm">A</span>
      </div>

      {!collapsed && (
        <div className="text-sm font-medium flex-1">Admin Account</div>
      )}
      {!collapsed && (
        <ShadcnButton variant={"ghost"} size={"icon"}>
          <ChevronRight className="h-4 w-4" />
        </ShadcnButton>
      )}
    </div>
  )
}
