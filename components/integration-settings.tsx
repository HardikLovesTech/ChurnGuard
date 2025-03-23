"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export function IntegrationSettings() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Email Service</CardTitle>
          <CardDescription>Connect your email service provider</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email-provider">Provider</Label>
            <select
              id="email-provider"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="sendgrid">SendGrid</option>
              <option value="mailchimp">Mailchimp</option>
              <option value="aws-ses">AWS SES</option>
              <option value="custom">Custom SMTP</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email-api-key">API Key</Label>
            <Input
              id="email-api-key"
              type="password"
              placeholder="Enter your API key"
              defaultValue="••••••••••••••••"
            />
          </div>

          <div className="flex items-center justify-between space-y-1">
            <Label htmlFor="email-integration-enabled">Integration Enabled</Label>
            <Switch id="email-integration-enabled" defaultChecked />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>SMS Service</CardTitle>
          <CardDescription>Connect your SMS service provider</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="sms-provider">Provider</Label>
            <select
              id="sms-provider"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="twilio">Twilio</option>
              <option value="nexmo">Nexmo</option>
              <option value="aws-sns">AWS SNS</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="sms-account-sid">Account SID</Label>
            <Input id="sms-account-sid" placeholder="Enter your Account SID" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="sms-auth-token">Auth Token</Label>
            <Input id="sms-auth-token" type="password" placeholder="Enter your Auth Token" />
          </div>

          <div className="flex items-center justify-between space-y-1">
            <Label htmlFor="sms-integration-enabled">Integration Enabled</Label>
            <Switch id="sms-integration-enabled" />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Analytics Integration</CardTitle>
          <CardDescription>Connect your analytics platform</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="analytics-provider">Provider</Label>
            <select
              id="analytics-provider"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="google">Google Analytics</option>
              <option value="mixpanel">Mixpanel</option>
              <option value="amplitude">Amplitude</option>
              <option value="segment">Segment</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="analytics-tracking-id">Tracking ID</Label>
            <Input id="analytics-tracking-id" placeholder="Enter your Tracking ID" defaultValue="UA-123456789-1" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="analytics-api-key">API Key (if applicable)</Label>
            <Input id="analytics-api-key" type="password" placeholder="Enter your API key" />
          </div>

          <div className="flex items-center justify-between space-y-1">
            <Label htmlFor="analytics-integration-enabled">Integration Enabled</Label>
            <Switch id="analytics-integration-enabled" defaultChecked />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

