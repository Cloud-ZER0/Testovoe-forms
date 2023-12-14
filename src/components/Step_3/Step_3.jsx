import styles from './Step_3.module.css'
import { LinkBtn } from '../UI/LinkBtn/LinkBtn'
import { ROUTS } from '../../Utils/Routes/Routes'
import { ProgresBar } from '../UI/ProrgressBar/ProgresBar'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Modal } from '../Modal/Modal'
import { ChangeModalState } from '../../globalRedux/Slice/modalSLice'
import { addAbout } from '../../globalRedux/Slice/thirdPageSlice'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { ErrMessage } from '../UI/ErrMessage/ErrMessage'
import { fetchData} from '../../Utils/Fetch/fetchData'
import { Loader } from '../Loader/Loader'


export const Step_3 = () => {

    const {active} = useSelector(store => store.modalSLiceReducer);
    const thirdPageData = useSelector(store => store.thirdPageReducer);
    const mainPageData = useSelector(store => store.mainPageReducer);
    const firstPageData = useSelector(store => store.firstPageReducer);
    const secondPageData = useSelector(store => store.secondPageReducer);
    const dispatch = useDispatch();
    const [error, setError] = useState({message: ''});
    const [isSucsess, setIsSucsess] = useState(true);
    const [pending, setPending] = useState(false);
    const regex = new RegExp('^[a-zA-Zа-яёА-ЯЁ]*$');

    const setModal = () => {
        dispatch(ChangeModalState());
    }

    const addAboutInfo = async () => {
    
        if(value.length >= 30) {
            if(!regex.test(value)) {
                setError({message: 'Invalid text format'});
                return false;
            }
            dispatch(addAbout(value));
            setPending(true);
            return await fetchData({mainPageData,firstPageData,secondPageData,thirdPageData});
        }

        else {
            setError({message: 'Please tell us more about yourself'});
            return false;
        }
    }

    const mockData = async () => {
        const isReady = await addAboutInfo();
        if(isReady) {
            setPending(false)
            setModal();
        };
        
    }

    const [value,setValue] = useState(thirdPageData.about);
    const [counter, setCounter] = useState(0);


    const countCharacters = (e) => {
        setValue(e);
        const tmp = value;
        setCounter(tmp.trim().length);
        
    }

    const navigate = useNavigate();

  return (
    <section className={styles.first_step_section}>
        <div className={styles.form_wrapper}>
            <div className={styles.form_form_wrapper}>
                <ProgresBar step={3} />
                <div className={styles.form}>
                    <div className={styles.text_area_wrapper}>
                        <label className={styles.label} htmlFor="text_area">{'О себе'}</label>
                        <textarea className={styles.text_area}  maxLength={200} name="" id="text_area" cols="30" rows="10" value={value} onChange={e => countCharacters(e.target.value)} />
                        <div className={error.message? styles.error_wrapper: styles.error_wrapper_left}>
                        {error.message && <ErrMessage >{error.message}</ErrMessage>}
                        <div className={styles.counter}>{counter}</div>
                        </div>
                    </div>
                    <div className={styles.btn_wrapper}>
                        <LinkBtn style='transparent' onClick={()=>navigate(ROUTS.STEP_2)}>{'Назад'}</LinkBtn>
                        <button className={styles.send_btn} onClick={mockData}>{'Отправить'}</button>
                    </div>
                </div>
            </div>
        </div>
        <Modal display={active} sucsess={isSucsess} changeState={setModal}/>
        <button onClick={()=>setIsSucsess(!isSucsess)} className={styles.swithc_modal_btn}>Switch modal</button>
        {pending? <Loader isLoading={pending}/>: null}
    </section>
  )
}