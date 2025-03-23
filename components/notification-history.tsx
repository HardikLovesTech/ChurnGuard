"use client"

import { ArrowUpDown, Mail, MessageSquare, Bell } from "lucide-react"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

// Sample data for notification history
const notificationHistory = [
  {
    id: "n_1",
    userId: "u_4",
    userName: "Emily Davis",
    type: "email",
    template: "discount",
    sentAt: "2024-03-21 14:32",
    status: "delivered",
    opened: true,
  },
  {
    id: "n_2",
    userId: "u_7",
    userName: "James Miller",
    type: "sms",
    template: "reminder",
    sentAt: "2024-03-21 12:15",
    status: "delivered",
    opened: false,
  },
  {
    id: "n_3",
    userId: "u_12",
    userName: "Olivia Taylor",
    type: "email",
    template: "newfeatures",
    sentAt: "2024-03-20 16:48",
    status: "delivered",
    opened: true,
  },
  {
    id: "n_4",
    userId: "u_15",
    userName: "Robert Anderson",
    type: "push",
    template: "discount",
    sentAt: "2024-03-20 10:22",
    status: "failed",
    opened: false,
  },
  {
    id: "n_5",
    userId: "u_2",
    userName: "Sarah Williams",
    type: "email",
    template: "custom",
    sentAt: "2024-03-19 15:37",
    status: "delivered",
    opened: true,
  },
]

export function NotificationHistory() {
  const getTypeIcon = (type) => {
    switch (type) {
      case "email":
        return <Mail className="h-4 w-4" />
      case "sms":
        return <MessageSquare className="h-4 w-4" />
      case "push":
        return <Bell className="h-4 w-4" />
      default:
        return <Mail className="h-4 w-4" />
    }
  }

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>User</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Template</TableHead>
            <TableHead>
              <div className="flex items-center">
                Sent At
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </div>
            </TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Opened</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {notificationHistory.map((notification) => (
            <TableRow key={notification.id}>
              <TableCell className="font-medium">{notification.userName}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  {getTypeIcon(notification.type)}
                  <span className="capitalize">{notification.type}</span>
                </div>
              </TableCell>
              <TableCell className="capitalize">{notification.template}</TableCell>
              <TableCell>{notification.sentAt}</TableCell>
              <TableCell>
                <Badge variant={notification.status === "delivered" ? "outline" : "destructive"}>
                  {notification.status}
                </Badge>
              </TableCell>
              <TableCell>
                {notification.opened ? (
                  <Badge variant="default">Opened</Badge>
                ) : (
                  <Badge variant="secondary">Not opened</Badge>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

