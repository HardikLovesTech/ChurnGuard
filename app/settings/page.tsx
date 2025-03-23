import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChurnSettings } from "@/components/churn-settings"
import { NotificationSettings } from "@/components/notification-settings"
import { IntegrationSettings } from "@/components/integration-settings"

export default function SettingsPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">Configure your churn detection and notification preferences</p>
        </div>

        <Tabs defaultValue="churn" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="churn">Churn Detection</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="integrations">Integrations</TabsTrigger>
          </TabsList>
          <TabsContent value="churn">
            <ChurnSettings />
          </TabsContent>
          <TabsContent value="notifications">
            <NotificationSettings />
          </TabsContent>
          <TabsContent value="integrations">
            <IntegrationSettings />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

