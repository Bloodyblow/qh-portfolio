import styles from './section-presentation.module.css'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Presentation(){
  const { t } = useTranslation()
  return (
    <section className={styles.presentation}>
      
      <div className={styles.textContainer}>
        <h1>Quentin HOOG</h1>
        <p>{t('presentation.developer')}</p>
        <p>{t('presentation.qaTester')}</p>
      </div>
    </section>
  )
}