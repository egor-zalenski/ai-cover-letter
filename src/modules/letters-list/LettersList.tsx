import React from 'react'
import { useLetterStore, CoverLetter } from '@/stores/letterStore'
import { ListContainer } from '@/ui/List'
import { LetterCard } from './components/LetterCard'

// Letters list module
export function LettersList() {
  const { letters, removeLetter } = useLetterStore()
  
  const handleDelete = (letterId: string) => {
    removeLetter(letterId)
  }
  
  if (letters.length === 0) {
    return null
  }
  
  return (
    <ListContainer>
      {letters.map((letter: CoverLetter) => (
        <LetterCard 
          key={letter.id} 
          letter={letter}
          onDelete={() => handleDelete(letter.id)}
        />
      ))}
    </ListContainer>
  )
} 