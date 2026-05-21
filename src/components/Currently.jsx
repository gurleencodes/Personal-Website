import styles from './Currently.module.css'

const items = [
  {
    title: 'Break Through Tech: AI Studio I – Healthcare Web App',
    desc: 'Applying ML foundations to a healthcare-focused web application alongside a team of six, integrating AI insights with Snowflake\'s data platform.',
  },
  {
    title: 'Interactive Website for a Small Business',
    desc: 'Building a full-stack platform for a family hardware store as part of my Software Engineering course, focusing on front-end development.',
  },
  {
    title: 'Continuous Learning',
    desc: 'Always exploring new areas in tech — currently building deeper fluency in AI-driven web systems that solve real problems.',
  },
]

export default function Currently() {
  return (
    <section className={`section ${styles.now}`} id="now">
      <div className="container">
        <div className="section-label reveal">Currently</div>
        <ul className={`${styles.list} reveal`}>
          {items.map((item) => (
            <li className={styles.item} key={item.title}>
              <span className={styles.marker} />
              <div>
                <strong>{item.title}</strong> — {item.desc}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
