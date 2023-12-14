import { ProgressIcon } from '../../Icons/ProgressIcon'
import {ProgressDotIcon} from '../../Icons/ProgressDotIcon'
import styles from './ProgressBar.module.css'

export const ProgresBar = ({step}) => {


    const choseColor = () => {
        switch(step) {
        case 1:  
        return styles.progress_line_step_1;
        case 2: 
        return styles.progress_line_step_2;
        case 3: 
        return styles.progress_line_step_3;
        }
    }

    const choseSecondIcon = () => {
        switch(step) {
        case 1:  
        return null;
        case 2: 
        return <ProgressDotIcon/>;
        case 3: 
        return <ProgressDotIcon/>;
        }
    }


  return (
    <div className={styles.progress_bar}>
        <div className={choseColor()}>
            <div className={styles.mark_wrapper}>
                <div className={styles.round_wrapper}>
                    <div className={step >= 1 ? styles.mark_1_gray: styles.mark_1_blue }>
                        {step === 1 ? <ProgressDotIcon/> : <ProgressIcon/>}
                    </div>
                </div>
                <div className={styles.round_wrapper}>
                    <div className={step >= 2 ? styles.mark_2_gray : styles.mark_2_blue}>
                        {choseSecondIcon()}
                    </div>
                </div>
                <div className={styles.round_wrapper}>
                    <div className={step >= 3 ? styles.mark_3_gray : styles.mark_3_blue}>
                        {step <= 2 ? null:<ProgressDotIcon/> }
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.steps_numbers}>
            <span>1</span>
            <span>2</span>
            <span>3</span>
        </div>
    </div>
  )
}
