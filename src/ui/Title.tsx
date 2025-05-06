import styled from 'styled-components'
import { PropsWithChildren } from 'react'
import { usePageTitleStore } from '@/stores/pageTitleStore'
import { device } from '@/utils/device'
import { PAGE_TITLES } from '@/constants/metadata'

const StyledPageTitle = styled.h1<{ $gray?: boolean, $big?: boolean }>`
  font-family: var(--font-fixel-display);
  font-weight: 600;
  color: ${props => props.$gray ? 'var(--text-gray)' : 'var(--text-black)'};
  font-size: ${props => props.$big ? '48px' : '36px'};
  letter-spacing: ${props => props.$big ? '-1px' : '-0.7px'};
  margin-top: ${props => props.$big ? '0' : '3px'};
  line-height: ${props => props.$big ? 'default' : '36px'};
  padding-bottom: 12px;
  max-width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  flex: 0 1 auto;
  min-width: 0;

  padding-top: 28px;
  @media ${device.tablet} {
    padding-top: 0;
    padding-bottom: 0;
  }
`

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

interface PageTitleProps extends PropsWithChildren {
  homePage?: boolean
}

export const PageTitle = ({ children, homePage }: PageTitleProps) => {
  const { title } = usePageTitleStore()
  const isGray = title === PAGE_TITLES.CREATE

  return (
    <TitleContainer>
      <TitleWrapper>
        <StyledPageTitle $gray={isGray} $big={homePage}>{title}</StyledPageTitle>
      </TitleWrapper>
      {children}
    </TitleContainer>
  )
}