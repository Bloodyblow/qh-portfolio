import styles from './header.module.css'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Language } from '../i18n/i18n'
import Image from 'next/image'
import { staticImageLoader } from '../../pages/index'

export default function Header() {
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
    <div className={styles.container}>
      <div className={styles.links}>
        <a 
          href="https://github.com/Bloodyblow" 
          target="_blank"
          rel="noreferrer noopener "
          className={styles.github}
        >
          <Image 
            loader={staticImageLoader}
            src="/images/github.png" 
            width={30} 
            height={30} 
            alt="Github" 
          />
        </a>
        <a 
          href="https://www.malt.fr/profile/quentinhoog" 
          target="_blank"
          rel="noreferrer noopener "
          className={styles.malt}
        >
          <Image 
            loader={staticImageLoader}
            src="/images/malt.png" 
            width={30} 
            height={30} 
            alt="Malt" 
          />
        </a>
        <a 
          href="https://www.linkedin.com/in/quentin-hoog-007b2a193/" 
          target="_blank"
          rel="noreferrer noopener "
          className={styles.linkedin}
        >
          <Image 
            loader={staticImageLoader}
            src="/images/linkedin.png" 
            width={30} 
            height={30} 
            alt="Linkedin" 
          />
        </a>
      </div>

      <div className={styles.languages}>
        <button 
          className={lang === Language.EN ? styles.selected : ''}
          onClick={() => changeLanguage(Language.EN)}
          >
          English
        </button> 
        <span>|</span>
        <button 
          className={lang === Language.FR ? styles.selected : ''}
          onClick={() => changeLanguage(Language.FR)}
          >
          Français
        </button>
      </div>
    </div>
  )
}