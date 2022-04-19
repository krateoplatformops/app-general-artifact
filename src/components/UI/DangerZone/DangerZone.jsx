import React, { useState, useEffect, useCallback } from 'react'

import css from './DangerZone.module.scss'
import Modal from '../Modal/Modal'

const DangerZone = ({ closeModal, deleteButtonHandler, name, title }) => {
  const [inputDelete, setInputDelete] = useState('')
  const [smartFill, setSmartFill] = useState(false)

  const nameClickHandler = () => {
    if (smartFill) {
      setInputDelete(name)
    }
  }

  const handleKeyDown = useCallback(
    (event) => {
      if (event.keyCode === 91) {
        setSmartFill(true)
      }
    },
    [setSmartFill]
  )

  const handleKeyUp = useCallback(() => {
    if (smartFill) {
      setSmartFill(false)
    }
  }, [smartFill])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [handleKeyDown, handleKeyUp])

  return (
    <Modal
      closeButtonHandler={closeModal}
      confirmButtonHandler={deleteButtonHandler}
      confirmButtonText={title}
      confirmDisabled={inputDelete !== name}
      title={title}
    >
      <span className='span-warning'>This action cannot be undone.</span>
      <div className={css.Please}>
        Please type
        <span
          className={css.Emphasis}
          {...(smartFill && { smart: 'true' })}
          onClick={nameClickHandler}
        >
          {name}
        </span>
        to confirm.
      </div>
      <input
        type='text'
        placeholder={name}
        value={inputDelete}
        onChange={(e) => setInputDelete(e.target.value)}
      />
    </Modal>
  )
}

export default DangerZone
