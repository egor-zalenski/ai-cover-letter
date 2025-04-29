// Generate a unique ID with a prefix and current timestamp
export const generateId = (prefix: string = 'id'): string => {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`
}

// Generate a letter-specific ID
export const generateLetterId = (): string => {
  return generateId('letter')
}

// Get current timestamp in ISO format
export const getCurrentTimestamp = (): string => {
  return new Date().toISOString()
}
