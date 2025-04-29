import OpenAI from 'openai'
import { MESSAGES } from '@/constants/strings'
import { OPENAI_CONFIG } from '@/constants/ai'

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY || '',
  dangerouslyAllowBrowser: true, // For client-side use
})

export interface OpenAIPromptParams {
  prompt: string;
  maxTokens?: number;
  temperature?: number;
  model?: string;
}

// Generates a text response from OpenAI's API based on the provided prompt
export async function generateMessage(params: OpenAIPromptParams): Promise<string> {
  const { 
    prompt, 
    maxTokens = OPENAI_CONFIG.DEFAULT_MAX_TOKENS, 
    temperature = OPENAI_CONFIG.DEFAULT_TEMPERATURE, 
    model = OPENAI_CONFIG.DEFAULT_MODEL 
  } = params
  
  if (!openai.apiKey) {
    const errorMessage = MESSAGES.ERROR.API_KEY
    throw new Error(errorMessage)
  }
  
  const response = await openai.chat.completions.create({
    model,
    messages: [
      {
        role: 'user',
        content: prompt
      }
    ],
    temperature,
    max_tokens: maxTokens,
  })
  
  if (!response.choices?.[0]?.message?.content) {
    const errorMessage = MESSAGES.ERROR.NO_CONTENT
    throw new Error(errorMessage)
  }
  
  return response.choices?.[0]?.message?.content?.trim()
}