import picture from '../../assets/logoWhite.png'
import styles from './Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
function Footer() {
    return (
        <footer className={styles.footer}>
            <img className={styles.footer__img} src={picture} />
            <p className={styles.footer__text}>
                <FontAwesomeIcon icon={faCopyright} /> 2020 Kasa. All rights
                reserved
            </p>
        </footer>
    )
}
export default Footer
