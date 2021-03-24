import styles from './about-the-program.module.scss'

export function AboutTheProgram() {
  return (
    <div className={`${styles.aboutTheProgram} blueSection`}>
      <div class="container">
        <h2 class="contentTitle">Sobre o<br /> programa</h2>
        <p class="contentText">Visando formar a próxima geração de desenvolvedores full-stack da nossa empresa e contribuir para o desenvolvimento do ecossistema potiguar, a AutoForce criou o primeiro Programa de Formação de Desenvolvedores Juniores do Nordeste.</p>
        <ul>
          <li>
            <h3>
              duração
            </h3>
            <p>
              6 meses
            </p>
          </li>
          <li>
            <h3>
              bolsa
            </h3>
            <p>
              R$ 900,00
            </p>
          </li>
          <li>
            <h3>
              carga horária
            </h3>
            <p>
              720h
            </p>
          </li>
          <li>
            <h3>
              vagas oferecidas
            </h3>
            <p>
              05
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}