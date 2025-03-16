import Header from '../../components/Header'
import styles from './Logement.module.scss'
import logements from '../../logements.json'
import { useParams, Navigate } from 'react-router-dom'
import Loge from '../../components/Loge'

function Logement() {
    const { id } = useParams()
    const logement = logements.find((item) => item.id === id)
    if (!logement) {
        return <Navigate to="/error" />
    }
    return (
        <div className={styles.content}>
            <Header />
            <Loge logement={logement} />
        </div>
    )
}
export default Logement
