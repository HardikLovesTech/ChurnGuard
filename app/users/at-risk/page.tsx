import { Download, Filter, Search, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AtRiskUserTable } from "@/components/at-risk-user-table"
import { ChurnRiskChart } from "@/components/churn-risk-chart"

export default function AtRiskUsersPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">At-Risk Users</h1>
            <p className="text-muted-foreground">Users with low engagement who need attention</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-8 gap-1">
              <Download className="h-4 w-4" />
              Export
            </Button>
            <Button size="sm" className="h-8 gap-1">
              <Send className="h-4 w-4" />
              Bulk Re-engagement
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="lg:col-span-4">
            <CardHeader>
              <CardTitle>Churn Risk Distribution</CardTitle>
              <CardDescription>Distribution of users by interaction score and risk level</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <ChurnRiskChart />
            </CardContent>
          </Card>
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Churn Risk Factors</CardTitle>
              <CardDescription>Common factors contributing to user churn</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="space-y-0.5">
                    <div className="text-sm font-medium">Low Interaction Score</div>
                    <div className="text-xs text-muted-foreground">Users with score below 0.5</div>
                  </div>
                  <div className="font-bold">68%</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="space-y-0.5">
                    <div className="text-sm font-medium">Infrequent Visits</div>
                    <div className="text-xs text-muted-foreground">Last visit &gt; 7 days ago</div>
                  </div>
                  <div className="font-bold">54%</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="space-y-0.5">
                    <div className="text-sm font-medium">Low Page Views</div>
                    <div className="text-xs text-muted-foreground">Less than 2 pages per session</div>
                  </div>
                  <div className="font-bold">42%</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="space-y-0.5">
                    <div className="text-sm font-medium">Short Session Duration</div>
                    <div className="text-xs text-muted-foreground">Less than 2 minutes</div>
                  </div>
                  <div className="font-bold">39%</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search at-risk users..."
                className="w-full min-w-[240px] pl-8 md:w-[240px] lg:w-[320px]"
              />
            </div>
            <Button variant="outline" size="sm" className="h-9 gap-1">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader className="px-6 py-4">
            <CardTitle>At-Risk Users</CardTitle>
            <CardDescription>Users with interaction score below 0.5 who need re-engagement</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <AtRiskUserTable />
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

