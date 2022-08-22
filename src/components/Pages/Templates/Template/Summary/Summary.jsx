import React from 'react'
import { Link } from 'react-router-dom'

import Card from '../../../../UI/Card/Card'
import PayloadViewer from '../../../../UI/PayloadViewer/PayloadViewer'
import css from './Summary.module.scss'

const Summary = ({ fieldValues, isValid, fieldsList }) => {
  const cost = () => {
    return fieldValues
      .map((x) => {
        const f = fieldsList.find((y) => y.key === x.name)

        if (x.value && f.cost) {
          return parseFloat(f.cost)
        }
        if (f.values) {
          if (Array.isArray(x.value)) {
            return x.value
              .map((z) => {
                const r = f.values.find((y) => y.value === z)
                if (r && r.cost) {
                  return parseFloat(r.cost)
                }
                return 0
              })
              .reduce((a, b) => a + b, 0)
          } else {
            const c = f.values.find((z) => z.value === x.value)
            if (c && c.cost) {
              return parseFloat(c.cost)
            }
          }
        }
        return 0
      })
      .reduce((pre, curr) => pre + curr, 0)
  }

  const totalCost = cost()

  const payloadValues = fieldValues.map((x) => {
    const f = fieldsList.find((y) => y.key === x.name)
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
