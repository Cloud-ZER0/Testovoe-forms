import styles from './ExtraWrapper.module.css'

export const ExtraWrapper = ({children, isLarge = false}) => {
  return (
    <div className={isLarge? styles.extra_wrapper_large: styles.extra_wrapper }>
        {children}
    </div>
  )
}
