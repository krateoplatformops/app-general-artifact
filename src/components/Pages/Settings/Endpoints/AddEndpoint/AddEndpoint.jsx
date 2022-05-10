import React, { useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'

import Label from '../../../../UI/Label/Label'
import Modal from '../../../../UI/Modal/Modal'
import IconSelector from '../../../../UI/IconSelector/IconSelector'
import { uiConstants } from '../../../../../constants'
import InputPassword from '../../../../UI/InputPassword/InputPassword'

const AddEndpoint = ({ closeModal, addEndpoint }) => {
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

  const onSubmit = (data) => {
    const payload = {
      ...data,
      category: uiConstants.endpointTypes.find((x) => x.type === data.type)
        .category
    }
    addEndpoint(payload)
  }

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === 'type') {
        if (prevTypeRef.current) {
          uiConstants.endpointTypes
            .find((t) => t.type === prevTypeRef.current)
            .fields.forEach((f) => {
              unregister(f.name)
            })
        }
        prevTypeRef.current = value.type
      }
    })
    return () => subscription.unsubscribe()
  }, [unregister, watch])

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
        <Label title={'Endpoint Type'} description={'Endpoint Type'}>
          <select
            {...register('type', {
              required: true
            })}
          >
            <option value=''></option>
            {uiConstants.endpointTypes.map((e) => (
              <option key={e.type} value={e.type}>
                {e.type}
              </option>
            ))}
          </select>
        </Label>

        {getValues().type &&
          uiConstants.endpointTypes
            .find((x) => x.type === getValues().type)
            .fields.map((f) => (
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
            ))}
      </Modal>
    </form>
  )
}

export default AddEndpoint
