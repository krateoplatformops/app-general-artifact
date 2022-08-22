import React from 'react'

import Card from '../../../../UI/Card/Card'
import css from './Steps.module.scss'

const Steps = ({ widgets, stepsStatus, changeStepHandler, currentStep }) => (
  <Card>
    {widgets.map((w, key) => {
      const s = stepsStatus[key]
      const icon =
        s.valid === 'unknown'
          ? 'fa-question'
          : s.valid
          ? 'fa-check'
          : 'fa-triangle-exclamation'
      return (
        <ul
          key={key}
          className={css.UlSteps}
          onClick={() => changeStepHandler(key)}
        >
          <li className={currentStep === key ? css.ActiveStep : css[icon]}>
            {w.title}
            <i className={`fa-solid ${icon}`}></i>
          </li>
        </ul>
      )
    })}
  </Card>
)

export default Steps
