import { styled } from 'styled-components'
import { AppRoutes } from '@/constants/routes'
import { IconName } from '@/constants/icons'
import { SIZES } from '@/constants/app'
import { BUTTON_LABELS } from '@/constants/strings'
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
  gap: 10px;
`

// Create button component with optional small size prop
export const CreateButton = ({ small = false}: {small?: boolean}) =>
  <Link
    href={AppRoutes.GENERATOR}
    aria-label="A link styled as a button to redirect to the letter generation page"
  >
    <CreateStyledButton $small={small} $variant="primary">
      <Icon name={IconName.ADD} size={SIZES.ICON_SIZE.XSMALL} />
      <span>{BUTTON_LABELS.CREATE}</span>
    </CreateStyledButton>
  </Link>