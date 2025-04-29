'use client'

import React from 'react'
import NextLink from 'next/link'
import styled from 'styled-components'

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  passHref?: boolean;
  onClick?: () => void;
  as?: React.ElementType;
}

const StyledLink = styled(NextLink)`
  color: var(--primary);
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`

// Link component
export const Link = ({ 
  href, 
  children, 
  className, 
  passHref = true,
  onClick,
  as,
  ...props 
}: LinkProps) => {
  // When using Link with components that already use anchor tags internally,
  // we need to use passHref and handle the component differently
  if (as) {
    return (
      <NextLink
        href={href}
        passHref={passHref}
        legacyBehavior
      >
        {React.createElement(as, {
          className,
          onClick,
          ...props
        }, children)}
      </NextLink>
    )
  }

  return (
    <StyledLink 
      href={href} 
      className={className} 
      onClick={onClick}
      {...props}
    >
      {children}
    </StyledLink>
  )
} 