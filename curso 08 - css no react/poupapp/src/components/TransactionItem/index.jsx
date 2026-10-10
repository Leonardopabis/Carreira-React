import styles from './transaction-item.module.css'

const formatter = new Intl.NumberFormat("pt-br", {style: 'currency', currency: 'BRL'})


export function TransactionItem({item}) {
    const detailsClassName = item.value >= 0 ? styles.income : styles.expense
    return (
        <div className={styles.transaction}>
            <div className={[styles.details, detailsClassName].join(' ')}>
                <p>{item.description}</p>
                <p>{formatter.format(item.value)}</p>
            </div>
            <div className={styles.date}>
                {new Date(item.date).toLocaleDateString('pt-BR')}
            </div>
        </div>
    )
}