import styles from './section-contact.module.css'
import { useForm } from "react-hook-form"
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { MessageItf, writeContactMessage } from '../firebase/writeInFirestore'

function ErrorRequire() {
  const { t } = useTranslation()
  return (
    <span className={styles.errorRequired}>
      {t('contact.form.errorRequired')}
    </span>
  )
}

export default function Contact(){
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { t } = useTranslation()
  const [isSent, setIsSent] = useState<boolean>(false)
  const [sendingInError, setSendingInError] = useState<boolean>(false)

  const onSubmit = async (data: MessageItf) => {
    setIsSent(false)
    setSendingInError(false)
    try {
      await writeContactMessage(data)
      setIsSent(true)
    } catch(error){
      setSendingInError(true)
    }
  }

  return (
    <section className={styles.contact}>
      <h2>{t('contact.contactMe')}</h2>
      <p className={styles.description}>{t('contact.description')}</p>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.row}>
          <div className={styles.inputRow}>
            <label>{t('contact.form.name')}</label>
            <input {...register("name", { required: true })} />
            { errors.name && <ErrorRequire />}
          </div>
          
          <div className={styles.inputRow}>
            <label>{t('contact.form.email')}</label>
            <input type="email" {...register("email", { required: true })} />
            { errors.email && <ErrorRequire />}
          </div>
        </div>

        <div className={styles.inputRow}>
          <label>{t('contact.form.subject')}</label>
          <input {...register("subject", { required: true })} />
          { errors.subject && <ErrorRequire />}
        </div>
        
        <div className={styles.inputRow}>
          <label>{t('contact.form.message')}</label>
          <textarea {...register("message", { required: true })} rows={6} />
          { errors.message && <ErrorRequire />}
        </div>

        <div className={styles.inputRow}>
          <button type="submit">{t('contact.form.send')}</button>
        </div>
      </form>

      { isSent && <p className={styles.messageSuccess}>
        {t('contact.messageSent')}
      </p>}

      { sendingInError && <p className={styles.messageError}>
        {t('contact.messageError')}
      </p>}
    </section>
  )
}