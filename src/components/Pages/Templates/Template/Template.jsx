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
import { deploymentCreate } from '../../../../redux/actions'
import Follower from '../../../UI/Follower/Follower'

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
    formState: { isValid }
  } = useForm({ mode: 'onChange' })

  const template = (props.template.list || []).find((x) => x._id === params.id)

  const updateStepStatus = useCallback(() => {
    const p = template.spec.widgets.find(
      (x) => x._id === currentStep
    ).properties

    const valid = Object.keys(p)
      .map((x) => {
        const v = getValues()[x]
        return (!v && p[x].required) || (p[x].required && v === '')
          ? false
          : true
      })
      .reduce((a, b) => a && b)

    setStepsStatus(
      stepsStatus.map((x) => (x.id === currentStep ? { ...x, valid } : x))
    )
  }, [currentStep, getValues, stepsStatus, template?.spec?.widgets])

  useEffect(() => {
    if (template) {
      setCurrentStep(template.spec.widgets[0]._id)
      setStepsStatus(
        template.spec.widgets.map((x) => {
          const p = Object.keys(x.properties || []).filter((key) => {
            const f = x.properties[key]
            if ((f.required && f.default) || !f.required) {
              return false
            }
            return true
          })
          return { id: x._id, valid: p.length === 0 ? true : 'unknown' }
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
        Object.keys(x.properties || []).map((y) => {
          return { ...x.properties[y], label: y }
        })
      )
      .flat()

    const fieldValues = Object.keys(watch())
      .filter((x) => getValues()[x] !== '')
      .map((x) => {
        return {
          name: x,
          title: fieldsList.find((f) => f.label === x).title,
          value: getValues()[x]
        }
      })

    const onSubmit = (metadata) => {
      const payload = { ...metadata }
      Object.keys(metadata).forEach((x) => {
        if (Array.isArray(metadata[x])) {
          payload[x] = metadata[x].join(',')
        }
        if (metadata[x] === null || metadata[x] === undefined) {
          delete payload[x]
        }
      })
      dispatch(deploymentCreate({ metadata, templateId: template._id }))
    }

    const changeStepHandler = (step) => {
      window.scrollTo(0, 0)
      setCurrentStep(step)
    }

    return (
      <React.Fragment>
        <h1>{template.metadata.annotations.title}</h1>
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
              {template.spec.widgets.map((w) => (
                <Fields
                  key={w._id}
                  widget={w}
                  register={register}
                  currentStep={currentStep}
                  inputs={Object.keys(w.properties || []).map((x) => {
                    return { id: x, ...w.properties[x] }
                  })}
                  setValue={setValue}
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
