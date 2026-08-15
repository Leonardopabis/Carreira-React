import styles from './card.module.css'

function Card( {children} ) {
    return (
        <div className={styles.card}>
            {children}
        </div>
    )
}

export function CardHeader( {children} ) {
    return (
        <div className={styles.header}>
            {children}
        </div>
    )
}

export function CardBody( {children} ) {
    return (
        <div className={styles.body}>
            {children}
        </div>
    )
}

Card.Header = CardHeader
Card.Body = CardBody

export default Card