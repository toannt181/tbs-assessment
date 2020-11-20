import React, { InputHTMLAttributes } from 'react'
import { InputContainer } from './styles'

interface IInput extends InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: IInput) => {
  return <InputContainer {...props} />
}

export default Input
