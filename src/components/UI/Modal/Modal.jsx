import React from 'react'

import css from './Modal.module.scss'

const Modal = (props) => {
  return (
    <div className={css.ModalBkg}>
      <div className={css.ModalContainer}>
        <div className={css.ModalBody}>
          <div className={css.Title}>{props.title}</div>

          {props.children}
        </div>
        <ul className={css.UlBtns}>
          <li>
            <button onClick={props.closeButtonHandler} className={css.BtnClose}>
              close
            </button>
          </li>
          <li>
            <button
              disabled={props.confirmDisabled}
              onClick={props.confirmButtonHandler}
              className={css.BtnConfirm}
            >
              {props.confirmButtonText}
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Modal
