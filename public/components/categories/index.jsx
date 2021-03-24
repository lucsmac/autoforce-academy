import styles from './categories.module.scss'

export function Categories() {
  return (
    <>
      <div class="f3 blueSection">
        <div class="container">
          <h2 class="contentTitle">O que é um desenvolvedor F3?</h2>
          <p class="contentText">Um piloto para competir na categoria máxima do automobilismo mundial, a F1, precisa formar-se nas competições preparatórias F2 (qualificação) e F3 (base). Há uma escalada de potência, velocidade, estágio de desenvolvimento tecnológico e custo de participação entre as três.</p>
          <p class="contentText">Fazendo analogia ao mundo do automobilismo, lançamos o programa de formação de desenvolvedores F3, ou seja, a categoria de base dos futuros desenvolvedores full-stack (F1)
          da AutoForce.</p>
        </div>
      </div>
      <div className={styles.categories}>
        <div class="container">
          <ul>
            <li>
              <h2>Categoria<br /> de base.</h2>
              <h4>Bolsistas</h4>
              <img src="https://legado.autoforce.com.br/assets/autoforce-academy/dev/images/F3.png" alt="F3" />
              <h3>Racer <b>F3</b></h3>
            </li>
            <li>
              <h2>Categoria<br /> de qualificação.</h2>
              <h4>Trainees</h4>
              <img src="https://legado.autoforce.com.br/assets/autoforce-academy/dev/images/F2.png" alt="F2" />
              <h3>Racer <b>F2</b></h3>
            </li>
            <li>
              <h2>Categoria<br /> de elite.</h2>
              <h4>Profissionais</h4>
              <img src="https://legado.autoforce.com.br/assets/autoforce-academy/dev/images/F1.png" alt="F1" />
              <h3>Racer <b>F1</b></h3>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
