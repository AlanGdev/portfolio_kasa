import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './Card.module.scss'
function Card({ id, title, cover }) {
    return (
        <Link to={`/Logement/${id}`} className={styles.card}>
            <img className={styles.card__picture} src={cover} />
            <h2 className={styles.card__title}>{title}</h2>
        </Link>
    )
}
Card.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    cover: PropTypes.string,
}
export default Card
