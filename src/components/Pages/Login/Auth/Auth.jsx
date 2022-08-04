import React from 'react'
import { Routes, Route, Link, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

import ErrorBoundary from '../../../Containers/ErrorBoundary/ErrorBoundary'
import Ldap from './Ldap/Ldap'
import Basic from './Basic/Basic'

import css from './Auth.module.scss'
import { login } from '../../../../redux/actions'

const Auth = ({ providers }) => {
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

  const s = (providers || []).find((x) => x.metadata.uid === p[1])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={css.AuthTitle}>
        Authentication type: <b>{p[0]}</b>
      </div>
      {s && (
        <div className={css.AuthTitle}>
          Authentication name: <b>{s.name}</b>
        </div>
      )}
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
