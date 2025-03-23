// This file would contain the logic for detecting at-risk users

export interface User {
  id: string
  name: string
  email: string
  lastVisit: string
  timeSpent: string
  pagesViewed: number
  interactionScore: number
}

export function isAtRisk(user: User): boolean {
  // A user is considered at risk if they have a low interaction score
  // or haven't visited in a while

  // Check if interaction score is below threshold
  if (user.interactionScore < 0.5) {
    return true
  }

  // Check if last visit was more than 7 days ago
  const lastVisitDate = new Date(user.lastVisit)
  const currentDate = new Date()
  const daysSinceLastVisit = Math.floor((currentDate.getTime() - lastVisitDate.getTime()) / (1000 * 60 * 60 * 24))

  if (daysSinceLastVisit > 7) {
    return true
  }

  // Check if page views are very low
  if (user.pagesViewed < 2) {
    return true
  }

  return false
}

export function calculateRiskFactor(user: User): string {
  if (user.interactionScore < 0.3) {
    return "Very low engagement"
  } else if (user.interactionScore < 0.5) {
    return "Low engagement"
  }

  const lastVisitDate = new Date(user.lastVisit)
  const currentDate = new Date()
  const daysSinceLastVisit = Math.floor((currentDate.getTime() - lastVisitDate.getTime()) / (1000 * 60 * 60 * 24))

  if (daysSinceLastVisit > 7) {
    return "Infrequent visits"
  }

  if (user.pagesViewed < 2) {
    return "Low page views"
  }

  // Extract time spent in minutes
  const timeSpentStr = user.timeSpent
  const minutes = Number.parseInt(timeSpentStr.split(" ")[0])

  if (minutes < 2) {
    return "Short session duration"
  }

  return "Moderate risk"
}

export function getRecommendedAction(user: User): string {
  if (user.interactionScore < 0.3) {
    return "Send special discount offer"
  } else if (user.interactionScore < 0.5) {
    return "Send personalized content recommendations"
  }

  const lastVisitDate = new Date(user.lastVisit)
  const currentDate = new Date()
  const daysSinceLastVisit = Math.floor((currentDate.getTime() - lastVisitDate.getTime()) / (1000 * 60 * 60 * 24))

  if (daysSinceLastVisit > 14) {
    return "Send re-engagement email with incentive"
  } else if (daysSinceLastVisit > 7) {
    return "Send reminder about new features"
  }

  return "Monitor activity"
}

