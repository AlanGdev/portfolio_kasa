import PropTypes from 'prop-types'
import styles from './Tags.module.scss'

function Tags({ tags }) {
    return (
        <ul className={styles.tags}>
            {tags.map((tag) => (
                <li className={styles.tags__tag} key={tag}>
                    {tag}
                </li>
            ))}
        </ul>
    )
}
Tags.propTypes = {
    tags: PropTypes.array,
}
export default Tags
