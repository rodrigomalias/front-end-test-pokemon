import React from 'react'
import { PokemonList } from './components'
import { GlobalProvider } from './context'
import { Container } from './styles'

export const App: React.FC = () => {
  return (
    <Container>
      <GlobalProvider>
        <PokemonList />
      </GlobalProvider>
    </Container>
  )
}
