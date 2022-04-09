import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  transition: all 0.3s;
  text-transform: uppercase;
  padding: 1rem 1rem;
  display: block;
  &.dark {
    background-color: white;
    color: black;
    &:hover {
      background-color: #333;
      color: white;
    }
  }
  &.light {
    background-color: black;
    color: white;
    &:hover {
      background-color: #666;
      color: white;
    }
  }
  border: 1px solid black;
  text-decoration: none;
  border-radius: 4px;
  display: inline-block;
  padding: 0.75rem 1rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 2rem;
  svg {
    margin-right: 0.2rem;
  }
`

const ButtonComponent = ({
  children,
  onCallback = () => {
    return null
  },
  theme = 'dark',
}) => {
  return (
    <Button
      className={theme === 'dark' ? 'dark' : 'light'}
      onClick={() => onCallback()}>
      {children}
    </Button>
  )
}

export default ButtonComponent
