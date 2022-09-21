import React, { useCallback, useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import css from './Template.module.scss'
import Steps from './Steps/Steps'
import Fields from './Fields/Fields'
import Summary from './Summary/Summary'
import Loader from '../../../UI/Loader/Loader'
import Error from '../../../UI/Error/Error'
import { deploymentCreate, addNotification } from '../../../../redux/actions'
import Follower from '../../../UI/Follower/Follower'
import { uriHelper } from '../../../../helpers'
import { uiConstants } from '../../../../constants'

const Template = (props) => {
  const params = useParams()
  const dispatch = useDispatch()
  const [stepsStatus, setStepsStatus] = useState(null)
  const [currentStep, setCurrentStep] = useState(null)

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    watch,
    formState: { isValid, errors }
  } = useForm({ mode: 'onChange' })

  const template = (props.template.list || []).find(
    (x) => x.metadata.uid === params.id
  )

  const updateStepStatus = useCallback(() => {
    if (template) {
      const p = template.spec.widgets[currentStep]
      const valid = p.properties
        .filter((x) => x.type !== 'box')
        .map((x) => {
          const v = getValues()[x.key]
          return !(
            (!v && x.required) ||
            (x.required && v === '') ||
            (x.type === 'url' && !uriHelper.valid(v))
          )
        })
        .reduce((a, b) => a && b)
      setStepsStatus(
        stepsStatus.map((x) => (x.id === currentStep ? { ...x, valid } : x))
      )
    }
  }, [currentStep, getValues, stepsStatus, template])

  useEffect(() => {
    if (template) {
      setCurrentStep(0)
      setStepsStatus(
        template.spec.widgets.map((x, key) => {
          const p = (x.properties || []).filter((f) => {
            return !(
              f.type === 'box' ||
              (f.required && f.default) ||
              !f.required
            )
          })
          return {
            id: key,
            valid: p.length === 0 ? true : 'unknown'
          }
        })
      )
    }
  }, [template])

  useEffect(() => {
    const subscription = watch(() => {
      if (template) {
        updateStepStatus()
      }
    })
    return () => subscription.unsubscribe()
  }, [template, updateStepStatus, watch])

  if (
    (props.template.loading && !props.template.result) ||
    (!props.template.loading &&
      !stepsStatus &&
      ((props.template.result && template) ||
        (!props.template.result && !template)))
  ) {
    return <Loader />
  } else if (!template || !stepsStatus) {
    return <Error message={'Template not found'} />
  } else {
    const fieldsList = template.spec.widgets
      .map((x) =>
        x.properties
          .filter((y) => y.type !== 'box')
          .map((y) => {
            return {
              ...y,
              label: y.title
            }
          })
      )
      .flat()

    const fieldValues = Object.keys(watch())
      .filter((x) => getValues()[x] !== '' && x !== 'undefined')
      .map((x) => {
        return {
          name: x,
          title: fieldsList.find((f) => f.key === x).title,
          value: getValues()[x]
        }
      })

    const onSubmit = (metadata) => {
      const payload = { ...metadata, owner: props.user.profile.id }
      Object.keys(metadata).forEach((x) => {
        if (Array.isArray(metadata[x])) {
          payload[x] = metadata[x].join(',')
        }
        if (metadata[x] === null || metadata[x] === undefined) {
          delete payload[x]
        }
      })

      if (template.spec.defaults) {
        Object.keys(template.spec.defaults).forEach((x) => {
          if (!payload[x]) {
            payload[x] = template.spec.defaults[x].formatUnicorn(payload)
          }
        })
      }

      dispatch(
        deploymentCreate({
          metadata: payload,
          templateId: template.metadata.uid
        })
      )
    }

    const changeStepHandler = (step) => {
      window.scrollTo(0, 0)
      setCurrentStep(step)
    }

    return (
      <React.Fragment>
        <h1>{template.spec.title}</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ul className={css.UlWidgets}>
            <li className={css.LiWidgets}>
              <Follower>
                <Steps
                  widgets={template.spec.widgets}
                  changeStepHandler={changeStepHandler}
                  currentStep={currentStep}
                  stepsStatus={stepsStatus}
                />
              </Follower>
            </li>
            <li className={css.LiForm}>
              {template.spec.widgets.map((w, key) => (
                <Fields
                  key={key}
                  id={key}
                  widget={w}
                  register={register}
                  currentStep={currentStep}
                  inputs={w.properties.filter((x) => x.style !== 'box')}
                  setValue={setValue}
                  errors={errors}
                />
              ))}
              <Summary
                fieldValues={fieldValues}
                isValid={isValid}
                fieldsList={fieldsList}
              />
            </li>
          </ul>
        </form>
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {})(Template)
