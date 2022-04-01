import React, { createContext, useState, useEffect } from 'react'
import useLocalStorage from 'use-local-storage'
import { uiConstants } from '../../constants/ui.constants'

export const UserContext = createContext(null)

const UserProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(window.innerWidth > 768)
  const [theme, setTheme] = useLocalStorage('theme', uiConstants.themes.light)
  const [userOpen, setUserOpen] = useState(false)
  const [notificationOpen, setNotificationOpen] = useState(false)

  // System Theme
  // const isSystemDark = window.matchMedia('(prefers-color-scheme:dark)').matches
  // useEffect(() => {
  //   setTheme(isSystemDark ? uiConstants.themes.dark : uiConstants.themes.light)
  // }, [isSystemDark, setTheme])

  const switchTheme = () => {
    const newTheme =
      theme === uiConstants.themes.light
        ? uiConstants.themes.dark
        : uiConstants.themes.light
    setTheme(newTheme)
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  const toggleUser = () => {
    setUserOpen(!userOpen)
  }

  const toggleNotification = () => {
    setNotificationOpen(!notificationOpen)
  }

  useEffect(() => {
    const html = document.getElementsByTagName('html')[0]
    html.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <UserContext.Provider
      value={{
        menuOpen,
        toggleMenu,
        switchTheme,
        theme,
        userOpen,
        toggleUser,
        notificationOpen,
        toggleNotification
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
