import styles from './Projects.module.css'

const projects = [
  {
    num: '01',
    title: 'Healthcare Desert Predictor',
    desc: 'Built as part of Break Through Tech AI Studio (in collaboration with Snowflake). Cleaned IRS and demographic datasets, engineered a custom ZIP-code-level Social Vulnerability Index, created an interactive NY vulnerability map with K-means clustering, and built a predictive model to classify healthcare deserts.',
    tags: ['Python', 'ML', 'Snowflake'],
    link: 'https://github.com/gurleencodes/AI-Studio',
  },
  {
    num: '02',
    title: 'Hardware Store Web Platform',
    desc: 'Developing a fully interactive online platform for a family hardware store as part of my Software Engineering course. Working as a front-end developer within a team, building a polished UI to strengthen the store\'s digital presence and streamline operations.',
    tags: ['JavaScript', 'Front-End'],
    link: 'https://github.com/Subhan2117/re-hardware-store',
  },
  {
    num: '03',
    title: 'Break Through Tech — AI Journey',
    desc: 'A repository documenting my experience, learnings, and projects throughout the Break Through Tech AI Program — covering applied ML foundations, collaborative problem-solving, and real-world AI applications.',
    tags: ['AI', 'Learning'],
    link: 'https://github.com/gurleencodes/gurleencodes',
  },
]

export default function Projects() {
  return (
    <section className={`section ${styles.projects}`} id="projects">
      <div className="container">
        <div className="section-label reveal">Projects</div>
        <div className={styles.grid}>
          {projects.map((p) => (
            <div className={`${styles.card} reveal`} key={p.num}>
              <div className={styles.num}>{p.num}</div>
              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.desc}>{p.desc}</p>
              <div className={styles.footer}>
                <div className={styles.tags}>
                  {p.tags.map((t) => (
                    <span className={styles.tag} key={t}>{t}</span>
                  ))}
                </div>
                <a
                  className={styles.link}
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
