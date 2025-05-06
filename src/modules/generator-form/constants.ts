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