import styles from './banner.module.scss'

export function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerWrapper}>
        <img className={styles.bannerDesktop} src="/images/topo_kenoby.png" alt="Autoforce Academy Banner" />
        <img className={styles.bannerMobile} src="/images/banner-mobile.png" alt="Autoforce Academy Banner" />
      </div>
      <div className={`${styles.bannerContent}  container`}>
        <div className={styles.logos}>
          <img src="https://legado.autoforce.com.br/assets/autoforce-academy/dev/images/autoforce.png" alt="AutoForce" />
          <img src="https://legado.autoforce.com.br/assets/autoforce-academy/dev/images/ufrn.png" alt="UFRN" />
          <img src="https://legado.autoforce.com.br/assets/autoforce-academy/dev/images/ifrn.png" alt="IFRN" />
        </div>
        <div className={styles.title} >
          <h1>AutoForce <br /> Academy</h1>
        </div>
        <p className={styles.subtitle}>Formação de desenvolvedores full-stack</p>
        <div className={styles.afBtn}>
          <a href="https://portal.kenoby.com/autoforce/cadastrar/604a7d73de8588149f1d496b?1=1&utm_source=website">Quero participar</a>
        </div>
      </div>
    </div>
  )
}
