import styles from './LinkBtn.module.css'

export const LinkBtn = ({children, type, onClick, style='default'}) => {
  return (
    <button onClick={onClick} className={style === 'default'? styles.LinkBtnDefault: styles.LinkBtnTransparent} type={type}>{children}</button>
  )
}
