import styles from './Gallery.module.scss'
import logements from '../../logements.json'
import Card from '../Card'
function Gallery() {
    return (
        <ul className={styles.gallery}>
            {logements.map((logement) => (
                <li className={styles.gallery__item} key={logement.id}>
                    <Card
                        id={logement.id}
                        title={logement.title}
                        cover={logement.cover}
                    />
                </li>
            ))}
        </ul>
    )
}
export default Gallery
