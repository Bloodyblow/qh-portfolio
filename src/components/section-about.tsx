import styles from './section-about.module.css'
import Skills from './skills'
import { useTranslation } from 'react-i18next'

export default function About() {
  const { t } = useTranslation()

  const devSkills = [
    'JavaScript (ES5+)', 'TypeScript', 'React', 'React Native', 'SQL', 
    'Redux', 'HTML5', 'CSS3', 'Mocha', 'Chai', 'Next.js', 'Angular',
    'Webpack', 'Yarn', 'Node.js', 'Git',
  ]
  const testSkills = [
    t('about.test-skill.automation'), 'Squash', 'Selenium', 'Katalon',
    'Polarion', 'TestLink', 'Redmine', 'Postman', 'OCS-NG', 'GLPI', 
    'Jira'
  ]
  const otherSkills = [
    t('about.other-skill.softwareAdmin'), t('about.other-skill.userRights'),
    'VirtualBox', 'Vmware', 'Hyper-V'
  ]
  const devopsSkills = [
    'Monorepo', 'CI/CD', 'Docker', 'Kubernetes', 'Gitlab', 'Jenkins',
    'Prometheus'
  ]

  return (
    <section className={styles.about}>
      <article className={styles.articleAbout}>
        <h2>{t('about.about')}</h2>
        <p>{t('about.description')}</p>
      </article>

      <article className={styles.articleSkills}>
        <h2>{t('about.skills')}</h2>
        <div className={styles.container}>
          <div className={styles.row}>
            <Skills title={t('about.skillsTitle.development')} skills={devSkills} />
            <Skills title={t('about.skillsTitle.devops')} skills={devopsSkills} />
          </div>
          <div className={styles.row}>
            <Skills title={t('about.skillsTitle.qa')} skills={testSkills} />
            <Skills title={t('about.skillsTitle.others')} skills={otherSkills} />
          </div>
        </div>
      </article>
  </section>
  )
}