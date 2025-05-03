import { DEFAULT_TEXTAREA_MAX_LENGTH } from './app'

export const VALIDATION_RULES = {
  MAX_LENGTH: {
    COMPANY: 100,
    JOB_TITLE: 100,
    SKILLS: 500,
    DETAILS: DEFAULT_TEXTAREA_MAX_LENGTH,
  }
}

export const VALIDATION_MESSAGES = {
  REQUIRED: {
    COMPANY: 'Company name is required',
    JOB_TITLE: 'Job title is required',
    SKILLS: 'Skills are required',
  },
  MAX_LENGTH: {
    COMPANY: `Company name must be less than ${VALIDATION_RULES.MAX_LENGTH.COMPANY} character`,
    JOB_TITLE: `Job title must be less than ${VALIDATION_RULES.MAX_LENGTH.JOB_TITLE} character`,
    SKILLS: `Skills must be less than ${VALIDATION_RULES.MAX_LENGTH.SKILLS} character`,
    DETAILS: `Details must be less than ${VALIDATION_RULES.MAX_LENGTH.DETAILS} character`,
  },
}
