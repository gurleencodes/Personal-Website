import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.inner}>
        <div className={styles.text}>
          <p className={styles.eyebrow}>Computer Science · Hofstra University</p>
          <h1 className={styles.name}>
            Hi, I'm<br /><em>Gurleen.</em>
          </h1>
          <p className={styles.desc}>
            Junior CS student passionate about building impactful technology at
            the intersection of web apps, AI, and software engineering.
          </p>
          <div className={styles.ctas}>
            <a className="btn btn-primary" href="#projects">View Projects</a>
            <a
              className="btn btn-ghost"
              href="https://github.com/gurleencodes"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </div>
        <div className={styles.avatar}>
          <img
            src="https://avatars.githubusercontent.com/u/224001296?v=4"
            alt="Gurleen's avatar"
          />
        </div>
      </div>
    </section>
  )
}
