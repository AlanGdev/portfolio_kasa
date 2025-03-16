import styles from './Host.module.scss'
import PropTypes from 'prop-types'

function Host({ host }) {
    return (
        <div className={styles.host}>
            <p className={styles.host__name}>{host.name}</p>
            <img className={styles.host__picture} src={host.picture} />
        </div>
    )
}
Host.propTypes = {
    host: PropTypes.object,
}
export default Host
