import styles from './Navbar.module.scss'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import routes from '../../routes.json'
function Navbar() {
    const location = useLocation()
    const routeAccueil = routes.find((route) => route.element === 'Home')
    const routeApropos = routes.find((route) => route.element === 'Apropos')
    return (
        <nav className={styles.navbar}>
            <Link
                to={routeAccueil.path}
                className={`${styles.navbar__link} ${location.pathname === '/' ? styles.navbar__linkUnderline : ''} `}
            >
                Accueil
            </Link>
            <Link
                to={routeApropos.path}
                className={`${styles.navbar__link} ${location.pathname === '/apropos' ? styles.navbar__linkUnderline : ''}`}
            >
                A Propos
            </Link>
        </nav>
    )
}
export default Navbar
