import styles from './Loge.module.scss'
import PropTypes from 'prop-types'
import Carrousel from '../Carrousel'
import TitleLoge from '../TitleLoge'
import Tags from '../Tags'
import Host from '../Host'
import Rate from '../Rate'
import Collapse from '../Collapse'

function Loge({ logement }) {
    return (
        <div className={styles.loge}>
            <Carrousel pictures={logement.pictures} />
            <div className={styles.description}>
                <div className={styles.title}>
                    <TitleLoge
                        title={logement.title}
                        location={logement.location}
                    />
                    <Tags tags={logement.tags} />
                </div>
                <div className={styles.hostRating}>
                    <Host
                        className={styles.hostRating__host}
                        host={logement.host}
                    />
                    <Rate rating={logement.rating} />
                </div>
            </div>
            <div className={styles.details}>
                <Collapse
                    className={styles.details__collapse}
                    title="Description"
                    content={logement.description}
                    size="medium"
                />
                <Collapse
                    className={styles.details__collapse}
                    title="Équipements"
                    content={logement.equipments}
                    size="medium"
                />
            </div>
        </div>
    )
}
Loge.propTypes = {
    logement: PropTypes.object,
}
export default Loge
