import styles from './ErrMessage.module.css'

export const ErrMessage = ({children}) => {
  return (
    <span className={styles.msg}>{children}</span>
  )
}
