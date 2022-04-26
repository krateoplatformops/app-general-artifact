import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import { uiConstants } from '../../../../../constants'
import Label from '../../../../UI/Label/Label'
import Modal from '../../../../UI/Modal/Modal'
import css from './AddEndpoint.module.scss'

const AddEndpoint = ({ closeModal, addEndpoint }) => {
  const [headers, setHeaders] = useState([0])
  const {
    register,
    unregister,
    handleSubmit,
    formState: { isValid }
  } = useForm({ mode: 'onChange' })

  const onSubmit = (data) => {
    console.log(data)
    // addEndpoint(data)
  }

  const addHeaderHandler = () => {
    setHeaders([...headers, headers.length])
  }

  const removeHeaderHandler = (index) => {
    console.log(headers)
    console.log(index)
    const tmp = [...headers]
    tmp.splice(index, 1)
    console.log(tmp)
    unregister(`h-${index + 1}`)
    setHeaders(tmp)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Modal
        closeButtonHandler={closeModal}
        confirmButtonHandler={onSubmit}
        isTypeSubmit={true}
        confirmButtonText={'Add endpoint'}
        confirmDisabled={!isValid}
        title={'Add endpoint'}
      >
        {uiConstants.availableEndpointProviders.map((f) => (
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

        <button
          onClick={() =>
            setHeaders([...headers, `${headers[headers.length - 1] + 1}`])
          }
        >
          add key
        </button>
        {headers.map((h, key) => (
          <ul key={key} className={css.UlKeyVal}>
            <li>
              <Label title={'Header Key'}>
                <input
                  type={'text'}
                  placeholder={'Header Key'}
                  {...register(`hk-${key}`, {
                    required: true
                  })}
                />
              </Label>
            </li>
            <li>
              <Label title={'Header Value'}>
                <input
                  type={'text'}
                  placeholder={'Header Value'}
                  {...register(`hv-${key}`, {
                    required: true
                  })}
                />
              </Label>
            </li>
            <li className={css.LiBtn}>
              <button onClick={() => removeHeaderHandler(key)}>
                <i className={'fas fa-times'} />
              </button>
            </li>
          </ul>
        ))}
      </Modal>
    </form>
  )
}

export default AddEndpoint
