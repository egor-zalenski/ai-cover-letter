import { useEffect, useState } from 'react'
import { CoverLetter, useLetterStore } from '@/stores/letterStore'
import { Maybe, Nullable } from '@/interfaces/types'


/**
 * Hook to fetch a letter by ID from the store
 * 
 * @param id - The letter ID to fetch
 * @returns Object containing the letter, loading state, and not found state
 */
export function useLetterById(id: Maybe<string>) {
  const [letter, setLetter] = useState<Nullable<CoverLetter>>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [notFound, setNotFound] = useState<boolean>(false)
  const { letters } = useLetterStore()

  useEffect(() => {
    // Set initial loading state
    setIsLoading(true)
    
    if (!id) {
      setIsLoading(false)
      setNotFound(true)
      return
    }
    
    const foundLetter = letters.find(letter => letter.id === id)
    
    if (foundLetter) {
      setLetter(foundLetter)
      setNotFound(false)
      
    } else {
      setLetter(null)
      setNotFound(true)
    }
    
    setIsLoading(false)
  }, [id, letters])

  return { letter, isLoading, notFound }
} 