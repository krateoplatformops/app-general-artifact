import React, { useEffect } from 'react'

import css from './Toggle.module.scss'

const Toggle = ({ i, register, setValue }) => {
  useEffect(() => {
    if (i.default) {
      setValue(i.id, i.default)
    } else {
      setValue(i.id, false)
    }
  }, [i.default, i.id, setValue])

  return (
    <div className={css.Container}>
      <label className={css.Switch}>
        <input
          type='checkbox'
          {...register(i.id, {
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
