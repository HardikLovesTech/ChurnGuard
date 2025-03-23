"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"

export function ChurnSettings() {
  const [interactionThreshold, setInteractionThreshold] = useState(50)
  const [daysSinceLastVisit, setDaysSinceLastVisit] = useState(7)
  const [minPageViews, setMinPageViews] = useState(2)
  const [minTimeSpent, setMinTimeSpent] = useState(2)

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Churn Risk Thresholds</CardTitle>
          <CardDescription>Configure when users should be considered at risk of churning</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="interaction-threshold">Interaction Score Threshold</Label>
              <span className="text-sm">{interactionThreshold / 100}</span>
            </div>
            <Slider
              id="interaction-threshold"
              min={0}
              max={100}
              step={1}
              value={[interactionThreshold]}
              onValueChange={(value) => setInteractionThreshold(value[0])}
            />
            <p className="text-xs text-muted-foreground">
              Users with an interaction score below this threshold will be considered at risk
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="days-threshold">Days Since Last Visit</Label>
              <span className="text-sm">{daysSinceLastVisit} days</span>
            </div>
            <Slider
              id="days-threshold"
              min={1}
              max={30}
              step={1}
              value={[daysSinceLastVisit]}
              onValueChange={(value) => setDaysSinceLastVisit(value[0])}
            />
            <p className="text-xs text-muted-foreground">
              Users who haven't visited in this many days will be considered at risk
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="pages-threshold">Minimum Page Views</Label>
              <span className="text-sm">{minPageViews} pages</span>
            </div>
            <Slider
              id="pages-threshold"
              min={1}
              max={10}
              step={1}
              value={[minPageViews]}
              onValueChange={(value) => setMinPageViews(value[0])}
            />
            <p className="text-xs text-muted-foreground">
              Users who view fewer pages than this will be considered at risk
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="time-threshold">Minimum Time Spent</Label>
              <span className="text-sm">{minTimeSpent} minutes</span>
            </div>
            <Slider
              id="time-threshold"
              min={1}
              max={15}
              step={1}
              value={[minTimeSpent]}
              onValueChange={(value) => setMinTimeSpent(value[0])}
            />
            <p className="text-xs text-muted-foreground">
              Users who spend less time than this will be considered at risk
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save Changes</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Detection Schedule</CardTitle>
          <CardDescription>Configure when and how often to run churn detection</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between space-y-1">
            <Label htmlFor="auto-detection">Automatic Detection</Label>
            <Switch id="auto-detection" defaultChecked />
          </div>
          <p className="text-sm text-muted-foreground">
            When enabled, the system will automatically detect at-risk users based on the schedule below
          </p>

          <div className="space-y-2">
            <Label htmlFor="detection-frequency">Detection Frequency</Label>
            <select
              id="detection-frequency"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="custom">Custom</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="detection-time">Detection Time</Label>
            <Input id="detection-time" type="time" defaultValue="00:00" />
            <p className="text-xs text-muted-foreground">
              The time of day when churn detection will run (in your local timezone)
            </p>
          </div>

          <div className="flex items-center justify-between space-y-1">
            <Label htmlFor="real-time">Real-time Detection</Label>
            <Switch id="real-time" />
          </div>
          <p className="text-sm text-muted-foreground">
            When enabled, the system will detect at-risk users in real-time as they interact with your site
          </p>
        </CardContent>
        <CardFooter>
          <Button>Save Schedule</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

