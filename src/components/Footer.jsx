import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>© {new Date().getFullYear()} Gurleen</span>
      <span>CS Student · Hofstra University</span>
    </footer>
  )
}
