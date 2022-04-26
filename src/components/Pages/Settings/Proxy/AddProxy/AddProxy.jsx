import React from 'react'
import { useForm } from 'react-hook-form'

import { uiConstants } from '../../../../../constants'
import Label from '../../../../UI/Label/Label'
import Modal from '../../../../UI/Modal/Modal'
import { stringHelper } from '../../../../../helpers'

const AddProxy = ({ closeModal, addProxy }) => {
  const {
    register,
    handleSubmit,
    formState: { isValid }
  } = useForm({ mode: 'onChange' })

  const onSubmit = (data) => {
    addProxy({ ...data, headers: stringHelper.beautifyJson(data.headers) })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Modal
        closeButtonHandler={closeModal}
        confirmButtonHandler={onSubmit}
        isTypeSubmit={true}
        confirmButtonText={'Add proxy'}
        confirmDisabled={!isValid}
        title={'Add proxy'}
      >
        {uiConstants.addProxyFields.map((f) => (
          <Label
            key={f.title}
            title={f.title}
            required={f.required}
            description={f.description}
          >
            {f.type === 'input' ? (
              <input
                type={'text'}
                placeholder={f.title}
                {...register(f.name, {
                  required: f.required,
                  pattern: f.pattern
                })}
              />
            ) : (
              <textarea
                placeholder={f.title}
                {...register(f.name, {
                  required: f.required,
                  validate: (value) => stringHelper.validateJson(value)
                })}
              ></textarea>
            )}
          </Label>
        ))}
      </Modal>
    </form>
  )
}

export default AddProxy
