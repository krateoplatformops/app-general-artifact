import React from 'react'

import css from './Line.module.scss'

const Line = ({
  lineNumber,
  indentation,
  prop,
  val,
  isArray,
  lines,
  noIndentation
}) => {
  const ls = lines.toString().length - lineNumber.toString().length

  const renderValue = () => {
    if (val) {
      try {
        if (parseFloat(val) || parseInt(val)) {
          return <span className={css.Number}>{val}</span>
        }
        if (
          val.toString().toLowerCase() === 'true' ||
          val.toString().toLowerCase() === 'false'
        ) {
          return <span className={css.Boolean}>{val}</span>
        }

        if (val.toString().toLowerCase().startsWith('http')) {
          return <span className={css.Url}>{val}</span>
        }
        return <span className={css.Null}>{val}</span>
      } catch {
        return <span className={css.Null}>{val}</span>
      }
    }
  }

  return (
    <div className={css.Line}>
      <span className={css.LineNumber}>
        {[...Array(ls)].map((x, key) => (
          <span key={key}>&nbsp;</span>
        ))}

        {lineNumber}
      </span>
      {[...Array(noIndentation ? indentation - 2 : indentation)].map(
        (s, key2) => {
          return (
            <span key={key2} className={css.Space}>
              &bull;
            </span>
          )
        }
      )}
      {isArray && (
        <React.Fragment>
          -<span className={css.Space}>&bull;</span>
        </React.Fragment>
      )}
      {prop && <span className={css.Prop}>{prop}:</span>}
      {prop && val && <span className={css.Space}>&bull;</span>}
      {/* {val && <span>{(val || '').toString()}</span>} */}
      {renderValue()}
    </div>
  )
}

export default React.memo(Line)
