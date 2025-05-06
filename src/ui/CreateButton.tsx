import { styled } from 'styled-components'
import { useTranslation } from 'react-i18next'
import { AppRoutes } from '@/constants/routes'
import { IconName } from '@/constants/icons'
import { SIZES } from '@/constants/app'
import { StyledButton } from './Button'
import { Link } from './Link'
import { Icon } from './Icon'

// Styled button component with small size variant
export const CreateStyledButton = styled(StyledButton)<{ $small?: boolean }>`
  background-color: var(--secondary);

  height: ${props => props.$small ? '44px' : '60px'};
  width: ${props => props.$small ? '151px' : '190px'};
  padding: ${props => props.$small ? '10px 18px' : '16px 28px'};
  font-size: ${props => props.$small ? 'var(--font-size-base)' : 'var(--font-size-lg)'};
  border: none;
  font-weight: var(--font-weight-semibold);
  justify-content: space-between;
`
// Styled Icon component with small size variant
export const StyledIcon = styled(Icon) <{ $small?: boolean }>`
  margin-left: ${props => props.$small ? '3px' : '4px'};
`

// Create button component with optional small size prop
export const CreateButton = ({ small = false}: {small?: boolean}) => {
  const { t } = useTranslation()
  
  return (
    <Link
      href={AppRoutes.GENERATOR}
      aria-label="A link styled as a button to redirect to the letter generation page"
    >
      <CreateStyledButton $small={small} $variant="primary">
        <StyledIcon name={IconName.ADD} size={small ? SIZES.ICON_SIZE.XSMALL : SIZES.ICON_SIZE.SMALL} $small={small}/>
        <span>{t('ui.button.create')}</span>
      </CreateStyledButton>
    </Link>
  )
}