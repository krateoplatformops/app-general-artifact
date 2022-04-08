import React, { useState } from 'react'

import css from './DeleteTemplate.module.scss'
import Modal from '../../../../UI/Modal/Modal'

const DeleteTemplate = ({ closeModal, deleteTemplateHandler, template }) => {
  const [inputDelete, setInputDelete] = useState('')

  return (
    <Modal
      closeButtonHandler={closeModal}
      confirmButtonHandler={deleteTemplateHandler}
      confirmButtonText={'Delete template'}
      confirmDisabled={inputDelete !== template.metadata.name}
      title={'Delete template'}
    >
      <span className='span-warning'>This action cannot be undone.</span>
      <div className={css.Please}>
        Please type{' '}
        <span className={css.Emphasis}>{template.metadata.name}</span> to
        confirm.
      </div>
      <input
        type='text'
        placeholder={template.metadata.name}
        value={inputDelete}
        onChange={(e) => setInputDelete(e.target.value)}
      />
    </Modal>
  )
}

export default DeleteTemplate
