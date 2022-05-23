import React from 'react'

import Card from '../../../../UI/Card/Card'
import Label from '../../../../UI/Label/Label'
import css from './Fields.module.scss'

const styles = ['info', 'warning', 'error', 'success']

const Fields = ({ widget, inputs, register, currentStep }) => {
  const style = () => {
    if (!widget.style) return css.Default

    const f = styles.find((x) => x === widget.style.toLowerCase())

    if (f) return css[f.toLowerCase().replace(/./, (c) => c.toUpperCase())]
    return css.Default
  }

  return (
    <div className={widget._id !== currentStep ? css.Hidden : ''}>
      <Card title={widget.title}>
        <ul className={css.UlContainer}>
          <li className={css.LiFields}>
            {inputs.map((i) => (
              <Label
                title={i.title}
                required={i.required}
                description={i.description}
                key={i.id}
              >
                {i.values && i.values.length > 0 ? (
                  <select
                    {...register(i.id, {
                      required: i.required
                    })}
                    defaultValue={i.default}
                  >
                    {i.values.map((x) => (
                      <option key={x} value={x}>
                        {x}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={i.type ? i.type : 'text'}
                    placeholder={i.title}
                    defaultValue={i.default}
                    {...register(i.id, {
                      required: i.required
                    })}
                  />
                )}
              </Label>
            ))}
          </li>
          {widget.description && (
            <li className={css.LiDescription}>
              <div className={`${css.Description} ${style()}`}>
                {widget.description.split('\\n').map((x, i) => (
                  <p key={i}>{x}</p>
                ))}
              </div>
            </li>
          )}
        </ul>
      </Card>
    </div>
  )
}

export default Fields
