import Header from '../../components/Header'
import styles from './Error.module.scss'
import { Link } from 'react-router-dom'
import routes from '../../routes.json'
function Error() {
    const home = routes.find((route) => (route.element = 'Home'))
    return (
        <div className={styles.page}>
            <Header />
            <p className={styles.page__title}>404</p>
            <h2 className={styles.page__subtitle}>
                Oups! La page que vous demandez n'existe pas
            </h2>
            <Link className={styles.page__link} to={home.path}>
                Retourner sur la page d'accueil
            </Link>
        </div>
    )
}
export default Error
