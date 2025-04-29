import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { SIZES } from '@/constants/app'
import { IconName } from '@/constants/icons'

interface IconProps {
  name: IconName
  size?: number
  color?: string
  className?: string
}

const StyledIcon = styled.span<{ $size: number }>`
  display: inline-flex;
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  align-items: center;
  justify-content: center;
  
  & > img {
    width: 100%;
    height: 100%;
    color: inherit;
  }
`

/**
 * Icon component that uses SVG files from the public/icons directory
 */
export const Icon: React.FC<IconProps> = ({ 
  name, 
  size = SIZES.ICON_SIZE.MEDIUM, 
  color = 'currentColor',
  className,
}) => {
  // Special case for logo (use simplified version when colorizing)
  const iconPath = name === IconName.LOGO && color !== 'currentColor' 
    ? `/icons/logo-simple.svg` 
    : `/icons/${name}.svg`

  return (
    <StyledIcon 
      $size={size}
      className={className}
      style={{ color }}
    >
      <Image 
        src={iconPath}
        alt={`${name} icon`}
        width={size}
        height={size}
        style={{ 
          maxWidth: '100%',
          height: 'auto'
        }}
      />
    </StyledIcon>
  )
} 