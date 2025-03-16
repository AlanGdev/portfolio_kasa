import Header from '../../components/Header'
import styles from './Home.module.scss'
import Banner from '../../components/Banner'
import Gallery from '../../components/Gallery'
function Home() {
    return (
        <div className={styles.page}>
            <Header />
            <div className={styles.page__body}>
                <Banner text="Chez vous, partout et ailleurs" />
                <Gallery />
            </div>
        </div>
    )
}
export default Home
