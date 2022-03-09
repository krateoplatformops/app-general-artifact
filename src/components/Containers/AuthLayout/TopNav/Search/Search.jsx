import React from 'react'

import { uiConstants } from '../../../../../constants'
import css from './Search.module.scss'

const Search = () => {
  return (
    <div className={css.SearchContainer}>
      <input
        type='text'
        className={css.Search}
        placeholder={uiConstants.placeholder.search}
      />
      <i className='fa-solid fa-magnifying-glass'></i>
    </div>
  )
}

export default Search
