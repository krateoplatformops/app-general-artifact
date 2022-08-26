import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useLocation } from 'react-router-dom'

import { uiConstants } from '../../../../../constants'
import css from './Search.module.scss'
import { redirect } from '../../../../../redux/actions'

const Search = () => {
  const dispatch = useDispatch()
  const { handleSubmit, register, setValue } = useForm({ mode: 'onChange' })
  const location = useLocation()

  const onSubmit = (data) => {
    dispatch(redirect(`${uiConstants.routes.search}?q=${data.search}`))
  }

  useEffect(() => {
    if (location.pathname !== '/search') {
      setValue('search', '')
    } else {
      const query = new URLSearchParams(window.location.search)
      const q = query.get('q')
      setValue('search', q)
    }
  }, [location.pathname, setValue])

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.Form}>
      <div className={css.SearchContainer}>
        <input
          type="text"
          className={css.Search}
          placeholder={uiConstants.placeholder.search}
          {...register('search', {
            required: true
          })}
        />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
    </form>
  )
}

export default Search
