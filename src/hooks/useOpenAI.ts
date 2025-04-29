import { useMutation } from '@tanstack/react-query'
import { generateMessage, OpenAIPromptParams } from '@/services/openai'
import { OPENAI_CONFIG } from '@/constants/ai'

interface UseOpenAIMutationParams {
  onMutate?: () => void;
  onSettled?: () => void;
  onSuccess?: (content: string) => void;
  onError?: (error: Error) => void;
}

/**
 * Hook for OpenAI API integration with React Query
 */
export function useOpenAIMutation(params: UseOpenAIMutationParams = {}) {
  return useMutation({
    mutationFn: async (prompt: string) => {
      try {
        return await generateMessage({
          prompt,
          temperature: OPENAI_CONFIG.DEFAULT_TEMPERATURE,
          maxTokens: OPENAI_CONFIG.DEFAULT_MAX_TOKENS,
        } as OpenAIPromptParams)
      } catch (error) {
        // Re-throw to allow react-query to handle it via onError
        throw error
      }
    },
    onMutate: params.onMutate,
    onSuccess: params.onSuccess,
    onError: params.onError,
    onSettled: params.onSettled,
  })
} 