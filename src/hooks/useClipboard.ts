import { useState, useCallback } from 'react'

interface UseClipboardReturn {
  isCopied: boolean;
  copyToClipboard: (text: string, resetDelay?: number) => Promise<void>;
  resetCopyState: () => void;
}

/**
 * Hook for clipboard operations
 * @returns Object containing clipboard state and methods
 */
export function useClipboard(): UseClipboardReturn {
  const [isCopied, setIsCopied] = useState(false)
  
  const resetCopyState = useCallback(() => {
    setIsCopied(false)
  }, [])
  
  const copyToClipboard = useCallback(async (text: string, resetDelay: number = 1500) => {
    try {
      setIsCopied(true)
      await navigator.clipboard.writeText(text)
      
      if (resetDelay > 0) {
        setTimeout(() => {
          setIsCopied(false)
        }, resetDelay)
      }
    } catch (error) {
      console.error('Failed to copy text to clipboard:', error)
      setIsCopied(false)
    }
  }, [])
  
  return {
    isCopied,
    copyToClipboard,
    resetCopyState
  }
} 