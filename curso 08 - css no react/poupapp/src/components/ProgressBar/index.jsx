import styles from './progress-bar.module.css'

export function ProgressBar({ percent }) {
    return (
         <div className={styles.wrapper}>
            <div className={styles.filled} style={{width: `${percent}%`}}>
                {percent}%
            </div>
         </div>
    )
}