"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { BarChart, Bell, Home, Settings, Users, AlertTriangle } from "lucide-react"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <BarChart className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">ChurnGuard</span>
      </Link>
      <nav className="flex items-center space-x-4 lg:space-x-6">
        <Link
          href="/"
          className={cn(
            "flex items-center text-sm font-medium transition-colors hover:text-primary",
            pathname === "/" ? "text-primary" : "text-muted-foreground",
          )}
        >
          <Home className="mr-1 h-4 w-4" />
          Dashboard
        </Link>
        <Link
          href="/users"
          className={cn(
            "flex items-center text-sm font-medium transition-colors hover:text-primary",
            pathname === "/users" ? "text-primary" : "text-muted-foreground",
          )}
        >
          <Users className="mr-1 h-4 w-4" />
          Users
        </Link>
        <Link
          href="/users/at-risk"
          className={cn(
            "flex items-center text-sm font-medium transition-colors hover:text-primary",
            pathname === "/users/at-risk" ? "text-primary" : "text-muted-foreground",
          )}
        >
          <AlertTriangle className="mr-1 h-4 w-4" />
          At-Risk
        </Link>
        <Link
          href="/notifications"
          className={cn(
            "flex items-center text-sm font-medium transition-colors hover:text-primary",
            pathname === "/notifications" ? "text-primary" : "text-muted-foreground",
          )}
        >
          <Bell className="mr-1 h-4 w-4" />
          Notifications
        </Link>
        <Link
          href="/settings"
          className={cn(
            "flex items-center text-sm font-medium transition-colors hover:text-primary",
            pathname === "/settings" ? "text-primary" : "text-muted-foreground",
          )}
        >
          <Settings className="mr-1 h-4 w-4" />
          Settings
        </Link>
      </nav>
    </div>
  )
}

