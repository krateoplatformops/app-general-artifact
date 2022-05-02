import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import Label from '../../../../UI/Label/Label'
import Modal from '../../../../UI/Modal/Modal'
import css from './AddEndpoint.module.scss'
import { securityHelper } from '../../../../../helpers'
import IconSelector from '../../../../UI/IconSelector/IconSelector'
import { uiConstants } from '../../../../../constants'

const AddEndpoint = ({ closeModal, addEndpoint }) => {
  const [headers, setHeaders] = useState([])
  const {
    register,
    unregister,
    handleSubmit,
    watch,
    setValue,
    formState: { isValid }
  } = useForm({ mode: 'onChange' })

  const onSubmit = (data) => {
    const payload = {
      icon: data.icon,
      name: data.name,
      target: data.target,
      type: data.type,
      headers: {}
    }
    Object.keys(data)
      .filter((key) => key.startsWith('hk_'))
      .forEach((key) => {
        const guid = key.replace('hk_', '')
        payload.headers[data[key]] = data['hv_' + guid]
      })
    addEndpoint(payload)
  }

  const addHeaderHandler = () => {
    setHeaders([...headers, securityHelper.guid()])
  }

  const removeHeaderHandler = (id) => {
    const tmp = [...headers]
    unregister(`hv-${id}`)
    unregister(`hk-${id}`)
    setHeaders(tmp.filter((h) => h !== id))
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
        <IconSelector watch={watch} setValue={setValue} register={register} />

        <Label title={'Endpoint Type'} description={'Endpoint Type'}>
          <select
            {...register('type', {
              required: true
            })}
          >
            {uiConstants.endpointTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Label>

        <Label title={'Endpoint Name'} description={'Endpoint Name'}>
          <input
            type={'text'}
            placeholder={'Endpoint Name'}
            {...register('name', {
              required: true
            })}
          />
        </Label>

        <Label
          title={'Target Url'}
          description={'Must include schema (http or https)'}
        >
          <input
            type={'text'}
            placeholder={'Target Url'}
            {...register('target', {
              required: true,
              pattern: new RegExp(
                '^((ftp|http|https):\\/\\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\\.[a-zA-Z]+)+((\\/)[\\w#]+)*(\\/\\w+\\?[a-zA-Z0-9_]+=\\w+(&[a-zA-Z0-9_]+=\\w+)*)?\\/?$',
                'img'
              )
            })}
          />
        </Label>

        <ul className={css.UlHeaders}>
          <li>
            <span>Headers</span>
            Specify all the headers required to contact the target url
          </li>
          <li>
            <button onClick={() => addHeaderHandler()}>
              <i className='fa-solid fa-plus'></i>
            </button>
          </li>
        </ul>

        {headers.map((h) => (
          <ul key={h} className={css.UlKeyVal}>
            <li className={css.LiInput}>
              <input
                type={'text'}
                placeholder={'Key'}
                {...register(`hk_${h}`, {
                  required: true
                })}
              />
            </li>
            <li className={css.LiInput}>
              <input
                type={'text'}
                placeholder={'Value'}
                {...register(`hv_${h}`, {
                  required: true
                })}
              />
            </li>
            <li className={css.LiBtn}>
              <button onClick={() => removeHeaderHandler(h)}>
                <i className='fa-solid fa-trash-can'></i>
              </button>
            </li>
          </ul>
        ))}
      </Modal>
    </form>
  )
}

export default AddEndpoint
