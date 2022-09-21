import React, { useEffect } from 'react'

import css from './Radio.module.scss'

const Radio = ({ i, register, setValue, disabled }) => {
  useEffect(() => {
    if (i.default) {
      setValue(i.key, i.default.toString())
    }
  }, [i.default, i.key, setValue])

  const renderLabel = (x) => {
    // if (typeof x !== 'object') {
    //   return x
    // }
    return (
      <React.Fragment>
        <span className={x.description ? css.Emphasis : ''}>{x.title}</span>
        {x.description &&
          x.description.split('\\n').map((x, i) => <p key={i}>{x}</p>)}
      </React.Fragment>
    )
  }

  return (
    <ul className={css.Wrapper} disabled={disabled}>
      {i.options.map((x) => {
        // const isObj = typeof x === 'object'
        // const key = `${i.key}-${isObj ? x.value : x}`
        // const val = isObj ? x.value : x
        return (
          <li key={x.value}>
            <div>
              <input
                type="radio"
                disabled={disabled}
                id={x.value}
                {...register(i.key, {
                  required: i.required
                })}
                value={x.value.toString()}
              />
              <label htmlFor={x.value}>{renderLabel(x)}</label>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default Radio
