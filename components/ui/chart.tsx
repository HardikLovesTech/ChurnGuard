"use client"

import type * as React from "react"

export const Bar = () => <rect />
export const BarChart = () => <svg />
export const ResponsiveContainer = ({ children }: { children: React.ReactNode }) => (
  <div style={{ width: "100%", height: "100%" }}>{children}</div>
)
export const Tooltip = () => <div />
export const XAxis = () => <div />
export const YAxis = () => <div />
export const Area = () => <path />
export const AreaChart = () => <svg />

