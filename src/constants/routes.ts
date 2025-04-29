// Application route constants
export enum AppRoutes {
  HOME = '/',
  GENERATOR = '/generator',
}

// Helper function to build routes with parameters
export const buildRoute = {
  /**
   * Get the generator route with an optional letter ID
   * @param letterId Optional letter ID for editing existing letter
   * @returns The generator route with ID parameter if provided
   */
  generator: (letterId?: string): string => {
    if (!letterId) return AppRoutes.GENERATOR
    return `${AppRoutes.GENERATOR}/${letterId}`
  }
} 