import React from 'react'
import { useForm } from 'react-hook-form'

import { uiConstants } from '../../../../../constants'
import Label from '../../../../UI/Label/Label'
import Modal from '../../../../UI/Modal/Modal'

const AddHost = ({ closeModal, addHost }) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { isValid }
  } = useForm({ mode: 'onChange' })

  const onSubmit = (data) => {
    addHost(data)
  }

  const provider = getValues()['provider']

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Modal
        closeButtonHandler={closeModal}
        confirmButtonHandler={onSubmit}
        isTypeSubmit={true}
        confirmButtonText={'Add host'}
        confirmDisabled={!isValid || provider === ''}
        title={'Add host'}
      >
        <Label title='Provider' required={true}>
          <select
            {...register('provider', {
              required: true
            })}
          >
            <option value=''></option>
            {uiConstants.availableHostProviders.map((p) => (
              <option key={p.provider} value={p.provider}>
                {p.provider}
              </option>
            ))}
          </select>
        </Label>
        {provider &&
          uiConstants.availableHostProviders
            .find((p) => p.provider === provider)
            .fields.map((f) => (
              <Label
                key={f.title}
                title={f.title}
                required={f.required}
                description={f.description}
              >
                <input
                  type={'text'}
                  placeholder={f.title}
                  {...register(f.name, {
                    required: f.required,
                    pattern: f.pattern
                  })}
                />
              </Label>
            ))}
      </Modal>
    </form>
  )
}

export default AddHost
