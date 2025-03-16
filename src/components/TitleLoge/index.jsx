import styles from './TitleLoge.module.scss'
import PropTypes from 'prop-types'

function TitleLoge({ title, location }) {
    return (
        <div className={styles.titleLoge}>
            <h1 className={styles.titleLoge__title}>{title}</h1>
            <p className={styles.titleLoge__location}>{location}</p>
        </div>
    )
}
TitleLoge.propTypes = {
    title: PropTypes.string,
    location: PropTypes.string,
}
export default TitleLoge
