import React from 'react'

import Card from '../../../../UI/Card/Card'
import Label from '../../../../UI/Label/Label'
import Radio from '../../../../UI/Radio/Radio'
import Toggle from '../../../../UI/Toggle/Toggle'
import InputPassword from '../../../../UI/InputPassword/InputPassword'
import css from './Fields.module.scss'

const styles = ['info', 'warning', 'error', 'success']

const Fields = ({ widget, inputs, register, currentStep, setValue }) => {
  const boxStyle = () => {
    if (!widget.boxStyle) return css.Default

    const f = styles.find((x) => x === widget.boxStyle.toLowerCase())

    if (f) return css[f.toLowerCase().replace(/./, (c) => c.toUpperCase())]
    return css.Default
  }

  const renderInput = (i) => {
    if (i.values) {
      switch (i.type) {
        case 'radio':
          return (
            <Radio key={i.id} i={i} register={register} setValue={setValue} />
          )
        default:
          return (
            <select
              {...register(i.id, {
                required: i.required
              })}
              defaultValue={i.default}
            >
              {i.values.map((x) =>
                typeof x === 'string' ? (
                  <option key={x} value={x}>
                    {x}
                  </option>
                ) : (
                  <option key={x.value} value={x.value}>
                    {x.title}
                  </option>
                )
              )}
            </select>
          )
      }
    }

    if (i.type === 'toggle') {
      return <Toggle key={i.id} i={i} register={register} setValue={setValue} />
    }

    if (i.type === 'password') {
      return (
        <InputPassword
          key={i.id}
          name={i.id}
          required={i.required}
          register={register}
        />
      )
    }

    if (i.type === 'textarea') {
      return (
        <textarea
          placeholder={i.title}
          defaultValue={i.default}
          {...register(i.id, {
            required: i.required
          })}
        />
      )
    }

    return (
      <input
        type={i.type ? i.type : 'text'}
        placeholder={i.title}
        defaultValue={i.default}
        {...register(i.id, {
          required: i.required
        })}
      />
    )
  }

  return (
    <div className={widget._id !== currentStep ? css.Hidden : ''}>
      <Card title={widget.title}>
        {widget.description && (
          <div className={css.Description}>
            {widget.description.split('\\n').map((x, i) => (
              <p key={i}>{x}</p>
            ))}
          </div>
        )}
        <ul className={css.UlContainer}>
          <li className={css.LiFields}>
            {(inputs || []).map((i) => (
              <Label
                title={i.title}
                required={i.required}
                description={i.description}
                key={i.id}
              >
                {renderInput(i)}
              </Label>
            ))}
          </li>
          {widget.box && (
            <li className={css.LiBox}>
              <div className={boxStyle()}>
                {widget.box.split('\\n').map((x, i) => (
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
