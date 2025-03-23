"use client"

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"

const data = [
  {
    score: "0.0-0.1",
    users: 12,
    risk: "Very High",
  },
  {
    score: "0.1-0.2",
    users: 18,
    risk: "Very High",
  },
  {
    score: "0.2-0.3",
    users: 29,
    risk: "High",
  },
  {
    score: "0.3-0.4",
    users: 41,
    risk: "High",
  },
  {
    score: "0.4-0.5",
    users: 45,
    risk: "Medium",
  },
  {
    score: "0.5-0.6",
    users: 78,
    risk: "Medium",
  },
  {
    score: "0.6-0.7",
    users: 124,
    risk: "Low",
  },
  {
    score: "0.7-0.8",
    users: 189,
    risk: "Very Low",
  },
  {
    score: "0.8-0.9",
    users: 143,
    risk: "Very Low",
  },
  {
    score: "0.9-1.0",
    users: 98,
    risk: "Very Low",
  },
]

export function ChurnRiskChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="score" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
        <Tooltip />
        <Bar dataKey="users" fill="currentColor" radius={[4, 4, 0, 0]} className="fill-primary" />
      </BarChart>
    </ResponsiveContainer>
  )
}

