import styles from './Collapse.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import PropTypes from 'prop-types'

function Collapse({ title, content, size }) {
    const [isOpen, setIsOpen] = useState(false)
    const option = isOpen ? '--open' : ''
    const collapseSize = size === 'large' ? 'collapse' : 'collapse-medium'
    return (
        <div className={styles[collapseSize]}>
            <div className={styles['top-bar']}>
                <p className={styles['top-bar__title']}>{title}</p>
                <button
                    className={`${styles['top-bar__button']} ${isOpen ? styles[`top-bar__button${option}`] : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <FontAwesomeIcon icon={faChevronUp} />
                </button>
            </div>
            <div
                className={`${styles['frame']} ${isOpen ? styles[`frame${option}`] : ''}`}
            >
                {Array.isArray(content) ? (
                    <ul
                        className={`${styles[`frame__content`]} ${isOpen ? styles[`frame__content${option}`] : ''}`}
                    >
                        {content.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                ) : (
                    <p
                        className={`${styles[`frame__content`]} ${isOpen ? styles[`frame__content${option}`] : ''}`}
                    >
                        {content}
                    </p>
                )}
            </div>
        </div>
    )
}

Collapse.propTypes = {
    title: PropTypes.string,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    size: PropTypes.string,
}

export default Collapse
