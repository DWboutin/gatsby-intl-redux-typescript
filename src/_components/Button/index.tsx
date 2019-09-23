import React from 'react'
import styled from 'styled-components'

import { ComponentProps } from '../../models/general/ComponentProps'

export interface ButtonProps extends ComponentProps {}

const StyledButton = styled.button`
  background-color: #fff;
  color: black;

  &:hover {
    background-color: red;
  }
`

const Button = ({ children }: ButtonProps) => {
  return <StyledButton>{children}</StyledButton>
}

export default Button
