import { useCallback, useEffect, useState } from 'react'

import { iconUIConstants } from '../../../constants'
import Label from '../Label/Label'
import css from './IconSelector.module.scss'

const IconSelector = ({ watch, register, setValue, getValues }) => {
  const [search, setSearch] = useState('')
  const [showList, setShowList] = useState(false)

  const randomIcon = () => {
    return iconUIConstants.icons[
      Math.floor(Math.random() * iconUIConstants.icons.length)
    ]
  }

  const shuffleIconHandler = () => {
    const icon = randomIcon()
    setSearch(icon.split(' ')[1])
    setValue('icon', icon)
  }

  const setIconHandler = (icon) => {
    setValue('icon', icon)
    setSearch(icon.split(' ')[1])
    setShowList(false)
  }

  const searchChangeHandler = (e) => {
    if (!showList) {
      setShowList(true)
    }
    setSearch(e.target.value)
  }

  const handleClick = useCallback(
    (e) => {
      if (e.target.getAttribute('data-viewer')) {
        setShowList(true)
        return
      }
      if (!e.target.getAttribute('data-hider')) {
        const icon = getValues().icon
        setSearch(icon.split(' ')[1])
        setShowList(false)
      }
    },
    [getValues]
  )

  useEffect(() => {
    if (!getValues().icon) {
      const icon = randomIcon()
      setSearch(icon.split(' ')[1])
      setValue('icon', icon)
    }
  }, [getValues, setValue])

  useEffect(() => {
    window.addEventListener('click', handleClick)
    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [handleClick])

  return (
    <Label title="Icon">
      <ul className={css.UlIcon}>
        <li className={css.LiIcon}>
          <span>
            <i className={watch().icon}></i>
          </span>
        </li>
        <li className={css.LiSelectIcon}>
          <input
            type="text"
            {...register('icon', {
              required: true
            })}
            style={{ display: 'none' }}
          />

          <input
            type="text"
            data-viewer={true}
            value={search}
            onChange={(e) => searchChangeHandler(e)}
          />

          <div className={`${css.IconList} ${showList ? css.Visible : ''}`}>
            <ul className={css.IconContainer}>
              {iconUIConstants.icons
                .filter((x) => x.indexOf(search.toLowerCase()) !== -1)
                .map((c) => (
                  <li key={c}>
                    <button type="button" onClick={() => setIconHandler(c)}>
                      <i className={c} data-hider={true}></i>
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        </li>
        <li className={css.LiShuffle}>
          <button type="button" onClick={() => shuffleIconHandler()}>
            <i className="fa-solid fa-shuffle"></i>
          </button>
        </li>
      </ul>
    </Label>
  )
}

export default IconSelector
