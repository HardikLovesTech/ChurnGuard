"use client"

import { useState } from "react"
import { Edit, Trash } from "lucide-react"

import { Button } from "@/components/ui/button"
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
import { Input } from "@/components/ui/input"

// Sample data for notification templates
const templates = [
  {
    id: "t_1",
    name: "Special Discount",
    type: "email",
    content: "Hey {name}! We miss you! Here's a special 20% discount just for you. Use code COMEBACK20 at checkout.",
  },
  {
    id: "t_2",
    name: "New Features",
    type: "email",
    content: "Hi {name}, We've added some exciting new features we think you'll love. Check them out today!",
  },
  {
    id: "t_3",
    name: "Reminder",
    type: "sms",
    content: "Hi {name}, just a reminder about the items in your cart. They're still waiting for you!",
  },
  {
    id: "t_4",
    name: "Re-engagement",
    type: "push",
    content: "We haven't seen you in a while, {name}. Come back and see what's new!",
  },
]

export function NotificationTemplates() {
  const [selectedTemplate, setSelectedTemplate] = useState(null)

  return (
    <div className="space-y-4">
      {templates.map((template) => (
        <div key={template.id} className="flex items-center justify-between border p-3 rounded-md">
          <div>
            <h3 className="font-medium">{template.name}</h3>
            <p className="text-sm text-muted-foreground capitalize">{template.type}</p>
          </div>
          <div className="flex items-center gap-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon" onClick={() => setSelectedTemplate(template)}>
                  <Edit className="h-4 w-4" />
                  <span className="sr-only">Edit</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Edit Template</DialogTitle>
                  <DialogDescription>Modify this notification template</DialogDescription>
                </DialogHeader>
                {selectedTemplate && (
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="template-name" className="text-right">
                        Name
                      </Label>
                      <Input id="template-name" defaultValue={selectedTemplate.name} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="template-type" className="text-right">
                        Type
                      </Label>
                      <Input id="template-type" defaultValue={selectedTemplate.type} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-start gap-4">
                      <Label htmlFor="template-content" className="text-right">
                        Content
                      </Label>
                      <Textarea
                        id="template-content"
                        defaultValue={selectedTemplate.content}
                        className="col-span-3"
                        rows={4}
                      />
                    </div>
                  </div>
                )}
                <DialogFooter>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <Button variant="ghost" size="icon">
              <Trash className="h-4 w-4" />
              <span className="sr-only">Delete</span>
            </Button>
          </div>
        </div>
      ))}
      <Button variant="outline" className="w-full">
        Add New Template
      </Button>
    </div>
  )
}

