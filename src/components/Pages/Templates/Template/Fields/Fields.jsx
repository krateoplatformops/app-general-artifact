import React from 'react'

import Card from '../../../../UI/Card/Card'
import Label from '../../../../UI/Label/Label'
import Radio from '../../../../UI/Radio/Radio'
import Toggle from '../../../../UI/Toggle/Toggle'
import InputPassword from '../../../../UI/InputPassword/InputPassword'
import css from './Fields.module.scss'
import Checkbox from '../../../../UI/Checkbox/Checkbox'
import { uriHelper } from '../../../../../helpers'

const styles = ['info', 'warning', 'error', 'success']

const Fields = ({
  widget,
  inputs,
  register,
  currentStep,
  setValue,
  errors,
  id
}) => {
  const boxStyle = (b) => {
    if (!b.style) return css.Default

    const f = styles.find((x) => x === b.style.toLowerCase())

    if (f) return css[f.toLowerCase().replace(/./, (c) => c.toUpperCase())]
    return css.Default
  }

  const box = () => {
    const b = widget.properties.find((x) => x.type === 'box')

    if (!b) return null

    return (
      <li className={css.LiBox}>
        <div className={boxStyle(b)}>
          {b.value.split('\\n').map((x, i) => (
            <p key={i}>{x}</p>
          ))}
        </div>
      </li>
    )
  }

  const renderInput = (i) => {
    switch (i.type) {
      case 'radio':
        return (
          <Radio
            key={i.id}
            i={i}
            register={register}
            setValue={setValue}
            disabled={i.disabled || false}
          />
        )
      case 'multiple':
        return (
          <Checkbox
            key={i.id}
            i={i}
            register={register}
            setValue={setValue}
            disabled={i.disabled || false}
          />
        )
      case 'select':
        return (
          <select
            {...register(i.key, {
              required: i.required
            })}
            defaultValue={i.default}
            disabled={i.disabled || false}
          >
            <option value=""></option>
            {i.options.map((x) => (
              <option key={x.value} value={x.value}>
                {x.title}
              </option>
            ))}
          </select>
        )
      case 'toggle':
        return (
          <Toggle
            key={i.key}
            i={i}
            register={register}
            setValue={setValue}
            disabled={i.disabled || false}
          />
        )
      case 'textarea':
        return (
          <textarea
            placeholder={i.placeholder || i.title}
            defaultValue={i.default}
            disabled={i.disabled || false}
            {...register(i.key, {
              required: i.required
            })}
          />
        )
      case 'url':
        return (
          <input
            type="url"
            disabled={i.disabled || false}
            placeholder={i.placeholder || i.title}
            defaultValue={i.default}
            {...register(i.key, {
              required: i.required,
              validate: (value) => {
                return uriHelper.valid(value)
              }
            })}
          />
        )
      case 'password':
        return (
          <InputPassword
            key={i.key}
            name={i.key}
            required={i.required}
            register={register}
            placeholder={i.placeholder || i.title}
            disabled={i.disabled || false}
          />
        )
      default:
        return (
          <input
            type={i.type || 'text'}
            placeholder={i.placeholder || i.title}
            defaultValue={i.default}
            disabled={i.disabled || false}
            {...register(i.key, {
              required: i.required || false
            })}
          />
        )
    }
  }

  return (
    <div className={id !== currentStep ? css.Hidden : ''}>
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
            {(inputs || [])
              .filter((x) => x.type !== 'box')
              .map((i, key) => (
                <Label
                  title={i.title}
                  required={i.required}
                  description={i.description}
                  key={key}
                  error={errors[i.id]}
                  {...(i.hidden && { hidden: true })}
                  {...(i.readOnly && { readOnly: true })}
                >
                  {renderInput(i)}
                </Label>
              ))}
          </li>
          {box()}
        </ul>
      </Card>
    </div>
  )
}

export default Fields
