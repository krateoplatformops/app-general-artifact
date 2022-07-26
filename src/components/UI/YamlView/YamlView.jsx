import React from 'react'
import CopyClipboard from '../CopyClipboard/CopyClipboard'
import DownloadFile from '../DownloadFile/DownloadFile'
import yaml from 'js-yaml'

import Line from './Line/Line'
import css from './YamlView.module.scss'

const YamlView = ({ data, fileName }) => {
  const yamlData = typeof data === 'string' ? data : yaml.dump(data)
  const jsonData = typeof data === 'object' ? data : yaml.load(data)

  const lines = yamlData.split('\n').length

  let lineNumber = 0

  const parser = (obj, indentation, dash) => {
    if (Array.isArray(obj)) {
      return (obj || []).map((x, key) => {
        if (typeof x === 'object') {
          return (
            <React.Fragment key={key}>
              {parser(x, indentation + 2, true)}
            </React.Fragment>
          )
        } else {
          lineNumber++
          return (
            <Line
              key={key}
              lineNumber={lineNumber}
              indentation={indentation}
              val={x}
              lines={lines}
              isArray={true}
            />
          )
        }
      })
    } else if (typeof obj === 'object') {
      return Object.keys(obj || {}).map((key, index) => {
        lineNumber++
        const v = obj[key]
        const p = key

        if (typeof v === 'object') {
          return (
            <React.Fragment key={key}>
              <Line
                key={key}
                lineNumber={lineNumber}
                indentation={indentation}
                prop={p}
                lines={lines}
                isArray={index === 0 && dash}
                noIndentation={index === 0 && dash}
              />

              {parser(v, indentation + 2)}
            </React.Fragment>
          )
        }

        return (
          <Line
            key={key}
            lineNumber={lineNumber}
            indentation={indentation}
            prop={p}
            val={v}
            lines={lines}
            isArray={index === 0 && dash}
            noIndentation={index === 0 && dash}
          />
        )
      })
    }
  }

  return (
    <div className={css.Container}>
      <div className={css.CopyContainer}>
        <CopyClipboard text={yamlData} />
        {fileName && (
          <DownloadFile content={yamlData} fileName={`${fileName}.yaml`} />
        )}
      </div>
      {jsonData && parser(jsonData, 0)}
    </div>
  )
}

export default React.memo(YamlView)
