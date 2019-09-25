import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

import { ButtonProps } from './index.d'

const Container = styled.button`
  background-color: ${(props: ButtonProps) =>
    props.variant === 'primary' ? '#fff' : 'blue'};
  color: black;

  &:hover {
    background-color: red;
  }
`

const Button: FunctionComponent<ButtonProps> = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>
}

Button.defaultProps = {
  variant: 'primary'
}

export default Button
