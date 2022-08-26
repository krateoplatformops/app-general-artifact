import css from './Notification.module.scss'

const Notification = (props) => (
  <div
    role="button"
    className={`${css.Notification} ${css[props.severity]}`}
    onClick={() => props.removeNotification(props.guid)}
    tabIndex={0}
  >
    {props.message}
    <span className={css.Bar}></span>
  </div>
)

export default Notification
