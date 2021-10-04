import styles from './section-about.module.css'
import Skills from './skills'

export default function About() {
  const devSkills = [
    'Javascript (ES5+)', 'React', 'React Native', 'SQL', 
    'HTML5', 'CSS3', 'Mocha', 'Chai', 
    'Webpack', 'Yarn', 'Node.js', 'Git',
  ]
  const testSkils = [
    'Squash', 'Selenium', 'Katalon', 'Polarion', 'TestLink', 
    'Redmine', 'Postman', 'OCS-NG', 'GLPI', 'Jira'
  ]
  const otherSkills = [
    'Administration de logiciels', 'Droits des utilisateurs',
    'VirtualBox', 'Vmware', 'Hyper-V'
  ]

  return (
    <section className={styles.about}>
      <article className={styles.articleAbout}>
        <h2>About</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel magna 
          vel nisl imperdiet dapibus. Vestibulum feugiat bibendum vulputate. 
          Pellentesque tincidunt turpis ac justo laoreet tempor.
        </p>
      </article>

      <article className={styles.articleSkills}>
        <h2>Skills</h2>
        <div className={styles.row}>
          <Skills title="Development" skills={devSkills} />
          <Skills title="QA" skills={testSkils} />
          <Skills title="Autres" skills={otherSkills} />
        </div>
      </article>
  </section>
  )
}