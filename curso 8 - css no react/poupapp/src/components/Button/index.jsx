import styles from './button.module.css'

export function Button({children, ...props}) {
    return (
        <button {...props} className={styles.btn}>
            {children}
        </button>
    )
}