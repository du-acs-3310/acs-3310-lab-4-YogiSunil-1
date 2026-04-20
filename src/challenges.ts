// Lab 4 — Date Utilities
// Implement each function according to the description.

// 1. formatShortDate
// Input: ISO date string
// Output: string in YYYY-MM-DD format or null if invalid
export function formatShortDate(dateString: string): string | null {
  const date = new Date(dateString)
  
  if (Number.isNaN(date.getTime())){
    return null
  }
  return date.toISOString().slice(0,10)
 
}

// 2. isBefore
// Input: two date strings
// Output: true if first date is earlier than second, otherwise false
// Return false if either date is invalid
export function isBefore(a: string, b: string): boolean {
  const dateA = new Date(a)
  const dateB = new Date(b)

  if (Number.isNaN(dateA.getTime()) || Number.isNaN(dateB.getTime())){
    return false
  }
  return dateA.getTime() < dateB.getTime()
  
}

// 3. daysBetween
// Input: two date strings
// Output: number of full days between dates or null if invalid
// Return the number of FULL days between dates (round down)
export function daysBetween(a: string, b: string): number | null {

  const dateA = new Date(a)
  const dateB = new Date(b)

  if(Number.isNaN(dateA.getTime()) || Number.isNaN(dateB.getTime())){
    return null
  }
  const diffMs = dateB.getTime() - dateA.getTime()
  const msPerDay = 24*60*60*1000
  
  return Math.floor(diffMs / msPerDay)
 
}

// 4. sortPostsByCreatedAt
// Input: array of posts with createdAt property
// Output: new array sorted newest first
// Do not mutate the original array

// Minimal post shape needed for this challenge
type Post = {
  createdAt: string
}

export function sortPostsByCreatedAt(posts: Post[]): Post[] {
  const copiedPosts = [...posts]

  return copiedPosts.sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  })
}

// 5. relativeDayLabel
// Input: target date string and current date string
// Output: 'today', 'yesterday', or '<n> days ago'
// Return null if invalid
export function relativeDayLabel(target: string, today: string): string | null {
  const diff = daysBetween(target, today)

  if (diff === null) {
    return null
  }

  if (diff === 0) {
    return 'today'
  }

  if (diff === 1) {
    return 'yesterday'
  }

  return `${diff} days ago`
}

// 6. isValidDateString
// Input: string
// Output: true if valid date, false otherwise
export function isValidDateString(dateString: string): boolean {
  const date = new Date(dateString)
  return !Number.isNaN(date.getTime())
}
