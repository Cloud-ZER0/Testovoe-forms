import styles from './Input.module.css'

export const Input = ({type = 'text', defaultValue='', placeholder = 'custom input', id, labelText = '', register, inputMode, onInput}) => {
  return (
    <div className={styles.inpt_wraper}>
      <label className={labelText? styles.inpt_label_visible: styles.inpt_label_hidden} htmlFor={id}>{labelText}</label>
      <input 
      defaultValue={defaultValue} 
      id={id} 
      className={styles.inpt} 
      type={type} 
      placeholder={placeholder} 
      inputMode={inputMode}
      onInput={onInput} 
      {...register} />
    </div>
  )
}
