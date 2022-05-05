import React, { useEffect, useState } from 'react'

import css from './ScrollTop.module.scss'

const ScrollTop = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = () => {
    if (window.pageYOffset > window.innerHeight / 2) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  const goToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <React.Fragment>
      {show && (
        <button className={css.ScrollTop} onClick={goToTop}>
          <i className='fa-solid fa-chevron-up'></i>
        </button>
      )}
    </React.Fragment>
  )
}

export default ScrollTop
