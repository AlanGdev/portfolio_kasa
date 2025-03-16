import styles from './Banner.module.scss'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import homePicture from '../../assets/homePicture.png'
import aProposPicture from '../../assets/aProposPicture.png'
import routes from '../../routes.json'

function Banner({ text }) {
    const routeHome = routes.find((route) => route.element === 'Home')
    const routeApropos = routes.find((route) => route.element === 'Apropos')
    const page = useLocation().pathname

    const opacityClassname =
        page === routeHome.path
            ? 'banner__background--opacity60'
            : page === routeApropos.path
              ? 'banner__background--opacity30'
              : ''
    const picture = page === routeHome.path ? homePicture : aProposPicture
    return (
        <div className={styles.banner}>
            <img
                className={`${styles.banner__picture} `}
                src={picture}
                alt="banner picture"
            />
            <div
                className={`${styles.banner__background} ${styles[opacityClassname]}`}
            ></div>
            <p className={styles.banner__text}>{text}</p>
        </div>
    )
}
Banner.propTypes = {
    text: PropTypes.string,
}
export default Banner
