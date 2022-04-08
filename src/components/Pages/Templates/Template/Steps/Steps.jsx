import React from 'react'

import Card from '../../../../UI/Card/Card'
import css from './Steps.module.scss'

const Steps = ({ widgets, stepsStatus, changeStepHandler, currentStep }) => {
  return (
    <Card>
      {widgets.map((w) => {
        const s = stepsStatus.find((x) => x.id === w._id)
        const icon =
          s.valid === 'unknown'
            ? 'fa-question'
            : s.valid
            ? 'fa-check'
            : 'fa-triangle-exclamation'
        return (
          <ul
            key={w._id}
            className={css.UlSteps}
            onClick={() => changeStepHandler(w._id)}
          >
            <li className={currentStep === w._id ? css.ActiveStep : css[icon]}>
              {w.title}
              <i className={`fa-solid ${icon}`}></i>
            </li>
          </ul>
        )
      })}
    </Card>
  )
}

export default Steps
