import { ErrMessage } from '../ErrMessage/ErrMessage'
import styles from './Select.module.css'

export const Select = ({register, labelText, error}) => {
  return (
    <div className={styles.inpt_wraper}>
      <label htmlFor="select">{labelText}</label>
      <select id='select' className={styles.select} {...register}>
        <option  selected disabled value={'default'}>Не выбрано</option>
          <option className={styles.option} value="Man">Мужской</option>
          <option className={styles.option} value="Woman">Женский</option>
      </select>
      <ErrMessage>{error}</ErrMessage>
    </div>
  )
}
