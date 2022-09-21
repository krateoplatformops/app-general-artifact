import css from './Label.module.scss'

const Label = ({
  title,
  description,
  children,
  required,
  error,
  hidden,
  readOnly
}) => (
  <div
    className={`${css.Label} ${hidden ? css.Hidden : ''} ${
      readOnly ? css.ReadOnly : ''
    }`}
  >
    <span className={css.Title}>
      {title} {required && '(*)'}
      {readOnly && ' (!)'}{' '}
      {error && <i className="fa-solid fa-triangle-exclamation"></i>}
    </span>
    {children}
    {description && <span className={css.Description}>{description}</span>}
  </div>
)

export default Label
