import React from 'react'

import { uiConstants } from '../../../constants'
import Label from '../Label/Label'
import css from './IconSelector.module.scss'

const IconSelector = ({ watch, register, setValue }) => {
  const shuffleIconHandler = () => {
    return uiConstants.icons[
      Math.floor(Math.random() * uiConstants.icons.length)
    ]
  }

  const initialIcon = shuffleIconHandler()

  return (
    <Label title='Icon'>
      <ul className={css.UlIcon}>
        <li className={css.LiIcon}>
          <span>
            <i className={watch().icon || initialIcon}></i>
          </span>
        </li>
        <li className={css.LiSelectIcon}>
          <select
            {...register('icon', {
              required: true,
              value: initialIcon
            })}
          >
            {uiConstants.icons.map((c) => (
              <option value={c} key={c}>
                {c}
              </option>
            ))}
          </select>
        </li>
        <li className={css.LiShuffle}>
          <button onClick={() => setValue('icon', shuffleIconHandler())}>
            <i className='fa-solid fa-shuffle'></i>
          </button>
        </li>
      </ul>
    </Label>
  )
}

export default IconSelector
