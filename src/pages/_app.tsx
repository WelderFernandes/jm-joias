import { Header } from '../Components/Header'
import '../styles/global.scss'
import styles from '../styles/app.module.scss'
import { SideBar } from '../Components/SideBar'

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.wrapper}> 
      <SideBar />
      <main>
        <Header />
        <div className={styles.container}>
          <Component {...pageProps} />
        </div>
      </main>
    </div>
  )
}

export default MyApp
