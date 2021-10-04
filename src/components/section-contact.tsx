import styles from './section-contact.module.css'
import { useForm } from "react-hook-form"
import { useTranslation } from 'react-i18next'

export default function Contact({}: {

}){
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { t } = useTranslation()

  const onSubmit = (data: any) => console.log(data)

  return (
    <section className={styles.contact}>
      <h2>{t('contact.contactMe')}</h2>
      <p>{t('contact.description')}</p>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.row}>
          <div className={styles.inputRow}>
            <label>{t('contact.form.name')}</label>
            <input {...register("name")} />
          </div>
          
          <div className={styles.inputRow}>
            <label>{t('contact.form.email')}</label>
            <input type="email" {...register("email")} />
          </div>
        </div>

        <div className={styles.inputRow}>
          <label>{t('contact.form.subject')}</label>
          <input {...register("subject")} />
        </div>
        
        <div className={styles.inputRow}>
          <label>{t('contact.form.message')}</label>
          <textarea {...register("message")} rows={6} />
        </div>

        <div className={styles.inputRow}>
          <button type="submit">{t('contact.form.send')}</button>
        </div>
      </form>
    </section>
  )
}