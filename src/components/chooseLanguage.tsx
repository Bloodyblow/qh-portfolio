import styles from './chooseLanguage.module.css'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Language } from '../i18n/i18n'

export default function ChooseLanguage() {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState<Language>(i18n.language as Language);

  let changeLanguage = (language: Language) => {
    switch (language) {
      case Language.FR:
        setLang(Language.FR)
        i18n.changeLanguage(Language.FR)
        break
      case Language.EN:
      default:
        setLang(Language.EN)
        i18n.changeLanguage(Language.EN)
        break
    }
  }


  return (
    <div className={styles.languagesContainer}>
      <button 
        className={lang === Language.EN ? styles.selected : ''}
        onClick={() => changeLanguage(Language.EN)}
      >
        English
      </button> 
      <span>|</span>
      <button 
        className={lang === Language.FR ? styles.selected : ''}
        onClick={() => changeLanguage(Language.FR)}
      >
        Français
      </button>
    </div>
  )
}
