import bankImg from '../../../src/assets/account_balance (2).svg'
import styles from './account.module.css'

const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
})


export const Account = ({ account }) => {
    return (
        <div className={styles.account}>
            <div>
                <p className={styles.bank}>
                    <img src={bankImg} alt="" />
                    <strong>{account.bank}</strong>
                </p>
            </div>
            <div className={styles.details}>
                <p><strong>Saldo</strong></p>
                <p>{formatter.format(account.balance)}</p>
            </div>
        </div>
    )
}