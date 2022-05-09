import React from 'react'

import css from './YamlView.module.scss'

const YamlView = ({ yaml }) => {
  const parseLine = (line) => {
    const s = line.split(/(\s+)/)
    let inString = false
    return s.map((x, key) => {
      if (x.trim() === '') {
        return [...Array(x.length)].map((s, key2) => {
          return (
            <span key={`${key}-${key2}`} className={css.Space}>
              &bull;
            </span>
          )
        })
      }
      if (x[x.length - 1] === ':') {
        return (
          <span key={key} className={css.Prop}>
            {x}
          </span>
        )
      }
      if (
        x[0] === "'" ||
        x[0] === '"' ||
        x[x.length - 1] === "'" ||
        x[x.length - 1] === '"' ||
        inString
      ) {
        if (
          x[0] === "'" ||
          x[0] === '"' ||
          x[x.length - 1] === "'" ||
          x[x.length - 1] === '"'
        ) {
          inString = !inString
        }
        return (
          <span key={key} className={css.String}>
            {x}
          </span>
        )
      }
      if (parseInt(x, 10).toString() === x) {
        return (
          <span key={key} className={css.Number}>
            {x}
          </span>
        )
      }
      return x
    })
  }

  return (
    <div className={css.Container}>
      {yaml
        .split('\n')
        .filter((x) => x !== '' && x !== ' ')
        .map((line, i) => {
          return (
            <div key={i} className={css.Line}>
              <span className={css.LineNumber}>{i + 1}</span>
              {parseLine(line)}
            </div>
          )
        })}
    </div>
  )
}

export default YamlView
