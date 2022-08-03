import React, { useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'

import Label from '../../../../UI/Label/Label'
import Modal from '../../../../UI/Modal/Modal'
import IconSelector from '../../../../UI/IconSelector/IconSelector'
import { strategyUIConstants } from '../../../../../constants'
import SettingsForm from '../../../../UI/SettingsForm/SettingsForm'

const AddStrategy = ({ closeModal, addStrategy, list }) => {
  const prevStrategyRef = useRef()
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
      strategy: data.strategy,
      type: strategyUIConstants.types.find((x) => x.strategy === data.strategy)
        .type,
      config: {}
    }
    Object.keys(data)
      .filter((key) => key !== 'icon' && key !== 'name' && key !== 'strategy')
      .forEach((key) => {
        payload.config[key] = data[key]
      })
    addStrategy(payload)
  }

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === 'strategy') {
        if (prevStrategyRef.current) {
          strategyUIConstants.types
            .find((t) => t.strategy === prevStrategyRef.current)
            .fields.forEach((f) => {
              unregister(f.name)
            })
        }
        prevStrategyRef.current = value.strategy
      }
    })
    return () => subscription.unsubscribe()
  }, [unregister, watch])

  const footerMessage = () => {
    const name = getValues().name
    if (name !== '') {
      if ((list || []).filter((x) => x.name === name).length > 0) {
        return 'An strategy with this name already exists'
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
        confirmButtonText={'Add strategy'}
        confirmDisabled={!isValid || footerMessage()}
        title={'Add strategy'}
        footerMessage={footerMessage()}
      >
        <IconSelector
          watch={watch}
          setValue={setValue}
          getValues={getValues}
          register={register}
        />
        <Label title={'Strategy Name'} description={'Strategy Name'}>
          <input
            type={'text'}
            placeholder={'Strategy Name'}
            {...register('name', {
              required: true
            })}
          />
        </Label>
        <Label title={'Strategy Type'} description={'Strategy Type'}>
          <select
            {...register('strategy', {
              required: true
            })}
          >
            <option value=''></option>
            {strategyUIConstants.types
              .sort((a, b) =>
                a.strategy > b.strategy ? 1 : b.strategy > a.strategy ? -1 : 0
              )
              .map((e) => (
                <option key={e.strategy} value={e.strategy}>
                  {e.strategy}
                </option>
              ))}
          </select>
        </Label>

        {getValues().strategy && (
          <SettingsForm
            fields={
              strategyUIConstants.types.find(
                (x) => x.strategy === getValues().strategy
              ).fields
            }
            register={register}
            setValue={setValue}
          />
        )}
      </Modal>
    </form>
  )
}

export default AddStrategy
