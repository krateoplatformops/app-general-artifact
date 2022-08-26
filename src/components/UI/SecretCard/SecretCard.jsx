import css from './SecretCard.module.scss'
import Label from '../Label/Label'

const SecretCard = ({ h, openModal }) => {
  const deleteHandler = () => {
    openModal(h)
  }

  return (
    <div className={css.Container}>
      <ul className={css.UlSecret}>
        <li className={css.LiIcon}>
          <i className={h.metadata.icon}></i>
        </li>
        <li className={css.LiInfo}>
          <Label title="Name">
            <div className={css.Name}>{h.friendlyName}</div>
          </Label>
          <ul className={css.UlLabels}>
            <li>
              <Label title={'Namespace'}>{h.metadata.namespace}</Label>
            </li>
            <li>
              <Label title={'Type'}>{h.metadata.type}</Label>
            </li>
            {h.target && (
              <li>
                <Label title={'Target'}>{h.target}</Label>
              </li>
            )}
          </ul>
        </li>
      </ul>
      <div className={css.Footer}>
        <button className={css.DeleteBtn} onClick={() => deleteHandler()}>
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
  )
}

export default SecretCard
