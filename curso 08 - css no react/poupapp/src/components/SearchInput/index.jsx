import styles from './searchinput.module.css'
import search from '../../assets/search.svg'

export function SearchInput(props) {
    return (
        <div className={styles.container}>
            <img src={search} alt="" />
            <input type="text" className={styles.input} {...props}/>
        </div>
    )
}