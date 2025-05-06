import { useEffect, useMemo, useState } from 'react'
import { useLetterStore } from '@/stores/letterStore'
import { Maybe } from '@/interfaces/types'


/**
 * Hook to fetch a letter by ID from the store
 * 
 * @param id - The letter ID to fetch
 * @returns Object containing the letter, loading state, and not found state
 */
export function useLetterById(id: Maybe<string>) {
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const { letters } = useLetterStore()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return useMemo(() => {
    if (!isMounted) return { isLoading: true, notFound: true, letter: null }
    
    if (!id) return { isLoading: false, notFound: true, letter: null }
    
    const letter = letters.find(letter => letter.id === id)
  
    return { isLoading: false, notFound: !letter, letter }
  }, [id, letters, isMounted])
} 