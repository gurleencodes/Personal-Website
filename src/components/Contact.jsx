import styles from './Contact.module.css'

const links = [
  { label: 'Email', display: 'kaur.gurleen.w@gmail.com', href: 'mailto:kaur.gurleen.w@gmail.com' },
  { label: 'LinkedIn', display: 'in/gurleen-kaur0 ↗', href: 'https://www.linkedin.com/in/gurleen-kaur0/' },
  { label: 'GitHub', display: 'gurleencodes ↗', href: 'https://github.com/gurleencodes' },
]

export default function Contact() {
  return (
    <section className={`section ${styles.contact}`} id="contact">
      <div className="container">
        <div className="section-label reveal">Get in Touch</div>
        <div className={`${styles.inner} reveal`}>
          <h2 className={styles.heading}>
            Let's <em>connect</em><br />and build something.
          </h2>
          <div className={styles.linksList}>
            {links.map((l) => (
              <a
                key={l.label}
                className={styles.linkItem}
                href={l.href}
                target={l.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
              >
                <span className={styles.ciLabel}>{l.label}</span>
                <span>{l.display}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
