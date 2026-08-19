// src/components/Accounts/index.jsx 
import styles from './accounts.module.css'
import { Button } from "../Button"
import { Account } from "../Account"
import walletImg from '../../../src/assets/account_balance_wallet (2).svg'
import { List } from "../List"
import { ListItem } from "../ListItem"

export const Accounts = () => {
    const accounts = [
        { bank: "Anybank", balance: 1200 },
        { bank: "Bytebank", balance: 800 },
        { bank: "Switch Bank", balance: 1800 }
    ]

    return (
        <div className={styles.accounts}>
            <List>
                {accounts.map(ac => (
                    <ListItem key={ac.bank}>
                        <Account account={ac} />
                    </ListItem>
                ))}
            </List>
            <div className={styles.divider} />
            <div className={styles.actions}>
                <Button>
                    <img src={walletImg} alt="" /> Adicionar conta
                </Button>
            </div>
        </div>
    )
}