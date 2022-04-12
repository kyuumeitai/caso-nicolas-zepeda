import React, { createContext, useContext, useState } from 'react'

const ModalContext = createContext()

export const { Provider, Consumer } = ModalContext

export function useModal() {
  return useContext(ModalContext)
}

export const ModalProvider = props => {
  const [content, setContent] = useState(null)
  const [active, setActive] = useState(false)

  return (
    <Provider
      value={{
        active,
        setActive,
        content,
        setContent,
      }}
      {...props}
    />
  )
}

export default ModalProvider
