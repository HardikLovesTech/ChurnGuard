import { NextResponse } from "next/server"

// This would typically come from a database with filtering
const atRiskUsers = [
  {
    id: "u_2",
    name: "Sarah Williams",
    email: "sarah@example.com",
    lastVisit: "2024-03-19",
    timeSpent: "4 min",
    pagesViewed: 2,
    interactionScore: 0.45,
    riskFactor: "Low engagement",
  },
  {
    id: "u_4",
    name: "Emily Davis",
    email: "emily@example.com",
    lastVisit: "2024-03-18",
    timeSpent: "2 min",
    pagesViewed: 1,
    interactionScore: 0.32,
    riskFactor: "Infrequent visits",
  },
  // More at-risk users would be here
]

export async function GET() {
  return NextResponse.json(atRiskUsers)
}

