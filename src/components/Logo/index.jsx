import styles from './Logo.module.scss'
import PropTypes from 'prop-types'

function Logo({ picture }) {
    return <img className={styles.logo} src={picture} />
}
Logo.propTypes = {
    picture: PropTypes.string,
}
export default Logo
