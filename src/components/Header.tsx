'use client'

import Image from 'next/image'
import { SIZES, TARGET_LETTER_COUNT } from '@/constants/app'
import { styled } from 'styled-components'
import { useLetterStore } from '@/stores/letterStore'
import { Link } from '@/ui/Link'
import { Icon } from '@/ui/Icon'
import { IconName } from '@/constants/icons'
import { device } from '@/utils/device'
import {
  ProgressContainer,
  ProgressDots,
  ProgressDot,
  ProgressText,
} from '@/ui/Progress'

interface HeaderProps {
  targetCount?: number;
}

export const HomeIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--border-color);
  transition: transform 0.1s ease;
  
  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
`


export const HeaderContainer = styled.header`
  padding: 30px 0 16px;
  margin-bottom: 16px;
  position: fixed;
  background-color: var(--background);
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--container-width);
  margin: 0 auto;
`

export const Logo = styled(Link)`
  font-size: 20px;
  font-weight: 700;
  color: var(--gray-800);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    text-decoration: none;
  }
`

export const LogoIcon = styled.div`
  display: flex;
  align-items: center;
`

export const LogoText = styled.span`
  font-weight: 700;
  font-size: 20px;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 4px;
  flex-direction: column-reverse;
  
  @media ${device.tablet} {
    gap: 16px;
    flex-direction: row;
  }
`

export const HeaderSpacer = styled.div`
  height: 46px; // Should match the header height
  margin-bottom: 32px;
  
  @media ${device.laptop} {
    height: 80px;
  }
` 

export const Header = ({ targetCount = TARGET_LETTER_COUNT }: HeaderProps) => {
  const { letters } = useLetterStore()
  const letterCount = letters.length
  const isCompleted = letterCount >= targetCount

  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <Logo href="/" area-label="Logo image as link to home page">
            <LogoIcon>
              <Image src="/icons/logo.svg" alt="Logo image" width={180} height={48} />
            </LogoIcon>
          </Logo>
          
          <Nav>
            <ProgressContainer>
              <ProgressText>
                {isCompleted ? targetCount : letterCount}/{targetCount} applications generated
              </ProgressText>
              {!isCompleted && (
                <ProgressDots>
                  {Array.from({ length: targetCount }).map((_, i) => (
                    <ProgressDot 
                      key={i} 
                      $active={i < letterCount} 
                    />
                  ))}
                </ProgressDots>
              )}
              {isCompleted && (
                <Icon name={IconName.SUCCESS} size={SIZES.ICON_SIZE.LARGE} />
              )}
            </ProgressContainer>
            
            <Link href="/" aria-label="Home icon as link to home page">
              <HomeIcon>
                <Image src="/icons/home.svg" alt="Home page icon" width={18} height={18} />
              </HomeIcon>
            </Link>
          </Nav>
        </HeaderContent>
      </HeaderContainer>
      <HeaderSpacer />
    </>
  )
} 