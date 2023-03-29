import React from 'react'
import { ClipLoader } from 'react-spinners'
import { useGlobalContext } from '../../context'
import { Container, LoadingContainer, Title } from '../pokemonList/styles'

export const Pokemon: React.FC = () => {
  const { pokemon, isLoadingPokemon } = useGlobalContext()

  if(isLoadingPokemon) {
    return (
      <LoadingContainer>
        <ClipLoader
          color={'green'}
          loading={isLoadingPokemon}
          size={50}
        />
      </LoadingContainer>
    )
  }

  return (
    <Container>
      <Title>Clique em um Pokémon</Title>
    </Container>
  )
}
