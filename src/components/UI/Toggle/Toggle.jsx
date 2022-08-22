import React, { useEffect } from 'react'

import css from './Toggle.module.scss'

const Toggle = ({ i, register, setValue, disabled }) => {
  useEffect(() => {
    if (i.default) {
      setValue(i.key, i.default)
    } else {
      setValue(i.key, false)
    }
  }, [i.default, i.key, setValue])

  return (
    <div className={css.Container}>
      <label className={css.Switch} disabled={disabled}>
        <input
          type='checkbox'
          disabled={disabled}
          {...register(i.key, {
            required: i.required
          })}
        />
        <span className={css.Slider}></span>
      </label>
      {i.info && (
        <a
          href={i.info}
          target='_blank'
          rel='noopener noreferrer'
          className={css.Info}
        >
          <i className='fa-solid fa-arrow-up-right-from-square'></i>
          info
        </a>
      )}
    </div>
  )
}

export default Toggle
