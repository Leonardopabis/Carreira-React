import styles from './daily-budget.module.css'

const formatter = new Intl.NumberFormat("pt-br", {style: 'currency', currency: 'BRL'})

export function DailyBudget({ value }) {
    return (
        <p className={styles.dailybudget}>
            {formatter.format(value)}
        </p>
    )
}