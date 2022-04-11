import React, { createContext, useContext, useState } from 'react'

const NavSizeContext = createContext()

export const { Provider, Consumer } = NavSizeContext

export function useNavSize() {
  const context = useContext(NavSizeContext)
  return context
}

export const NavSize = props => {
  const [height, setHeight] = useState(100)
  return <Provider value={{ height, setHeight }} {...props} />
}

export default NavSize
