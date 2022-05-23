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
    <label className={css.Switch}>
      <input
        type='checkbox'
        {...register(i.id, {
          required: i.required
        })}
      />
      <span className={css.Slider}></span>
    </label>
  )
}

export default Toggle
