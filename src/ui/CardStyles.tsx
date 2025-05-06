import styled from 'styled-components'
import { Link } from '@/ui/Link'

// Styled link that looks like a card
export const StyledCardLink = styled(Link)`
  border-radius: 12px;
  background-color: var(--card-background);
  overflow: hidden;
  cursor: pointer;
  display: block;
  text-decoration: none;
  color: inherit;
  transition: box-shadow 0.2s ease-in-out, transform 0.1s ease-in-out;

  &:focus-visible {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
  }
`
// Styled link that looks like a card
export const CardContainer = styled.div`
  border-radius: 12px;
  background-color: var(--card-background);
  display: block;
  text-decoration: none;
  color: inherit;
  transition: box-shadow 0.2s ease-in-out, transform 0.1s ease-in-out;
  
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.00);
    transform: translateY(-2px);
  }
`

// Container for letter preview with fade effect
export const PreviewContainer = styled.div`
  padding-top: 24px;
  padding: 24px 24px 0;
  height: 186px;
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60px;
    pointer-events: none;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), var(--card-background));
    z-index: 1;
  }
`

// Container for actions at the bottom of the card
export const CardFooter = styled.div`
  padding: 5px 24px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`