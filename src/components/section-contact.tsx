import styles from './section-contact.module.css'
import { useForm } from "react-hook-form"

export default function Contact({}: {

}){
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (data: any) => console.log(data)

  return (
    <section className={styles.contact}>
      <h2>Contact me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel 
        magna vel nisl imperdiet dapibus. Vestibulum feugiat bibendum 
        vulputate. Pellentesque tincidunt turpis ac justo laoreet tempor.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.row}>
          <div className={styles.inputRow}>
            <label>Name</label>
            <input {...register("name")} />
          </div>
          
          <div className={styles.inputRow}>
            <label>Email</label>
            <input type="email" {...register("email")} />
          </div>
        </div>

        <div className={styles.inputRow}>
          <label>Subject</label>
          <input {...register("subject")} />
        </div>
        
        <div className={styles.inputRow}>
          <label>Message</label>
          <textarea {...register("message")} rows={6} />
        </div>

        <div className={styles.inputRow}>
          <input type="submit" />
        </div>
      </form>
    </section>
  )
}