/**
 * Application text strings
 */

// UI text strings for the application
export const UI_TEXT = {
  // Button text
  BUTTON_COPY: 'Copy to clipboard',
  BUTTON_DELETE: 'Delete',
}

// Delete confirmation strings
export const DELETE_CONFIRM = {
  DEFAULT_MESSAGE: 'Are you sure you want to delete this item?',
  DEFAULT_ARIA_LABEL: 'Delete item',
}

// Page Titles
export const PAGE_TITLES = {
  MAIN: 'Applications',
  CREATE: 'New Application',
}

// Button Labels
export const BUTTON_LABELS = {
  GENERATE: 'Generate Now',
  UPDATE: 'Try again',
  CREATE: 'Create New',
}

// Goal-related strings
export const GOAL = {
  TITLE: 'Hit your goal',
  DESCRIPTION: 'Generate and send out couple more job applications today to get hired faster',
  PROGRESS: (current: number, target: number) => `${current} out of ${target}`,
}

// Form Labels
export const FORM_LABELS = {
  JOB_TITLE: 'Job title',
  COMPANY: 'Company',
  SKILLS: 'I am good at...',
  ADDITIONAL_DETAILS: 'Additional details'
}

// Placeholder text
export const PLACEHOLDERS = {
  LETTER_PREVIEW: 'Your personalized job application will appear here...',
  JOB_TITLE: 'Product manager',
  COMPANY: 'Apple',
  SKILLS: 'HTML, CSS and doing things in time',
  ADDITIONAL_DETAILS: 'Describe why you are a great fit or paste your bio'
}

// Prompt Templates
export const GENERATE_COVER_LETTER_PROMPT = ({
  jobTitle = '',
  company = '',
  skillsList = '',
  additionalDetails = ''
}: {
  jobTitle: string;
  company: string;
  skillsList: string;
  additionalDetails?: string;
}) => `
  You are an assistant that writes professional cover letters.
  Write a short cover letter for the position of "${jobTitle}" at "${company}".
  Mention the following skills: "${skillsList}" and additional data: "${additionalDetails}".

  Should starts with: "Dear ${company} team,"
  Make the letter friendly but professional.
  Do NOT add any closing phrases (such as "Sincerely", "Best regards", etc.).
  Do NOT add a name, signature, or any final remarks.
  Should be around 90 words on 3 paragraphs
`.trim()

// Messages
export const MESSAGES = {
  SUCCESS: {
    GENERATION: (company: string) => `Cover letter for ${company} generated successfully!`,
  },
  ERROR: {
    DEFAULT: 'Failed to generate cover letter',
    API_KEY: 'OpenAI API key is missing.',
    NO_CONTENT: 'No content received from OpenAI',
    RATE_LIMIT: 'Rate limit exceeded. Please try again later.',
    INVALID_API_KEY: 'Invalid API key. Please check your API key and try again.',
  },
  LOADING: {
    AI: 'AI is crafting your personalized cover letter...',
  },
  CONFIRM_DELETE: (company: string) => `Are you sure you want to delete this cover letter for ${company}?`
}

// Meta description
export const META = {
  DESCRIPTION: 'Generate personalized cover letters for job applications',
} 