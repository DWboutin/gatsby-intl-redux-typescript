import * as React from 'react'

interface ButtonProps {
  variant: 'primary' | 'secondary'
}

declare const Button: React.FunctionComponent<ButtonProps>

export { Button, ButtonProps }
