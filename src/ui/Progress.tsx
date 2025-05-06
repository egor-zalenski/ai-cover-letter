import { device } from '@/utils/device'
import styled from 'styled-components'

export const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  color: var(--text-gray);
  font-size: 18px;
  padding-top: 2px;
`

export const ProgressText = styled.span`
  display: none;

  @media ${device.mobileL} {
    display: flex;
  }
`

export const ProgressDots = styled.div`
  display: flex;
  gap: 4px;
  margin-right: 8px;
`

export const ProgressSquares = styled.div`
  display: flex;
  margin-top: 32px;
  gap: 8px;
`

export const ProgressDot = styled.div<{ $active: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${props => {
    if (props.$active) return 'var(--dot-active-color)'
    return 'var(--dot-color)' 
  }};
`

export const ProgressSquare = styled.div<{ $active: boolean }>`
  width: 32px;
  height: 8px;
  border-radius: 4px;
  background-color: ${props => {
    if (props.$active) return 'var(--dot-active-color)'
    return 'var(--dot-color)'
  }};
`

