"use client"

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"

const data = [
  {
    date: "Jan 1",
    "Active Users": 145,
    "At-Risk Users": 23,
  },
  {
    date: "Jan 5",
    "Active Users": 159,
    "At-Risk Users": 18,
  },
  {
    date: "Jan 10",
    "Active Users": 178,
    "At-Risk Users": 12,
  },
  {
    date: "Jan 15",
    "Active Users": 189,
    "At-Risk Users": 15,
  },
  {
    date: "Jan 20",
    "Active Users": 202,
    "At-Risk Users": 19,
  },
  {
    date: "Jan 25",
    "Active Users": 198,
    "At-Risk Users": 24,
  },
  {
    date: "Jan 30",
    "Active Users": 215,
    "At-Risk Users": 21,
  },
  {
    date: "Feb 5",
    "Active Users": 227,
    "At-Risk Users": 17,
  },
  {
    date: "Feb 10",
    "Active Users": 238,
    "At-Risk Users": 14,
  },
  {
    date: "Feb 15",
    "Active Users": 245,
    "At-Risk Users": 18,
  },
  {
    date: "Feb 20",
    "Active Users": 256,
    "At-Risk Users": 22,
  },
  {
    date: "Feb 25",
    "Active Users": 268,
    "At-Risk Users": 19,
  },
  {
    date: "Mar 1",
    "Active Users": 274,
    "At-Risk Users": 16,
  },
  {
    date: "Mar 5",
    "Active Users": 289,
    "At-Risk Users": 21,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart data={data}>
        <XAxis dataKey="date" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="Active Users"
          stroke="#4f46e5"
          fill="#4f46e5"
          fillOpacity={0.2}
          strokeWidth={2}
        />
        <Area
          type="monotone"
          dataKey="At-Risk Users"
          stroke="#ef4444"
          fill="#ef4444"
          fillOpacity={0.2}
          strokeWidth={2}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

