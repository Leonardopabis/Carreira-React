
import { Aside } from './components/Aside'
import { Main } from './components/Main'
import { Container } from './components/Container'
import { SearchInput } from './components/SearchInput'
import { Typography } from './components/Typography'
import Card from './components/Card'
import { DailyBudget } from './components/DailyBudget'
import { SavingsStats } from './components/SavingsStats'

import styles from './app.module.css'
import { Transactions } from './components/Transactions'
function App() {

  return (
    <Container>
      <Aside />
      <Main>
        <div className={styles.container}>

          <SearchInput />
          <div>
            <Typography variant="h1">
              Olá, Vinny!
            </Typography>
            <Typography variant="body">
              Vejo como estão suas finanças hoje.
            </Typography>
          </div>
          <section className={styles.grid}>
            <Card>
              <Card.Header>
                Orçamento diário disponível:
              </Card.Header>
              <Card.Body>
                <DailyBudget value={200} />
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                Progresso da meta financeira:
              </Card.Header>
              <Card.Body>
                <SavingsStats percent={40} />
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                Movimentação financeira
              </Card.Header>
              <Card.Body>
                <Transactions />
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                Orçamento diário disponível:
              </Card.Header>
              <Card.Body>
                R$ 200
              </Card.Body>
            </Card>
          </section>
        </div>
      </Main>
    </Container>
  )
}

export default App
