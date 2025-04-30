import { device } from '@/utils/device'
import styled from 'styled-components'

// Main page container used in multiple pages
export const PageContainer = styled.div`
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 16px;
  
  @media ${device.laptop} {
    padding: 0px;
  }
`

// Flex row with space between items
export const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--spacing-xl);
  flex-direction: column;
  
  @media ${device.laptop} {
    align-items: center;
    flex-direction: row;

    & > :first-child {
      padding-right: 16px;
    }
  
    & > :last-child {
      padding-left: 16px;
    }
  }
`
export const FlexColumn = styled.div`
  flex: 1;
  min-width: 50%;
`

// Centered container
export const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-xl);
`