import styled from 'styled-components'
import { usePageTitleStore } from '@/stores/pageTitleStore'
import { PropsWithChildren } from 'react'
import { PAGE_TITLES } from '@/constants/strings'
import { device } from '@/utils/device'

const StyledPageTitle = styled.h1<{ $gray?: boolean }>`
  font-family: var(--font-fixel-display);
  font-size: 40px;
  font-weight: 600;
  color: ${props => props.$gray ? 'var(--text-gray)' : 'var(--text-black)'};
  padding-bottom: 12px;
  max-width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  flex: 0 1 auto;
  min-width: 0;

  @media ${device.mobileL} {
    padding-bottom: 0;
  }
`

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 12px;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  
  @media ${device.mobileL} {
    flex-direction: row;
  }
`

const TitleWrapper = styled.div`
  flex: 0 1 auto;
  min-width: 0;
  max-width: 100%;
  overflow: hidden;
`

export const PageTitle = ({ children }: PropsWithChildren) => {
  const { title } = usePageTitleStore()

  return <TitleContainer>
    <TitleWrapper>
      <StyledPageTitle $gray={title === PAGE_TITLES.CREATE}>{title}</StyledPageTitle>
    </TitleWrapper>
    {children}
  </TitleContainer>
}