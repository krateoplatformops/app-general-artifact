import css from './CommandsOutput.module.scss'

const CommandsOutput = ({ history, ready }) => (
  <div className={css.Container}>
    {(history || []).length === 0 && ready && (
      <div className={css.Ready}>Terminal is ready.</div>
    )}
    {!ready && (
      <div className={css.Ready}>
        <i className="fa-solid fa-triangle-exclamation"></i> Remote node is
        offline.
      </div>
    )}
    {(history || []).map((item, index) => (
      <div key={index} className={css.Line}>
        <span className={css.Command}>
          {item.time} $ {item.command}
        </span>
        <pre>{item.output}</pre>
      </div>
    ))}
  </div>
)

export default CommandsOutput
