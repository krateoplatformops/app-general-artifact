import React from 'react'

import Card from '../../../../UI/Card/Card'
import Label from '../../../../UI/Label/Label'
import css from './Fields.module.scss'

const Fields = ({ widget, inputs, register, currentStep }) => {
  return (
    <div className={widget._id !== currentStep ? css.Hidden : ''}>
      <Card title={widget.title}>
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
      </Card>
    </div>
  )
}

export default Fields
