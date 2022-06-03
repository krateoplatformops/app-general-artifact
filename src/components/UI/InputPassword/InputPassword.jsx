import React, { useState } from 'react'

import css from './InputPassword.module.scss'

const InputPassword = ({ register, name, required }) => {
  const [inputType, setInputType] = useState('password')

  const handleClick = () => {
    inputType === 'password' ? setInputType('text') : setInputType('password')
  }

  return (
    <ul className={css.UlPassword}>
      <li>
        <input
          type={inputType}
          {...register(name, {
            required: required || true
          })}
        />
      </li>
      <li>
        <button type='button' onClick={handleClick} className={css.Switch}>
          {inputType === 'password' ? (
            <i className='fa-regular fa-eye'></i>
          ) : (
            <i className='fa-regular fa-eye-slash'></i>
          )}
        </button>
      </li>
    </ul>
  )
}

export default InputPassword
