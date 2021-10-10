import styles from './section-presentation.module.css'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Presentation(){
  const { t } = useTranslation()
  return (
    <section className={styles.presentation}>
      
      <div className={styles.textContainer}>
        <h1>Quentin HOOG</h1>
        <p className={styles.jobs}>{t('presentation.developer')}</p>
        <p className={styles.jobs}>{t('presentation.qaTester')}</p>
        <p className={styles.freelance}>{t('presentation.freelance')}</p>
      </div>
    </section>
  )
}