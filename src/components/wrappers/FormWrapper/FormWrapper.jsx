import styles from './FormWrapper.module.css'

export const FormWrapper = ({children}) => {
  return (
    <div className={styles.form_wrapper}>
        {children}
    </div>
  )
}
