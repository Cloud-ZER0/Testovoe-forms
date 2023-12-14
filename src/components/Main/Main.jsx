import { About } from './About/About'
import styles from './Main.module.css'
import { useForm} from 'react-hook-form'
import { ROUTS } from '../../Utils/Routes/Routes'
import { Input } from '../UI/Input/Input'
import { LinkBtn } from '../UI/LinkBtn/LinkBtn'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addPhoneNumber, addEmail } from '../../globalRedux/Slice/mainPageSlice'
import { ErrMessage } from '../UI/ErrMessage/ErrMessage'
import { handlhponeInput } from '../../Utils/Mask/phoneMask';
import { SectionWrapper } from '../wrappers/SectionWrapper/SectionWrapper';
import { FormWrapper } from '../wrappers/FormWrapper/FormWrapper';
import { ExtraWrapper } from '../wrappers/ExtraWrapper/ExtraWrapper';


export const Main = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {phoneNumber, email} = useSelector(state => state.mainPageReducer);
  
 const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
    setError
  } = useForm()

  const onSubmit = (data) => {
    dispatch(addPhoneNumber(data.phoneNumber))
    dispatch(addEmail(data.email))
    navigate(ROUTS.STEP_1)
  } 


  return (
    <SectionWrapper className={styles.main_section}>
        <FormWrapper className={styles.form_wrapper}>
          <ExtraWrapper isLarge={true} className={styles.form_form_wrapper}>
            <About/>
              <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <Input 
                    defaultValue={phoneNumber} 
                    type='tel' 
                    labelText='Номер телефона' 
                    placeholder='+7 999 999-99-99' 
                    onInput={handlhponeInput} 
                    register={register("phoneNumber", {required: 'Phone is required', maxLength: 18, 
                    })} />
                    {errors.phoneNumber && <ErrMessage>{errors.phoneNumber.message}</ErrMessage>}
                  </div>
                  <div>
                    <Input 
                    defaultValue={email} 
                    inputMode={'numeric'}  
                    labelText='Email' 
                    placeholder='webstudio.fractal@example.com'  
                    register={register("email", { required: 'Email is required', 
                    pattern: {
                      value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: 'Invalid email format',
                    }})} />
                    {errors.email && <ErrMessage>{errors.email.message}</ErrMessage>}
                  </div>
                  <div className={styles.btn_wrapper}>
                    <LinkBtn type={'submit'} >Начать</LinkBtn>
                  </div>
              </form>
          </ExtraWrapper>
        </FormWrapper>
    </SectionWrapper>
  )
}


