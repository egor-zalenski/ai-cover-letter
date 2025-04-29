import styled, { keyframes } from 'styled-components'

// Loading overlay
export const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--overlay-background);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
  border-radius: var(--border-radius);
`

// Loading text
export const LoadingText = styled.p`
  margin-top: var(--spacing-md);
  font-size: var(--font-size-md);
  color: var(--text-gray);
  font-weight: var(--font-weight-medium);
`

// Jumping animation for loading ball
const jump = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    transform: translateY(-10px);
    opacity: 0.6;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`

// Container for loading balls
export const LoadingBallsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  animation: ${jump} 1.5s ease-in-out infinite;
` 