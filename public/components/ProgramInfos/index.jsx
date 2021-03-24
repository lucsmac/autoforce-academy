import styles from './program-infos.module.scss'

export function ProgramInfos() {
  return (
    <div>
      <div className={`${styles.requirements} container`}>
        <div className={styles.requirementsContent}>
          <h2 class="contentTitle">Pré-requisitos</h2>
          <ul className={styles.topicsList}>
            <li>Cursando Ciência da Computação, Engenharia da  Computação, Análise de Sistemas ou áreas afins;</li>
            <li>Conhecimento básico em front-end e back-end;</li>
            <li>Ser disciplinado e ambicioso; e</li>
            <li>Ter iniciativa, proatividade e comprometimento.</li>
          </ul>
        </div>
        <img src="https://legado.autoforce.com.br/assets/autoforce-academy/dev/images/requirements.png" alt="Pré-requisitos" />
      </div>

      <div className={`${styles.methodology} container`}>
        <h2 class="contentTitle">Metodologia</h2>
        <ul className={styles.topicsList}>
          <li>Aprendizado com base em projetos práticos e reais (Challenge Based Learning (CBL));</li>
          <li>Avaliações em ciclos de 3 meses;</li>
          <li>Conexões com profissionais mais experientes no mercado;</li>
          <li>Encontros semanais para plantão de dúvidas;</li>
          <li>Mentorias e feedbacks 1:1 semanais;</li>
          <li>Programa dividido em 3 módulos; e</li>
          <li>6 meses para atingir o nível Trainee.</li>
        </ul>
      </div>

      <div className={`${styles.modules} container`}>
        <div class="content">
          <div>
            <h2 class="contentTitle">Módulos</h2>
            <ul>
              <li><b>Módulo I - </b> Conceitos básicos de desenvolvimento web</li>
              <li><b>Módulo II - </b> Front-end</li>
              <li><b>Módulo III - </b> Back-end</li>
            </ul>
          </div>
          <div className={styles.cronogram}>
            <h2 class="contentTitle">Cronograma</h2>
            <ul>
              <li><b>Módulo I - </b> Semanas 1 a 3</li>
              <li><b>Módulo II - </b> Semanas 4 a 15</li>
              <li><b>Módulo III - </b> Semanas 16 a 24</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={`${styles.subscribe} container`}>
        <div class="content">
          <h2 class="contentTitle">Se inscreva!</h2>
          <p class="contentText">Quer fazer parte da nova geração de desenvolvedores do Nordeste? Se inscreva no nosso programa e boa sorte!</p>
          <div class="afBtn">
            <a href="https://portal.kenoby.com/autoforce/cadastrar/604a7d73de8588149f1d496b?1=1&utm_source=website">Quero participar</a>
          </div>
        </div>
        <img src="/images/subscribe.png" alt="Inscreva-se" />
      </div>
    </div>
  )
}