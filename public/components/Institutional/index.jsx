import styles from './institutional.module.scss'

export function Institutional() {
  return (
    <div>
      <div className={styles.institutionalFirst + ' container'}>
        <div className={styles.videoAfa}>
          <video id="af-video">
            <source src="/videos/autoforce-academy__cto.mp4" type="video/mp4" />Your browser does not support the video tag.
          </video>
          <span className={styles.playButton}></span>
        </div>

        <div className={styles.aboutAutoforce}>
          <div className={styles.aboutAutoforce__content}>
            <h2 className={styles.contentTitle}>Sobre a AutoForce:</h2>
            <p className={styles.contentText}>A AutoForce é uma startup do tipo martech que desenvolve tecnologia e soluções de marketing digital para o segmento automotivo. Somos a 1ª empresa do ramo, no Brasil, especializada em compreender holisticamente a jornada de compra de veículos, modernizando o modelo de negócios das concessionárias, revendas e montadoras no país. Tudo isso com muita tecnologia, pesquisa e validação.</p>
          </div>
          <img src="/images/autoforce_inst.png" alt="AutoForce institucional" />
        </div>
      </div>

      <div className={styles.institutionalSecond + ' container'}>
        <div>
          <div className={styles.missionAutoforce}>
            <h2 className={styles.contentTitle}>Nossa missão:</h2>
            <p className={styles.contentText}>Promover a transformação digital no setor automotivo, por meio de tecnologias, processos e modelos de negócios que geram mais valor e inovação para os clientes.</p>
          </div>

          <div className={styles.valuesAutoforce}>
            <h2 className={styles.contentTitle}>Nossos valores:</h2>
            <ul>
              <li><span>1.</span> Levamos o cliente ao pódio;</li>
              <li><span>2.</span> Inovamos para vencer;</li>
              <li><span>3.</span> Agimos com base em dados;</li>
              <li><span>4.</span> Entregamos além do esperado;</li>
              <li><span>5.</span> Temos um poderoso espírito de time; e</li>
              <li><span>6.</span> Somos adaptáveis.</li>
            </ul>
          </div>
        </div>
        <div className={styles.customStudent}>
          <img src="https://legado.autoforce.com.br/assets/autoforce-academy/dev/images/aluna-amarelo.png" alt="AutoForce institucional" />
        </div>
      </div>
    </div>
  )
}