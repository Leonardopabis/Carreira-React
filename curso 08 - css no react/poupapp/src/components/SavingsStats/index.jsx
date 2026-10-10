import styles from './savings-stats.module.css'
import iconeEconomizar from '../../assets/Ícone economizar (2).svg'
import { ProgressBar } from '../ProgressBar'

export function SavingsStats({ percent }) {
    return (
        <div className={styles.container}>
            <p>
                <img src={iconeEconomizar} alt="" /> Economizar
            </p>
            <ProgressBar percent={percent}/>
        </div>
    )
}