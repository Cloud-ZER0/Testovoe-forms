import { FolderIcon } from '../../Icons/FolderIcon'
import styles from './About.module.css'

export const About = () => {
  return (
    <section className={styles.about_section}>
        <div className={styles.wrapper}>
            <div className={styles.round_name}>{'ДИ'}</div>
            <div className={styles.credentials}>
                <h1 className={styles.userName}>{'Дмитрий Овчинников'}</h1>
                <ul className={styles.links_list}>
                    <li className={styles.link}>
                        <FolderIcon/>
                        <a href='https://t.me/Dalioli21'>{'Telegram'}</a>
                    </li>
                    <li className={styles.link}>
                        <FolderIcon/>
                        <a href='https://github.com/Cloud-ZER0?tab=repositories'>{'GitHub'}</a>
                    </li>
                    <li className={styles.link}>
                        <FolderIcon/>
                        <a href='https://samara.hh.ru/resume/acbb7fa0ff0c3e055d0039ed1f396d574b417a'>{'Резюме'}</a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}
