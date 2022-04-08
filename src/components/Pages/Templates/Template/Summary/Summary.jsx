import React from 'react'
import { Link } from 'react-router-dom'

import Card from '../../../../UI/Card/Card'
import PayloadViewer from '../../../../UI/PayloadViewer/PayloadViewer'
import css from './Summary.module.scss'

const Summary = ({ fieldValues, isValid }) => {
  return (
    <Card title='Summary'>
      <PayloadViewer payload={fieldValues} />

      <ul className={css.UlBtns}>
        <li>
          <Link to='/templates' className='default-button'>
            Back
          </Link>
        </li>
        <li>
          <input
            type='submit'
            disabled={!isValid}
            className={'primary-button'}
            value={'Deploy'}
          />
        </li>
      </ul>
    </Card>
  )
}

export default Summary
