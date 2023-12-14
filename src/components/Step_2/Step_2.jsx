import { useForm } from 'react-hook-form'
import styles from './Step_2.module.css'
import { Input } from '../UI/Input/Input'
import { LinkBtn } from '../UI/LinkBtn/LinkBtn'
import { ROUTS } from '../../Utils/Routes/Routes'
import { ProgresBar } from '../UI/ProrgressBar/ProgresBar'
import { BucketIcon } from '../Icons/BucketIcon'
import { useState } from 'react'
import { AddButton } from '../UI/AddButton/AddButton'
import { CheckBox } from '../UI/CheckBox/CheckBox'
import { RadioInpt } from '../UI/RadioInpt/RadioInpt'
import { useNavigate } from 'react-router-dom'
import { ErrMessage } from '../UI/ErrMessage/ErrMessage'
import { addAdvantages, addCheckBoxGroup, addRadioGroup, addToHelper, removeFromHelper } from '../../globalRedux/Slice/secondPageSlice'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { SectionWrapper } from '../wrappers/SectionWrapper/SectionWrapper'
import { FormWrapper } from '../wrappers/FormWrapper/FormWrapper'
import { ExtraWrapper } from '../wrappers/ExtraWrapper/ExtraWrapper'

export const Step_2 = () => {

  const navitage = useNavigate();
  const dispatch = useDispatch();
  const {advantages, advantageHelper} = useSelector(store => store.secondPageReducer);

    const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm()

  const [groupInpt, setGroupInput] = useState(['1','2','3']);

  const [radioGroupArr, setRadioGroup] = useState(['1','2','3'])

  const add = () => {
   dispatch(addToHelper({counter: advantageHelper.counter + 1}));
  }

  const remove = () => {
    if(advantageHelper.counterArray.length !== 1) {
      dispatch(removeFromHelper());
    }
  }

  const onSubmit = (data) => {

    const array = [];
    const checkBoxArray = [];
    
    
    advantageHelper.counterArray.map(id => {
      array.push(data[`advantage_${id}`]);
    })
    
    groupInpt.map((el, index)=>{
      checkBoxArray.push(data[`checkBoxGroup_${index}`]);
    })

    if(checkBoxArray.filter(el=> el === true).length === 0) {
      setError('checkBoxGroup_2', {
      type: 'custom',
       message: 'Need to chose atleast one',
      })
      if(data.radioGroup === null) {
        setError('radioGroup', {
          type: 'custom',
          message: 'Need to chose atleast one',
        })
        return;
      }
    }
    

    dispatch(addRadioGroup(data.radioGroup));
    dispatch(addCheckBoxGroup(checkBoxArray));
    dispatch(addAdvantages(array));
    
    navitage(ROUTS.STEP_3);
  }

 
  return (
    <SectionWrapper >
        <FormWrapper >
          <ExtraWrapper >
              <ProgresBar step={2} />
              <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <label className={styles.group_label} htmlFor='advantagesGroup'>Преимущества</label>
                <div className={styles.adv_wrapper} id='advantagesGroup'>
                  {advantageHelper.counterArray && advantageHelper.counterArray.map((id,index) => {
                    return (
                      <div  key={id} >
                        <div className={styles.inpt_wrapper}>
                          <Input 
                          defaultValue={advantages[index]}
                          placeholder='Enter your advantage...'          
                          register={register(`advantage_${id}`, 
                          {required: 'This field is required', 
                          pattern: {
                            value: /^[a-zA-Zа-яёА-ЯЁ]*$/,
                            message: 'Invalid text format',
                          }})} />
                          <BucketIcon onClick={remove}/>
                        </div> 
                        {errors[`advantage_${id}`] && <ErrMessage>{errors[`advantage_${id}`].message}</ErrMessage>}
                      </div>
                    )
                  })}
                </div>
                  <AddButton onClick={add} />
                  <label className={styles.group_label}  htmlFor="checkBoxGroup">checkbox группа</label>
                  <fieldset className={styles.checkBoxGroup} id='checkBoxGroup'>
                    {groupInpt && groupInpt.map((el, index) => 
                    <>
                      <CheckBox 
                      key={index} 
                      id={el} 
                      labelText={el}  
                      register={register(`checkBoxGroup_${index}`)} 
                      />
                      {errors[`checkBoxGroup_${index}`] && <ErrMessage>{errors[`checkBoxGroup_${index}`].message}</ErrMessage>}
                    </>
                    )}
                  </fieldset>
                  <label className={styles.group_label}  htmlFor="radioGroup">radio группа</label>
                  <fieldset className={styles.radioGroup} id='radioGroup'>
                    {radioGroupArr && radioGroupArr.map((el) => 
                      <RadioInpt 
                      key={el.id} 
                      id={el.id} 
                      labelText={el}
                      value={el}
                      name={'radioGroup'}  
                      register={register(`radioGroup`)} />
                    )}
                     {errors.radioGroup && <ErrMessage>{errors.radioGroup.message}</ErrMessage>}
                  </fieldset>
                  <div className={styles.btn_wrapper}>
                      <LinkBtn style='transparent' onClick={()=>navitage(ROUTS.STEP_1)}>{'Назад'}</LinkBtn>
                      <LinkBtn type={'submit'} >{'Далее'}</LinkBtn>
                  </div>
              </form>
          </ExtraWrapper>
        </FormWrapper>
    </SectionWrapper>
  )
}