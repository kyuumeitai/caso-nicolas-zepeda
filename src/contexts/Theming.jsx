import React, { createContext, useContext, useState } from 'react'

const ThemingContext = createContext()
const GetThemingContext = createContext()

const { Provider } = ThemingContext

export function useTheme() {
  const context = useContext(ThemingContext)
  return context
}

export function useGetTheme() {
  const context = useContext(GetThemingContext)
  return context
}

export const Theme = props => {
  const [theme, setTheme] = useState('light')
  return (
    <Provider value={setTheme}>
      <GetThemingContext.Provider value={theme} {...props} />
    </Provider>
  )
}

export default Theme
