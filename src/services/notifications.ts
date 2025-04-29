import { toast, ToastOptions, Id } from 'react-toastify'

// Default toast configuration
const DEFAULT_TOAST_OPTIONS: ToastOptions = {
  position: 'bottom-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
}

/**
 * Notifications service with minimal functionality
 */
export const notificationsService = {
  /**
   * Display an error notification
   * @param message - Error message to display
   * @returns Toast ID for reference
   */
  showError(message: string): Id {
    return toast.error(message, DEFAULT_TOAST_OPTIONS)
  },

  /**
   * Display a success notification
   * @param message - Success message to display
   * @returns Toast ID for reference
   */
  showSuccess(message: string): Id {
    return toast.success(message, DEFAULT_TOAST_OPTIONS)
  }
} 