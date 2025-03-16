import styles from './Carrousel.module.scss'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

function Carrousel({ pictures }) {
    const [index, newIndex] = useState(0)
    const picturesLength = pictures.length
    return (
        <div className={styles.carrousel}>
            <img
                className={styles.carrousel__background}
                src={pictures[index]}
            />
            {picturesLength > 1 ? (
                <>
                    <button
                        className={styles.carrousel__arrowBack}
                        onClick={() =>
                            index === 0
                                ? newIndex(picturesLength - 1)
                                : newIndex(index - 1)
                        }
                    >
                        {' '}
                        <FontAwesomeIcon icon={faChevronLeft} />{' '}
                    </button>
                    <button
                        className={styles.carrousel__arrowForward}
                        onClick={() =>
                            index === picturesLength - 1
                                ? newIndex(0)
                                : newIndex(index + 1)
                        }
                    >
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                    <p
                        className={styles.carrousel__counter}
                    >{`${index + 1}/${picturesLength}`}</p>
                </>
            ) : (
                ''
            )}
        </div>
    )
}
Carrousel.propTypes = {
    pictures: PropTypes.array,
}
export default Carrousel
