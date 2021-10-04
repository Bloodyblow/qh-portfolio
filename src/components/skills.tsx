import styles from './skills.module.css'

export function Skill({ name }:{
  name: string;
}){
  return <p className={styles.skill}>{name}</p>
}

export default function Skills({ title, skills }:{
  title: string;
  skills: Array<string>;
}){
  return (
    <div className={styles.category}>
      <h3>{title}</h3>
      <div className={styles.list}>
        {skills.map((x, i) => <Skill name={x} key={i} />)}
      </div>
    </div>
  )
}

