import { device } from '@/utils/device'
import styled from 'styled-components'

// Container for content display
export const ContentContainer = styled.div`
  background-color: var(--background-gray);
  border-radius: 12px;
  padding: 23px 24px 16px;
  width: 100%;
  display: flex;
  flex-direction: column;

  margin-top: 24px;

  @media ${device.laptop} {
    margin-top: 0px;
    height: 600px;
  }
`

// Result container that extends FormContainer
export const ResultContainer = styled.div`
  height: 100%;
` 