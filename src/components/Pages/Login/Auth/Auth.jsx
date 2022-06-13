import React from 'react'
import { Routes, Route, Link, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

import ErrorBoundary from '../../../Containers/ErrorBoundary/ErrorBoundary'
import Ldap from './Ldap/Ldap'
import Basic from './Basic/Basic'

import css from './Auth.module.scss'
import { login } from '../../../../redux/actions'

const Auth = () => {
  const dispatch = useDispatch()
  const params = useParams()

  const p = params['*'].split('/')

  const {
    register,
    handleSubmit,
    formState: { isValid }
  } = useForm({ mode: 'onChange' })

  const onSubmit = (data) => {
    dispatch(
      login({
        title: p[0],
        id: p[1],
        data
      })
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={css.AuthTitle}>{p[0]} authentication</div>
      <Routes>
        <Route
          path='ldap/:id'
          element={
            <ErrorBoundary>
              <Ldap register={register} />
            </ErrorBoundary>
          }
        />
        <Route
          path='basic/:id'
          element={
            <ErrorBoundary>
              <Basic register={register} />
            </ErrorBoundary>
          }
        />
      </Routes>
      <div className={css.Btns}>
        <Link to='/' className='minimal-button'>
          back
        </Link>
        <button className='primary-button' disabled={!isValid} type='submit'>
          login
        </button>
      </div>
    </form>
  )
}

export default Auth
