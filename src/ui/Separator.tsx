import { styled } from "styled-components"

// Separator component
export const Separator = styled.div<{ $small?: boolean }>`
  width: 100%;
  height: 1px;
  background-color: var(--separator-color);

  margin: ${props => props.$small ? '12px 0' : '16px 0'};
`