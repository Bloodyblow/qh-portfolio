import styles from './section-presentation.module.css'

export default function Presentation({} : {}){
  return (
    <section className={styles.presentation}>
      <div className={styles.languagesContainer}>
        <button onClick={() => console.log("translate")}>English</button> 
        <span>|</span>
        <button onClick={() => console.log("translate")}>Français</button>
      </div>
      <div className={styles.textContainer}>
        <h1>Quentin HOOG</h1>
        <p>Developer</p>
        <p>QA Tester / Automation</p>
      </div>
    </section>
  )
}