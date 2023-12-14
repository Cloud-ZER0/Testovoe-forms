import styles from './RadioInpt.module.css'

export const RadioInpt = ({id, labelText = '', register, name, value}) => {
  return (
  <div className={styles.inpt_wraper}>
      <input 
      value={value} 
      id={id} 
      className={styles.inpt} 
      name={name} 
      type={'radio'} 
      {...register} />
      <label  htmlFor={id}>{labelText}</label>
    </div>
  )
}
