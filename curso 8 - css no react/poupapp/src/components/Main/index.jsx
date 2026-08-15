import styles from './main.module.css'

export function Main({children}) {
    return (
        <main className={styles.main}>
            {children}
        </main>
    )
}