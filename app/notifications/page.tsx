import { Download, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { NotificationHistory } from "@/components/notification-history"
import { NotificationTemplates } from "@/components/notification-templates"

export default function NotificationsPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Notifications</h1>
            <p className="text-muted-foreground">Manage and track all user notifications</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-8 gap-1">
              <Download className="h-4 w-4" />
              Export
            </Button>
            <Button size="sm" className="h-8 gap-1">
              <Send className="h-4 w-4" />
              New Campaign
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="lg:col-span-4">
            <CardHeader>
              <CardTitle>Notification History</CardTitle>
              <CardDescription>Recent notifications sent to users</CardDescription>
            </CardHeader>
            <CardContent>
              <NotificationHistory />
            </CardContent>
          </Card>
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Notification Templates</CardTitle>
              <CardDescription>Pre-defined templates for common scenarios</CardDescription>
            </CardHeader>
            <CardContent>
              <NotificationTemplates />
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader className="px-6 py-4">
            <CardTitle>Notification Analytics</CardTitle>
            <CardDescription>Performance metrics for your notification campaigns</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-1.5">
                <h3 className="font-medium">Open Rate</h3>
                <div className="text-2xl font-bold">42.8%</div>
                <p className="text-xs text-muted-foreground">+2.4% from last month</p>
              </div>
              <div className="space-y-1.5">
                <h3 className="font-medium">Click-through Rate</h3>
                <div className="text-2xl font-bold">18.3%</div>
                <p className="text-xs text-muted-foreground">+1.2% from last month</p>
              </div>
              <div className="space-y-1.5">
                <h3 className="font-medium">Conversion Rate</h3>
                <div className="text-2xl font-bold">7.5%</div>
                <p className="text-xs text-muted-foreground">+0.8% from last month</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

