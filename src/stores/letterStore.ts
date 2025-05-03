import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { StorageKeys } from '@/constants/storage'
import { generateLetterId, getCurrentTimestamp } from '@/utils/idGenerator'
import { Maybe } from '@/interfaces/types'

// Base interface for letter data fields
export interface LetterFields {
  company: string;
  jobTitle: string;
  skillsList: string;
  additionalDetails: string;
  generatedText: string;
}

// Form data is all letter fields except generated text
export type GeneratorFormData = Omit<LetterFields, 'generatedText'>;

// Complete letter includes metadata fields
export interface CoverLetter extends LetterFields {
  id: string;
  createdAt: string; // ISO string format
}

export interface CoverLetterState {
  letters: CoverLetter[];
  isLoading: boolean;
  // actions
  setLoading: (isLoading: boolean) => void;
  // CRUD operations
  addLetter: (letter: Omit<CoverLetter, 'id' | 'createdAt'>) => CoverLetter;
  updateLetter: (id: string, updatedLetter: Partial<Omit<CoverLetter, 'id' | 'createdAt'>>) => CoverLetter;
  removeLetter: (id: string) => void;
  getLetterById: (id: string) => Maybe<CoverLetter>;
}

export const useLetterStore = create<CoverLetterState>()(
  persist(
    immer(
      (set, get) => ({
        letters: [],
        isLoading: false,
        isGenerating: false,
        
        addLetter: (letterData) => {
          // Create a new letter with ID and timestamp
          const newLetter: CoverLetter = {
            ...letterData,
            id: generateLetterId(),
            createdAt: getCurrentTimestamp(),
          }
          
          set((state) => {
            state.letters.push(newLetter)
          })
          
          return newLetter
        },
        
        updateLetter: (id, updatedData) => {
          let updatedLetter: Maybe<CoverLetter>;
          
          set((state) => {
            // Find the existing letter
            const existingLetterIndex = state.letters.findIndex(
              (letter: CoverLetter) => letter.id === id
            )

            if (existingLetterIndex === -1) {
              return;
            }
            
            // Update the letter directly
            state.letters[existingLetterIndex] = { 
              ...state.letters[existingLetterIndex], 
              ...updatedData 
            };
            
            updatedLetter = state.letters[existingLetterIndex];
          });
          
          if (!updatedLetter) {
            throw new Error(`Letter with ID ${id} not found`);
          }
          
          return updatedLetter;
        },

        getLetterById: (letterId) => get().letters.find(({id}) => letterId === id),
        
        removeLetter: (id) => {
          set((state) => {
            state.letters = state.letters.filter((letter: CoverLetter) => letter.id !== id)
          })
        },
        
        setLoading: (isLoading) => {
          set((state) => {
            state.isLoading = isLoading
          })
        },

      })
    ),
    {
      name: StorageKeys.LETTERS,
      storage: createJSONStorage(() => localStorage),
    }
  )
) 