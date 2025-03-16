import styles from './Rate.module.scss'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Rate({ rating }) {
    const stars = [1, 2, 3, 4, 5]
    return (
        <ul className={styles.rating}>
            {stars.map((star) => (
                <li
                    className={`${styles.rating__star} ${star > Number(rating) ? styles['rating__star--not-colored'] : styles['rating__star--colored']}`}
                    key={star}
                >
                    <FontAwesomeIcon icon={faStar} />
                </li>
            ))}
        </ul>
    )
}
Rate.propTypes = {
    rating: PropTypes.string,
}
export default Rate
