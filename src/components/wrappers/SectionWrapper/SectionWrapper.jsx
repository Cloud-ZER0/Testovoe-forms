import styles from './SectionWrapper.module.css'

export const SectionWrapper = ({children}) => {
  return (
    <section className={styles.section}>
        {children}
    </section>
  )
}
