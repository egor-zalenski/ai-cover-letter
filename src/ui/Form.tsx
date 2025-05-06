import { device } from "@/utils/device";
import styled from "styled-components";

export const FormContainer = styled.div`
  margin-top: 12px;
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two equal columns */
  gap: 8px 14px;
`
// Form group wrapper
export const FormGroup = styled.div<{
  $fullWidth?: boolean;
}>`
  width: 100%;
  flex-direction: column;

  grid-column: span 2;

  @media ${device.tablet} {
    grid-column: ${props => props.$fullWidth ? 'span 2' : 'span 1'};
  }
`

// Label text for forms
export const Label = styled.label`
  display: flex;
  margin-bottom: 5px;
  margin-top: 6px;
  font-weight: 500;
  font-size: 14px;
  color: var(--text-label);
` 