
// Check if a value is an object
export const isObject = (value: any): boolean => {
  return value?.constructor?.name === 'Object'
}

// Check if a value is an array
export const isArray = (value: any): boolean => {
  return Array.isArray(value)
}

// Check if a value is a string
export const isString = (value: any): boolean => {
  return typeof value === 'string'
}

// Check if a value is a number
export const isNumber = (value: any): boolean => {
  return typeof value === 'number' && !isNaN(value)
}

// Check if a value is null
export const isNull = (value: any): boolean => {
  return value === null
}

// Check if a value is undefined
export const isUndefined = (value: any): boolean => {
  return value === undefined
}