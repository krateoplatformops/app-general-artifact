import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

import Card from '../../UI/Card/Card'
import Label from '../../UI/Label/Label'
import { registerImport } from '../../../redux/actions'
// import css from './Register.module.scss'

const Register = ({ endpoint }) => {
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { isValid }
  } = useForm({ mode: 'onChange' })

  const onSubmit = (data) => {
    dispatch(registerImport(data))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card title='Register component'>
        <Label title='Endpoint name'>
          <select
            {...register('endpoint', {
              required: true
            })}
          >
            <option value=''></option>
            {(endpoint.list || [])
              .filter((x) => x.category === 'git')
              .map((e) => (
                <option key={e._id} value={e.name}>
                  {e.name}
                </option>
              ))}
          </select>
        </Label>
        <Label
          title={'Full Url'}
          description={'Enter the full path of the file you want to register.'}
        >
          <input
            type='text'
            placeholder='Full Url'
            {...register('url', {
              required: true,
              pattern: new RegExp(
                '((([A-Za-z]{3,9}:(?:\\/\\/)?)(?:[-;:&=\\+\\$,\\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\\+\\$,\\w]+@)[A-Za-z0-9.-]+)((?:\\/[\\+~%\\/.\\w-_]*)?\\??(?:[-\\+=&;%@.\\w_]*)#?(?:[.\\!\\/\\\\w]*))?)',
                'ig'
              )
            })}
          />
        </Label>
        <div className='submit-single-container'>
          <button className='primary-button' disabled={!isValid} type='submit'>
            register
          </button>
        </div>
      </Card>
    </form>
  )
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {})(Register)
