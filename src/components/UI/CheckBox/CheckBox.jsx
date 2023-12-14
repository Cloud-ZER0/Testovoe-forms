import styles from './CheckBox.module.css'

export const CheckBox = ({id, labelText = '', register}) => {

  return (
      <div className={styles.inpt_wraper}>
      <input   id={id} className={styles.inpt} type={'checkbox'} {...register} />
      <label htmlFor={id}>{labelText}</label>
    </div>
  )
}
