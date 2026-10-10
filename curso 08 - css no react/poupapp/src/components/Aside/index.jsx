import styles from './aside.module.css'
import logo from '../../assets/logo.png'

export function Aside() {
    return (
        <aside className={styles.aside}>
            <img src={logo} alt="" />
            <footer className={styles.footer}>
                Desenvolvido por Alura. Projeto fictício sem fins comerciais.
            </footer>
        </aside>
    )
}