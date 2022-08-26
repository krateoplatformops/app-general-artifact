import { useDispatch } from 'react-redux'
import { saveAs } from 'file-saver'

import css from './DownloadFile.module.scss'
import { addNotification } from '../../../redux/actions'
import { uiConstants } from '../../../constants'

const DownloadFile = ({ content, fileName }) => {
  let dispatch = useDispatch()

  const btnHandler = () => {
    const blob = new Blob([content], {
      type: 'application/text'
    })
    saveAs(blob, fileName)

    dispatch(
      addNotification(
        uiConstants.messages.downloaded,
        uiConstants.notification.info
      )
    )
  }

  return (
    <button className={css.Btn} onClick={btnHandler} title={fileName}>
      <i className="fa-solid fa-file-arrow-down"></i>
    </button>
  )
}

export default DownloadFile
