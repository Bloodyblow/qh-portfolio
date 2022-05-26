import styles from './section-about.module.css'
import { useTranslation } from 'react-i18next'

export default function About() {
  const { t } = useTranslation()

  return (
    <section className={styles.about}>
      <article className={styles.articleAbout}>
        <h2>{t('about.about')}</h2>
        <p>{t('about.description')}</p>
      </article>
  </section>
  )
}