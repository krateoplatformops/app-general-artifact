import React from 'react'
import { Link } from 'react-router-dom'

import Card from '../../../../UI/Card/Card'
import PayloadViewer from '../../../../UI/PayloadViewer/PayloadViewer'
import css from './Summary.module.scss'

const Summary = ({ fieldValues, isValid, fieldsList }) => {
  const cost = () => {
    return fieldValues
      .map((x) => {
        const f = fieldsList.find((y) => y.label === x.name)
        if (x.value && f.cost) {
          return parseFloat(f.cost)
        }
        if (f.values) {
          const c = f.values.find((z) => z.value === x.value)
          if (c && c.cost) {
            return parseFloat(c.cost)
          }
        }
        return 0
      })
      .reduce((pre, curr) => pre + curr, 0)
  }

  const totalCost = cost()

  const payloadValues = fieldValues.map((x) => {
    const f = fieldsList.find((y) => y.label === x.name)
    return {
      name: x.name,
      value: f.type === 'password' ? x.value.replace(/./g, '*') : x.value,
      title: x.title
    }
  })

  return (
    <Card title='Summary'>
      <PayloadViewer payload={payloadValues} />

      {totalCost > 0 && (
        <div className={css.Cost}>
          <span>Estimated Cost:</span>
          {totalCost.toFixed(2)}
        </div>
      )}
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
