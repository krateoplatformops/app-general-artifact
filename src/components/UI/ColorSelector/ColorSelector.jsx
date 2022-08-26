import React, { useCallback, useEffect } from 'react'

import { uiConstants } from '../../../constants'
import Label from '../Label/Label'
import css from './ColorSelector.module.scss'

const ColorSelector = ({ watch, register, setValue, getValues }) => {
  const randomColor = () => {
    return uiConstants.colors[
      Math.floor(Math.random() * uiConstants.colors.length)
    ]
  }

  const shuffleColorHandler = useCallback(() => {
    const c = randomColor()
    setValue('color', c)
  }, [setValue])

  useEffect(() => {
    if (!getValues().color || getValues().color === '') {
      shuffleColorHandler()
    }
  }, [getValues, shuffleColorHandler])

  return (
    <Label title="Color">
      <ul className={css.UlColor}>
        <li className={css.LiList}>
          <select
            {...register('color', {
              required: true
            })}
          >
            {uiConstants.colors.sort().map((color) => {
              return (
                <option key={color} value={color}>
                  {color}
                </option>
              )
            })}
          </select>
        </li>
        <li className={css.LiShuffle}>
          <button type="button" onClick={() => shuffleColorHandler()}>
            <i className="fa-solid fa-shuffle"></i>
          </button>
        </li>
      </ul>

      {/* <input
        type='text'
        {...register('color', {
          required: true
        })}
        // style={{ display: 'none' }}
      />

      <ul className={css.UlColor}>
        <li className={css.LiList}>
          {uiConstants.colors.map((color) => {
            return (
              <div
                key={color}
                className={css[color]}
                onClick={() => {
                  setValue('color', color)
                }}
              >
                {watch().color === color && (
                  <i className='fa-solid fa-check'></i>
                )}
              </div>
            )
          })}
        </li>
        <li className={css.LiShuffle}>
          <button type='button' onClick={() => shuffleColorHandler()}>
            <i className='fa-solid fa-shuffle'></i>
          </button>
        </li>
      </ul> */}
    </Label>
  )
}

export default ColorSelector
