import { AddIcon } from '../../Icons/AddIcon'
import { AddIcon2 } from '../../Icons/AddIcon2'
import styles from './AddButton.module.css'


export const AddButton = ({onClick}) => {
  return (
    <button className={styles.btn} onClick={onClick}>
        <AddIcon/>
    </button>
  )
}
