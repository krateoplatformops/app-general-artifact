import React, { createContext, useState, useEffect } from 'react'
import useLocalStorage from 'use-local-storage'
import { uiConstants } from '../../constants/ui.constants'

export const UserContext = createContext(null)

const UserProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 768)
  const [theme, setTheme] = useLocalStorage('theme', uiConstants.themes.light)
  // BUG: check if it is open on window size change

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const switchTheme = () => {
    // console.log(html)
    const newTheme =
      theme === uiConstants.themes.light
        ? uiConstants.themes.dark
        : uiConstants.themes.light
    setTheme(newTheme)
  }

  useEffect(() => {
    const html = document.getElementsByTagName('html')[0]
    html.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <UserContext.Provider value={{ isOpen, toggle, switchTheme, theme }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
