"use client"

import { useState } from "react"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample data for all users
const users = [
  {
    id: "u_1",
    name: "Alex Johnson",
    email: "alex@example.com",
    lastVisit: "2024-03-20",
    timeSpent: "8 min",
    pagesViewed: 3,
    interactionScore: 0.72,
  },
  {
    id: "u_2",
    name: "Sarah Williams",
    email: "sarah@example.com",
    lastVisit: "2024-03-19",
    timeSpent: "4 min",
    pagesViewed: 2,
    interactionScore: 0.45,
  },
  {
    id: "u_3",
    name: "Michael Brown",
    email: "michael@example.com",
    lastVisit: "2024-03-21",
    timeSpent: "15 min",
    pagesViewed: 7,
    interactionScore: 0.89,
  },
  {
    id: "u_4",
    name: "Emily Davis",
    email: "emily@example.com",
    lastVisit: "2024-03-18",
    timeSpent: "2 min",
    pagesViewed: 1,
    interactionScore: 0.32,
  },
  {
    id: "u_5",
    name: "David Wilson",
    email: "david@example.com",
    lastVisit: "2024-03-21",
    timeSpent: "10 min",
    pagesViewed: 5,
    interactionScore: 0.78,
  },
  {
    id: "u_6",
    name: "Jennifer Taylor",
    email: "jennifer@example.com",
    lastVisit: "2024-03-20",
    timeSpent: "6 min",
    pagesViewed: 3,
    interactionScore: 0.65,
  },
  {
    id: "u_7",
    name: "James Miller",
    email: "james@example.com",
    lastVisit: "2024-03-17",
    timeSpent: "3 min",
    pagesViewed: 1,
    interactionScore: 0.28,
  },
  {
    id: "u_8",
    name: "Lisa Anderson",
    email: "lisa@example.com",
    lastVisit: "2024-03-19",
    timeSpent: "9 min",
    pagesViewed: 4,
    interactionScore: 0.81,
  },
]

export function UserTable() {
  const [sortColumn, setSortColumn] = useState("interactionScore")
  const [sortDirection, setSortDirection] = useState("desc")

  const getScoreColor = (score) => {
    if (score >= 0.7) return "bg-green-500"
    if (score >= 0.5) return "bg-yellow-500"
    return "bg-red-500"
  }

  const getScoreStatus = (score) => {
    if (score >= 0.7) return "Engaged"
    if (score >= 0.5) return "Neutral"
    return "At Risk"
  }

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("desc")
    }
  }

  const sortedUsers = [...users].sort((a, b) => {
    const aValue = a[sortColumn]
    const bValue = b[sortColumn]

    if (sortDirection === "asc") {
      return aValue > bValue ? 1 : -1
    } else {
      return aValue < bValue ? 1 : -1
    }
  })

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="cursor-pointer" onClick={() => handleSort("lastVisit")}>
              <div className="flex items-center">
                Last Visit
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </div>
            </TableHead>
            <TableHead className="cursor-pointer" onClick={() => handleSort("timeSpent")}>
              <div className="flex items-center">
                Time Spent
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </div>
            </TableHead>
            <TableHead className="cursor-pointer" onClick={() => handleSort("pagesViewed")}>
              <div className="flex items-center">
                Pages
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </div>
            </TableHead>
            <TableHead className="cursor-pointer" onClick={() => handleSort("interactionScore")}>
              <div className="flex items-center">
                Interaction Score
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </div>
            </TableHead>
            <TableHead>Status</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.lastVisit}</TableCell>
              <TableCell>{user.timeSpent}</TableCell>
              <TableCell>{user.pagesViewed}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <div className={`h-2 w-2 rounded-full ${getScoreColor(user.interactionScore)}`} />
                  {user.interactionScore.toFixed(2)}
                </div>
              </TableCell>
              <TableCell>
                <Badge
                  variant={
                    user.interactionScore < 0.5 ? "destructive" : user.interactionScore >= 0.7 ? "default" : "outline"
                  }
                >
                  {getScoreStatus(user.interactionScore)}
                </Badge>
              </TableCell>
              <TableCell>
                <Dialog>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem onClick={() => navigator.clipboard.writeText(user.id)}>
                        Copy user ID
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DialogTrigger asChild>
                        <DropdownMenuItem>Send notification</DropdownMenuItem>
                      </DialogTrigger>
                      <DropdownMenuItem>View activity</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Send notification to {user.name}</DialogTitle>
                      <DialogDescription>Send a personalized re-engagement message to this user.</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="notification-type" className="text-right">
                          Type
                        </Label>
                        <Select defaultValue="email">
                          <SelectTrigger className="col-span-3">
                            <SelectValue placeholder="Select notification type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="email">Email</SelectItem>
                            <SelectItem value="sms">SMS</SelectItem>
                            <SelectItem value="push">Push Notification</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="template" className="text-right">
                          Template
                        </Label>
                        <Select defaultValue="custom">
                          <SelectTrigger className="col-span-3">
                            <SelectValue placeholder="Select template" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="discount">Special Discount</SelectItem>
                            <SelectItem value="newfeatures">New Features</SelectItem>
                            <SelectItem value="custom">Custom Message</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-4 items-start gap-4">
                        <Label htmlFor="message" className="text-right">
                          Message
                        </Label>
                        <Textarea
                          id="message"
                          className="col-span-3"
                          defaultValue={`Hey ${user.name}! We noticed you haven't visited in a while. Check out our latest features and special offers made just for you!`}
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit" className="flex items-center gap-1">
                        <Send className="h-4 w-4" />
                        Send Notification
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

