"use client"

import { useState } from "react"
import { ArrowUpDown, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
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

// Sample data for at-risk users
const atRiskUsers = [
  {
    id: "u_2",
    name: "Sarah Williams",
    email: "sarah@example.com",
    lastVisit: "2024-03-19",
    timeSpent: "4 min",
    pagesViewed: 2,
    interactionScore: 0.45,
    riskFactor: "Low engagement",
  },
  {
    id: "u_4",
    name: "Emily Davis",
    email: "emily@example.com",
    lastVisit: "2024-03-18",
    timeSpent: "2 min",
    pagesViewed: 1,
    interactionScore: 0.32,
    riskFactor: "Infrequent visits",
  },
  {
    id: "u_7",
    name: "James Miller",
    email: "james@example.com",
    lastVisit: "2024-03-17",
    timeSpent: "3 min",
    pagesViewed: 1,
    interactionScore: 0.28,
    riskFactor: "Low page views",
  },
  {
    id: "u_9",
    name: "Thomas Clark",
    email: "thomas@example.com",
    lastVisit: "2024-03-16",
    timeSpent: "1 min",
    pagesViewed: 1,
    interactionScore: 0.21,
    riskFactor: "Short session duration",
  },
  {
    id: "u_12",
    name: "Olivia Taylor",
    email: "olivia@example.com",
    lastVisit: "2024-03-19",
    timeSpent: "3 min",
    pagesViewed: 2,
    interactionScore: 0.41,
    riskFactor: "Low engagement",
  },
  {
    id: "u_15",
    name: "Robert Anderson",
    email: "robert@example.com",
    lastVisit: "2024-03-16",
    timeSpent: "2 min",
    pagesViewed: 1,
    interactionScore: 0.35,
    riskFactor: "Infrequent visits",
  },
]

export function AtRiskUserTable() {
  const [sortColumn, setSortColumn] = useState("interactionScore")
  const [sortDirection, setSortDirection] = useState("asc")

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("asc")
    }
  }

  const sortedUsers = [...atRiskUsers].sort((a, b) => {
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
            <TableHead className="cursor-pointer" onClick={() => handleSort("interactionScore")}>
              <div className="flex items-center">
                Interaction Score
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </div>
            </TableHead>
            <TableHead>Risk Factor</TableHead>
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
              <TableCell>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-500" />
                  {user.interactionScore.toFixed(2)}
                </div>
              </TableCell>
              <TableCell>
                <Badge variant="outline">{user.riskFactor}</Badge>
              </TableCell>
              <TableCell>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="sm" variant="outline" className="flex items-center gap-1">
                      <Send className="h-3 w-3" />
                      <span>Engage</span>
                    </Button>
                  </DialogTrigger>
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
                        <Select defaultValue="discount">
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
                          defaultValue={`Hey ${user.name}! We miss you! Here's a special 20% discount just for you. Use code COMEBACK20 at checkout.`}
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

