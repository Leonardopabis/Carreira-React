
import { Aside } from './components/Aside'
import { Main } from './components/Main'
import { Container } from './components/Container'
import { SearchInput } from './components/SearchInput'
import { Typography } from './components/Typography'
import Card from './components/Card'

function App() {

  return (
    <Container>
      <Aside />
      <Main>
        <SearchInput />
        <div>
          <Typography variant="h1">
            Olá, Vinny!
          </Typography>
          <Typography variant="body">
            Vejo como estão suas finanças hoje.
          </Typography>
        </div>
        <section>
          <Card>
            <Card.Header>
              Orçamento diário disponível:
            </Card.Header>
            <Card.Body>
              R$ 200
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
          <Card>
            <Card.Header>
              Orçamento diário disponível:
            </Card.Header>
            <Card.Body>
              R$ 200
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
      </Main>
    </Container>
  )
}

export default App
