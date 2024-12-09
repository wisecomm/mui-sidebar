import styled from '@emotion/styled';
import { red } from '@mui/material/colors';
import React from 'react'

const LayoutContainer = styled('div')({
  backgroundColor: red[500],
  justifyContent: "flex-end",

});


function FirstPage() {
  return (
    <LayoutContainer>FirstPage 입니다.</LayoutContainer>
  )
}

export default FirstPage