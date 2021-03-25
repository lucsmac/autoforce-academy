import styles from './footer.module.scss'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerBottom}>
          <h2 className={styles.contentTitle}>Quer saber mais sobre o AutoForce Academy?</h2>
          <p className={`${styles.contentText} contentText`}>Acesse o link abaixo e saiba todos os detalhes.</p>
          <div className={`${styles.knowMoreBtn} afBtn`}>
            <a href="https://drive.google.com/file/d/1CqGPjE1sEwvLmy--RroRNiL6eBYWxUhG/view?usp=sharing" target="_blank">Quero saber mais</a>
          </div>
        </div>
      </div>
    </footer>
  )
}