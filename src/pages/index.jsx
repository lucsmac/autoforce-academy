import { Banner } from '../../public/components/Banner'

import styles from '../styles/home.module.scss'

export default function Home() {
  return (
    <div className={styles.content}>
      <Banner />
    </div>
  )
}
