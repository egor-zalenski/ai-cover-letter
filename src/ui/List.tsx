import { device } from '@/utils/device'
import styled from 'styled-components'

// Container for a list of items
export const ListContainer = styled.div`
  gap: 16px;
  margin: 16px 0;

  display: grid;
  grid-template-columns: 1fr; 
  
  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr; 
  }
`
