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
 * Display an error notification
 * @param message - Error message to display
 * @returns Toast ID for reference
 */
export const showNotificationError = (message: string): Id  => {
  return toast.error(message, DEFAULT_TOAST_OPTIONS)
}

/**
 * Display a success notification
 * @param message - Success message to display
 * @returns Toast ID for reference
 */
export const showNotificationSuccess = (message: string): Id => {
  return toast.success(message, DEFAULT_TOAST_OPTIONS)
}