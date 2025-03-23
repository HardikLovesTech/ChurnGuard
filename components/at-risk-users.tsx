"use client"

import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Sample data for at-risk users
const atRiskUsers = [
  {
    id: "u_4",
    name: "Emily Davis",
    email: "emily@example.com",
    lastVisit: "2024-03-18",
    interactionScore: 0.32,
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "ED",
  },
  {
    id: "u_7",
    name: "James Miller",
    email: "james@example.com",
    lastVisit: "2024-03-17",
    interactionScore: 0.28,
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "JM",
  },
  {
    id: "u_12",
    name: "Olivia Taylor",
    email: "olivia@example.com",
    lastVisit: "2024-03-19",
    interactionScore: 0.41,
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "OT",
  },
  {
    id: "u_15",
    name: "Robert Anderson",
    email: "robert@example.com",
    lastVisit: "2024-03-16",
    interactionScore: 0.35,
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "RA",
  },
]

export function AtRiskUsers() {
  return (
    <div className="space-y-4">
      {atRiskUsers.map((user) => (
        <div key={user.id} className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>{user.initials}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none">{user.name}</p>
              <p className="text-sm text-muted-foreground">Last active: {user.lastVisit}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-sm text-muted-foreground">Score: {user.interactionScore.toFixed(2)}</div>
            <Button size="sm" variant="outline" className="flex items-center gap-1">
              <Send className="h-3 w-3" />
              <span>Engage</span>
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

