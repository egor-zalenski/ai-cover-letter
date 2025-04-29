'use client'

import { Icon } from '@/ui/Icon'
import { IconName } from '@/constants/icons'
import { SIZES } from '@/constants/app'
import { MESSAGES } from '@/constants/strings'
import { LoadingOverlay, LoadingText } from '@/ui/Feedback'

export const LoadingState = () => {
  return (
    <LoadingOverlay>
      <Icon name={IconName.LETTER} size={SIZES.ICON_SIZE.LARGE} />
      <LoadingText>
        {MESSAGES.LOADING.AI}
      </LoadingText>
    </LoadingOverlay>
  )
} 