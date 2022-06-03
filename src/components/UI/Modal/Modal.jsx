import React, { useCallback, useEffect } from 'react'

import css from './Modal.module.scss'

const Modal = (props) => {
  const handleEsc = useCallback(
    (event) => {
      if (event.keyCode === 27) {
        props.closeButtonHandler()
      }
    },
    [props]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleEsc)
    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [handleEsc])

  return (
    <div className={css.ModalBkg}>
      <div className={css.ModalContainer}>
        <div className={css.ModalBody}>
          <div className={css.Title}>
            {props.title}

            <button
              className={css.CloseCross}
              onClick={props.closeButtonHandler}
              type='button'
            >
              <i className='fa-solid fa-xmark'></i>
            </button>
          </div>
          <div className={css.Content}>{props.children}</div>
        </div>
        <ul className={css.UlBtns}>
          <li>
            <button
              type='button'
              onClick={props.closeButtonHandler}
              className={css.BtnClose}
            >
              close
            </button>
          </li>
          {props.footerMessage && (
            <li className={css.FooterMessage}>{props.footerMessage}</li>
          )}
          {props.confirmButtonHandler && (
            <li>
              <button
                disabled={props.confirmDisabled}
                type={props.isTypeSubmit ? 'submit' : 'button'}
                {...(!props.isTypeSubmit && {
                  onClick: props.confirmButtonHandler
                })}
                className={css.BtnConfirm}
              >
                {props.confirmButtonText}
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Modal
