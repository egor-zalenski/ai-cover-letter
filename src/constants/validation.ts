import { DEFAULT_TEXTAREA_MAX_LENGTH } from './app'

export const VALIDATION_RULES = {
  MIN_LENGTH: {
    COMPANY: 2,
    JOB_TITLE: 2,
    SKILLS: 2,
  },
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
  MIN_LENGTH: {
    COMPANY: `Company name must be at least ${VALIDATION_RULES.MIN_LENGTH.COMPANY} characters`,
    JOB_TITLE: `Job title must be at least ${VALIDATION_RULES.MIN_LENGTH.JOB_TITLE} characters`,
    SKILLS: `Skills must be at least ${VALIDATION_RULES.MIN_LENGTH.SKILLS} characters`,
  },
  MAX_LENGTH: {
    COMPANY: `Company name must be less than ${VALIDATION_RULES.MAX_LENGTH.COMPANY} characters`,
    JOB_TITLE: `Job title must be less than ${VALIDATION_RULES.MAX_LENGTH.JOB_TITLE} characters`,
    SKILLS: `Skills must be less than ${VALIDATION_RULES.MAX_LENGTH.SKILLS} characters`,
    DETAILS: `Details must be less than ${VALIDATION_RULES.MAX_LENGTH.DETAILS} characters`,
  },
}
