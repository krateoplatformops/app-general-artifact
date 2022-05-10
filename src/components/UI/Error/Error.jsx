import React from 'react'

import css from './Error.module.scss'

const Error = ({ message, stack }) => (
  <div className={css.ErrorContainer}>
    <div className={css.Glitch} data-content='Oops!'>
      Oops!
    </div>
    <span
      className={css.SmallGlitch}
      data-content={message ? message : 'Error'}
    >
      {message ? message : 'Error'}
    </span>
    {stack && <pre>{JSON.stringify(stack, null, 2)}</pre>}
  </div>
)

export default Error
