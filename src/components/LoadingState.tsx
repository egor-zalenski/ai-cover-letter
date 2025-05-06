'use client'

import { Icon } from '@/ui/Icon'
import { IconName } from '@/constants/icons'
import { SIZES } from '@/constants/app'
import { LoadingOverlay } from '@/ui/Feedback'

export const LoadingState = () => {
  return (
    <LoadingOverlay>
      <Icon name={IconName.LETTER} size={SIZES.ICON_SIZE.LARGE} />
    </LoadingOverlay>
  )
} 