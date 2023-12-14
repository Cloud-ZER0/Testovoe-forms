import { useForm } from 'react-hook-form'
import styles from './Step_1.module.css'
import { Input } from '../UI/Input/Input'
import { LinkBtn } from '../UI/LinkBtn/LinkBtn'
import { ROUTS } from '../../Utils/Routes/Routes'
import { ProgresBar } from '../UI/ProrgressBar/ProgresBar'
import { Select } from '../UI/Select/Select'
import { useNavigate } from 'react-router-dom'
import { ErrMessage } from '../UI/ErrMessage/ErrMessage'
import { addNickname, addFirstName, addGender, addLastName } from '../../globalRedux/Slice/firstPageSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { SectionWrapper } from '../wrappers/SectionWrapper/SectionWrapper'
import { FormWrapper } from '../wrappers/FormWrapper/FormWrapper'
import { ExtraWrapper } from '../wrappers/ExtraWrapper/ExtraWrapper'
import { useState } from 'react'

export const Step_1 = () => {

const navigate = useNavigate();
const dispatch = useDispatch();
const {nickname, firstName, lastName, gender} = useSelector(store => store.firstPageReducer);
const [seletcErr, setSelectErr] = useState({message: ''});
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    if(data.gender === 'default') {
      setSelectErr({message: 'Please chose the gender'});
      return;
    }
    dispatch(addNickname(data.nickname));
    dispatch(addFirstName(data.firstName));
    dispatch(addGender(data.gender));
    dispatch(addLastName(data.lastName))
    navigate(ROUTS.STEP_2)
  }


  return (
    <SectionWrapper >
        <FormWrapper >
            <ExtraWrapper>
              <ProgresBar step={1} />
              <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <Input defaultValue={nickname}  labelText='Никнейм' placeholder='Enter nickname...' register={register("nickname", { required: 'This field is required', pattern: {
                    value: /^[a-zA-Z0-9а-яёА-ЯЁ0-9]{4,}$/ ,
                    message: 'Invalid user nickname format'
                  } })} />
                  {errors.nickname && <ErrMessage>{errors.nickname.message}</ErrMessage>}
                </div>
                <div>
                  <Input defaultValue={firstName}   labelText='Имя' placeholder='Enter your name...' register={register("firstName", { required: 'This field is required', maxLength: {
                    value: 50,
                    message: 'Name is too long'
                  },
                  pattern: {
                    value: /^[a-zA-Zа-яёА-ЯЁ]*$/,
                    message: 'Invalid name format',
                  } })} />
                  {errors.firstName && <ErrMessage>{errors.firstName.message}</ErrMessage>}
                </div>
                <div>
                  <Input  defaultValue={lastName}  labelText='Фамилия' placeholder='Enter your surname...' register={register("lastName", { required: 'This field is required',  maxLength: {
                    value: 50,
                    message: 'Surname is too long'
                  },
                  pattern: {
                    value: /^[a-zA-Zа-яёА-ЯЁ]*$/,
                    message: 'Invalid surname format',
                  }})} />
                  {errors.lastName && <ErrMessage>{errors.lastName.message}</ErrMessage>}
                </div>
                <div>
                  <Select error={seletcErr.message} labelText='Пол' register={register("gender", { required: 'This field is required' })}/>
                   {errors.gender && <ErrMessage>{errors.gender.message}</ErrMessage>}
                </div>
                  <div className={styles.btn_wrapper}>
                      <LinkBtn onClick={()=>navigate(ROUTS.DEFAULT)} style='transparent' to={ROUTS.DEFAULT}>{'Назад'}</LinkBtn>
                      <LinkBtn  type={'submit'}>{'Далее'}</LinkBtn>
                  </div>
              </form>

            </ExtraWrapper>
        </FormWrapper>
    </SectionWrapper>
  )
}
