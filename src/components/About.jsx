import styles from './About.module.css'

const interests = [
  'Machine Learning & AI',
  'Web Development',
  'Software Engineering',
  'Data Science',
  'Full-Stack Apps',
]

export default function About() {
  return (
    <section className={`section ${styles.about}`} id="about">
      <div className="container">
        <div className="section-label reveal">About Me</div>
        <div className={styles.grid}>
          <div className={`${styles.text} reveal`}>
            <p>
              I'm a junior Computer Science student at Hofstra University,
              passionate about creating practical, data-driven solutions that
              enhance user experience and make a real-world impact.
            </p>
            <p>
              Whether it's building clean, scalable web applications or training
              machine learning models that learn and adapt — I'm drawn to
              technology that solves real problems.
            </p>
            <p>
              I'm part of the <strong>Break Through Tech AI Program</strong>,
              where I've deepened my skills in applied machine learning and
              real-world problem solving. I believe in learning by doing:
              building a strong foundation, then applying it in hands-on
              collaborations.
            </p>
          </div>

          <div className="reveal">
            <p className={styles.skillsLabel}>Interests</p>
            <div className={styles.skillsList}>
              {interests.map((item) => (
                <div className={styles.skillItem} key={item}>
                  <span>{item}</span>
                  <span className={styles.dot} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
