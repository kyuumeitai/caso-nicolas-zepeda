import React, { createContext, useContext, useState } from 'react'

const ResizerContext = createContext()
const GetResizerContext = createContext()

export const { Provider, Consumer } = ResizerContext

export function useResizer() {
  const context = useContext(ResizerContext)
  return context
}

export function useGetResizer() {
  const context = useContext(GetResizerContext)
  return context
}

export const Resizer = props => {
  const [area, setArea] = useState(1)
  return (
    <Provider value={setArea}>
      <GetResizerContext.Provider value={area} {...props} />
    </Provider>
  )
}

export default Resizer
