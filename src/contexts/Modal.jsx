import React, { createContext, useContext, useState } from 'react'

const ModalContext = createContext()

export const { Provider, Consumer } = ModalContext

export function useModal() {
  return useContext(ModalContext)
}

export const ModalProvider = props => {
  const [content, setContent] = useState(null)
  const [active, setActive] = useState(false)
  const [title, setTitle] = useState(null)

  return (
    <Provider
      value={{
        active,
        setActive,
        content,
        setContent,
        title,
        setTitle,
      }}
      {...props}
    />
  )
}

export default ModalProvider
