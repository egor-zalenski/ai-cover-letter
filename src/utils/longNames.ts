
// Formats a long name to a maximum length
export function formatLongName(
  currentName = '',
  maxNameLength = 500,
): string {
  if (currentName.length <= maxNameLength) {
    return currentName
  }
  const name = currentName.slice(0, maxNameLength)
  return name
}
