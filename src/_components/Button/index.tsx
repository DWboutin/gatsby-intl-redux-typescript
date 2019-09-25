import React from 'react'
import styled from 'styled-components'

import { ComponentProps } from '../../models/general/ComponentProps'

export interface ButtonProps extends ComponentProps {
  variant: 'primary' | 'secondary'
}

const Container = styled.button`
  background-color: ${(props: ButtonProps) =>
    props.variant === 'primary' ? '#fff' : 'blue'};
  color: black;

  &:hover {
    background-color: red;
  }
`

const Button = ({ children, ...props }: ButtonProps) => {
  return <Container {...props}>{children}</Container>
}

Button.defaultProps = {
  variant: 'primary'
}

export default Button
