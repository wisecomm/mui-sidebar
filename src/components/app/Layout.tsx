import React from 'react'

import { styled } from '@mui/material/styles';

type LayoutProps = {
    children: React.ReactNode
}

const LayoutContainer = styled('div')({
    flexGrow: 1,
    overflow: "auto",
    height: "100vh",
    padding: "12px 48px",
  });

function Layout({ children }: LayoutProps) {
  return (
    <LayoutContainer>
        {children}
    </LayoutContainer>
)
}

export default Layout