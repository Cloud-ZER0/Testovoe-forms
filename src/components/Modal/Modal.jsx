import styles from './Modal.module.css'
import { ROUTS } from '../../Utils/Routes/Routes'
import { useNavigate } from 'react-router-dom'
import { SucsessIcon } from '../Icons/SucsessIcon';
import {FailIcon} from '../Icons/FailIcon'
import { CloseIcon } from '../Icons/CloseIcon';

export const Modal = ({display, sucsess, changeState}) => {

    const navigate = useNavigate();

    const closeModalAndRedirect = () => {
        changeState();
        navigate(ROUTS.DEFAULT);
    };

    const closeModal = () => {
        changeState();
    }


  return (
    <section className={display? styles.modal_display: styles.modal_hidden}>
        <div className={styles.modal_wrapper}>
            <div className={styles.modal_header}>
                {sucsess? <h1 className={styles.modal_alert_text}>{'Форма успешно отправлена'}</h1>: 
                <div className={styles.unsecsess_wrapper}>
                    <h1 className={styles.modal_alert_text}>{'Ошибка'}</h1>
                    <button onClick={closeModal} className={styles.close_btn_top}>
                        <CloseIcon/>
                    </button>
                </div>}
            </div>
            {sucsess? <SucsessIcon/>: <FailIcon/>}
            <div className={sucsess? styles.btn_wrapper_sucsess: styles.btn_wrapper_fail}>
                <button className={styles.close_btn_bottom} onClick={sucsess? closeModalAndRedirect: closeModal}>
                    {sucsess? 'На главную': 'Закрыть'}
                </button>
            </div>
        </div>
    </section>
  )
}
