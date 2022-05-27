import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

import Label from '../../../../UI/Label/Label'
import Modal from '../../../../UI/Modal/Modal'
import IconSelector from '../../../../UI/IconSelector/IconSelector'
import { securityHelper } from '../../../../../helpers'
import InputPassword from '../../../../UI/InputPassword/InputPassword'
import css from './AddSecret.module.scss'

const AddSecret = ({ closeModal, addSecret, list, catalog }) => {
  const [headers, setHeaders] = useState([])

  const prevTypeRef = useRef()
  const {
    register,
    unregister,
    handleSubmit,
    getValues,
    watch,
    setValue,
    formState: { isValid }
  } = useForm({ mode: 'onChange' })

  const typeValue = getValues().type

  const onSubmit = (data) => {
    const payload = {
      icon: data.icon,
      name: data.name,
      type: data.type,
      secret: {}
    }
    if (typeValue === 'custom') {
      Object.keys(data)
        .filter((key) => key.startsWith('hk_'))
        .forEach((key) => {
          const guid = key.replace('hk_', '')
          payload.secret[data[key]] = data['hv_' + guid]
        })
    } else {
      Object.keys(data)
        .filter((key) => key !== 'icon' && key !== 'name' && key !== 'type')
        .forEach((key) => {
          payload.secret[key] = data[key]
        })
    }
    addSecret(payload)
  }

  const addHeaderHandler = () => {
    setHeaders([...headers, securityHelper.guid()])
  }

  const removeHeaderHandler = (id) => {
    const tmp = [...headers]
    unregister(`hv_${id}`)
    unregister(`hk_${id}`)
    setHeaders(tmp.filter((h) => h !== id))
  }

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === 'type') {
        if (prevTypeRef.current && prevTypeRef.current !== 'custom') {
          catalog
            .find((t) => t.name === prevTypeRef.current)
            .secret.forEach((f) => {
              unregister(f.name)
            })
        }
        if (headers.length > 0) {
          setHeaders([])
        }
        prevTypeRef.current = value.type
      }
    })
    return () => subscription.unsubscribe()
  }, [catalog, headers.length, unregister, watch])

  const footerMessage = () => {
    const name = getValues().name
    if (name !== '') {
      if (list.filter((x) => x.name === name).length > 0) {
        return 'An secret with this name already exists'
      }
    }
    return null
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Modal
        closeButtonHandler={closeModal}
        confirmButtonHandler={onSubmit}
        isTypeSubmit={true}
        confirmButtonText={'Add secret'}
        confirmDisabled={
          !isValid ||
          footerMessage() ||
          (typeValue === 'custom' && headers.length === 0)
        }
        title={'Add secret'}
        footerMessage={footerMessage()}
      >
        <IconSelector
          watch={watch}
          setValue={setValue}
          getValues={getValues}
          register={register}
        />
        <Label title={'Secret Name'} description={'Secret Name'}>
          <input
            type={'text'}
            placeholder={'Secret Name'}
            {...register('name', {
              required: true
            })}
          />
        </Label>
        <Label title={'Secret Type'} description={'Secret Type'}>
          <select
            {...register('type', {
              required: true
            })}
          >
            <option value=''></option>
            {(catalog || [])
              .filter((x) => x.package && x.secret)
              .map((e) => (
                <option key={e.name} value={e.name}>
                  {e.name}
                </option>
              ))}
            <option value='custom'>[custom]</option>
          </select>
        </Label>

        {typeValue && typeValue !== 'custom'
          ? catalog
              .find((x) => x.name === getValues().type)
              .secret.map((f) => (
                <Label key={f.name} title={f.name} description={f.description}>
                  {f.type === 'password' ? (
                    <InputPassword register={register} name={f.name} />
                  ) : (
                    <input
                      type={f.type}
                      {...register(f.name, {
                        required: true
                      })}
                    />
                  )}
                </Label>
              ))
          : headers.map((h) => (
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

        {typeValue === 'custom' && (
          <button className={css.AddKeyBtn} onClick={() => addHeaderHandler()}>
            <i className='fa-solid fa-plus'></i> Add key/value
          </button>
        )}
      </Modal>
    </form>
  )
}

export default AddSecret
