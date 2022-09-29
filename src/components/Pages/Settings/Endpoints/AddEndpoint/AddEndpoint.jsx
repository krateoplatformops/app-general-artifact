import React, { useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'

import Label from '../../../../UI/Label/Label'
import Modal from '../../../../UI/Modal/Modal'
import IconSelector from '../../../../UI/IconSelector/IconSelector'
import { endpointUIConstants } from '../../../../../constants'
import SettingsForm from '../../../../UI/SettingsForm/SettingsForm'

const AddEndpoint = ({ closeModal, addEndpoint, list }) => {
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
      icon: data.icon,
      name: data.name,
      type: data.type,
      target: data.target,
      category: endpointUIConstants.types.find((x) => x.type === data.type)
        .category,
      secret: {}
    }
    Object.keys(data)
      .filter(
        (key) =>
          key !== 'icon' && key !== 'name' && key !== 'type' && key !== 'target'
      )
      .forEach((key) => {
        payload.secret[key] = data[key]
      })
    addEndpoint(payload)
  }

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === 'type') {
        if (prevTypeRef.current) {
          endpointUIConstants.types
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

  const footerMessage = () => {
    const name = getValues().name
    const url = getValues().url
    if (name !== '') {
      if ((list || []).filter((x) => x.friendlyName === name).length > 0) {
        return 'An endpoint with this name already exists'
      }
    }
    if (name !== '' && url !== '') {
      if (
        (list || []).filter((x) => x.friendlyName === name && x.url === url)
          .length > 0
      ) {
        return 'An endpoint with this name and url already exists'
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
        confirmButtonText={'Add endpoint'}
        confirmDisabled={!isValid || footerMessage()}
        title={'Add endpoint'}
        footerMessage={footerMessage()}
      >
        <IconSelector
          watch={watch}
          setValue={setValue}
          getValues={getValues}
          register={register}
        />
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
                '(http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-\\/]))?',
                'gmi'
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
            <option value=""></option>
            {endpointUIConstants.types
              .sort((a, b) => (a.type > b.type ? 1 : b.type > a.type ? -1 : 0))
              .map((e) => (
                <option key={e.type} value={e.type}>
                  {e.type}
                </option>
              ))}
          </select>
        </Label>

        {getValues().type && (
          <SettingsForm
            fields={
              endpointUIConstants.types.find((x) => x.type === getValues().type)
                .fields
            }
            register={register}
            setValue={setValue}
          />
        )}
      </Modal>
    </form>
  )
}

export default AddEndpoint
