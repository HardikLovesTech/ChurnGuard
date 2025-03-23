"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

export function NotificationSettings() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Email Notifications</CardTitle>
          <CardDescription>Configure email notification settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between space-y-1">
            <Label htmlFor="email-enabled">Enable Email Notifications</Label>
            <Switch id="email-enabled" defaultChecked />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email-from">From Email</Label>
            <Input id="email-from" placeholder="noreply@yourcompany.com" defaultValue="support@example.com" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email-reply-to">Reply-To Email</Label>
            <Input id="email-reply-to" placeholder="support@yourcompany.com" defaultValue="support@example.com" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email-subject">Default Subject Line</Label>
            <Input id="email-subject" placeholder="We miss you!" defaultValue="We miss you at [Company Name]!" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email-footer">Email Footer</Label>
            <Textarea
              id="email-footer"
              placeholder="Company footer text..."
              defaultValue="© 2024 Example Inc. All rights reserved. You're receiving this email because you signed up for our service."
              rows={3}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save Email Settings</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>SMS & Push Notifications</CardTitle>
          <CardDescription>Configure SMS and push notification settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between space-y-1">
            <Label htmlFor="sms-enabled">Enable SMS Notifications</Label>
            <Switch id="sms-enabled" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="sms-from">From Number</Label>
            <Input id="sms-from" placeholder="+1234567890" disabled />
            <p className="text-xs text-muted-foreground">Configure your SMS provider to enable this feature</p>
          </div>

          <div className="flex items-center justify-between space-y-1 mt-6">
            <Label htmlFor="push-enabled">Enable Push Notifications</Label>
            <Switch id="push-enabled" defaultChecked />
          </div>

          <div className="space-y-2">
            <Label htmlFor="push-title">Default Push Title</Label>
            <Input id="push-title" placeholder="We miss you!" defaultValue="Hey there! 👋" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="push-icon">Push Notification Icon URL</Label>
            <Input
              id="push-icon"
              placeholder="https://yoursite.com/icon.png"
              defaultValue="https://example.com/logo.png"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save Notification Settings</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

