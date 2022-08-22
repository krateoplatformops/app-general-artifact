import React, { useEffect } from 'react'

import css from './Checkbox.module.scss'

const Checkbox = ({ i, register, setValue, disabled }) => {
  useEffect(() => {
    if (i.default) {
      setValue(i.key, i.default.split(','))
    }
  }, [i.default, i.key, setValue])

  const renderLabel = (x) => {
    if (typeof x !== 'object') {
      return x
    }
    return (
      <React.Fragment>
        <span className={x.description ? css.Emphasis : ''}>{x.title}</span>
        {x.description &&
          x.description.split('\\n').map((x, i) => <p key={i}>{x}</p>)}
      </React.Fragment>
    )
  }

  return (
    <ul className={css.Wrapper}>
      {i.values.map((x) => {
        const isObj = typeof x === 'object'
        const key = `${i.key}-${isObj ? x.value : x}`
        const val = isObj ? x.value : x
        return (
          <li key={key}>
            <div>
              <input
                type='checkbox'
                id={key}
                {...register(i.key, {
                  required: i.required
                })}
                value={val.toString()}
                disabled={disabled}
              />
              <label htmlFor={key}>{renderLabel(x)}</label>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default Checkbox
