import { Download, Filter, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { UserTable } from "@/components/user-table"

export default function UsersPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Users</h1>
            <p className="text-muted-foreground">Manage and monitor all user activity and engagement</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-8 gap-1">
              <Download className="h-4 w-4" />
              Export
            </Button>
            <Button size="sm" className="h-8">
              Send Bulk Notification
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search users..."
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
            <CardTitle>All Users</CardTitle>
            <CardDescription>A list of all users and their engagement metrics</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <UserTable />
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

